"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_dashboard_components_core_AppBar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/dashboard/components/core/AppBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/dashboard/components/core/AppBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuetify/lib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
// Components
 // Utilities


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DashboardCoreAppBar',
  components: {
    AppBarItem: {
      render: function render(h) {
        var _this = this;

        return h(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuetify/lib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          scopedSlots: {
            "default": function _default(_ref) {
              var hover = _ref.hover;
              return h(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuetify/lib'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                attrs: _this.$attrs,
                "class": {
                  'black--text': !hover,
                  'white--text secondary elevation-12': hover
                },
                props: _objectSpread({
                  activeClass: '',
                  dark: hover,
                  link: true
                }, _this.$attrs)
              }, _this.$slots["default"]);
            }
          }
        });
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      notifications: ['Mike John Responded to your email', 'You have 5 new tasks', 'You\'re now friends with Andrew', 'Another Notification', 'Another one']
    };
  },
  computed: _objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['drawer'])),
  methods: _objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    setDrawer: 'SET_DRAWER'
  }))
});

/***/ }),

/***/ "./resources/js/dashboard/components/core/AppBar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/dashboard/components/core/AppBar.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppBar_vue_vue_type_template_id_d472c4bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar.vue?vue&type=template&id=d472c4bc& */ "./resources/js/dashboard/components/core/AppBar.vue?vue&type=template&id=d472c4bc&");
/* harmony import */ var _AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBar.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/components/core/AppBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppBar_vue_vue_type_template_id_d472c4bc___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppBar_vue_vue_type_template_id_d472c4bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/components/core/AppBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/components/core/AppBar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/dashboard/components/core/AppBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/dashboard/components/core/AppBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/components/core/AppBar.vue?vue&type=template&id=d472c4bc&":
/*!******************************************************************************************!*\
  !*** ./resources/js/dashboard/components/core/AppBar.vue?vue&type=template&id=d472c4bc& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_template_id_d472c4bc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_template_id_d472c4bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_template_id_d472c4bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppBar.vue?vue&type=template&id=d472c4bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/dashboard/components/core/AppBar.vue?vue&type=template&id=d472c4bc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/dashboard/components/core/AppBar.vue?vue&type=template&id=d472c4bc&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/dashboard/components/core/AppBar.vue?vue&type=template&id=d472c4bc& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app-bar",
    {
      attrs: {
        id: "app-bar",
        absolute: "",
        app: "",
        color: "transparent",
        flat: "",
        height: "75",
      },
    },
    [
      _c(
        "v-btn",
        {
          staticClass: "mr-3",
          attrs: { elevation: "1", fab: "", small: "" },
          on: {
            click: function ($event) {
              return _vm.setDrawer(!_vm.drawer)
            },
          },
        },
        [
          _vm.value
            ? _c("v-icon", [_vm._v("\n      mdi-view-quilt\n    ")])
            : _c("v-icon", [_vm._v("\n      mdi-dots-vertical\n    ")]),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-toolbar-title", {
        staticClass: "hidden-sm-and-down font-weight-light",
        domProps: { textContent: _vm._s(_vm.$route.name) },
      }),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c("v-text-field", {
        staticStyle: { "max-width": "165px" },
        attrs: {
          label: _vm.$t("search"),
          color: "secondary",
          "hide-details": "",
        },
        scopedSlots: _vm._u(
          [
            _vm.$vuetify.breakpoint.mdAndUp
              ? {
                  key: "append-outer",
                  fn: function () {
                    return [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mt-n2",
                          attrs: { elevation: "1", fab: "", small: "" },
                        },
                        [_c("v-icon", [_vm._v("mdi-magnify")])],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                }
              : null,
          ],
          null,
          true
        ),
      }),
      _vm._v(" "),
      _c("div", { staticClass: "mx-3" }),
      _vm._v(" "),
      _c(
        "v-btn",
        { staticClass: "ml-2", attrs: { "min-width": "0", text: "", to: "/" } },
        [_c("v-icon", [_vm._v("mdi-view-dashboard")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-menu",
        {
          attrs: {
            bottom: "",
            left: "",
            "offset-y": "",
            origin: "top right",
            transition: "scale-transition",
          },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function (ref) {
                var attrs = ref.attrs
                var on = ref.on
                return [
                  _c(
                    "v-btn",
                    _vm._g(
                      _vm._b(
                        {
                          staticClass: "ml-2",
                          attrs: { "min-width": "0", text: "" },
                        },
                        "v-btn",
                        attrs,
                        false
                      ),
                      on
                    ),
                    [
                      _c(
                        "v-badge",
                        {
                          attrs: { color: "red", overlap: "", bordered: "" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "badge",
                                fn: function () {
                                  return [_c("span", [_vm._v("5")])]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            true
                          ),
                        },
                        [_vm._v(" "), _c("v-icon", [_vm._v("mdi-bell")])],
                        1
                      ),
                    ],
                    1
                  ),
                ]
              },
            },
          ]),
        },
        [
          _vm._v(" "),
          _c("v-list", { attrs: { tile: false, nav: "" } }, [
            _c(
              "div",
              _vm._l(_vm.notifications, function (n, i) {
                return _c(
                  "app-bar-item",
                  { key: "item-" + i },
                  [
                    _c("v-list-item-title", {
                      domProps: { textContent: _vm._s(n) },
                    }),
                  ],
                  1
                )
              }),
              1
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "ml-2",
          attrs: { "min-width": "0", text: "", to: "/pages/user" },
        },
        [_c("v-icon", [_vm._v("mdi-account")])],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);