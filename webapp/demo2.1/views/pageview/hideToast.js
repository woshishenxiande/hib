define(function(){return"﻿﻿\r\n\r\n\r\n<script type=\"text/lizard-config\">\r\n{\r\n  url_schema: '/pageview/hidexToast',\r\n  models: {\r\n    apis: [],\r\n    filter: function(datas) {\r\n      return {};\r\n    }\r\n  },\r\n\r\n  view:{\r\n    viewport: Lizard.T(\"viewportTmpl\")\r\n  },\r\n  viewName: 'hideToast',\r\n  controller: 'webresource/controllers/pageview/hideToast.js'\r\n}\r\n</script>\r\n\r\n<script id=\"viewportTmpl\" type=\"text/lizard-template\">\r\n<h2 class=\"guide-title\">实例展示</h2>\r\n<p></p>\r\n<span class=\"btn-primary js-toast-hide\">三秒关闭</span>\r\n</script>\r\n"});