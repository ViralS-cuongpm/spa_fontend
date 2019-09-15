import Vue from 'vue';
import rf from 'requestfactory';

export default class GlobalSocket {

constructor() {
    //public channels
    this.listenForPrices();
    this.listenForOrderTransaction();
    this.listenForOrderBook();
    this.listenForSetting();
    
    this.listenForPriceChanges();
    this.listenForCoinMarketCap();
    this.listenForCoinCheck();
    this.listenForNews();
    this.listenUpdateNews();

    this.listenForTransactionSetting();

    if (window.isAuthenticated) {
      //user private channels
      rf.getRequest('UserRequest').getCurrentUser()
        .then(res => {
          var userId = res.data.id;
          this.listenForBalance(userId);
          this.listenForTransaction(userId);
          this.listenForUserOrderBook(userId);
          this.listenForOrderList(userId);
          this.listenForOrderEvent(userId);
          this.listenForUserSessionRegistered(userId);
          this.listenForOtpUpdated(userId);
        });
    }

    Vue.mixin({
      mounted: function () {
        if (this.getSocketEventHandlers) {
          window._.forIn(this.getSocketEventHandlers(), (handler, eventName) => {
            this.$on(eventName, handler);
          });
        }
      },
      beforeDestroy() {
        if (this.getSocketEventHandlers) {
          window._.forIn(this.getSocketEventHandlers(), (handler, eventName) => {
            this.$off(eventName, handler);
          });
        }
      }
    });
  }

  notifyPricesUpdate(newPrices) {
    this.prices = window._.merge(this.prices || {}, newPrices);
    window.app.$broadcast('PricesUpdated', newPrices.data);
  }

  listenForPrices() {
    window.Echo.channel('App.Prices')
      .listen('PricesUpdated', (newPrices) => {
        this.notifyPricesUpdate(newPrices);
    });
  }

  listenForBalance(userId) {
    window.Echo.private('App.User.' + userId)
      .listen('BalanceUpdated', (balance) => {
        window.app.$broadcast('BalanceUpdated', balance.data);
        if (this.balance) {
          this.balance.data = window._.merge(this.balance.data || {}, balance.data);
        }
    });
    window.Echo.private('App.User.' + userId)
      .listen('AmlBalanceUpdated', (balance) => {
        window.app.$broadcast('AmlBalanceUpdated', balance.data);
    });
    window.Echo.private('App.User.' + userId)
      .listen('MainBalanceUpdated', (balance) => {
        window.app.$broadcast('MainBalanceUpdated', balance.data);
    });
    window.Echo.private('App.User.' + userId)
      .listen('MamBalanceUpdated', (balance) => {
        window.app.$broadcast('MamBalanceUpdated', balance.data);
    });
    window.Echo.private('App.User.' + userId)
      .listen('MarginBalanceUpdated', (balance) => {
        window.app.$broadcast('MarginBalanceUpdated', balance.data);
    });
    window.Echo.private('App.User.' + userId)
      .listen('SpotBalanceUpdated', (balance) => {
        window.app.$broadcast('SpotBalanceUpdated', balance.data);
    });
    window.Echo.private('App.User.' + userId)
      .listen('WithdrawDepositBalanceEvent', (balance) => {
        window.app.$broadcast('WithdrawDepositBalanceEvent', balance.data);
    });
  }

  listenForTransaction(userId) {
    window.Echo.private('App.User.' + userId)
      .listen('TransactionCreated', (transaction) => {
        window.app.$broadcast('TransactionCreated', transaction.data);
    });
  }

  listenForOrderTransaction(userId) {
    window.Echo.channel('App.Orders')
      .listen('OrderTransactionCreated', (transaction) => {
        window.app.$broadcast('OrderTransactionCreated', transaction.data);
    });
  }

  listenForOrderBook() {
    window.Echo.channel('App.OrderBook')
      .listen('OrderBookUpdated', (orderBook) => {
        window.app.$broadcast('OrderBookUpdated', orderBook.data);
    });
  }

  listenForSetting() {
    window.Echo.channel('App.Setting')
      .listen('SettingUpdated', (Setting) => {
        window.app.$broadcast('SettingUpdated', Setting.data);
    });
  }

  listenForTransactionSetting() {
    window.Echo.channel('App.Models.Admin')
      .listen('TransactionSettingEvent', (Setting) => {
          window.app.$broadcast('TransactionSettingEvent', Setting.data);
      });
  }

  listenForUserOrderBook(userId) {
    window.Echo.private('App.User.' + userId)
      .listen('UserOrderBookUpdated', (orderBook) => {
        window.app.$broadcast('UserOrderBookUpdated', orderBook.data);
    });
  }

  listenForOrderList(userId) {
    window.Echo.private('App.User.' + userId)
      .listen('OrderListUpdated', (data) => {
        window.app.$broadcast('OrderListUpdated', data.data);
    });
  }

  listenForOrderEvent(userId) {
    window.Echo.private('App.User.' + userId)
      .listen('OrderChanged', (data) => {
        window.app.$broadcast('OrderChanged', data.data);
    });
  }

  listenForUserSessionRegistered(userId) {
    window.Echo.private('App.User.' + userId)
      .listen('UserSessionRegistered', (data) => {
        window.app.$broadcast('UserSessionRegistered', data.data);
    });
  }

  listenForPriceChanges() {
    window.Echo.channel('App.MarketPriceChanges')
      .listen('MarketPriceChangesUpdated', (res) => {
        window.app.$broadcast('MarketPriceChangesUpdated', res.data);
      });
  }

  listenForOtpUpdated(userId) {
    window.Echo.private('App.User.' + userId)
      .listen('OtpUpdated', (res) => {
        window.app.$broadcast('OtpUpdated', res.data);
      });
  }

  listenForCoinMarketCap() {
    window.Echo.channel('App.CoinMarketCapTicker')
    .listen('.update', (res) => {
      window.app.$broadcast('CoinMarketCapTickerUpdated', res.data);
    });
  }

  listenForCoinCheck() {
    window.Echo.channel('App.CoinCheckBtcUsdExchanges')
    .listen('CoinCheckBtcUsdExchangesUpdated', (res) => {
      window.app.$broadcast('CoinCheckBtcUsdExchangesUpdated', res.data);
    });
  }

  listenForNews() {
    window.Echo.channel('App.News')
    .listen('NewsStateUpdated', (res) => {
      window.app.$broadcast('NewsStateUpdated', res);
    });
  }

  listenUpdateNews() {
    window.Echo.channel('App.UpdateNews')
    .listen('ZendeskNewsUpdated', (res) => {
      window.app.$broadcast('ZendeskNewsUpdated', res);
    });
  }


}
