define(["libs","cBase","cStore","cUtility","CommonStore","cAbstractModel","cStorage"],function(a,b,c,d,e,f,g){var h=d.Object,i=new b.Class(f,{__propertys__:function(){this.usehead=!0,this.head=e.HeadStore.getInstance(),this.result=null,this.headinfo=null,this.ajaxOnly=!1,this.isUserData=!1},initialize:function($super,a){$super(a),this.baseurl||(this.baseurl=i.baseurl.call(this,this.protocol))},setHead:function(a){if(!a instanceof c)throw"Set head is not a store";this.head=a},getHead:function(){return this.head},getParamStore:function(){return this.param},setParamStore:function(a){if("object"!=typeof a)throw"Set param is not a store";this.param=a},getResultStore:function(){return this.result},clearResult:function(){this.result&&"function"==typeof this.result.remove&&this.result.remove()},setParam:function(a,b){var d={};"object"!=typeof a||b?d[a]=b:d=a;for(var e in d)this.param instanceof c?this.param.setAttr(e,d[e]):h.set(this.param,e,d[e])},getParam:function(){return this.param instanceof c?this.param.get():this.param},buildurl:function(){var a,b=g.localStorage.get("H5_CFG");b&&b.path&&(a=b.path);var c=this.baseurl,d=[];a&&!location.host.match(/^m\.ctrip\.com/i)&&(d="http"===this.protocol?a.http&&a.http.split("/"):a.https&&a.https.split("/"));var e=this.protocol+"://"+(d[0]||c.domain)+"/"+(d[1]||c.path)+("function"==typeof this.url?this.url():this.url);return e},getTag:function(){var a=_.clone(this.getParam()||{});if(this.isUserData&&!a.cid){var b=this.head.userStore;a.cid=b.getUserId()}return JSON.stringify(a)},excute:function(a,b,d,e,f){var g=_.clone(this.getParam()||{});this.pushValidates(function(a){var b=this.head.get(),c=this._getResponseHead(a);return this.contentType!==i.CONTENT_TYPE_JSONP&&this.usehead&&c.auth&&c.auth!==b.auth&&this.head.setAuth(c.auth),c.success});var h=this.getTag(),j=this.result&&this.result.get(h);!j||this.ajaxOnly||d?("get"!==this.method.toLowerCase()&&this.usehead&&this.contentType!==i.CONTENT_TYPE_JSONP?g.head=this.head.get():"get"===this.method.toLowerCase()||this.usehead||this.contentType===i.CONTENT_TYPE_JSONP||this.headinfo&&(g.head=this.headinfo),this.onBeforeCompleteCallback=function(a){if(this.result instanceof c){try{}catch(b){}this.result.set(a,h)}},this.execute(a,b,e,f,g)):"function"==typeof a&&a.call(e||this,j)},_getResponseHead:function(a){var b=!!a.ResponseStatus,c=b?a.ResponseStatus:a.head,d="",e=!1;if(b){var f=c.Extension;for(var g in f){var h=f[g];if("auth"==h.id){d=h.value;break}}e=c&&"Success"===c.Ack}else d=c.auth,e=c&&0===c.errcode;return{auth:d,success:e}}});return i.baseurl=function(a){var b=location.host,c="m.ctrip.com",e="restapi";return d.isInApp()?"1"==d.isPreProduction()?c="https"==a?"wpg.ctrip.com":"m.ctrip.com":"0"==d.isPreProduction()?(c="https"==a?"secure.fws.qa.nt.ctripcorp.com":"m.fat19.qa.nt.ctripcorp.com",e="restapi"):c="https"==a?"wpg.ctrip.com":"m.ctrip.com":b.match(/^m\.ctrip\.com/i)||b.match(/^secure\.ctrip\.com/i)?c=i.isHttps(a)?"wpg.ctrip.com":"m.ctrip.com":b.match(/^(localhost|172\.16|127\.0)/i)?(c=i.isHttps(a)?"restful.waptest.ctrip.com":"waptest.ctrip.com",e="restapi2"):b.match(/^10\.8\.2\.111/i)?c="10.8.2.111":b.match(/^waptest\.ctrip|^210\.13\.100\.191/i)?(c=i.isHttps(a)?"restful.waptest.ctrip.com":"waptest.ctrip.com",e="restapi2"):b.match(/^m.fat/i)?(c=i.isHttps(a)?"secure.fws.qa.nt.ctripcorp.com":b,e="restapi"):c="m.ctrip.com",{domain:c,path:e}},i.isHttps=function(a){return"https"==location.protocol||"https"==a},i});