require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(46);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f6a7936e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(86);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f6a7936e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f6a7936e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/greet/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6a7936e", Component.options)
  } else {
    hotAPI.reload("data-v-f6a7936e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_js_h_tools__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_cloud__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Greet',
  data: function data() {
    return {
      userList: [],
      openId: '',
      userInfo: ''
    };
  },
  onLoad: function onLoad() {
    var that = this;
    that.getUserList();
  },

  methods: {
    // 发送祝福按钮事件
    sendGreet: function sendGreet(e) {
      var that = this;
      if (e.target.errMsg === 'getUserInfo:ok') {
        that.userInfo = e.target.userInfo;
        that.getOpenId();
      }
    },


    // 添加用户信息
    addUser: function addUser() {
      var that = this;
      var db = wx.cloud.database();
      var user = db.collection('usergreet');
      user.add({
        data: {
          user: that.userInfo
        }
      }).then(function (res) {
        var user = {
          user: that.userInfo
        };
        that.userList = that.userList.concat(user);
        __WEBPACK_IMPORTED_MODULE_0_common_js_h_tools__["a" /* default */].showToast('感谢您的祝福~');
      });
    },


    // 获取祝福用户的openID
    getOpenId: function getOpenId() {
      var that = this;
      wx.cloud.callFunction({
        name: 'login',
        data: {}
      }).then(function (res) {
        that.openId = res.result.event.userInfo.openId;
        that.getIsExist();
      });
    },


    // 已发送过祝福的用户避免二次记录祝福信息
    getIsExist: function getIsExist() {
      var that = this;
      var db = wx.cloud.database();
      var user = db.collection('usergreet');
      user.where({
        _openid: that.openId
      }).get().then(function (res) {
        if (res.data.length === 0) {
          that.addUser();
        } else {
          __WEBPACK_IMPORTED_MODULE_0_common_js_h_tools__["a" /* default */].showToast('您的祝福已经收到啦~');
        }
      });
    },


    // 获取云数据库中存储的用户列表
    getUserList: function getUserList() {
      var that = this;
      wx.showNavigationBarLoading();
      __WEBPACK_IMPORTED_MODULE_1__service_cloud__["a" /* default */].get('usergreet').then(function (res) {
        if (res.errMsg === 'collection.get:ok') {
          that.userList = res.data;
          wx.hideNavigationBarLoading();
        }
      });
    }
  },

  // 分享按钮事件
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: '自定义分享内容',
      path: '/pages/index/main',
      imageUrl: 'https://img-blog.csdnimg.cn/20190918091410914.gif'
    };
  }
});

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "greet"
  }, [_c('image', {
    staticClass: "head",
    attrs: {
      "src": "cloud://test1-4gqpf0yy03d701f7.7465-test1-4gqpf0yy03d701f7-1304451305/image/giphy.gif"
    }
  }), _vm._v(" "), _c('scroll-view', {
    staticClass: "box",
    attrs: {
      "scroll-y": ""
    }
  }, _vm._l((_vm.userList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('image', {
      attrs: {
        "src": item.user.avatarUrl
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.user.nickName))])], 1)
  })), _vm._v(" "), _c('p', {
    staticClass: "count"
  }, [_vm._v("已收到" + _vm._s(_vm.userList.length) + "位好友送来的祝福")]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('button', {
    staticClass: "left",
    attrs: {
      "lang": "zh_CN",
      "open-type": "getUserInfo",
      "eventid": '2_0'
    },
    on: {
      "getuserinfo": _vm.sendGreet
    }
  }, [_vm._v("送上祝福")]), _vm._v(" "), _c('button', {
    staticClass: "right",
    attrs: {
      "open-type": "share"
    }
  }, [_vm._v("分享喜悦")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f6a7936e", esExports)
  }
}

/***/ })

},[45]);
//# sourceMappingURL=main.js.map