﻿"use strict"
define(['libs', 'c', 'cBasePageView', 'cUI', buildViewTemplatesPath('cuiswitch.html')], function (libs, c, pageview, cUI, html) {


  var View = pageview.extend({
    render: function () {
      this.$el.html(html);
    },

    onCreate: function () {
      this.injectHeaderView();

      this.render();
    },

    events: {
    },

    onLoad: function () {
      this.headerview.set({
        title: 'switch组件',
        back: true,
        view: this,
        tel: null,
        events: {
          returnHandler: function () {
            this.back('index');
          }
        }
      });
      this.headerview.show();

      this.turning();

var s = new cUI.cuiSwitch({ rootBox: this.$el.find('.hm'), checked: true,
    changed: function () {
    $('#msg').html($('<div>当前状态：' + this.getStatus() + '</div>'));
  }
})



    },

    onShow: function () {

    },

    onHide: function () {

    }

  });

  return View;
});