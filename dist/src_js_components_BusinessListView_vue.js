(self["webpackChunkiheartmachakos"] = self["webpackChunkiheartmachakos"] || []).push([["src_js_components_BusinessListView_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".business-list-view__title[data-v-0fb89d8f] {\n  font-size: 1.6rem;\n  font-weight: 400;\n}\n.business-list-view__subtitle[data-v-0fb89d8f] {\n  font-size: 0.9rem;\n}\n.business-list-view__info[data-v-0fb89d8f] {\n  font-size: 0.9rem;\n}\n.business-list-view__category[data-v-0fb89d8f] {\n  background-color: #6366f1;\n}\n.business-list-view__website[data-v-0fb89d8f] {\n  font-size: 0.9rem;\n}\n", "",{"version":3,"sources":["webpack://./src/js/components/BusinessListView.vue"],"names":[],"mappings":"AACA;EACE,iBAAiB;EACjB,gBAAgB;AAAA;AAGlB;EACE,iBAAiB;AAAA;AAGnB;EACE,iBAAiB;AAAA;AAGnB;EACE,yBAAyB;AAAA;AAG3B;EACE,iBAAiB;AAAA","sourcesContent":["\r\n.business-list-view__title {\r\n  font-size: 1.6rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.business-list-view__subtitle {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.business-list-view__info {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.business-list-view__category {\r\n  background-color: #6366f1;\r\n}\r\n\r\n.business-list-view__website {\r\n  font-size: 0.9rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_useFormatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../composables/useFormatting */ "./src/js/composables/useFormatting.ts");
/* eslint-disable import/extensions */


const BusinessListModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_js_components_BusinessListModal_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./BusinessListModal.vue */ "./src/js/components/BusinessListModal.vue")));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'BusinessListView',
    components: { BusinessListModal },
    setup() {
        // Retrive the business from the parent component.
        const business = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('business');
        // Computed properties.
        const hasWebsite = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !!business.website);
        // Formatting methods.
        const { toTitle } = (0,_composables_useFormatting__WEBPACK_IMPORTED_MODULE_1__.default)();
        return { business, hasWebsite, toTitle };
    },
}));


/***/ }),

/***/ "./src/js/composables/useFormatting.ts":
/*!*********************************************!*\
  !*** ./src/js/composables/useFormatting.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFormatting)
/* harmony export */ });
function useFormatting() {
    /**
     * Convert a word/phrase to 'Title Case'.
     *
     * @param {string} value
     * @returns {string}
     *
     * @author Brian Kariuki Kiragu <bkariuki@hotmail.com>
     */
    const toTitle = (value = '') => value.split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    return { toTitle };
}


/***/ }),

/***/ "./src/js/components/BusinessListView.vue":
/*!************************************************!*\
  !*** ./src/js/components/BusinessListView.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BusinessListView_vue_vue_type_template_id_0fb89d8f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BusinessListView.vue?vue&type=template&id=0fb89d8f&scoped=true */ "./src/js/components/BusinessListView.vue?vue&type=template&id=0fb89d8f&scoped=true");
/* harmony import */ var _BusinessListView_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BusinessListView.vue?vue&type=script&lang=ts */ "./src/js/components/BusinessListView.vue?vue&type=script&lang=ts");
/* harmony import */ var _BusinessListView_vue_vue_type_style_index_0_id_0fb89d8f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css */ "./src/js/components/BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css");




;
_BusinessListView_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.render = _BusinessListView_vue_vue_type_template_id_0fb89d8f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_BusinessListView_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-0fb89d8f"
/* hot reload */
if (false) {}

_BusinessListView_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/js/components/BusinessListView.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BusinessListView_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/js/components/BusinessListView.vue?vue&type=script&lang=ts":
/*!************************************************************************!*\
  !*** ./src/js/components/BusinessListView.vue?vue&type=script&lang=ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListView_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListView_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessListView.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/js/components/BusinessListView.vue?vue&type=template&id=0fb89d8f&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/js/components/BusinessListView.vue?vue&type=template&id=0fb89d8f&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListView_vue_vue_type_template_id_0fb89d8f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListView_vue_vue_type_template_id_0fb89d8f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessListView.vue?vue&type=template&id=0fb89d8f&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=template&id=0fb89d8f&scoped=true");


/***/ }),

/***/ "./src/js/components/BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./src/js/components/BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListView_vue_vue_type_style_index_0_id_0fb89d8f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListView_vue_vue_type_style_index_0_id_0fb89d8f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListView_vue_vue_type_style_index_0_id_0fb89d8f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListView_vue_vue_type_style_index_0_id_0fb89d8f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListView_vue_vue_type_style_index_0_id_0fb89d8f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=template&id=0fb89d8f&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=template&id=0fb89d8f&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-0fb89d8f")

;(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0fb89d8f")
const _hoisted_1 = { class: "business-list-view" }
const _hoisted_2 = { class: "modal-dialog modal-fullscreen" }
const _hoisted_3 = { class: "modal-content" }
const _hoisted_4 = { class: "modal-header" }
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, null, -1 /* HOISTED */)
const _hoisted_6 = { class: "modal-body" }
const _hoisted_7 = { class: "\r\n                  business-list-view__header\r\n                  mt-3\r\n                  d-flex\r\n                  justify-content-between\r\n                " }
const _hoisted_8 = { class: "business-list-view__titles" }
const _hoisted_9 = { class: "business-list-view__title mb-1" }
const _hoisted_10 = { class: "business-list-view__subtitle" }
const _hoisted_11 = {
  key: 0,
  class: "business-list-view__website mt-2"
}
const _hoisted_12 = { class: "business-list-view__actions ms-3" }
const _hoisted_13 = { class: "business-list-view__info mt-3" }
const _hoisted_14 = { class: "\r\n                    business-list-view__category\r\n                    me-2\r\n                    px-2\r\n                    py-1\r\n                    rounded\r\n                    text-white\r\n                  " }
const _hoisted_15 = { class: "business-list-view__location" }
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_BusinessListModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BusinessListModal")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Button trigger modal "),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      type: "button",
      class: "btn btn-primary btn-circle",
      "data-bs-toggle": "modal",
      "data-bs-target": `#static-backdrop-${_ctx.business?.directoryIdx}`
    }, " View ", 8 /* PROPS */, ["data-bs-target"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "),
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, { to: "#business-views" }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        id: `static-backdrop-${_ctx.business?.directoryIdx}`,
        class: "modal fade",
        "data-bs-backdrop": "static",
        "data-bs-keyboard": "false",
        tabindex: "-1",
        "aria-labelledby": `static-backdrop-${_ctx.business?.directoryIdx}Label`,
        "aria-hidden": "true"
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal Header. "),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", {
                id: `static-backdrop-${_ctx.business?.directoryIdx}Label`,
                class: "modal-title"
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.business?.title), 9 /* TEXT, PROPS */, ["id"]),
              _hoisted_5
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal Content. "),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"business-list-view__image\">\r\n                <img\r\n                  src=\"../assets/images/local1.jpeg\"\r\n                  :alt=\"`${business?.title} image`\"\r\n                  class=\"img-fluid rounded-3\"\r\n                  loading=\"lazy\"\r\n                />\r\n              </div> "),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Titles. "),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.business?.title), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.business?.owner) + " owns this business ", 1 /* TEXT */),
                  (_ctx.hasWebsite)
                    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("h4", _hoisted_11, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
                          href: _ctx.business?.website,
                          target: "_blank"
                        }, " View their website ", 8 /* PROPS */, ["href"])
                      ]))
                    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Actions. "),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BusinessListModal)
                ])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Category. "),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.toTitle(_ctx.business?.category)), 1 /* TEXT */),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Location. "),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_15, " Located in " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.business?.city), 1 /* TEXT */)
              ])
            ])
          ])
        ])
      ], 8 /* PROPS */, ["id", "aria-labelledby"])
    ]))
  ]))
})

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListView.vue?vue&type=style&index=0&id=0fb89d8f&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b8988db0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9paGVhcnRtYWNoYWtvcy8uL3NyYy9qcy9jb21wb25lbnRzL0J1c2luZXNzTGlzdFZpZXcudnVlPzFmZjYiLCJ3ZWJwYWNrOi8vaWhlYXJ0bWFjaGFrb3MvLi9zcmMvanMvY29tcG9uZW50cy9CdXNpbmVzc0xpc3RWaWV3LnZ1ZT9mNWUzIiwid2VicGFjazovL2loZWFydG1hY2hha29zLy4vc3JjL2pzL2NvbXBvc2FibGVzL3VzZUZvcm1hdHRpbmcudHMiLCJ3ZWJwYWNrOi8vaWhlYXJ0bWFjaGFrb3MvLi9zcmMvanMvY29tcG9uZW50cy9CdXNpbmVzc0xpc3RWaWV3LnZ1ZT9lYzM3Iiwid2VicGFjazovL2loZWFydG1hY2hha29zLy4vc3JjL2pzL2NvbXBvbmVudHMvQnVzaW5lc3NMaXN0Vmlldy52dWU/ZmRmOCIsIndlYnBhY2s6Ly9paGVhcnRtYWNoYWtvcy8uL3NyYy9qcy9jb21wb25lbnRzL0J1c2luZXNzTGlzdFZpZXcudnVlIiwid2VicGFjazovL2loZWFydG1hY2hha29zLy4vc3JjL2pzL2NvbXBvbmVudHMvQnVzaW5lc3NMaXN0Vmlldy52dWU/MjExYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSx1RkFBdUYsc0JBQXNCLHFCQUFxQixHQUFHLGtEQUFrRCxzQkFBc0IsR0FBRyw4Q0FBOEMsc0JBQXNCLEdBQUcsa0RBQWtELDhCQUE4QixHQUFHLGlEQUFpRCxzQkFBc0IsR0FBRyxTQUFTLHlHQUF5RyxZQUFZLGFBQWEsS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFlBQVksS0FBSyxNQUFNLFlBQVkseURBQXlELHdCQUF3Qix1QkFBdUIsS0FBSyx1Q0FBdUMsd0JBQXdCLEtBQUssbUNBQW1DLHdCQUF3QixLQUFLLHVDQUF1QyxnQ0FBZ0MsS0FBSyxzQ0FBc0Msd0JB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QUNBO0FBQ0EsVUFBVSwySkFBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJzcmNfanNfY29tcG9uZW50c19CdXNpbmVzc0xpc3RWaWV3X3Z1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1c2luZXNzLWxpc3Qtdmlld19fdGl0bGVbZGF0YS12LTBmYjg5ZDhmXSB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5idXNpbmVzcy1saXN0LXZpZXdfX3N1YnRpdGxlW2RhdGEtdi0wZmI4OWQ4Zl0ge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcbi5idXNpbmVzcy1saXN0LXZpZXdfX2luZm9bZGF0YS12LTBmYjg5ZDhmXSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuLmJ1c2luZXNzLWxpc3Qtdmlld19fY2F0ZWdvcnlbZGF0YS12LTBmYjg5ZDhmXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2NmYxO1xcbn1cXG4uYnVzaW5lc3MtbGlzdC12aWV3X193ZWJzaXRlW2RhdGEtdi0wZmI4OWQ4Zl0ge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qcy9jb21wb25lbnRzL0J1c2luZXNzTGlzdFZpZXcudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUFBO0FBR2xCO0VBQ0UsaUJBQWlCO0FBQUE7QUFHbkI7RUFDRSxpQkFBaUI7QUFBQTtBQUduQjtFQUNFLHlCQUF5QjtBQUFBO0FBRzNCO0VBQ0UsaUJBQWlCO0FBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLmJ1c2luZXNzLWxpc3Qtdmlld19fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVzaW5lc3MtbGlzdC12aWV3X19zdWJ0aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1c2luZXNzLWxpc3Qtdmlld19faW5mbyB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1c2luZXNzLWxpc3Qtdmlld19fY2F0ZWdvcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjZmMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1c2luZXNzLWxpc3Qtdmlld19fd2Vic2l0ZSB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xyXG5pbXBvcnQgeyBjb21wdXRlZCwgZGVmaW5lQXN5bmNDb21wb25lbnQsIGRlZmluZUNvbXBvbmVudCwgaW5qZWN0IH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgSUJ1c2luZXNzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB1c2VGb3JtYXR0aW5nIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZUZvcm1hdHRpbmcnO1xyXG5cclxuY29uc3QgQnVzaW5lc3NMaXN0TW9kYWwgPSBkZWZpbmVBc3luY0NvbXBvbmVudChcclxuICAoKSA9PiBpbXBvcnQoJy4vQnVzaW5lc3NMaXN0TW9kYWwudnVlJylcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgbmFtZTogJ0J1c2luZXNzTGlzdFZpZXcnLFxyXG4gIGNvbXBvbmVudHM6IHsgQnVzaW5lc3NMaXN0TW9kYWwgfSxcclxuXHJcbiAgc2V0dXAoKSB7XHJcbiAgICAvLyBSZXRyaXZlIHRoZSBidXNpbmVzcyBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50LlxyXG4gICAgY29uc3QgYnVzaW5lc3M6IHVuZGVmaW5lZCB8IElCdXNpbmVzcyA9IGluamVjdCgnYnVzaW5lc3MnKTtcclxuXHJcbiAgICAvLyBDb21wdXRlZCBwcm9wZXJ0aWVzLlxyXG4gICAgY29uc3QgaGFzV2Vic2l0ZSA9IGNvbXB1dGVkKCgpID0+ICEhYnVzaW5lc3MhLndlYnNpdGUpO1xyXG5cclxuICAgIC8vIEZvcm1hdHRpbmcgbWV0aG9kcy5cclxuICAgIGNvbnN0IHsgdG9UaXRsZSB9ID0gdXNlRm9ybWF0dGluZygpO1xyXG5cclxuICAgIHJldHVybiB7IGJ1c2luZXNzLCBoYXNXZWJzaXRlLCB0b1RpdGxlIH07XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm1hdHRpbmcoKSB7XHJcbiAgLyoqXHJcbiAgICogQ29udmVydCBhIHdvcmQvcGhyYXNlIHRvICdUaXRsZSBDYXNlJy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICpcclxuICAgKiBAYXV0aG9yIEJyaWFuIEthcml1a2kgS2lyYWd1IDxia2FyaXVraUBob3RtYWlsLmNvbT5cclxuICAgKi9cclxuICBjb25zdCB0b1RpdGxlID0gKHZhbHVlOiBzdHJpbmcgPSAnJyk6IHN0cmluZyA9PlxyXG4gICAgdmFsdWUuc3BsaXQoJy0nKVxyXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcclxuICAgICAgLmpvaW4oJyAnKVxyXG5cclxuICByZXR1cm4geyB0b1RpdGxlIH1cclxufSIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0J1c2luZXNzTGlzdFZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBmYjg5ZDhmJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnVzaW5lc3NMaXN0Vmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQnVzaW5lc3NMaXN0Vmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL0J1c2luZXNzTGlzdFZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZiODlkOGYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuc2NyaXB0LnJlbmRlciA9IHJlbmRlclxuc2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTBmYjg5ZDhmXCJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCIwZmI4OWQ4ZlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzBmYjg5ZDhmJywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzBmYjg5ZDhmJywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQnVzaW5lc3NMaXN0Vmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZiODlkOGYmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMGZiODlkOGYnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwic3JjL2pzL2NvbXBvbmVudHMvQnVzaW5lc3NMaXN0Vmlldy52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzBdIS4vQnVzaW5lc3NMaXN0Vmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzBdIS4vQnVzaW5lc3NMaXN0Vmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYnVzaW5lc3MtbGlzdC12aWV3XCI+XHJcbiAgICA8IS0tIEJ1dHRvbiB0cmlnZ2VyIG1vZGFsIC0tPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWNpcmNsZVwiXHJcbiAgICAgIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICA6ZGF0YS1icy10YXJnZXQ9XCJgI3N0YXRpYy1iYWNrZHJvcC0ke2J1c2luZXNzPy5kaXJlY3RvcnlJZHh9YFwiXHJcbiAgICA+XHJcbiAgICAgIFZpZXdcclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDwhLS0gTW9kYWwgLS0+XHJcbiAgICA8dGVsZXBvcnQgdG89XCIjYnVzaW5lc3Mtdmlld3NcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIDppZD1cImBzdGF0aWMtYmFja2Ryb3AtJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fWBcIlxyXG4gICAgICAgIGNsYXNzPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgZGF0YS1icy1iYWNrZHJvcD1cInN0YXRpY1wiXHJcbiAgICAgICAgZGF0YS1icy1rZXlib2FyZD1cImZhbHNlXCJcclxuICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICA6YXJpYS1sYWJlbGxlZGJ5PVwiYHN0YXRpYy1iYWNrZHJvcC0ke2J1c2luZXNzPy5kaXJlY3RvcnlJZHh9TGFiZWxgXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1mdWxsc2NyZWVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8IS0tIE1vZGFsIEhlYWRlci4gLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDVcclxuICAgICAgICAgICAgICAgIDppZD1cImBzdGF0aWMtYmFja2Ryb3AtJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fUxhYmVsYFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7eyBidXNpbmVzcz8udGl0bGUgfX1cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBNb2RhbCBDb250ZW50LiAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJidXNpbmVzcy1saXN0LXZpZXdfX2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvbG9jYWwxLmpwZWdcIlxyXG4gICAgICAgICAgICAgICAgICA6YWx0PVwiYCR7YnVzaW5lc3M/LnRpdGxlfSBpbWFnZWBcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZCByb3VuZGVkLTNcIlxyXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgYnVzaW5lc3MtbGlzdC12aWV3X19oZWFkZXJcclxuICAgICAgICAgICAgICAgICAgbXQtM1xyXG4gICAgICAgICAgICAgICAgICBkLWZsZXhcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50LWJldHdlZW5cclxuICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBUaXRsZXMuIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1c2luZXNzLWxpc3Qtdmlld19fdGl0bGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImJ1c2luZXNzLWxpc3Qtdmlld19fdGl0bGUgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGJ1c2luZXNzPy50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJidXNpbmVzcy1saXN0LXZpZXdfX3N1YnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgYnVzaW5lc3M/Lm93bmVyIH19IG93bnMgdGhpcyBidXNpbmVzc1xyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8aDRcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaGFzV2Vic2l0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXNpbmVzcy1saXN0LXZpZXdfX3dlYnNpdGUgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cImJ1c2luZXNzPy53ZWJzaXRlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IHRoZWlyIHdlYnNpdGVcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIEFjdGlvbnMuIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1c2luZXNzLWxpc3Qtdmlld19fYWN0aW9ucyBtcy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXNpbmVzc0xpc3RNb2RhbCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXNpbmVzcy1saXN0LXZpZXdfX2luZm8gbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBDYXRlZ29yeS4gLS0+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzLWxpc3Qtdmlld19fY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICBtZS0yXHJcbiAgICAgICAgICAgICAgICAgICAgcHgtMlxyXG4gICAgICAgICAgICAgICAgICAgIHB5LTFcclxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZVxyXG4gICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7eyB0b1RpdGxlKGJ1c2luZXNzPy5jYXRlZ29yeSkgfX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIExvY2F0aW9uLiAtLT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnVzaW5lc3MtbGlzdC12aWV3X19sb2NhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICBMb2NhdGVkIGluIHt7IGJ1c2luZXNzPy5jaXR5IH19XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC90ZWxlcG9ydD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXHJcbmltcG9ydCB7IGNvbXB1dGVkLCBkZWZpbmVBc3luY0NvbXBvbmVudCwgZGVmaW5lQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBJQnVzaW5lc3MgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHVzZUZvcm1hdHRpbmcgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlRm9ybWF0dGluZyc7XHJcblxyXG5jb25zdCBCdXNpbmVzc0xpc3RNb2RhbCA9IGRlZmluZUFzeW5jQ29tcG9uZW50KFxyXG4gICgpID0+IGltcG9ydCgnLi9CdXNpbmVzc0xpc3RNb2RhbC52dWUnKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICBuYW1lOiAnQnVzaW5lc3NMaXN0VmlldycsXHJcbiAgY29tcG9uZW50czogeyBCdXNpbmVzc0xpc3RNb2RhbCB9LFxyXG5cclxuICBzZXR1cCgpIHtcclxuICAgIC8vIFJldHJpdmUgdGhlIGJ1c2luZXNzIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnQuXHJcbiAgICBjb25zdCBidXNpbmVzczogdW5kZWZpbmVkIHwgSUJ1c2luZXNzID0gaW5qZWN0KCdidXNpbmVzcycpO1xyXG5cclxuICAgIC8vIENvbXB1dGVkIHByb3BlcnRpZXMuXHJcbiAgICBjb25zdCBoYXNXZWJzaXRlID0gY29tcHV0ZWQoKCkgPT4gISFidXNpbmVzcyEud2Vic2l0ZSk7XHJcblxyXG4gICAgLy8gRm9ybWF0dGluZyBtZXRob2RzLlxyXG4gICAgY29uc3QgeyB0b1RpdGxlIH0gPSB1c2VGb3JtYXR0aW5nKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgYnVzaW5lc3MsIGhhc1dlYnNpdGUsIHRvVGl0bGUgfTtcclxuICB9LFxyXG59KTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uYnVzaW5lc3MtbGlzdC12aWV3X190aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmJ1c2luZXNzLWxpc3Qtdmlld19fc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uYnVzaW5lc3MtbGlzdC12aWV3X19pbmZvIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmJ1c2luZXNzLWxpc3Qtdmlld19fY2F0ZWdvcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzY2ZjE7XHJcbn1cclxuXHJcbi5idXNpbmVzcy1saXN0LXZpZXdfX3dlYnNpdGUge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMF0hLi9CdXNpbmVzc0xpc3RWaWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmYjg5ZDhmJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImI4OTg4ZGIwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMF0hLi9CdXNpbmVzc0xpc3RWaWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmYjg5ZDhmJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVswXSEuL0J1c2luZXNzTGlzdFZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZiODlkOGYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==