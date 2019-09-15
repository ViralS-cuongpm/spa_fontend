import Numeral from '../lib/numeral';
import rf from 'requestfactory';
import moment from 'moment';
import COMMON_CONST from 'common/Const';

export default {
  qs: function (key) {
    key = key.replace(/[*+?^$.[]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    const match = location.href.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
    return (match && decodeURIComponent(match[1].replace(/\+/g, " ")) || null);
  },

  setI18nLocale(locale) {
    window.i18n.locale = locale;
    window.app.$broadcast('UPDATED_LOCALE', locale);
  },

  formatCurrencyAmount(amount, currency, zeroValue) {
    let numberOfDecimalDigits = currency && currency.toLowerCase() === 'usd' ? COMMON_CONST.NUMBER_OF_DECIMAL_DIGITS_USD : COMMON_CONST.NUMBER_OF_DECIMAL_DIGITS; //currency === 'usd' ? 2 : 8;
    let format = numberOfDecimalDigits == 0 ?
      '0,0' :
      '0,0.[' + Array(numberOfDecimalDigits + 1).join('0') + ']';
    if (window._.isNil(zeroValue)) {
      zeroValue = '';
    }

    return (amount && parseFloat(amount) != 0) ? Numeral(amount).format(format) : zeroValue;
  },

  formatMarginNumber(amount, numberOfDecimalDigits = 4) {
    let format = numberOfDecimalDigits == 0 ?
      '0,0' :
      '0,0.[' + Array(numberOfDecimalDigits + 1).join('0') + ']';

    return (amount && parseFloat(amount) != 0) ? Numeral(amount).format(format) : '--';
  },

  roundCurrencyAmount(amount, currency, zeroValue) {
    let numberOfDecimalDigits = currency && currency.toLowerCase() === 'usd' ? COMMON_CONST.NUMBER_OF_DECIMAL_DIGITS_USD : COMMON_CONST.NUMBER_OF_DECIMAL_DIGITS; //currency === 'usd' ? 2 : 8;
    let format = numberOfDecimalDigits == 0 ?
      '0' :
      '0[.' + Array(numberOfDecimalDigits + 1).join('0') + ']';
    if (window._.isNil(zeroValue)) {
      zeroValue = '';
    }

    return (amount && parseFloat(amount) != 0) ? Numeral(amount).format(format) : zeroValue;
  },

  getCurrencyName(value) {
    return value ? value.toUpperCase() : value;
  },

  getTimzoneOffset() {
    let d = new Date();
    return d.getTimezoneOffset();
  },

  isWalletAddress(currency, address, blockchain_sub_address){
    switch(currency){
      case 'usd':
        //TO DO
        return /^.+$/.test(address);
      case "xrp":
        return /^r[rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz]{27,35}$/.test(address) && Number(blockchain_sub_address) < Math.pow(2, 32);
      case "etc":
        return /^[0-9A-HJ-NP-Za-km-z]{26,35}$/.test(address);
      case "eth":
      case "amal":
      case "tomo":
      case "knc":
      case "tusd":
        if (/^(0x)?[0-9a-fA-F]{40}$/.test(address)) {
          return true;
        }
        return false;
      case "btc":
      case "bch":
      case "wbc":
        return /^[123mn][1-9A-HJ-NP-Za-km-z]{26,35}$/.test(address);
      case "neo":
        return /^[A][1-9A-HJ-NP-Za-km-z]{26,35}$/.test(address);
      case "dash":
        return /^[0-9A-HJ-NP-Za-km-z]{26,35}$/.test(address);
      case "ltc":
        return /^[1-9A-HJ-NP-Za-km-z]{26,35}$/.test(address);

    }
    //TODO: Add validator for tusd, ais, xlm, ada, eos
    return true;
  },

  getTransactionUrl(currency, transactionId) {
    let erc20Tokens = ['wbc', 'knc', 'tomo', 'tusd'];
    if (erc20Tokens.indexOf(currency) >= 0) {
      currency = 'erc20';
    }
    switch (currency) {
      case 'btc':
        return 'https://blockchain.info/tx/' + transactionId;
      case 'eth':
      case 'erc20':
        return 'https://etherscan.io/tx/' + transactionId;
      case 'etc':
        return 'https://gastracker.io/tx/' + transactionId;
      case 'bch':
        return 'https://explorer.bitcoin.com/bch/tx/' + transactionId;
      case 'xrp':
        return 'https://xrpcharts.ripple.com/#/transactions/' + transactionId;
      case 'ltc':
        return 'https://live.blockcypher.com/ltc/tx/' + transactionId;
      case 'neo':
        return 'https://neotracker.io/tx/' + transactionId;
      case 'dash':
        return 'https://explorer.dash.org/tx/' + transactionId;
      default:
        return '';
    }
  },

  trimEndZero(value) {
    const dot = '.';
    const strValue = `${value}`;
    if (strValue.indexOf(dot) === -1) {
      return strValue;
    }
    const trimEndZero = window._.trimEnd(strValue, '0');
    return window._.trimEnd(trimEndZero, dot);
  }
};
