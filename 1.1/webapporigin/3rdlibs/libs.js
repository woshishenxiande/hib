require.config({
  baseUrl: '/webapp/',
  shim: {
    $: {
      exports: 'zepto'
    },
    _: {
      exports: '_'
    },
    B: {
      deps: [
        '_',
        '$'
      ],
      exports: 'Backbone'
    },
    F:{
      deps: [
        '$'
      ],
      exports: 'Fastclick'
    },
    libs: {
      deps: [
        '_',
        '$',
        'B'
      ],
      exports: 'libs'
    },
    common: {
      deps: [
        'libs'
      ]
    }
  },
  paths: {
    '$': '/code/lizard/1.1/dev/webapporigin/3rdlibs/zepto',
    '_': 'res/libs/underscore',
    'B': 'res/libs/backbone',
    'F': 'res/libs/fastclick',
    'libs': 'res/libs/libs',
    'common': 'app/common'
  }
});

require(['$', '_', 'B','F'], function () {
});