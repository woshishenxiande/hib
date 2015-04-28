define(function(){return"﻿\r\n<script type=\"text/lizard-config\">\r\n{\r\n  url_schema: '/restful/dependent',\r\n  viewName: 'restfulDependent',\r\n  model:{\r\n    apis: [\r\n    {\r\n      name: 'api2',\r\n      url: 'http://127.0.0.1:2000/restful/detail/api2',\r\n      postdata: {\r\n        id: Lizard.P('id'),\r\n        key: Lizard.P('key')\r\n      }\r\n    },\r\n    {\r\n      name: 'api3',\r\n      url: 'http://127.0.0.1:2000/restful/detail/api3',\r\n      postdata: {\r\n        id: Lizard.P('id'),\r\n        key: Lizard.P('key')\r\n      },\r\n      //\\u63A7\\u5236api3\\u7684\\u8BF7\\u6C42\\u662F\\u5426\\u53D1\\u51FA\\uFF0C\\u8FD4\\u56DEtrue\\u662F\\u53D1\\u51FA\\u8BF7\\u6C42\r\n      suspend: function() {\r\n           var api2 = Lizard.D('api2'); //lizard.D\\u8BF7\\u6C42\\u4F9D\\u8D56\\u6A21\\u5757\\uFF0C\\u8FD4\\u56DE\\u7684\\u662Fapi2\\u7684\\u63A5\\u53E3\\u7684\\u6570\\u636E\r\n           var list = api2.list;\r\n           return list[0].room < 4; //api2\\u8BF7\\u6C42\\u5317\\u4EAC\\u7684\\u9152\\u5E97\\uFF0C\\u5982\\u679C\\u9152\\u5E97\\u6570\\u76EE\\u5C0F\\u4E8E4\\uFF0C\\u5C31\\u8BF7\\u6C42api3\r\n      }\r\n    }],\r\n    filter: function(datas) {\r\n       var list = [];\r\n       _.each(datas, function(item) {\r\n         if (!item.list) return;\r\n         item.list[0]['key'] = item.key;\r\n         list = list.concat(item.list);\r\n       });\r\n       return {\r\n         list: list\r\n       };\r\n    }\r\n  },\r\n  view:{\r\n    viewport: Lizard.T(\"viewportTmpl\")\r\n  },\r\n  controller: 'webresource/controllers/restful/dependent.js'\r\n}\r\n</script>\r\n<script id=\"viewportTmpl\" type=\"text/lizard-template\">\r\n  <div>\r\n    <ul>\r\n      <%_.each(list, function(item) {%>\r\n      <li>\r\n        key: <%=item.key%>\r\n        id: <%=item.id%>\r\n        city: <%=item.city%>\r\n      </li>\r\n      <%})%>\r\n    </ul>\r\n  </div>\r\n</script>"});