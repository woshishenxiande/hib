define(["cBase","cUILayer","cUIScroll"],function(a,b,c){var d={},e={prefix:"cui-"},f={};f["class"]=e.prefix+"warning",f.onCreate=function(){this.root.html(['<div class="cui-pop-box" lazyTap="true">','<div class="cui-hd"><div class="cui-text-center">'+this.title+"</div></div>",'<div class="cui-bd cui-roller-bd" style="overflow: hidden; position: relative; ">',"</div>","</div>"].join("")),this.title=this.root.find(".cui-text-center"),this.content=this.root.find(".cui-bd")},f.onShow=function(){var a=this;this.maskToHide(function(){a.hide()});var b=$('<ul class="cui-select-view " style="position: absolute; width: 100%; "></ul>');this.dataK={};for(var d in this.data){_data=this.data[d],_data.index=d,"undefined"==typeof _data.key&&(_data.key=_data.id),"undefined"==typeof _data.val&&(_data.val=_data.name);var e=_data.val||_data.key,f=$("<li>"+e+"</li>");f.attr("data-index",d),"undefined"!=typeof _data.disabled&&0==_data.disabled&&f.css("color","gray"),d==this.index&&f.addClass("current"),this.dataK[_data.key]=_data,b.append(f)}this.content.append(b);var g=this.data.length;this.disItemNum>g&&(this.disItemNum=g);var h=b.height()/g,i=h*this.disItemNum;this.content.css("height",i),this.scroll=new c({wrapper:this.content,scroller:b});var j=this.index;this.key&&(j=this.dataK[this.key].index),g-j<this.disItemNum&&(j=g-this.disItemNum);var k=h*j*-1;this.scroll.scrollTo(0,k);var a=this;b.on("click",$.proxy(function(b){var c=$(b.target);if(c&&null!==c.attr("data-index")){var d=this.data[c.attr("data-index")];this.itemClick.call(a,d),this.hide()}},this)),this.scroller=b,this.setzIndexTop(),this.root.bind("touchmove",function(a){a.preventDefault()}),this.onHashChange=function(){this.hide()},$(window).on("hashchange",$.proxy(this.onHashChange,this))},f.onHide=function(){this.scroll.destroy(),this.root.unbind("touchmove"),this.root.remove(),$(window).off("hashchange",$.proxy(this.onHashChange,this)),this.scroller&&this.scroller.off("click")},d.__propertys__=function(){this.title,this.content,this.itemClick=function(){},this.scroll=null,this.data=[],this.index=-1,this.key=null,this.disItemNum=5},d.initialize=function($super,a){this.setOption(function(a,b){this[a]=b}),$super($.extend(f,a))};var g=new a.Class(b,d);return g});