webpackJsonp([10],{

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(236)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(238)
/* template */
var __vue_template__ = __webpack_require__(239)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/page/sign/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a1b84184", Component.options)
  } else {
    hotAPI.reload("data-v-a1b84184", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(210)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 210:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(209)("0f0f26cb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a1b84184\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a1b84184\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(79)(false);
// imports


// module
exports.push([module.i, "\n.center_banner {\r\n  position: relative;\r\n  height: 100%;\r\n  min-height: 465px;\n}\n#poempic_00 {\r\n  position: absolute;\r\n  top: 69px;\r\n  left: 14.5%;\r\n  z-index: 1;\n}\n#poempic_01 {\r\n  background: url(/images/poempic_01.png) -40px 0px no-repeat;\r\n  position: absolute;\r\n  left: 4%;\r\n  z-index: 1;\r\n  width: 96%;\r\n  height: 205px;\n}\n#poempic_02 {\r\n  background: url(/images/poempic_02.png) -480px 0px no-repeat;\r\n  position: absolute;\r\n  right: 5%;\r\n  z-index: 2;\r\n  width: 495px;\r\n  height: 370px;\n}\n#poempic_03 {\r\n  background: url(/images/poempic_03.png) -780px 0px no-repeat;\r\n  position: absolute;\r\n  right: 20%;\r\n  z-index: 2;\r\n  width: 160px;\r\n  height: 160px;\n}\n#poempic_05 {\r\n  background: url(/images/poempic_05.png) -110px -375px no-repeat;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 11%;\r\n  z-index: 2;\r\n  width: 89%;\r\n  height: 124px;\n}\n#poempic_06 {\r\n  background: url(/images/poempic_06.png) -660px -50px no-repeat;\r\n  position: absolute;\r\n  bottom: 40px;\r\n  right: 40%;\r\n  z-index: 3;\r\n  width: 210px;\r\n  height: 430px;\n}\n#poempic_07 {\r\n  background: url(/images/poempic_07.png) -185px -398px no-repeat;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 18.5%;\r\n  z-index: 5;\r\n  width: 81.5%;\r\n  height: 102px;\n}\n#poempic_08 {\r\n  background: url(/images/poempic_08.png) -560px -430px no-repeat;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 55%;\r\n  z-index: 5;\r\n  width: 45%;\r\n  height: 70px;\n}\n.poem_content {\r\n  width: 300px;\r\n  height: 300px;\r\n  position: absolute;\r\n  top: 10%;\r\n  right: 13%;\r\n  z-index: 99;\r\n  color: white;\r\n  display: inline-block;\r\n  vertical-align: bottom;\r\n  text-align: center;\n}\n.content_bottom {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\n}\n.poem_title {\r\n  font-size: 16px;\r\n  font-weight: bold;\n}\n.poem_item {\r\n  font-size: 13px;\r\n  list-style-type: none;\r\n  text-align: left;\n}\n.poem_btn {\r\n  background-color: #f6c26c;\r\n  color: #002b3d;\r\n  font-size: 16px;\r\n  font-weight: 900;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

// import TopBar from "../../components/layouts/TopBar";
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SignIndex",
  created: function created() {}
});

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "center_banner" }, [
    _c("div", { staticClass: "content", attrs: { id: "poempic_00" } }),
    _vm._v(" "),
    _c("div", { staticClass: "content", attrs: { id: "poempic_01" } }),
    _vm._v(" "),
    _c("div", { staticClass: "content", attrs: { id: "poempic_02" } }),
    _vm._v(" "),
    _c("div", { staticClass: "content", attrs: { id: "poempic_03" } }),
    _vm._v(" "),
    _c("div", { staticClass: "content", attrs: { id: "poempic_05" } }),
    _vm._v(" "),
    _c("div", { staticClass: "content", attrs: { id: "poempic_06" } }),
    _vm._v(" "),
    _c("div", { staticClass: "content", attrs: { id: "poempic_07" } }),
    _vm._v(" "),
    _c("div", { staticClass: "content", attrs: { id: "poempic_08" } }),
    _vm._v(" "),
    _c("div", { staticClass: "poem_content" }, [
      _c(
        "div",
        { staticClass: "content_bottom" },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "el-button",
            { staticClass: "poem_btn", attrs: { type: "info", round: "" } },
            [_c("a", { attrs: { href: "/#/sign/draw" } }, [_vm._v("開始求籤")])]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "poem_title" }, [
      _vm._v("需要為你指點迷津嗎？"),
      _c("br"),
      _vm._v("只要虔誠的求問，就能獲得指引喔！")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "poem_item" }, [
      _c("li", [_vm._v("1.虔誠稟報您的姓名、年歲、住址、求問事項")]),
      _vm._v(" "),
      _c("li", [_vm._v("2.點選開始求籤")]),
      _vm._v(" "),
      _c("li", [_vm._v("3.擲筊請示是否為此籤")]),
      _vm._v(" "),
      _c("li", [_vm._v("4.若為聖筊則可觀看詩籤內容")]),
      _vm._v(" "),
      _c("li", [_vm._v("5.若為笑筊或陰筊則需重新求籤")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a1b84184", module.exports)
  }
}

/***/ })

});