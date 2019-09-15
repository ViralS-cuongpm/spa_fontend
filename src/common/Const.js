export default {
  MASTERDATA: {
    KEY: 'masterdata',
    VERSION_KEY: 'masterdata_version',
    EVENT_CHANGED: 'MasterdataChanged'
  },
  KEYS_GLOBAL: {
    'APP_NAME'      : APP_NAME,
    'COIN_HOLDING'  : 'AMAL'
  },
  MIXPANEL_TOKEN: '45865afc8f2a3bd0bd9ccb3c346e7d32',
  SPOT_EXCHANGE: {
    ORDER_TYPE_ALL: 'all',
    ORDER_TYPE_LIMIT: 'limit',
    ORDER_TYPE_MARKET: 'market',
    ORDER_TYPE_STOP_LIMIT: 'stop_limit',
    ORDER_TYPE_STOP_MARKET: 'stop_market',
  },
  OPEN_ORDER: 'open_order',
  ORDER_HISTORY: 'order_history',
  TRADE_HISTORY: 'trade_history',
  SUB_ACCOUNTS: 'sub_accounts',
  FUNDS: 'funds',
  ONE_DAY: 'one_day',
  ONE_WEEK: 'one_week',
  ONE_MONTH: 'one_month',
  THREE_MONTHS: 'three_months',
  PER_PAGE: 10,
  DESC: 'desc',
  ASC: 'asc',
  USD: 'usd',
  BTC: 'btc',
  AML: 'amal',
  ETH: 'eth',
  DEFAULT: 'default',
  CURRENT_SUBJECT_SEARCH_DATE_TAB: 'CURRENT_SUBJECT_SEARCH_DATE_TAB',
  CURRENT_SUBJECT_SEARCH_DATE_PICKER: 'CURRENT_SUBJECT_SEARCH_DATE_PICKER',
  ACTION_SORT: 'action_sort',
  ACTION_CANCEL: 'action_cancel',
  ACTION_CHANGE_ORDER_TAB: 'action_change_order_tab',
  ACTION_HIDE_OTHER_PAIR: 'action_hide_other_pair',
  OPEN_ORDER_NAVI: [
    {
      id: 'open_order',
      name: 'menu.open_orders',
      isActive: true,
    },
    {
      id: 'order_history',
      name: 'menu.order_history',
      isActive: false,
    },
    {
      id: 'trade_history',
      name: 'menu.trade_history',
      isActive: false,
    },
    {
      id: 'funds',
      name: 'menu.funds',
      isActive: false,
    },
    // {
    //   id: 'sub_accounts',
    //   name: 'menu.sub_accounts',
    //   isActive: false,
    // }
  ],
  OPEN_ORDER_DATE_TAB: [
    {
      id: 'one_day',
      name: 'menu.one_day',
      isActive: false,
    },
    {
      id: 'one_week',
      name: 'menu.one_week',
      isActive: false,
    },
    {
      id: 'one_month',
      name: 'menu.one_month',
      isActive: false,
    },
    {
      id: 'three_month',
      name: 'menu.three_months',
      isActive: false,
    }
  ],
  MARKETS: ['all', 'btc', 'eth', 'usd', 'usdt'],
  MARKETS_2: ['btc', 'eth', 'usd', 'usdt'],
  DEFAULT_MARKET: 'btc',
  DEFAULT_COIN: 'eth',
  DEFAULT_CURRENCY: 'btc',
  FAVORITES_TAB: 'favorites tab',
  SELECT_SIDE: [
    {
      id: 'buy',
      name: 'Buy',
    },
    {
      id: 'sell',
      name: 'Sell',
    }
  ],
  TOTAL_AMAL: 126000000,
  TRADING_VIEW_CHART: {
    OBJECT: {
      SALES_POINT       : 'trandingview.object.salespoint',
      SPOT_EXCHANGE     : 'trandingview.object.spotexchange',
      MARGIN_EXCHANGE   : 'trandingview.object.marginexchange',
    },
    BAR_STYLE: {
      STYLE_BARS            : 0,
      STYLE_CANDLES         : 1,
      STYLE_LINE            : 2,
      STYLE_AREA            : 3,
      STYLE_HEIKEN_ASHI     : 8,
      STYLE_HOLLOW_CANDLES  : 9,
    }
  },
  MINUTES: ['1', '3', '5', '15', '30'],
  HOURS: ['60', '120', '240', '360', '720'],
  CHARTING_RESOLUTION_MULTIPLICITY : {'D': 1440, 'W': 10080, 'M': 43200},
  REFERRAL_KEY: 'ref',
  LANGUAGES: ['en', 'ja', 'vis', 'il', 'tl'],
  FIAT_LIKE_LIST: ['usd', 'usdt'],
  NUMBER_OF_DECIMAL_DIGITS: 8,
  NUMBER_OF_DECIMAL_DIGITS_USD: 2,
  TYPE_MAIN_BALANCE: 'main',
  TYPE_EXCHANGE_BALANCE: 'spot',
  TYPE_MARGIN_BALANCE: 'margin',
  TYPE_MAM_BALANCE: 'mam',
  TYPE_AIRDROP_BALANCE:'airdrop',
  TIME_IN_FORCE: [
    {
      id: 'Good_Till_Cancel',
      name: 'GoodTillCancel',
      isActive: true,
    },
    {
      id: 'Im_mediate_Or_Cancel',
      name: 'ImmediateOrCancel',
      isActive: false,
    },
    {
      id: 'Fill_Or_Kill',
      name: 'FillOrKill',
      isActive: false,
    },
  ],
  MAX_LENGTH_INPUT: 190,
  MAX_LENGTH_20: 20,
  COMMISSION_PERCENT : '20%',
  MENU_CONTRACTS: [
    {
      type: 'tree',
      icon: '',
      name: 'Historical Data',
      isHasPermission: false,
      items: [
        {
          type: 'item',
          icon: '',
          name: 'Funding History',
          router: {
            name: '/margin-exchange/contracts/funding-history'
          }
        },
        {
          type: 'item',
          icon: '',
          name: 'Insurance Fund',
          router: {
            name: '/margin-exchange/contracts/insurance-fund'
          }
        },
        {
          type: 'item',
          icon: '',
          name: 'Settlement History',
          router: {
            name: '/margin-exchange/contracts/settlement-history'
          }
        },
        {
          type: 'item',
          icon: '',
          name: 'Leaderboard',
          router: {
            name: '/margin-exchange/contracts/leaderboard'
          }
        },
      ]
    },
    {
      type: 'tree',
      icon: '',
      name: 'Contract Guides',
      isHasPermission: false,
      items: [
        {
          type: 'item',
          icon: '',
          name: 'Futures Guide',
          router: {
            name: '/margin-exchange/contracts/futures-guide'
          }
        },
        {
          type: 'item',
          icon: '',
          name: 'Perpetual Contracts Guide',
          router: {
            name: '/margin-exchange/contracts/perpetual-contracts-guide'
          }
        },
        {
          type: 'item',
          icon: '',
          name: 'Upside Profit Contracts Guide',
          router: {
            name: 'z3'
          }
        },
        {
          type: 'item',
          icon: '',
          name: 'Downside Profit Contracts Guide',
          router: {
            name: 'z4'
          }
        },
      ]
    },
    {
      type: 'tree',
      icon: '',
      name: 'Contracts',
      isHasPermission: false,
      items: [
        {
          type: 'tree2',
          icon: '',
          name: 'Bitcoin',
          isHasPermission: false,
          items2: [
            {
              type: 'item',
              icon: '',
              name: 'Bitcoin Series (XBT) Guide',
              router: {
                name: '/margin-exchange/contracts/contracts-data/bitcoin-series-xbt-guide'
              }
            },
            {
              type: 'item',
              icon: '',
              name: 'XBTUSD',
              router: {
                name: '/margin-exchange/contracts/contracts-data/contract-specification'
              }
            },
            {
              type: 'item',
              icon: '',
              name: 'XBTU19',
              router: {
                name: '/margin-exchange/contracts/contracts-data/contract-specification-xbtu19'
              }
            },
            {
              type: 'item',
              icon: '',
              name: 'XBTZ19',
              router: {
                name: '/margin-exchange/contracts/contracts-data/contract-specification-xbtz19'
              }
            },
        ]
        },
      ]
    },
    {
      type: 'tree',
      icon: '',
      name: 'Indices',
      isHasPermission: false,
      items: [
        {
          type: 'tree2',
          icon: '',
          name: 'BXBT (XBT)',
          isHasPermission: false,
          items2: [
            {
              type: 'item',
              icon: '',
              name: 'BXBT',
              router: {
                name: 'z6'
              }
            },
        ]
        },
      ]
    },
  ],
};
