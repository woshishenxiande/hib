define(["libs","cBase","cUIPageview","cWidgetFactory","cWidgetGuider"],function(a,b,c,d){var e=d.create("Guider"),f={},g={prefix:"cui-"},h={};return h["class"]=g.prefix+"warning",h.onCreate=function(){this.root.html(['<div class="head-warning">','<div class="head-warning-padding">','<div class="head-warning-content">','<div class="cui-load-fail cui-text-center">','<div class="cui-load-error">','<div class="i cui-wifi i_bef cui-fail-icon">',"</div>","</div>",'<p class="cui-grayc">加载失败，请稍后再试试吧</p>','<span class="cui-btns-retry">重试</span>','<div class="cui-glines"></div>','<p class="cui-grayc">或者拨打携程客服电话</p>','<div id="telBtn"><span class="cui-btns-tel"><i class="icon_phone i_bef"></i>联系客服</span></div>',"</div>","</div>","</div>","</div>"].join("")),this.addClass("head-warning-top"),this.retryDom=this.root.find(".cui-btns-retry"),this.retryDom.bind("click",$.proxy(function(){this.callback&&this.callback()},this))},h.onShow=function(){this.setzIndexTop();var a=this;window.scrollTo(0,0),this.root.find("#telBtn").click(function(){e.apply({hybridCallback:function(){e.callService()},callback:function(){window.location.href="tel:"+a.tel}})})},f.__propertys__=function(){this.retryDom,this.tel="4000086666",this.callback=function(){}},f.initialize=function($super,a){$super(h,a)},f.retryClick=function(a){a&&(this.callback=a)},new b.Class(c,f)});