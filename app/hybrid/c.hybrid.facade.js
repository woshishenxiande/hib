/********************************** 
 * @author:     cmli@Ctrip.com
 * @description:  hybrid面板模板
 */
define(['libs', 'CommonStore','cLog'], function(libs, CommonStore,cLog){

  var Facade = Facade || {};

  Facade.METHOD_ENTRY = 'METHOD_ENTRY';
  Facade.METHOD_MEMBER_LOGIN = 'METHOD_MEMBER_LOGIN';
  Facade.METHOD_NON_MEMBER_LOGIN = 'METHOD_NON_MEMBER_LOGIN';
  Facade.METHOD_AUTO_LOGIN = 'METHOD_AUTO_LOGIN';
  Facade.METHOD_LOCATE = 'METHOD_LOCATE';
  Facade.METHOD_REFRESH_NAV_BAR = 'METHOD_REFRESH_NAV_BAR';
  Facade.METHOD_CALL_PHONE = 'METHOD_CALL_PHONE';
  Facade.METHOD_BACK_TO_HOME = 'METHOD_BACK_TO_HOME';
  Facade.METHOD_BACK_TO_BOOK_CAR = 'METHOD_BACK_TO_BOOK_CAR';
  Facade.METHOD_BACK = 'METHOD_BACK';
  Facade.METHOD_COMMIT = 'METHOD_COMMIT';
  Facade.METHOD_CITY_CHOOSE = 'METHOD_CITY_CHOOSE';
  Facade.METHOD_REGISTER = 'METHOD_REGISTER';
  Facade.METHOD_LOG_EVENT = 'METHOD_LOG_EVENT';
  Facade.METHOD_INIT = 'METHOD_INIT';
  Facade.METHOD_CALL_SERVICE_CENTER = 'METHOD_CALL_SERVICE_CENTER';
  Facade.METHOD_BACK_TO_LAST_PAGE = 'METHOD_BACK_TO_LAST_PAGE';
  Facade.METHOD_GO_TO_BOOK_CAR_FINISHED_PAGE = 'METHOD_GO_TO_BOOK_CAR_FINISHED_PAGE';
  Facade.METHOD_GO_TO_HOTEL_DETAIL = 'METHOD_GO_TO_HOTEL_DETAIL';
  Facade.METHOD_OPEN_URL = 'METHOD_OPEN_URL';
  Facade.METHOD_CHECK_UPDATE = 'METHOD_CHECK_UPDATE';
  Facade.METHOD_RECOMMEND_APP_TO_FRIEND ='METHOD_RECOMMEND_APP_TO_FRIEND';
  Facade.METHOD_ADD_WEIXIN_FRIEND = 'METHOD_ADD_WEIXIN_FRIEND';
  Facade.METHOD_SHOW_NEWEST_INTRODUCTION = 'METHOD_SHOW_NEWEST_INTRODUCTION';
  Facade.METHOD_BECOME_ACTIVE = 'METHOD_BECOME_ACTIVE';
  Facade.METHOD_WEB_VIEW_FINISHED_LOAD = 'METHOD_WEB_VIEW_FINISHED_LOAD';
  Facade.METHOD_CROSS_DOMAIN_HREF = 'METHOD_CROSS_DOMAIN_HREF';
  Facade.METHOD_CHECK_APP_INSTALL = 'METHOD_CHECK_APP_INSTALL';
  Facade.METHOD_CROSS_JUMP = 'METHOD_CROSS_JUMP';
  Facade.METHOD_REFRESH_NATIVE = 'METHOD_REFRESH_NATIVE';
  Facade.METHOD_H5_NEED_REFRESH = 'METHOD_H5_NEED_REFRESH';
  Facade.METHOD_READ_FROM_CLIPBOARD = 'METHOD_READ_FROM_CLIPBOARD';
  Facade.METHOD_COPY_TO_CLIPBOARD = 'METHOD_COPY_TO_CLIPBOARD';
  Facade.METHOD_SHARE_TO_VENDOR = 'METHOD_SHARE_TO_VENDOR';
  Facade.METHOD_DOWNLOAD_DATA = 'METHOD_DOWNLOAD_DATA';
  Facade.METHOD_NATIVE_LOG = 'METHOD_NATIVE_LOG';
  Facade.METHOD_ENCRYPT_BASE64 = 'METHOD_ENCRYPT_BASE64';
  Facade.METHOD_SEND_H5_PIPE_REQUEST = 'METHOD_SEND_H5_PIPE_REQUEST';
  Facade.METHOD_SEND_HTTP_PIPE_REQUEST = 'METHOD_SEND_HTTP_PIPE_REQUEST';
  Facade.METHOD_CHECK_PAY_APP_INSTALL_STATUS = 'METHOD_CHECK_PAY_APP_INSTALL_STATUS';
  Facade.METHOD_OPEN_PAY_APP_BY_URL = 'METHOD_OPEN_PAY_APP_BY_URL';
  Facade.METHOD_SET_NAVBAR_HIDDEN = 'METHOD_SET_NAVBAR_HIDDEN';
  Facade.METHOD_SET_TOOLBAR_HIDDEN = 'METHOD_SET_TOOLBAR_HIDDEN';
  Facade.METHOD_CHECK_FILE_EXIST = 'METHOD_CHECK_FILE_EXIST';
  Facade.METHOD_DELETE_FILE = 'METHOD_DELETE_FILE';
  Facade.METHOD_GET_CURRENT_SANDBOX_NAME = 'METHOD_GET_CURRENT_SANDBOX_NAME';
  Facade.METHOD_GET_FILE_SIZE = 'METHOD_GET_FILE_SIZE';
  Facade.METHOD_MAKE_DIR = 'METHOD_MAKE_DIR';
  Facade.METHOD_READ_TEXT_FROM_FILE = 'METHOD_READ_TEXT_FROM_FILE';
  Facade.METHOD_WRITE_TEXT_TO_FILE = 'METHOD_WRITE_TEXT_TO_FILE';
  Facade.METHOD_ABORT_HTTP_PIPE_REQUEST = 'METHOD_ABORT_HTTP_PIPE_REQUEST';
  Facade.METHOD_OPEN_ADV_PAGE = 'METHOD_OPEN_ADV_PAGE';
  Facade.METHOD_WEB_VEW_DID_APPEAR = 'METHOD_WEB_VEW_DID_APPEAR';

  var METHOD_ENTRY = 'h5_init_finished';
  var METHOD_MEMBER_LOGIN = 'member_login';
  var METHOD_NON_MEMBER_LOGIN = 'non_member_login';
  var METHOD_AUTO_LOGIN = 'member_auto_login';
  var METHOD_LOCATE = 'locate';
  var METHOD_REFRESH_NAV_BAR = 'refresh_nav_bar';
  var METHOD_BACK = 'back';
  var METHOD_COMMIT = 'commit';
  var METHOD_CITY_CHOOSE = 'cityChoose';
  var METHOD_REGISTER = 'member_register';
  var METHOD_INIT = 'init_member_H5_info';
  var METHOD_BECOME_ACTIVE = 'become_active';
  var METHOD_WEB_VIEW_FINISHED_LOAD = 'web_view_finished_load';
  var METHOD_CHECK_APP_INSTALL = 'check_app_install_status';
  var METHOD_H5_NEED_REFRESH = 'app_h5_need_refresh';
  var METHOD_READ_FROM_CLIPBOARD = 'read_copied_string_from_clipboard';
  var METHOD_DOWNLOAD_DATA = 'download_data';
  var METHOD_ENCRYPT_BASE64 = 'base64_encode';
  var METHOD_SEND_H5_PIPE_REQUEST = 'send_h5_pipe_request';
  var METHOD_SEND_HTTP_PIPE_REQUEST = 'send_http_pipe_request';
  var METHOD_CHECK_PAY_APP_INSTALL_STATUS = 'check_pay_app_install_status';
  var METHOD_CHECK_FILE_EXIST = 'check_file_exist';
  var METHOD_DELETE_FILE = 'delete_file';
  var METHOD_GET_CURRENT_SANDBOX_NAME = 'get_current_sandbox_name';
  var METHOD_GET_FILE_SIZE = 'get_file_size';
  var METHOD_MAKE_DIR = "make_dir"; // @notation 没有定义，需要2014.3.13重新确认
  var METHOD_READ_TEXT_FROM_FILE = 'read_text_from_file';
  var METHOD_WRITE_TEXT_TO_FILE = 'write_text_to_file';
  var METHOD_WEB_VEW_DID_APPEAR = 'web_view_did_appear';

  var appLock = false;

  // defaultFn.register会注册的Handler
  var defaultRegisterHandler = {

    METHOD_NON_MEMBER_LOGIN: function (options) {
      defaultCallback[METHOD_NON_MEMBER_LOGIN] = function (params) {

        cLog.applog('METHOD_NON_MEMBER_LOGIN',params);

        if (typeof params === 'string') {
          params = JSON.parse(params);
        }

        var userStore = CommonStore.UserStore.getInstance();
        var userInfo = userStore.getUser();
        userStore.setUser(params.data);

        var headStore = CommonStore.HeadStore.getInstance();
        var headInfo = headStore.get();
        headInfo.auth = params.data.Auth;
        headStore.set(headInfo);

        // userStore.getUser();

        if (typeof options.callback === 'function') {
          options.callback(params);
        }

        //options.callback(params);
      };
    },

    METHOD_ENCRYPT_BASE64: function(options){
      defaultCallback[METHOD_ENCRYPT_BASE64] = function (params) {
        if (typeof params === 'string') {
          params = JSON.parse(params);
        }

        if (typeof options.callback === 'function') {
          options.callback(params);
        }
      };
    },

    METHOD_LOCATE: function(options){
      defaultCallback[METHOD_LOCATE] = function(params){
        cLog.applog('METHOD_LOCATE',params);
        try{
          var data = params;
          if (typeof params === 'string') {
            data = JSON.parse(params);
          }

          options.success(data);

        }catch(e){
          options.error(true, '定位失败');
        }
      };
    },

    METHOD_MEMBER_LOGIN: function (options) {
      defaultCallback[METHOD_MEMBER_LOGIN] = function(params){
        cLog.applog('METHOD_MEMBER_LOGIN',params);

        if (typeof params === 'string') {
          params = JSON.parse(params);
        }

        var userStore = CommonStore.UserStore.getInstance();
        var userInfo = userStore.getUser();
        userStore.setUser(params.data);

        var headStore = CommonStore.HeadStore.getInstance();
        var headInfo = headStore.get();
        headInfo.auth = params.data.Auth;
        headStore.set(headInfo);

        // userStore.getUser();

        if (typeof options.callback === 'function') {
          options.callback();
        }
      };
    },

    METHOD_AUTO_LOGIN: function (options) {
      defaultCallback[METHOD_AUTO_LOGIN] = function (params) {

        cLog.applog('METHOD_AUTO_LOGIN',params);

        if (typeof params === 'string') {
          params = JSON.parse(params);
        }

        if (params) {
          var userStore = CommonStore.UserStore.getInstance();
          var userInfo = userStore.getUser();
          userStore.setUser(params.data);

          var headStore = CommonStore.HeadStore.getInstance();
          var headInfo = headStore.get();
          headInfo.auth = params.data.Auth;
          headStore.set(headInfo);
        }

        if (typeof options.callback === 'function') {
          options.callback(params);
        }
      };
    },

    METHOD_REGISTER: function(options){
      defaultCallback[METHOD_REGISTER] = function(params){

        cLog.applog('METHOD_REGISTER',params);
        if (typeof params === 'string') {
          params = JSON.parse(params);
        }

        var userStore = CommonStore.UserStore.getInstance();
        var userInfo = userStore.getUser();
        userStore.setUser(params.data);

        var headStore = CommonStore.HeadStore.getInstance();
        var headInfo = headStore.get();
        headInfo.auth = params.data.Auth;
        headStore.set(headInfo);

        // userStore.getUser();

        if (typeof options.callback === 'function') {
          options.callback();
        }
      };
    },

    METHOD_ENTRY: function(options){
      defaultCallback[METHOD_ENTRY] = options.callback;
    },

    METHOD_BACK: function(options){
      defaultCallback[METHOD_BACK] = options.callback;
    },

    METHOD_COMMIT: function(options){
      defaultCallback[METHOD_COMMIT] = options.callback;
    },

    METHOD_CITY_CHOOSE: function(options){
      defaultCallback[METHOD_CITY_CHOOSE] = options.callback;
    },

    METHOD_SEND_H5_PIPE_REQUEST: function(options){
      defaultCallback[METHOD_SEND_H5_PIPE_REQUEST] = function(params){
        if (typeof options.callback === 'function') {
          options.callback(params);
        }
      };
    },

    METHOD_SEND_HTTP_PIPE_REQUEST: function (options) {
      defaultCallback[METHOD_SEND_HTTP_PIPE_REQUEST] = function (params) {
        if (typeof options.callback === 'function') {
          options.callback(params);
        }
      };
    },

    METHOD_CHECK_PAY_APP_INSTALL_STATUS: function(){
      defaultCallback[METHOD_CHECK_PAY_APP_INSTALL_STATUS] = function (params) {
        if (typeof options.callback === 'function') {
          options.callback(params);
        }
      };
    },

    METHOD_INIT: function(options){
      defaultCallback[METHOD_INIT] = function (params) {

        cLog.applog('METHOD_INIT',params);

        if (typeof params === 'string') {
          params = JSON.parse(params);
        }

        if (window.localStorage && params) {
          // 设置用户信息
          if (params && params.userInfo) {
            try{
              var userStore = CommonStore.UserStore.getInstance();
              var userInfo = userStore.getUser();
              userStore.setUser(params.userInfo.data);

              var headStore = CommonStore.HeadStore.getInstance();
              var headInfo = headStore.get();
              headInfo.auth = params.userInfo.data.Auth;
              headStore.set(headInfo);
            } catch (e) {
              alert('set data error');
            }
          }

          // 设置DeviceInfo
          if (params && params.device) {
            var deviceInfo = {
              device: params.device
            };
            window.localStorage.setItem('DEVICEINFO', JSON.stringify(deviceInfo));
          }

          // 设置AppInfo
          if (params && params.appId) {
            var appInfo = {
              version: params.version,
              appId: params.appId,
              serverVersion: params.serverVersion,
              platform: params.platform
            };
            window.localStorage.setItem('APPINFO', JSON.stringify(appInfo));
          }

          if (params && params.timestamp) {
            window.localStorage.setItem('SERVERDATE', params.timestamp);
          }

          if (params && params.sourceId) {
            window.localStorage.setItem('SOURCEID', params.sourceId);
          }

          if (params && params.isPreProduction) {
            window.localStorage.setItem('isPreProduction', params.isPreProduction);
          }
        }

        options.callback();
      };
    },

    METHOD_WEB_VIEW_FINISHED_LOAD: function(options){
      defaultCallback[METHOD_WEB_VIEW_FINISHED_LOAD] = options.callback;
    },

    METHOD_BECOME_ACTIVE: function(options){
      defaultCallback[METHOD_BECOME_ACTIVE] = options.callback;
    },

    METHOD_CHECK_APP_INSTALL: function (options) {
      defaultCallback[METHOD_CHECK_APP_INSTALL] = function (params) {
        cLog.applog('METHOD_CHECK_APP_INSTALL',params);
        options.callback(params);
      };
    },

    METHOD_H5_NEED_REFRESH: function (options) {
      defaultCallback[METHOD_H5_NEED_REFRESH] = options.callback;
    },

    METHOD_CHECK_FILE_EXIST: function(options) {
      defaultCallback[METHOD_CHECK_FILE_EXIST] = function(params) {
        options.callback(params);
      };
    },

    METHOD_DELETE_FILE: function(options){
      defaultCallback[METHOD_DELETE_FILE] = function(params) {
        options.callback(params);
      };
    },

    METHOD_GET_CURRENT_SANDBOX_NAME: function(options) {
      defaultCallback[METHOD_GET_CURRENT_SANDBOX_NAME] = function(params) {
        options.callback(params);
      };
    },

    METHOD_GET_FILE_SIZE: function(options) {
      defaultCallback[METHOD_GET_FILE_SIZE] = function(params) {
        options.callback(params);
      };
    },

    METHOD_MAKE_DIR: function(options) {
      defaultCallback[METHOD_MAKE_DIR] = function(params) {
        options.callback(params);
      };
    },

    METHOD_READ_TEXT_FROM_FILE: function(options) {
      defaultCallback[METHOD_READ_TEXT_FROM_FILE] = function(params) {
        options.callback(params);
      };
    },

    METHOD_WRITE_TEXT_TO_FILE: function(options){
      defaultCallback[METHOD_WRITE_TEXT_TO_FILE] = function(params) {
        options.callback(params);
      };
    },

    METHOD_READ_FROM_CLIPBOARD: function (options) {
      defaultCallback[METHOD_READ_FROM_CLIPBOARD] = function (params) {
        cLog.applog('METHOD_READ_FROM_CLIPBOARD',params);
        options.callback(params);
      };
    },

    METHOD_DOWNLOAD_DATA: function (options) {
      defaultCallback[METHOD_DOWNLOAD_DATA] = function (params) {
        cLog.applog('METHOD_DOWNLOAD_DATA',params);
        if (typeof options.callback === 'function') {
          options.callback(params);
        }
      };
    },

    METHOD_WEB_VEW_DID_APPEAR: function(options){
      defaultCallback[METHOD_WEB_VEW_DID_APPEAR] = function(params) {
        options.callback(params);
      };
    }
  };

  // defaultFn.callback会调用的不同的Callback
  var defaultCallback = {};

  // defaultFn.callback会调用的不同的Handler
  var defaultHandler = {
    h5_init_finished: function(options){
      if (typeof defaultCallback[METHOD_ENTRY] === 'function') {
        defaultCallback[METHOD_ENTRY](options);
      }
    },

    non_member_login: function(options){
      if (typeof defaultCallback[METHOD_NON_MEMBER_LOGIN] === 'function') {
        defaultCallback[METHOD_NON_MEMBER_LOGIN](options);
      }
    },

    locate: function(options){
      if(typeof defaultCallback[METHOD_LOCATE] === 'function'){
        defaultCallback[METHOD_LOCATE](options);
      }
    },

    member_login: function (options) {
      if(typeof defaultCallback[METHOD_MEMBER_LOGIN] === 'function'){
        defaultCallback[METHOD_MEMBER_LOGIN](options);
      }
    },

    back: function(){
      if(typeof defaultCallback[METHOD_BACK] === 'function'){
        defaultCallback[METHOD_BACK]();
      }
    },

    commit: function(){
      if(typeof defaultCallback[METHOD_COMMIT] === 'function'){
        defaultCallback[METHOD_COMMIT]();
      }
    },

    cityChoose: function () {
      if (typeof defaultCallback[METHOD_CITY_CHOOSE] === 'function') {
        defaultCallback[METHOD_CITY_CHOOSE]();
      }
    },

    init_member_H5_info: function (options) {
      if(typeof defaultCallback[METHOD_INIT] === 'function'){
        defaultCallback[METHOD_INIT](options);
      }
    },

    member_register: function(){
      if(typeof defaultCallback[METHOD_REGISTER] === 'function'){
        defaultCallback[METHOD_REGISTER]();
      }
    },

    web_view_finished_load: function(){
      if(typeof defaultCallback[METHOD_WEB_VIEW_FINISHED_LOAD] === 'function'){
        defaultCallback[METHOD_WEB_VIEW_FINISHED_LOAD]();
      }
    },

    become_active: function(){
      if(typeof defaultCallback[METHOD_BECOME_ACTIVE] === 'function'){
        defaultCallback[METHOD_BECOME_ACTIVE]();
      }
    },

    member_auto_login: function (options) {
      if (typeof defaultCallback[METHOD_AUTO_LOGIN] === 'function') {
        defaultCallback[METHOD_AUTO_LOGIN](options);
      }
    },

    check_app_install_status: function (options) {
      if (typeof defaultCallback[METHOD_CHECK_APP_INSTALL] === 'function') {
        defaultCallback[METHOD_CHECK_APP_INSTALL](options);
      }
    },

    app_h5_need_refresh: function (options) {
      if (typeof defaultCallback[METHOD_H5_NEED_REFRESH] === 'function') {
        defaultCallback[METHOD_H5_NEED_REFRESH](options);
      }
    },

    read_copied_string_from_clipboard: function (options) {
      if (typeof defaultCallback[METHOD_READ_FROM_CLIPBOARD] === 'function') {
        defaultCallback[METHOD_READ_FROM_CLIPBOARD](options);
      }
    },

    download_data: function (options) {
      if (typeof defaultCallback[METHOD_DOWNLOAD_DATA] === 'function') {
        defaultCallback[METHOD_DOWNLOAD_DATA](options);
      }
    },

    base64_encode: function (options) {
      if (typeof defaultCallback[METHOD_ENCRYPT_BASE64] === 'function') {
        defaultCallback[METHOD_ENCRYPT_BASE64](options);
      }
    },

    send_h5_pipe_request: function (options) {
      if (typeof defaultCallback[METHOD_SEND_H5_PIPE_REQUEST] === 'function') {
        defaultCallback[METHOD_SEND_H5_PIPE_REQUEST](options);
      }
    },

    send_http_pipe_request: function (options) {
      if (typeof defaultCallback[METHOD_SEND_HTTP_PIPE_REQUEST] === 'function') {
        defaultCallback[METHOD_SEND_HTTP_PIPE_REQUEST](options);
      }
    },

    check_pay_app_install_status: function (options) {
      if (typeof defaultCallback[METHOD_CHECK_PAY_APP_INSTALL_STATUS] === 'function') {
        defaultCallback[METHOD_CHECK_PAY_APP_INSTALL_STATUS](options);
      }
    },

    check_file_exist: function(options) {
      if (typeof defaultCallback[METHOD_CHECK_FILE_EXIST] === 'function') {
        defaultCallback[METHOD_CHECK_FILE_EXIST](options);
      }
    },

    delete_file: function(options) {
      if (typeof defaultCallback[METHOD_DELETE_FILE] === 'function') {
        defaultCallback[METHOD_DELETE_FILE](options);
      }
    },

    get_current_sandbox_name: function(options) {
      if (typeof defaultCallback[METHOD_GET_CURRENT_SANDBOX_NAME] === 'function') {
        defaultCallback[METHOD_GET_CURRENT_SANDBOX_NAME](options);
      }
    },

    get_file_size: function(options) {
      if (typeof defaultCallback[METHOD_GET_FILE_SIZE] === 'function') {
        defaultCallback[METHOD_GET_FILE_SIZE](options);
      }
    },

    // @notation 明天确认
    make_dir: function(options) {
      if (typeof defaultCallback[METHOD_MAKE_DIR] === 'function') {
        defaultCallback[METHOD_MAKE_DIR](options);
      }
    },

    read_text_from_file: function(options) {
      if (typeof defaultCallback[METHOD_READ_TEXT_FROM_FILE] === 'function') {
        defaultCallback[METHOD_READ_TEXT_FROM_FILE](options);
      }
    },

    write_text_to_file: function(options) {
      if (typeof defaultCallback[METHOD_WRITE_TEXT_TO_FILE] === 'function') {
        defaultCallback[METHOD_WRITE_TEXT_TO_FILE](options);
      }
    },

    web_view_finished_load: function(options) {
      if (typeof defaultCallback[METHOD_WEB_VEW_DID_APPEAR] === 'function') {
        defaultCallback[METHOD_WEB_VEW_DID_APPEAR](options);
      }
    },
	
	web_view_did_appear: function(options) {
      if (typeof defaultCallback[METHOD_WEB_VEW_DID_APPEAR] === 'function') {
        defaultCallback[METHOD_WEB_VEW_DID_APPEAR](options);
      }
    }
  };

  // 定义需要绑定在window上的方法
  var defaultFn = {
    callback: function (param) {
      if (appLock) return;

      var options = param;
      if (typeof(param) === "string") {
        try{
          options = JSON.parse(window.decodeURIComponent(param));
        }catch(e){
          setTimeout(function() {console.error('参数错误');}, 0);
        }
      }

      // document.activeElement.blur();

      if(typeof defaultHandler[options.tagname] === 'function'){
        defaultHandler[options.tagname](options.param);
        return true;
      }
    }
  };

  var _registerFn = function(facade){
    for(var key in defaultFn){
      facade[key] = facade[key] || defaultFn[key];
    }
  };

  Facade.init = function(){
    var app = window.app = {};
    _registerFn(app);
  };

  Facade.register= function(options){
    if (typeof defaultRegisterHandler[options.tagname] === 'function'){
      defaultRegisterHandler[options.tagname](options);
    }
  };

  Facade.request = function(options){

    var methods = {

      // 5.2支持初始化
      METHOD_INIT: function(options){
        Facade.register({ tagname: Facade.METHOD_INIT, callback: options.callback });
        CtripUtil.app_init_member_H5_info();
      },

      // 5.1支持初始化
      // @deprecated
      METHOD_ENTRY: function (options) {
        return;
        // Facade.register({tagname: Facade.METHOD_ENTRY, callback: options.callback});
        // CtripUtil.app_entry();
      },

      METHOD_MEMBER_LOGIN: function(options){
        Facade.register({tagname: Facade.METHOD_MEMBER_LOGIN, callback: options.callback});
        CtripUser.app_member_login();
      },

      METHOD_NON_MEMBER_LOGIN: function(options){
        Facade.register({tagname: Facade.METHOD_NON_MEMBER_LOGIN, callback: options.callback});
        CtripUser.app_non_member_login();
      },

      METHOD_AUTO_LOGIN: function(options){
        Facade.register({tagname: Facade.METHOD_AUTO_LOGIN, callback: options.callback});
        CtripUser.app_member_auto_login();
      },

      METHOD_REGISTER: function(options){
        Facade.register({tagname: Facade.ETHOD_REGISTER, callback: options.callback});
        CtripUser.app_member_register();
      },

      METHOD_LOCATE: function(options){
        Facade.register({ tagname: Facade.METHOD_LOCATE, success: options.success, error: options.error });
        var async = true;
        if (options.isAsync) {
          async = options.isAsync;
        }
        CtripUtil.app_locate(async);
      },

      METHOD_REFRESH_NAV_BAR: function(options){
        // @deprecated
        // Facade.register({tagname: Facade.METHOD_REFRESH_NAV_BAR, callback: options.callback});
        // CtripUtil.app_refresh_nav_bar(options.config);

        CtripBar.app_refresh_nav_bar(options.config);
      },

      METHOD_CALL_PHONE: function(options){
        CtripUtil.app_call_phone(options.tel);
      },

      METHOD_BACK_TO_HOME: function(options){
        CtripUtil.app_back_to_home();
      },

      // @deprecated
      METHOD_BACK_TO_BOOK_CAR: function(options){
        app_back_to_book_car();
      },

      METHOD_LOG_EVENT: function(options){
        CtripUtil.app_log_event(options.event_name);
      },

      METHOD_CALL_SERVICE_CENTER: function(){
        //CtripUtil.app_call_service_center();
        CtripUtil.app_call_phone();
      },

      METHOD_BACK_TO_LAST_PAGE: function (options) {
        var param = options.param || '';
        CtripUtil.app_back_to_last_page(param);
      },

      METHOD_GO_TO_BOOK_CAR_FINISHED_PAGE: function (options) {
        CtripUtil.app_go_to_book_car_finished_page(options.url);
      },

      METHOD_GO_TO_HOTEL_DETAIL: function (options) {
        CtripUtil.app_go_to_hotel_detail(options.hotelId, options.hotelName, options.cityId, options.isOverSea);
      },

      METHOD_OPEN_URL: function (options) {
        var title = options.title || '';
        CtripUtil.app_open_url(options.openUrl, options.targetMode, title);
      },

      METHOD_CHECK_UPDATE: function (options) {
        CtripUtil.app_check_update();
      },

      METHOD_RECOMMEND_APP_TO_FRIEND: function () {
        CtripUtil.app_recommend_app_to_friends();
      },

      METHOD_ADD_WEIXIN_FRIEND: function () {
        CtripUtil.app_add_weixin_friend();
      },

      METHOD_CROSS_DOMAIN_HREF: function (options) {
        CtripUtil.app_cross_domain_href(options.moduleType, options.anchor, options.param);
      },

      METHOD_SHOW_NEWEST_INTRODUCTION: function (options) {
        CtripUtil.app_show_newest_introduction();
      },

      METHOD_CHECK_APP_INSTALL: function (options) {
        Facade.register({ tagname: Facade.METHOD_CHECK_APP_INSTALL, callback: options.callback });
        CtripUtil.app_check_app_install_status(options.url, options.package);
      },

      METHOD_CROSS_JUMP: function (options) {
        CtripUtil.app_cross_package_href(options.path, options.param);
      },

      METHOD_REFRESH_NATIVE: function (options) {
        CtripUtil.app_refresh_native_page(options.package, options.json);
      },

      METHOD_READ_FROM_CLIPBOARD: function (options) {
        // callback(key{string})
        Facade.register({ tagname: Facade.METHOD_READ_FROM_CLIPBOARD, callback: options.callback });
        CtripUtil.app_read_copied_string_from_clipboard();
      },

      METHOD_COPY_TO_CLIPBOARD: function (options) {
        CtripUtil.app_copy_string_to_clipboard(options.content);
      },

      // @imageUrl    将要复制的文字
      // @text        需要分享的文字
      METHOD_SHARE_TO_VENDOR: function (options) {
        //CtripUtil.app_share_to_third_party_platform(options.imgUrl, options.imgCode, options.text);
        CtripUtil.app_call_system_share(options.imgUrl, options.text);
      },

      METHOD_DOWNLOAD_DATA: function (options) {
        Facade.register({ tagname: Facade.METHOD_DOWNLOAD_DATA, callback: options.callback });
        CtripUtil.app_download_data(options.url, options.suffix);
      },

      METHOD_NATIVE_LOG: function (options) {
        var sign = window.localStorage.getItem('isPreProduction');
        if (sign && sign !== '') {
          CtripTool.app_log('@[Wireless H5] '+options.log, options.result);
        }
      },

      METHOD_ENCRYPT_BASE64: function (options) {
        Facade.register({ tagname: Facade.METHOD_ENCRYPT_BASE64, callback: options.callback });
        CtripEncrypt.app_base64_encode(options.info);
      },

      METHOD_SEND_H5_PIPE_REQUEST: function (options) {
        Facade.register({ tagname: Facade.METHOD_SEND_H5_PIPE_REQUEST, callback: options.callback });
        CtripUtil.app_send_H5_pipe_request(options.serviceCode, options.header, options.data, options.sequenceId);
      },

      METHOD_SEND_HTTP_PIPE_REQUEST: function (options) {
        Facade.register({ tagname: Facade.METHOD_SEND_HTTP_PIPE_REQUEST, callback: options.callback });
        CtripUtil.app_send_HTTP_pipe_request(options.target, options.methods, options.header, options.queryData, options.retryInfo, options.sequenceId);
      },

      METHOD_ABORT_HTTP_PIPE_REQUEST: function(options) {
        CtripPipe.app_abort_HTTP_pipe_request(options.sequenceId);
      },

      METHOD_CHECK_PAY_APP_INSTALL_STATUS: function (options) {
        Facade.register({ tagname: Facade.METHOD_CHECK_PAY_APP_INSTALL_STATUS, callback: options.callback });
        CtripPay.app_check_pay_app_install_status();
      },

      METHOD_OPEN_PAY_APP_BY_URL: function (options) {
        CtripPay.app_open_pay_app_by_url(options.payAppName, options.payURL, options.successRelativeURL, options.detailRelativeURL);
      },

      METHOD_SET_NAVBAR_HIDDEN: function(options) {
        CtripBar.app_set_navbar_hidden(options.isNeedHidden);
      },

      METHOD_SET_TOOLBAR_HIDDEN: function(options) {
        CtripBar.app_set_toolbar_hidden(options.isNeedHidden);
      },

      /**
       * @description 检查文件是否存在
       * @param options.tagname {string} 回调的Tagname
       * @param options.callback {function} 回调函数对象
       * @param options.fileName {string} 需要读取文件的文件名
       * @param options.relativeFilePath {string} 需要读取文件大小的文件相对路径，需要调用app_get_current_sandbox_name获取sandbox的名字+路径
       */
      METHOD_CHECK_FILE_EXIST: function(options){
        Facade.register({tagname: Facade.METHOD_CHECK_FILE_EXIST, callback: options.callback });
        CtripFile.app_check_file_exist(options.fileName, options.relativeFilePath);
      },

      /**
       * @description 删除文件
       * @param options.tagname {string} 回调的Tagname
       * @param options.callback {function} 回调函数对象
       * @param options.fileName {string} 需要读取文件的文件名
       * @param options.relativeFilePath {string} 需要读取文件大小的文件相对路径，需要调用app_get_current_sandbox_name获取sandbox的名字+路径
       */
      METHOD_DELETE_FILE: function(options) {
        Facade.register({tagname: Facade.METHOD_DELETE_FILE, callback: options.callback});
        CtripFile.app_delete_file(options.fileName, options.relativeFilePath);
      },

      /**
       * @description 获取当前web页面的sandbox目录，在webapp/wb_cache/xxxx/目录下xxxx即为当前sandbox的名字
       * @param options.tagname {string} 回调的Tagname
       * @param options.callback {function} 回调函数对象
       */
      METHOD_GET_CURRENT_SANDBOX_NAME: function(options) {
        Facade.register({ tagname: Facade.METHOD_GET_CURRENT_SANDBOX_NAME, callback: options.callback});
        CtripFile.app_get_current_sandbox_name();
      },

      /**
       * @description 获取文件大小
       * @param options.tagname {string} 回调的Tagname
       * @param options.callback {function} 回调函数对象
       * @param options.fileName {string} 需要读取文件的文件名
       * @param options.relativeFilePath {string} 需要读取文件大小的文件相对路径，需要调用app_get_current_sandbox_name获取sandbox的名字+路径
       */
      METHOD_GET_FILE_SIZE: function(options) {
        Facade.register({tagname: Facade.METHOD_GET_FILE_SIZE, callback: callback});
        CtripFile.app_get_file_size(options.fileName, options.relativeFilePath);
      },


      /**
       * @description 创建文件夹。可以指定文件名，或者相对路径
       * @param options.tagname {string} 回调的Tagname
       * @param options.callback {function} 回调函数对象
       * @param options.dirname {string} 需要创建的文件夹路径
       * @param options.relativeFilePath {string} 需要读取文件大小的文件相对路径，需要调用app_get_current_sandbox_name获取sandbox的名字+路径
       */
      METHOD_MAKE_DIR: function(options) {
        Facade.register({tagname: Facade.METHOD_MAKE_DIR, callback: callback});
        CtripFile.app_make_dir(options.dirname, options.relativeFilePath);
      },

      /**
       * @description 读取文本文件内容，UTF-8编码。可以指定文件名，或者相对路径
       * @param options.tagname {string} 回调的Tagname
       * @param options.callback {function} 回调函数对象
       * @param options.fileName {string} 需要读取文件的文件名
       * @param options.relativeFilePath {string} 需要读取文件大小的文件相对路径，需要调用app_get_current_sandbox_name获取sandbox的名字+路径
       */
      METHOD_READ_TEXT_FROM_FILE: function(options){
        Facade.register({tagname: Facade.METHOD_READ_TEXT_FROM_FILE, callback: callback});
        CtripFile.app_read_text_from_file(options.fileName , options.relativeFilePath);
      },

      /**
       * @description 写内容到文件
       * @param options.text {string} 写到文件的内容
       * @param options.filename {string} 需要写入文件的文件名
       * @param options.relativeFilePath {string } 需要读取文件大小的文件相对路径，需要调用app_get_current_sandbox_name获取sandbox的名字+路径
       * @param options.isAppend {boolean} 是否是将当前文件append到已有文件
       */
      METHOD_WRITE_TEXT_TO_FILE: function(options){
        Facade.register({tagname: Facade.METHOD_WRITE_TEXT_TO_FILE, callback: callback});
        CtripFile.app_write_text_to_file(options.text, options.fileName, options.relativeFilePath, options.isAppend);
      },

      /**
       * @param options.url {string} "http://pages.ctrip.com/adv.html?title=标题xxx"
       */
      METHOD_OPEN_ADV_PAGE: function(options) {
        CtripUtil.app_open_adv_page(options.url);
      }
    };

    methods[options.name](options);
  };

  Facade.getOpenUrl = function(options){

    //var head = 'ctrip://wireless/'+ options.module+'?';
    var url = 'ctrip://wireless/' + options.module + '?';

    // 对参数进行拼接，拼接成url
    _.each(options.param, function (value, key, list) {
      url += (key + '=' + value + '&');
    });

    // 去掉最后一个&
    if (url[url.length -1] === '&') {
      url = url.slice(0, url.length-1);
    }

    //window.location.href = head;
    return url;
  };

  return Facade;

});