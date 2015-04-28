"use strict"
define(['libs', 'c', 'cBasePageView', 'cUI', buildViewTemplatesPath('scrollradiolist.html')], function(libs, c, pageview, cUI, html){

    var s = null;
    var View = pageview.extend({
        render: function(){
            this.injectHeaderView();
            this.$el.html(html);
        },

        onCreate: function(){
            this.render();
        },

        events: {
            'click #test': 'testAction'
        },

        testAction: function(){
            var port_place = this.$el.find('#input');
            var data = [];
            for (var i = 0; i < 15; i++) {
                data.push({ key: '列表选项' + (i + 1) });
            }

            s = new c.ui.ScrollRadioList({
                title: '列表选项',
                index: port_place.attr('index'),         //默认定位到第几个item上
                data: data,                                //要展示到item的数组
                content: 1,
                disItemNum: 3,                            //显示的item数量
                itemClick: function (item) {              //选中item触发的事件
                    port_place.attr('index', item.index);
                    port_place.val(item.key);
                }
            });
            s.show();
        },

        onLoad: function () {
            this.headerview.set({
                title: 'scrollradiolist组件',
                back: true,
                view: this,
                tel: null,
                events: {
                    returnHandler: function () {
                        this.back('index');
                        if(s) s.hide();
                    }
                }
            });
            this.headerview.show();

            this.turning();
        },

        onShow: function(){

        },

        onHide: function(){

        }

    });

    return View;
});