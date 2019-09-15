import Numeral from '../lib/numeral';
import BigNumber from 'bignumber.js';
import Utils from './Utils';

export default {

  validateOrderInput: function (data, coinSetting) {
    const minPrice = coinSetting.precision || 0.0001;
    const minAmount = coinSetting.minimum_quantity || 0.0001;
    const minTotal = coinSetting.minimum_amount || 0.0001;

    switch(data.type){
      case 'limit':
        this.validatePrice(data.price, data.trade_type, minPrice);
        this.validateAmount(data.quantity, data.trade_type, minAmount);
        this.validateTotal(data.price, data.quantity, minTotal, data.total);
        break;
      case 'market':
        this.validateAmount(data.quantity, data.trade_type, minAmount);
        break;
      case 'stop_limit':
        this.validateStopPrice(data.base_price, data.trade_type, minPrice);
        this.validateLimit(data.price, data.trade_type, minPrice);
        this.validateAmount(data.quantity, data.trade_type, minAmount);
        this.validateTotal(data.price, data.quantity, minTotal, data.total);
        break;
      case 'stop_market':
        this.validateStopPrice(data.base_price,data.trade_type, minPrice);
        this.validateAmount(data.quantity, data.trade_type, minAmount);
        break;
      default: {
        throw {field: null, message: 'Order type is invalid.'};
      }
    }
    this.validateBalance(data.balance);
  },

  validateBalance(rawBalance) {
    const balance = parseFloat(rawBalance);
    if (!window._.isEmpty(rawBalance) && balance > 0) {
      return;
    }
    this.validateEmpty(null, null, 'messages.error.balance_insufficient1');
  },

  validatePrice(value, trade_type, minValue) {
    const fieldName = 'price';
    if(trade_type === 'buy') {
      this.validateEmpty(fieldName, value, 'messages.error.buy.empty_price');
    } else {
      this.validateEmpty(fieldName, value, 'messages.error.sell.empty_price');
    }
    this.validateMinimumValue(fieldName, value, minValue, 'messages.error.minimum_price');
  },

  validateLimit(value, trade_type, minValue) {
    const fieldName = 'price';
    if(trade_type === 'buy') {
      this.validateEmpty(fieldName, value, 'messages.error.buy.empty_limit');
    } else {
      this.validateEmpty(fieldName, value, 'messages.error.sell.empty_limit');
    }
    this.validateMinimumValue(fieldName, value, minValue, 'messages.error.minimum_limit');
  },

  validateAmount(value, trade_type, minValue) {
    const fieldName = 'amount';
    if(trade_type === 'buy') {
      this.validateEmpty(fieldName, value, 'messages.error.buy.empty_quantity');
    } else {
      this.validateEmpty(fieldName, value, 'messages.error.sell.empty_quantity');
    }
    this.validateMinimumValue(fieldName, value, minValue, 'messages.error.minimum_quantity');
  },

  validateTotal(price, amount, minValue, total) {
    const fieldName = 'total';
    this.validateEmpty(fieldName, total, 'messages.error.empty_total');
    total = new BigNumber(`${price}`).mul(`${amount}`);
    const bgMinValue = new BigNumber(`${minValue}`);

    if (total.lt(bgMinValue)) {
      const value = Utils.trimEndZero(new BigNumber(`${minValue}`).toFixed(20));
      throw { field: fieldName, message: window.i18n.t('messages.error.minimum_total', {minimum: value}) };
    }
  },

  validateStopPrice(value, trade_type, minValue){
    const fieldName = 'stop_price';
    if(trade_type === 'buy') {
      this.validateEmpty(fieldName, value, 'messages.error.buy.empty_base_price');
    } else {
      this.validateEmpty(fieldName, value, 'messages.error.sell.empty_base_price');
    }
    this.validateMinimumValue(fieldName, value, minValue, 'messages.error.minimum_base_price');
  },

  validateEmpty(field, value, msgKey) {
    if (!value) {
      throw { field: field, message: window.i18n.t(msgKey) };
    }
  },

  validateMinimumValue(field, value, minValue, msgKey) {
    const bgValue = new BigNumber(`${value || 0}`);
    const bgMinValue = new BigNumber(`${minValue || 0}`);

    if(bgValue.lt(bgMinValue)) {
      const value = Utils.trimEndZero(new BigNumber(`${minValue}`).toFixed(20));
      throw { field: field, message: window.i18n.t(msgKey, {minimum: value}) };
    }
  }
};
