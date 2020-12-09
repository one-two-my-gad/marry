require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(88);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_15fba8d2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(95);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(89)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15fba8d2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_15fba8d2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15fba8d2", Component.options)
  } else {
    hotAPI.reload("data-v-15fba8d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 89:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_indexSwiper__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_js_h_tools__ = __webpack_require__(10);
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



var audioCtx = wx.createInnerAudioContext();
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Index',
  components: {
    IndexSwiper: __WEBPACK_IMPORTED_MODULE_0_components_indexSwiper__["a" /* default */]
  },
  data: function data() {
    return {
      isPlay: true
    };
  },
  onShow: function onShow() {
    var that = this;
    that.isPlay = true;
    // 音乐
    audioCtx.src = 'cloud://bertlearning-62870c.6265-bertlearning-62870c/music/yudao.mp3';
    audioCtx.autoplay = true;
  },


  methods: {
    audioPlay: function audioPlay() {
      var that = this;
      if (that.isPlay) {
        audioCtx.pause();
        that.isPlay = false;
        __WEBPACK_IMPORTED_MODULE_1__common_js_h_tools__["a" /* default */].showToast('您已暂停音乐播放~');
      } else {
        audioCtx.play();
        that.isPlay = true;
        __WEBPACK_IMPORTED_MODULE_1__common_js_h_tools__["a" /* default */].showToast('背景音乐已开启~');
      }
    }
  },

  // 自定义转发内容
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: '自定义分享内容',
      path: '/pages/index/main',
      imageUrl: 'https://img-blog.csdnimg.cn/20190918091410914.gif'
    };
  }
});

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_indexSwiper_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_90205a4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_indexSwiper_vue__ = __webpack_require__(94);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(92)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-90205a4e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_indexSwiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_90205a4e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_indexSwiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/indexSwiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] indexSwiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90205a4e", Component.options)
  } else {
    hotAPI.reload("data-v-90205a4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 93:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'IndexSwiper'
});

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "autoplay": true,
      "circular": true,
      "current": "0",
      "vertical": true
    }
  }, [_c('swiper-item', {
    staticClass: "item",
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('img', {
    staticClass: "slide-image",
    attrs: {
      "mode": "aspectFill",
      "lazy-load": "true",
      "src": "cloud://test1-4gqpf0yy03d701f7.7465-test1-4gqpf0yy03d701f7-1304451305/image/5.jpg"
    }
  })])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-90205a4e", esExports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('div', {
    staticClass: "bg-swiper"
  }, [_c('index-swiper', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('img', {
    staticClass: "inv",
    attrs: {
      "src": "../../../static/images/inv.png"
    }
  }), _vm._v(" "), (_vm.isPlay) ? _c('div', {
    staticClass: "bg_music",
    attrs: {
      "eventid": '1_1'
    },
    on: {
      "tap": _vm.audioPlay
    }
  }, [_c('img', {
    staticClass: "musicImg music_icon",
    attrs: {
      "src": "../../../static/images/music_icon.png"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "music_play pauseImg",
    attrs: {
      "src": "../../../static/images/music_play.png"
    }
  })]) : _c('div', {
    staticClass: "bg_music",
    attrs: {
      "eventid": '1_0'
    },
    on: {
      "tap": _vm.audioPlay
    }
  }, [_c('img', {
    staticClass: "musicImg",
    attrs: {
      "src": "../../../static/images/music_icon.png"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "music_play playImg",
    attrs: {
      "src": "../../../static/images/music_play.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "info",
    attrs: {
      "animation": _vm.animationData
    }
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h1', [_vm._v("李凯延 "), _c('span', [_vm._v("❤")]), _vm._v(" 金小悠")]), _vm._v(" "), _c('p', [_vm._v("谨定于 2020年12月26日（星期六）晚上18:00")]), _vm._v(" "), _c('p', [_vm._v("农历 十一月十二日 晚上六点 举办百日宴")]), _vm._v(" "), _c('p', [_vm._v("席设：今成酒楼")]), _vm._v(" "), _c('p', [_vm._v("地址：佛山市顺德区新丰西路与荣阳路交叉路口西侧")]), _vm._v(" "), _c('img', {
    staticClass: "img_footer",
    attrs: {
      "src": "../../../static/images/we.png"
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-15fba8d2", esExports)
  }
}

/***/ })

},[87]);
//# sourceMappingURL=main.js.map