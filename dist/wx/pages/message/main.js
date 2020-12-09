require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(102);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0fc37c87_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(117);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0fc37c87"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0fc37c87_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/message/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0fc37c87", Component.options)
  } else {
    hotAPI.reload("data-v-0fc37c87", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_video__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_form__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_formlist__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_common_js_h_tools__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_cloud__ = __webpack_require__(25);
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
  name: 'Message',
  components: {
    HVideo: __WEBPACK_IMPORTED_MODULE_0_components_video__["a" /* default */],
    HForm: __WEBPACK_IMPORTED_MODULE_1_components_form__["a" /* default */],
    HFormlist: __WEBPACK_IMPORTED_MODULE_2_components_formlist__["a" /* default */]
  },
  data: function data() {
    return {
      isOpen: false,
      desc: '',
      messageList: [],
      page: 0,
      loadTxt: '加载中...',
      isMore: true,
      openId: '',
      userInfo: '',
      isForm: false,
      isVideo: false,
      isFormlist: false,
      formList: []
    };
  },
  onLoad: function onLoad() {
    var that = this;
    that.isVideo = false;
    that.isForm = false;
    that.isFormlist = false;
    that.getMessageList();
  },
  onReachBottom: function onReachBottom(e) {
    if (!this.isMore) {
      return false;
    }
    this.getMessageList();
  },

  methods: {
    toMessage: function toMessage(e) {
      var that = this;
      if (e.target.errMsg === 'getUserInfo:ok') {
        that.userInfo = e.target.userInfo;
        that.isOpen = true;
        that.getOpenId();
      }
    },
    cancel: function cancel() {
      var that = this;
      that.isOpen = false;
    },
    sendMessage: function sendMessage() {
      var that = this;
      if (that.desc) {
        var db = wx.cloud.database();
        var message = db.collection('msg');
        message.add({
          data: {
            userMsg: that.desc,
            type: 'message',
            createTime: that.getNowFormatDate(),
            avatarUrl: that.userInfo.avatarUrl,
            nickName: that.userInfo.nickName
          }
        }).then(function (res) {
          that.messageList = that.messageList.concat({
            userMsg: that.desc,
            type: 'message',
            createTime: that.getNowFormatDate(),
            avatarUrl: that.userInfo.avatarUrl,
            nickName: that.userInfo.nickName
          });
          that.isOpen = false;
          that.desc = '';
          __WEBPACK_IMPORTED_MODULE_3_common_js_h_tools__["a" /* default */].showToast('感谢您的留言~');
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_3_common_js_h_tools__["a" /* default */].showToast('说点什么吧~');
      }
    },
    getNowFormatDate: function getNowFormatDate() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      var hh = now.getHours();
      var mm = now.getMinutes();
      var ss = now.getSeconds();
      var clock = year + '-';
      if (month < 10) {
        clock += '0';
      }
      clock += month + '-';
      if (day < 10) {
        clock += '0';
      }
      clock += day + ' ';
      if (hh < 10) {
        clock += '0';
      }
      clock += hh + ':';
      if (mm < 10) {
        clock += '0';
      }
      clock += mm + ':';
      if (ss < 10) {
        clock += '0';
      }
      clock += ss;
      return clock;
    },
    getMessageList: function getMessageList() {
      var that = this;
      wx.showNavigationBarLoading();
      __WEBPACK_IMPORTED_MODULE_4__service_cloud__["a" /* default */].get('msg', that.page).then(function (res) {
        if (res.errMsg === 'collection.get:ok') {
          if (res.data.length <= 0) {
            that.isMore = false;
            that.loadTxt = '没有更多了';
          } else {
            that.messageList = that.messageList.concat(res.data);
            that.messageList.reverse();
            that.page++;
            if (res.data.length < 10) {
              that.isMore = false;
              that.loadTxt = '没有更多了';
            }
          }
          wx.hideNavigationBarLoading();
        }
      });
    },
    toForm: function toForm() {
      var that = this;
      that.isForm = true;
    },
    closeForm: function closeForm() {
      var that = this;
      that.isForm = false;
    },
    addUser: function addUser() {
      var that = this;
      var db = wx.cloud.database();
      var user = db.collection('usergreet');
      user.add({
        data: {
          user: that.userInfo
        }
      }).then(function (res) {
        console.log(res);
      });
    },
    getOpenId: function getOpenId() {
      var that = this;
      wx.cloud.callFunction({
        name: 'login',
        data: {}
      }).then(function (res) {
        that.openId = res.result.openid;
        that.getIsExist();
      });
    },
    getIsExist: function getIsExist() {
      var that = this;
      var db = wx.cloud.database();
      var user = db.collection('usergreet');
      user.where({
        _openid: that.openId
      }).get().then(function (res) {
        if (res.data.length === 0) {
          that.addUser();
        }
      });
    },
    toVideo: function toVideo() {
      var that = this;
      that.isVideo = true;
    },
    closeVideo: function closeVideo() {
      var that = this;
      that.isVideo = false;
    },
    lookList: function lookList() {
      var that = this;
      that.isFormlist = true;
      that.getFromlist();
    },
    closeFormlist: function closeFormlist() {
      var that = this;
      that.isFormlist = false;
    },
    getFromlist: function getFromlist() {
      var that = this;
      wx.showNavigationBarLoading();
      __WEBPACK_IMPORTED_MODULE_4__service_cloud__["a" /* default */].get('present').then(function (res) {
        if (res.errMsg === 'collection.get:ok') {
          that.formList = res.data;
          wx.hideNavigationBarLoading();
        }
      });
    }
  }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_video_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6bc16c2a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_video_vue__ = __webpack_require__(108);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6bc16c2a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_video_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6bc16c2a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_video_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/video.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] video.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bc16c2a", Component.options)
  } else {
    hotAPI.reload("data-v-6bc16c2a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: 'Video',
  data: function data() {
    return {
      inputValue: '',
      danmuList: []
    };
  },
  onLoad: function onLoad() {
    var that = this;
    that.getMessageList();
    that.videoContext = wx.createVideoContext('myVideo');
  },


  methods: {
    bindInputBlur: function bindInputBlur(e) {
      var that = this;
      that.inputValue = e.mp.detail.value;
    },


    bindSendDanmu: function bindSendDanmu() {
      var that = this;
      that.videoContext.sendDanmu({
        text: that.inputValue,
        color: that.getRandomColor()
      });
    },

    getRandomColor: function getRandomColor() {
      var rgb = [];
      for (var i = 0; i < 3; ++i) {
        var color = Math.floor(Math.random() * 256).toString(16);
        color = color.length === 1 ? '0' + color : color;
        rgb.push(color);
      }
      return '#' + rgb.join('');
    },
    getMessageList: function getMessageList() {
      var that = this;
      var db = wx.cloud.database();
      var message = db.collection('msg');
      message.get().then(function (res) {
        var data = res.data.reverse();
        var arr = [];
        if (data.length > 0) {
          data.forEach(function (item, index) {
            arr.push({
              text: item.desc,
              color: that.getRandomColor(),
              time: 5 + index * 2
            });
          });
          that.danmuList = arr;
        }
      });
    },
    close: function close() {
      var that = this;
      that.$emit('closeVideo');
    }
  }
});

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section"
  }, [_c('video', {
    attrs: {
      "id": "myVideo",
      "src": "cloud://test1-4gqpf0yy03d701f7.7465-test1-4gqpf0yy03d701f7-1304451305/image/12.mp4"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn-area"
  }, [_c('input', {
    attrs: {
      "placeholder": "请输入临时弹幕，真实弹幕来自留言",
      "placeholder-style": "color:#bbb",
      "eventid": '2_0'
    },
    on: {
      "blur": _vm.bindInputBlur
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '2_1'
    },
    on: {
      "tap": _vm.bindSendDanmu
    }
  }, [_vm._v("点击生成临时弹幕")]), _vm._v(" "), _c('image', {
    attrs: {
      "src": "../../static/images/close1.png",
      "eventid": '2_2'
    },
    on: {
      "tap": _vm.close
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6bc16c2a", esExports)
  }
}

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_form_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9c8b9836_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_form_vue__ = __webpack_require__(112);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(110)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9c8b9836"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_form_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9c8b9836_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_form_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9c8b9836", Component.options)
  } else {
    hotAPI.reload("data-v-9c8b9836", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 110:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_js_h_tools__ = __webpack_require__(10);
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
  name: 'Form',
  data: function data() {
    return {
      list: [{
        name: '个人出席', value: '个人出席', checked: true
      }, {
        name: '家庭出席', value: '家庭出席', checked: false
      }],
      desc: '',
      name: '',
      phone: '',
      count: '自己出席',
      phoneFlag: false
    };
  },

  methods: {
    cancel: function cancel() {
      var that = this;
      that.$emit('closeForm');
    },
    radioChange: function radioChange(e) {
      var that = this;
      that.count = e.mp.detail.value;
      that.list.forEach(function (item) {
        item.checked = item.name === that.count;
      });
    },
    submit: function submit() {
      var that = this;
      if (that.name) {
        if (that.phoneFlag) {
          that.addPresent();
        } else {
          __WEBPACK_IMPORTED_MODULE_0_common_js_h_tools__["a" /* default */].showToast('Please enter your mobile phone number');
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_common_js_h_tools__["a" /* default */].showToast('Please input your name');
      }
    },
    checkPhone: function checkPhone() {
      var that = this;
      var reg = /^(1[3-9][0-9])\d{8}$/;
      if (that.phone.length === 11) {
        if (reg.test(that.phone)) {
          that.phoneFlag = true;
        } else {
          that.phoneFlag = false;
          __WEBPACK_IMPORTED_MODULE_0_common_js_h_tools__["a" /* default */].showToast('手机号码格式不正确');
        }
      }
    },
    addPresent: function addPresent() {
      var that = this;
      var db = wx.cloud.database();
      var present = db.collection('present');
      present.add({
        data: {
          name: that.name,
          phone: that.phone,
          count: that.count,
          desc: that.desc
        }
      }).then(function (res) {
        that.name = '';
        that.phone = '';
        that.count = '个人出席';
        that.desc = '';
        that.$emit('closeForm');
      });
    }
  }
});

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form"
  }, [_c('image', {
    staticClass: "head-img",
    attrs: {
      "src": "../../static/images/green-flower.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_c('span', [_vm._v("* ")]), _vm._v("姓名\n    ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    attrs: {
      "type": "text",
      "placeholder": "怎么称呼您呢？",
      "maxlength": "6",
      "eventid": '1_0'
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_c('span', [_vm._v("* ")]), _vm._v("电话\n    ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phone),
      expression: "phone"
    }],
    attrs: {
      "type": "number",
      "placeholder": "请填写有效的手机号码",
      "maxlength": "11",
      "eventid": '1_1'
    },
    domProps: {
      "value": (_vm.phone)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.phone = $event.target.value
      }, _vm.checkPhone]
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("\n        出席人数\n    ")]), _vm._v(" "), _c('radio-group', {
    staticClass: "group",
    attrs: {
      "eventid": '1_2',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.radioChange
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('label', {
      key: index,
      staticClass: "radio"
    }, [_c('radio', {
      attrs: {
        "value": item.name,
        "checked": item.checked
      }
    }), _vm._v("\n            " + _vm._s(item.value) + "\n        ")], 1)
  })), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("\n        赴宴人员\n    ")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.desc),
      expression: "desc"
    }],
    staticClass: "desc",
    attrs: {
      "focus": "true",
      "maxlength": "80",
      "placeholder": "请填写您会携带的眷属",
      "name": "textarea",
      "placeholder-style": "color:#ccc;",
      "eventid": '1_3'
    },
    domProps: {
      "value": (_vm.desc)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.desc = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('button', {
    staticClass: "left",
    attrs: {
      "eventid": '2_4'
    },
    on: {
      "tap": _vm.submit
    }
  }, [_vm._v("确认提交")]), _vm._v(" "), _c('button', {
    staticClass: "right",
    attrs: {
      "eventid": '2_5'
    },
    on: {
      "tap": _vm.cancel
    }
  }, [_vm._v("取消")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9c8b9836", esExports)
  }
}

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_formlist_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d34811fa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_formlist_vue__ = __webpack_require__(116);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(114)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d34811fa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_formlist_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_d34811fa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_formlist_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/formlist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] formlist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d34811fa", Component.options)
  } else {
    hotAPI.reload("data-v-d34811fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  name: 'Formlist',
  props: ['formList'],
  methods: {
    close: function close() {
      var that = this;
      that.$emit('closeFormlist');
    }
  },

  watch: {
    formList: function formList(newValue, oldValue) {
      if (newValue) {
        // console.log(newValue)
      }
    }
  }
});

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    staticClass: "formlist",
    attrs: {
      "scroll-y": ""
    }
  }, _vm._l((_vm.formList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "item-top"
    }, [_c('span', {
      staticClass: "left"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "right"
    }, [_vm._v(_vm._s(item.phone))])]), _vm._v(" "), _c('div', {
      staticClass: "item-middle"
    }, [_c('p', {
      staticClass: "address"
    }, [_c('span', [_vm._v(_vm._s(item.count))]), _vm._v(" "), (item.desc) ? _c('span', [_vm._v("人员：" + _vm._s(item.desc))]) : _vm._e()])], 1)])
  })), _vm._v(" "), _c('image', {
    attrs: {
      "src": "../../static/images/close1.png",
      "eventid": '1_0'
    },
    on: {
      "tap": _vm.close
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d34811fa", esExports)
  }
}

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_c('view', {
    staticClass: "box"
  }, [_c('p', {
    staticClass: "place"
  }), _vm._v(" "), _vm._l((_vm.messageList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('image', {
      staticClass: "left",
      attrs: {
        "src": item.avatarUrl
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "right"
    }, [_c('div', {
      staticClass: "top"
    }, [_c('span', {
      staticClass: "top-l"
    }, [_vm._v(_vm._s(item.nickName))]), _vm._v(" "), _c('span', {
      staticClass: "top-r"
    }, [_vm._v(_vm._s(item.createTime))])]), _vm._v(" "), _c('p', {
      staticClass: "con"
    }, [_vm._v(_vm._s(item.userMsg))])], 1)])
  }), _vm._v(" "), _c('view', {
    staticClass: "load-more"
  }, [(_vm.isMore) ? _c('image', {
    staticClass: "load-icon",
    attrs: {
      "src": "../../static/images/load.gif"
    }
  }) : _vm._e(), _vm._v(" "), _c('text', {
    staticClass: "load-txt"
  }, [_vm._v(_vm._s(_vm.loadTxt))])]), _vm._v(" "), _c('p', {
    staticClass: "place-end"
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('button', {
    staticClass: "left",
    attrs: {
      "lang": "zh_CN",
      "open-type": "getUserInfo",
      "eventid": '3_0'
    },
    on: {
      "getuserinfo": _vm.toMessage
    }
  }, [_vm._v("说点啥吧")]), _vm._v(" "), _c('button', {
    staticClass: "right",
    attrs: {
      "eventid": '3_1'
    },
    on: {
      "tap": _vm.toForm
    }
  }, [_vm._v("我要出席")])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isOpen),
      expression: "isOpen"
    }],
    staticClass: "dialog"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.desc),
      expression: "desc"
    }],
    staticClass: "desc",
    attrs: {
      "focus": "true",
      "maxlength": "80",
      "placeholder": "在这里输入您想要说的话",
      "name": "textarea",
      "placeholder-style": "color:#ccc;",
      "eventid": '3_2'
    },
    domProps: {
      "value": (_vm.desc)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.desc = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('button', {
    staticClass: "left",
    attrs: {
      "eventid": '4_3'
    },
    on: {
      "tap": _vm.sendMessage
    }
  }, [_vm._v("发送留言")]), _vm._v(" "), _c('button', {
    staticClass: "right",
    attrs: {
      "eventid": '4_4'
    },
    on: {
      "tap": _vm.cancel
    }
  }, [_vm._v("取消")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-dialog",
    attrs: {
      "eventid": '2_5'
    },
    on: {
      "tap": _vm.lookList
    }
  }, [_c('image', {
    attrs: {
      "src": "../../static/images/form.png"
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isForm),
      expression: "isForm"
    }],
    staticClass: "form"
  }, [_c('h-form', {
    attrs: {
      "eventid": '3_6',
      "mpcomid": '0'
    },
    on: {
      "closeForm": _vm.closeForm,
      "getFromlist": _vm.getFromlist
    }
  })], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isFormlist),
      expression: "isFormlist"
    }],
    staticClass: "form-list"
  }, [_c('h-formlist', {
    attrs: {
      "formList": _vm.formList,
      "eventid": '3_7',
      "mpcomid": '1'
    },
    on: {
      "closeFormlist": _vm.closeFormlist
    }
  })], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section"
  }, [_c('video', {
    attrs: {
      "id": "myVideo",
      "src": "cloud://test1-4gqpf0yy03d701f7.7465-test1-4gqpf0yy03d701f7-1304451305/image/12.mp4."
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0fc37c87", esExports)
  }
}

/***/ })

},[101]);
//# sourceMappingURL=main.js.map