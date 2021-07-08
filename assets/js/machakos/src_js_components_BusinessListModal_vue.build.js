(self["webpackChunkiheartmachakos"] = self["webpackChunkiheartmachakos"] || []).push([["src_js_components_BusinessListModal_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".business-list-card-modal__trigger[data-v-6ddb439a] {\n  background-color: #e0e7ff;\n  font-weight: 700;\n  padding: 12px 15px;\n}\n", "",{"version":3,"sources":["webpack://./src/js/components/BusinessListModal.vue"],"names":[],"mappings":"AACA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;AAAA","sourcesContent":["\r\n.business-list-card-modal__trigger {\r\n  background-color: #e0e7ff;\r\n  font-weight: 700;\r\n  padding: 12px 15px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_useBackend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../composables/useBackend */ "./src/js/composables/useBackend.ts");
/* harmony import */ var _composables_useFormatting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../composables/useFormatting */ "./src/js/composables/useFormatting.ts");
/* eslint-disable import/extensions */



/* eslint-disable no-console */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'BusinessListModal',
    setup() {
        const business = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('business');
        // Backend properties.
        const { categories, updateBusiness } = (0,_composables_useBackend__WEBPACK_IMPORTED_MODULE_1__.default)();
        // Formatting methods.
        const { toTitle } = (0,_composables_useFormatting__WEBPACK_IMPORTED_MODULE_2__.default)();
        // Populate the form values.
        const businessForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
            title: business.title,
            category: business.category.toLowerCase(),
            city: business.city,
            phone: '',
            email: '',
            website: business?.website ? business?.website : '',
            notes: '',
        });
        // If category not in available categories.
        const isInCategories = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => false);
        /**
         * When a user clicks submit.
         *
         * @author Brian K. Kiragu <bkariuki@hotmail.com>
         */
        const onSubmit = () => {
            updateBusiness(businessForm.value)
                .then((res) => console.log(res))
                .catch((err) => console.error(err));
        };
        return {
            business,
            categories,
            businessForm,
            isInCategories,
            toTitle,
            onSubmit,
        };
    },
}));


/***/ }),

/***/ "./src/js/components/BusinessListModal.vue":
/*!*************************************************!*\
  !*** ./src/js/components/BusinessListModal.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BusinessListModal_vue_vue_type_template_id_6ddb439a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BusinessListModal.vue?vue&type=template&id=6ddb439a&scoped=true */ "./src/js/components/BusinessListModal.vue?vue&type=template&id=6ddb439a&scoped=true");
/* harmony import */ var _BusinessListModal_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BusinessListModal.vue?vue&type=script&lang=ts */ "./src/js/components/BusinessListModal.vue?vue&type=script&lang=ts");
/* harmony import */ var _BusinessListModal_vue_vue_type_style_index_0_id_6ddb439a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css */ "./src/js/components/BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css");




;
_BusinessListModal_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.render = _BusinessListModal_vue_vue_type_template_id_6ddb439a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_BusinessListModal_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-6ddb439a"
/* hot reload */
if (false) {}

_BusinessListModal_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/js/components/BusinessListModal.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BusinessListModal_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/js/components/BusinessListModal.vue?vue&type=script&lang=ts":
/*!*************************************************************************!*\
  !*** ./src/js/components/BusinessListModal.vue?vue&type=script&lang=ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListModal_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListModal_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessListModal.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/js/components/BusinessListModal.vue?vue&type=template&id=6ddb439a&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./src/js/components/BusinessListModal.vue?vue&type=template&id=6ddb439a&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListModal_vue_vue_type_template_id_6ddb439a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListModal_vue_vue_type_template_id_6ddb439a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessListModal.vue?vue&type=template&id=6ddb439a&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=template&id=6ddb439a&scoped=true");


/***/ }),

/***/ "./src/js/components/BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css":
/*!*********************************************************************************************************!*\
  !*** ./src/js/components/BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListModal_vue_vue_type_style_index_0_id_6ddb439a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListModal_vue_vue_type_style_index_0_id_6ddb439a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListModal_vue_vue_type_style_index_0_id_6ddb439a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListModal_vue_vue_type_style_index_0_id_6ddb439a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessListModal_vue_vue_type_style_index_0_id_6ddb439a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=template&id=6ddb439a&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=template&id=6ddb439a&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-6ddb439a")

;(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6ddb439a")
const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-pencil-square",
  viewBox: "0 0 16 16"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" }),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
    "fill-rule": "evenodd",
    d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
  })
], -1 /* HOISTED */)
const _hoisted_2 = { class: "modal-dialog modal-lg" }
const _hoisted_3 = { class: "modal-header" }
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, null, -1 /* HOISTED */)
const _hoisted_5 = { class: "modal-body" }
const _hoisted_6 = { class: "row g-2" }
const _hoisted_7 = { class: "col-md-6" }
const _hoisted_8 = { class: "form-floating mb-2" }
const _hoisted_9 = { class: "col-md-6" }
const _hoisted_10 = { class: "form-floating mb-2" }
const _hoisted_11 = { class: "row g-2" }
const _hoisted_12 = {
  key: 0,
  class: "col mb-2"
}
const _hoisted_13 = { class: "form-floating" }
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", {
  value: "",
  disabled: ""
}, "Open this select menu", -1 /* HOISTED */)
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", { value: "other" }, "Other", -1 /* HOISTED */)
const _hoisted_16 = {
  key: 1,
  class: "col-md-6"
}
const _hoisted_17 = { class: "form-floating mb-2" }
const _hoisted_18 = { class: "row g-2" }
const _hoisted_19 = { class: "col-md-5" }
const _hoisted_20 = { class: "form-floating mb-2" }
const _hoisted_21 = { class: "col-md-7" }
const _hoisted_22 = { class: "form-floating mb-2" }
const _hoisted_23 = { class: "form-floating mb-2" }
const _hoisted_24 = { class: "form-floating" }
const _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "modal-footer" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    type: "button",
    class: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, " Close "),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    type: "submit",
    class: "btn btn-primary"
  }, " Update this business ")
], -1 /* HOISTED */)
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Button trigger modal "),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      type: "button",
      class: "business-list-card-modal__trigger rounded-circle border-0 shadow",
      "data-bs-toggle": "modal",
      "data-bs-target": `#modal${_ctx.business?.directoryIdx}`
    }, [
      _hoisted_1
    ], 8 /* PROPS */, ["data-bs-target"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "),
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, { to: "#business-modals" }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        id: `modal${_ctx.business?.directoryIdx}`,
        class: "modal fade",
        "data-bs-backdrop": "static",
        "data-bs-keyboard": "false",
        tabindex: "-1",
        "aria-labelledby": `modal${_ctx.business?.directoryIdx}Label`,
        "aria-hidden": "true"
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
            class: "modal-content",
            onSubmit: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.onSubmit && _ctx.onSubmit(...args)), ["prevent"]))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", {
                id: `modal${_ctx.business?.directoryIdx}Label`,
                class: "modal-title"
              }, " Edit " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.business?.title), 9 /* TEXT, PROPS */, ["id"]),
              _hoisted_4
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Edit form. "),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Name of business?. "),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                      id: `business-title-${_ctx.business?.directoryIdx}`,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.businessForm.title = $event)),
                      type: "text",
                      class: "form-control",
                      placeholder: "Name of business",
                      autocomplete: "organization"
                    }, null, 8 /* PROPS */, ["id"]), [
                      [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.businessForm.title]
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
                      for: `business-title-${_ctx.business?.directoryIdx}`
                    }, " Name of Business ", 8 /* PROPS */, ["for"])
                  ])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Location of business?. "),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                      id: `business-location-${_ctx.business?.directoryIdx}`,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (_ctx.businessForm.city = $event)),
                      type: "text",
                      class: "form-control",
                      placeholder: "Where is this business located?",
                      autocomplete: "address-level1"
                    }, null, 8 /* PROPS */, ["id"]), [
                      [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.businessForm.city]
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
                      for: `business-location-${_ctx.business?.directoryIdx}`
                    }, " Where is this business? ", 8 /* PROPS */, ["for"])
                  ])
                ])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Category of business?. "),
                (_ctx.categories)
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_12, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
                          id: `business-category-${_ctx.business?.directoryIdx}`,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (_ctx.businessForm.category = $event)),
                          class: "form-select",
                          "aria-label": "Floating label select example",
                          required: ""
                        }, [
                          _hoisted_14,
                          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.categories, (category) => {
                            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
                              key: `category-${category.param}`,
                              value: category.param
                            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.toTitle(category.title)), 9 /* TEXT, PROPS */, ["value"]))
                          }), 128 /* KEYED_FRAGMENT */)),
                          _hoisted_15
                        ], 8 /* PROPS */, ["id"]), [
                          [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.businessForm.category]
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
                          for: `business-category-${_ctx.business?.directoryIdx}`
                        }, " Works with selects ", 8 /* PROPS */, ["for"])
                      ])
                    ]))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Category if other "),
                (!_ctx.isInCategories)
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_16, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                          id: `business-other-category-${_ctx.business?.directoryIdx}`,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (_ctx.businessForm.category = $event)),
                          type: "text",
                          class: "form-control",
                          placeholder: "Enter name of category",
                          autocomplete: "address-level1",
                          required: ""
                        }, null, 8 /* PROPS */, ["id"]), [
                          [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.businessForm.category]
                        ]),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
                          for: `business-other-category-${_ctx.business?.directoryIdx}`
                        }, " If other, which category? ", 8 /* PROPS */, ["for"])
                      ])
                    ]))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Phone Number of business?. "),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                      id: `business-phone-${_ctx.business?.directoryIdx}`,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (_ctx.businessForm.phone = $event)),
                      type: "number",
                      class: "form-control",
                      placeholder: "Business Phone Number",
                      autocomplete: "tel"
                    }, null, 8 /* PROPS */, ["id"]), [
                      [
                        vue__WEBPACK_IMPORTED_MODULE_0__.vModelText,
                        _ctx.businessForm.phone,
                        void 0,
                        { number: true }
                      ]
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
                      for: `business-phone-${_ctx.business?.directoryIdx}`
                    }, " Phone Number ", 8 /* PROPS */, ["for"])
                  ])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Email of business?. "),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                      id: `business-email-${_ctx.business?.directoryIdx}`,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (_ctx.businessForm.email = $event)),
                      type: "email",
                      class: "form-control",
                      placeholder: "Business Email",
                      autocomplete: "email"
                    }, null, 8 /* PROPS */, ["id"]), [
                      [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.businessForm.email]
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
                      for: `business-email-${_ctx.business?.directoryIdx}`
                    }, " Business Email ", 8 /* PROPS */, ["for"])
                  ])
                ])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Business Website. "),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_23, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                  id: `business-website-${_ctx.business?.directoryIdx}`,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => (_ctx.businessForm.website = $event)),
                  type: "url",
                  class: "form-control",
                  placeholder: "business website",
                  autocomplete: "url"
                }, null, 8 /* PROPS */, ["id"]), [
                  [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.businessForm.website]
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
                  for: `business-website-${_ctx.business?.directoryIdx}`
                }, " Business Website ", 8 /* PROPS */, ["for"])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Notes."),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("textarea", {
                  id: `business-note-${_ctx.business?.directoryIdx}`,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => (_ctx.businessForm.notes = $event)),
                  class: "form-control",
                  placeholder: "Leave a note here",
                  style: {"height":"100px"}
                }, null, 8 /* PROPS */, ["id"]), [
                  [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.businessForm.notes]
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
                  for: `business-note-${_ctx.business?.directoryIdx}`
                }, " Notes ", 8 /* PROPS */, ["for"])
              ])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal footer. "),
            _hoisted_25
          ], 32 /* HYDRATE_EVENTS */)
        ])
      ], 8 /* PROPS */, ["id", "aria-labelledby"])
    ]))
  ], 64 /* STABLE_FRAGMENT */))
})

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessListModal.vue?vue&type=style&index=0&id=6ddb439a&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("35f4e458", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9paGVhcnRtYWNoYWtvcy8uL3NyYy9qcy9jb21wb25lbnRzL0J1c2luZXNzTGlzdE1vZGFsLnZ1ZT9jZjExIiwid2VicGFjazovL2loZWFydG1hY2hha29zLy4vc3JjL2pzL2NvbXBvbmVudHMvQnVzaW5lc3NMaXN0TW9kYWwudnVlP2E2NTkiLCJ3ZWJwYWNrOi8vaWhlYXJ0bWFjaGFrb3MvLi9zcmMvanMvY29tcG9uZW50cy9CdXNpbmVzc0xpc3RNb2RhbC52dWU/ZWQ3YSIsIndlYnBhY2s6Ly9paGVhcnRtYWNoYWtvcy8uL3NyYy9qcy9jb21wb25lbnRzL0J1c2luZXNzTGlzdE1vZGFsLnZ1ZT9kMzU5Iiwid2VicGFjazovL2loZWFydG1hY2hha29zLy4vc3JjL2pzL2NvbXBvbmVudHMvQnVzaW5lc3NMaXN0TW9kYWwudnVlIiwid2VicGFjazovL2loZWFydG1hY2hha29zLy4vc3JjL2pzL2NvbXBvbmVudHMvQnVzaW5lc3NMaXN0TW9kYWwudnVlPzZlNTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsK0ZBQStGLDhCQUE4QixxQkFBcUIsdUJBQXVCLEdBQUcsU0FBUywwR0FBMEcsWUFBWSxhQUFhLGFBQWEsaUVBQWlFLGdDQUFnQyx1QkFBdUIseUJBQXlCLEtBQUssdUJBQXVCO0FBQ2xmO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkMsc0NBQXNDO0FBQzRCO0FBRWY7QUFDTTtBQUV6RCwrQkFBK0I7QUFDL0IsaUVBQWUsb0RBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsbUJBQW1CO0lBRXpCLEtBQUs7UUFDSCxNQUFNLFFBQVEsR0FBMEIsMkNBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzRCxzQkFBc0I7UUFDdEIsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFj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WUFJSiwwRUFBc0I7WUFDdEIsV0FXTTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZOaEI7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsOG9CQUEwVTtBQUNoVztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoic3JjX2pzX2NvbXBvbmVudHNfQnVzaW5lc3NMaXN0TW9kYWxfdnVlLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYnVzaW5lc3MtbGlzdC1jYXJkLW1vZGFsX190cmlnZ2VyW2RhdGEtdi02ZGRiNDM5YV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTdmZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qcy9jb21wb25lbnRzL0J1c2luZXNzTGlzdE1vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLmJ1c2luZXNzLWxpc3QtY2FyZC1tb2RhbF9fdHJpZ2dlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlN2ZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xyXG5pbXBvcnQgeyBjb21wdXRlZCwgZGVmaW5lQ29tcG9uZW50LCBpbmplY3QsIFJlZiwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgSUJ1c2luZXNzLCBJQnVzaW5lc3NGb3JtIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB1c2VCYWNrZW5kIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZUJhY2tlbmQnO1xyXG5pbXBvcnQgdXNlRm9ybWF0dGluZyBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VGb3JtYXR0aW5nJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICBuYW1lOiAnQnVzaW5lc3NMaXN0TW9kYWwnLFxyXG5cclxuICBzZXR1cCgpIHtcclxuICAgIGNvbnN0IGJ1c2luZXNzOiB1bmRlZmluZWQgfCBJQnVzaW5lc3MgPSBpbmplY3QoJ2J1c2luZXNzJyk7XHJcblxyXG4gICAgLy8gQmFja2VuZCBwcm9wZXJ0aWVzLlxyXG4gICAgY29uc3QgeyBjYXRlZ29yaWVzLCB1cGRhdGVCdXNpbmVzcyB9ID0gdXNlQmFja2VuZCgpO1xyXG5cclxuICAgIC8vIEZvcm1hdHRpbmcgbWV0aG9kcy5cclxuICAgIGNvbnN0IHsgdG9UaXRsZSB9ID0gdXNlRm9ybWF0dGluZygpO1xyXG5cclxuICAgIC8vIFBvcHVsYXRlIHRoZSBmb3JtIHZhbHVlcy5cclxuICAgIGNvbnN0IGJ1c2luZXNzRm9ybTogUmVmPElCdXNpbmVzc0Zvcm0+ID0gcmVmKHtcclxuICAgICAgdGl0bGU6IGJ1c2luZXNzIS50aXRsZSxcclxuICAgICAgY2F0ZWdvcnk6IGJ1c2luZXNzIS5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICBjaXR5OiBidXNpbmVzcyEuY2l0eSxcclxuICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHdlYnNpdGU6IGJ1c2luZXNzPy53ZWJzaXRlID8gYnVzaW5lc3M/LndlYnNpdGUgOiAnJyxcclxuICAgICAgbm90ZXM6ICcnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSWYgY2F0ZWdvcnkgbm90IGluIGF2YWlsYWJsZSBjYXRlZ29yaWVzLlxyXG4gICAgY29uc3QgaXNJbkNhdGVnb3JpZXMgPSBjb21wdXRlZCgoKSA9PiBmYWxzZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGEgdXNlciBjbGlja3Mgc3VibWl0LlxyXG4gICAgICpcclxuICAgICAqIEBhdXRob3IgQnJpYW4gSy4gS2lyYWd1IDxia2FyaXVraUBob3RtYWlsLmNvbT5cclxuICAgICAqL1xyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgIHVwZGF0ZUJ1c2luZXNzKGJ1c2luZXNzRm9ybS52YWx1ZSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBidXNpbmVzcyxcclxuICAgICAgY2F0ZWdvcmllcyxcclxuICAgICAgYnVzaW5lc3NGb3JtLFxyXG4gICAgICBpc0luQ2F0ZWdvcmllcyxcclxuICAgICAgdG9UaXRsZSxcclxuICAgICAgb25TdWJtaXQsXHJcbiAgICB9O1xyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9CdXNpbmVzc0xpc3RNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRkYjQzOWEmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CdXNpbmVzc0xpc3RNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQnVzaW5lc3NMaXN0TW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9CdXNpbmVzc0xpc3RNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZGRiNDM5YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5zY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNmRkYjQzOWFcIlxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcIjZkZGI0MzlhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNmRkYjQzOWEnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnNmRkYjQzOWEnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CdXNpbmVzc0xpc3RNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRkYjQzOWEmc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNmRkYjQzOWEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwic3JjL2pzL2NvbXBvbmVudHMvQnVzaW5lc3NMaXN0TW9kYWwudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVswXSEuL0J1c2luZXNzTGlzdE1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMF0hLi9CdXNpbmVzc0xpc3RNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsIjx0ZW1wbGF0ZT5cclxuICA8IS0tIEJ1dHRvbiB0cmlnZ2VyIG1vZGFsIC0tPlxyXG4gIDxidXR0b25cclxuICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgY2xhc3M9XCJidXNpbmVzcy1saXN0LWNhcmQtbW9kYWxfX3RyaWdnZXIgcm91bmRlZC1jaXJjbGUgYm9yZGVyLTAgc2hhZG93XCJcclxuICAgIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgOmRhdGEtYnMtdGFyZ2V0PVwiYCNtb2RhbCR7YnVzaW5lc3M/LmRpcmVjdG9yeUlkeH1gXCJcclxuICA+XHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgY2xhc3M9XCJiaSBiaS1wZW5jaWwtc3F1YXJlXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xNS41MDIgMS45NGEuNS41IDAgMCAxIDAgLjcwNkwxNC40NTkgMy42OWwtMi0yTDEzLjUwMi42NDZhLjUuNSAwIDAgMSAuNzA3IDBsMS4yOTMgMS4yOTN6bS0xLjc1IDIuNDU2LTItMkw0LjkzOSA5LjIxYS41LjUgMCAwIDAtLjEyMS4xOTZsLS44MDUgMi40MTRhLjI1LjI1IDAgMCAwIC4zMTYuMzE2bDIuNDE0LS44MDVhLjUuNSAwIDAgMCAuMTk2LS4xMmw2LjgxMy02LjgxNHpcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgIGQ9XCJNMSAxMy41QTEuNSAxLjUgMCAwIDAgMi41IDE1aDExYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtNmEuNS41IDAgMCAwLTEgMHY2YS41LjUgMCAwIDEtLjUuNWgtMTFhLjUuNSAwIDAgMS0uNS0uNXYtMTFhLjUuNSAwIDAgMSAuNS0uNUg5YS41LjUgMCAwIDAgMC0xSDIuNUExLjUgMS41IDAgMCAwIDEgMi41djExelwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPCEtLSBNb2RhbCAtLT5cclxuICA8dGVsZXBvcnQgdG89XCIjYnVzaW5lc3MtbW9kYWxzXCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIDppZD1cImBtb2RhbCR7YnVzaW5lc3M/LmRpcmVjdG9yeUlkeH1gXCJcclxuICAgICAgY2xhc3M9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgZGF0YS1icy1iYWNrZHJvcD1cInN0YXRpY1wiXHJcbiAgICAgIGRhdGEtYnMta2V5Ym9hcmQ9XCJmYWxzZVwiXHJcbiAgICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICA6YXJpYS1sYWJlbGxlZGJ5PVwiYG1vZGFsJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fUxhYmVsYFwiXHJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIj5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIiBAc3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDUgOmlkPVwiYG1vZGFsJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fUxhYmVsYFwiIGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cclxuICAgICAgICAgICAgICBFZGl0IHt7IGJ1c2luZXNzPy50aXRsZSB9fVxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4tY2xvc2VcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8IS0tIEVkaXQgZm9ybS4gLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGctMlwiPlxyXG4gICAgICAgICAgICAgIDwhLS0gTmFtZSBvZiBidXNpbmVzcz8uIC0tPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmcgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCJgYnVzaW5lc3MtdGl0bGUtJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fWBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJidXNpbmVzc0Zvcm0udGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIG9mIGJ1c2luZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvcmdhbml6YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImBidXNpbmVzcy10aXRsZS0ke2J1c2luZXNzPy5kaXJlY3RvcnlJZHh9YFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE5hbWUgb2YgQnVzaW5lc3NcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8IS0tIExvY2F0aW9uIG9mIGJ1c2luZXNzPy4gLS0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZyBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImBidXNpbmVzcy1sb2NhdGlvbi0ke2J1c2luZXNzPy5kaXJlY3RvcnlJZHh9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImJ1c2luZXNzRm9ybS5jaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hlcmUgaXMgdGhpcyBidXNpbmVzcyBsb2NhdGVkP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiYWRkcmVzcy1sZXZlbDFcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImBidXNpbmVzcy1sb2NhdGlvbi0ke2J1c2luZXNzPy5kaXJlY3RvcnlJZHh9YFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdoZXJlIGlzIHRoaXMgYnVzaW5lc3M/XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGctMlwiPlxyXG4gICAgICAgICAgICAgIDwhLS0gQ2F0ZWdvcnkgb2YgYnVzaW5lc3M/LiAtLT5cclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJjYXRlZ29yaWVzXCIgY2xhc3M9XCJjb2wgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImBidXNpbmVzcy1jYXRlZ29yeS0ke2J1c2luZXNzPy5kaXJlY3RvcnlJZHh9YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImJ1c2luZXNzRm9ybS5jYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkZsb2F0aW5nIGxhYmVsIHNlbGVjdCBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPk9wZW4gdGhpcyBzZWxlY3QgbWVudTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiYGNhdGVnb3J5LSR7Y2F0ZWdvcnkucGFyYW19YFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJjYXRlZ29yeS5wYXJhbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3sgdG9UaXRsZShjYXRlZ29yeS50aXRsZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj5PdGhlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJgYnVzaW5lc3MtY2F0ZWdvcnktJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fWBcIj5cclxuICAgICAgICAgICAgICAgICAgICBXb3JrcyB3aXRoIHNlbGVjdHNcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8IS0tIENhdGVnb3J5IGlmIG90aGVyIC0tPlxyXG4gICAgICAgICAgICAgIDxkaXYgdi1pZj1cIiFpc0luQ2F0ZWdvcmllc1wiIGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZsb2F0aW5nIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgOmlkPVwiYGJ1c2luZXNzLW90aGVyLWNhdGVnb3J5LSR7YnVzaW5lc3M/LmRpcmVjdG9yeUlkeH1gXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYnVzaW5lc3NGb3JtLmNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZSBvZiBjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiYWRkcmVzcy1sZXZlbDFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIDpmb3I9XCJgYnVzaW5lc3Mtb3RoZXItY2F0ZWdvcnktJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fWBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgSWYgb3RoZXIsIHdoaWNoIGNhdGVnb3J5P1xyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBnLTJcIj5cclxuICAgICAgICAgICAgICA8IS0tIFBob25lIE51bWJlciBvZiBidXNpbmVzcz8uIC0tPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmcgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCJgYnVzaW5lc3MtcGhvbmUtJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fWBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWwubnVtYmVyPVwiYnVzaW5lc3NGb3JtLnBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCdXNpbmVzcyBQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInRlbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiYGJ1c2luZXNzLXBob25lLSR7YnVzaW5lc3M/LmRpcmVjdG9yeUlkeH1gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGhvbmUgTnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPCEtLSBFbWFpbCBvZiBidXNpbmVzcz8uIC0tPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmcgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCJgYnVzaW5lc3MtZW1haWwtJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fWBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJidXNpbmVzc0Zvcm0uZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzaW5lc3MgRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJgYnVzaW5lc3MtZW1haWwtJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fWBcIj5cclxuICAgICAgICAgICAgICAgICAgICBCdXNpbmVzcyBFbWFpbFxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBCdXNpbmVzcyBXZWJzaXRlLiAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmcgbWItMlwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgOmlkPVwiYGJ1c2luZXNzLXdlYnNpdGUtJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fWBcIlxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImJ1c2luZXNzRm9ybS53ZWJzaXRlXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ1cmxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJidXNpbmVzcyB3ZWJzaXRlXCJcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cInVybFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cImBidXNpbmVzcy13ZWJzaXRlLSR7YnVzaW5lc3M/LmRpcmVjdG9yeUlkeH1gXCI+XHJcbiAgICAgICAgICAgICAgICBCdXNpbmVzcyBXZWJzaXRlXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tIE5vdGVzLi0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZ1wiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgOmlkPVwiYGJ1c2luZXNzLW5vdGUtJHtidXNpbmVzcz8uZGlyZWN0b3J5SWR4fWBcIlxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImJ1c2luZXNzRm9ybS5ub3Rlc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlYXZlIGEgbm90ZSBoZXJlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMDBweFwiXHJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJgYnVzaW5lc3Mtbm90ZS0ke2J1c2luZXNzPy5kaXJlY3RvcnlJZHh9YFwiPlxyXG4gICAgICAgICAgICAgICAgTm90ZXNcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwhLS0gTW9kYWwgZm9vdGVyLiAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIFVwZGF0ZSB0aGlzIGJ1c2luZXNzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvdGVsZXBvcnQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xyXG5pbXBvcnQgeyBjb21wdXRlZCwgZGVmaW5lQ29tcG9uZW50LCBpbmplY3QsIFJlZiwgcmVmIH0gZnJvbSAndnVlJztcclxuaW1wb3J0IHsgSUJ1c2luZXNzLCBJQnVzaW5lc3NGb3JtIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB1c2VCYWNrZW5kIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZUJhY2tlbmQnO1xyXG5pbXBvcnQgdXNlRm9ybWF0dGluZyBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VGb3JtYXR0aW5nJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICBuYW1lOiAnQnVzaW5lc3NMaXN0TW9kYWwnLFxyXG5cclxuICBzZXR1cCgpIHtcclxuICAgIGNvbnN0IGJ1c2luZXNzOiB1bmRlZmluZWQgfCBJQnVzaW5lc3MgPSBpbmplY3QoJ2J1c2luZXNzJyk7XHJcblxyXG4gICAgLy8gQmFja2VuZCBwcm9wZXJ0aWVzLlxyXG4gICAgY29uc3QgeyBjYXRlZ29yaWVzLCB1cGRhdGVCdXNpbmVzcyB9ID0gdXNlQmFja2VuZCgpO1xyXG5cclxuICAgIC8vIEZvcm1hdHRpbmcgbWV0aG9kcy5cclxuICAgIGNvbnN0IHsgdG9UaXRsZSB9ID0gdXNlRm9ybWF0dGluZygpO1xyXG5cclxuICAgIC8vIFBvcHVsYXRlIHRoZSBmb3JtIHZhbHVlcy5cclxuICAgIGNvbnN0IGJ1c2luZXNzRm9ybTogUmVmPElCdXNpbmVzc0Zvcm0+ID0gcmVmKHtcclxuICAgICAgdGl0bGU6IGJ1c2luZXNzIS50aXRsZSxcclxuICAgICAgY2F0ZWdvcnk6IGJ1c2luZXNzIS5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICBjaXR5OiBidXNpbmVzcyEuY2l0eSxcclxuICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHdlYnNpdGU6IGJ1c2luZXNzPy53ZWJzaXRlID8gYnVzaW5lc3M/LndlYnNpdGUgOiAnJyxcclxuICAgICAgbm90ZXM6ICcnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSWYgY2F0ZWdvcnkgbm90IGluIGF2YWlsYWJsZSBjYXRlZ29yaWVzLlxyXG4gICAgY29uc3QgaXNJbkNhdGVnb3JpZXMgPSBjb21wdXRlZCgoKSA9PiBmYWxzZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGEgdXNlciBjbGlja3Mgc3VibWl0LlxyXG4gICAgICpcclxuICAgICAqIEBhdXRob3IgQnJpYW4gSy4gS2lyYWd1IDxia2FyaXVraUBob3RtYWlsLmNvbT5cclxuICAgICAqL1xyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgIHVwZGF0ZUJ1c2luZXNzKGJ1c2luZXNzRm9ybS52YWx1ZSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBidXNpbmVzcyxcclxuICAgICAgY2F0ZWdvcmllcyxcclxuICAgICAgYnVzaW5lc3NGb3JtLFxyXG4gICAgICBpc0luQ2F0ZWdvcmllcyxcclxuICAgICAgdG9UaXRsZSxcclxuICAgICAgb25TdWJtaXQsXHJcbiAgICB9O1xyXG4gIH0sXHJcbn0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5idXNpbmVzcy1saXN0LWNhcmQtbW9kYWxfX3RyaWdnZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGU3ZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVswXSEuL0J1c2luZXNzTGlzdE1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZkZGI0MzlhJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM1ZjRlNDU4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMF0hLi9CdXNpbmVzc0xpc3RNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZGRiNDM5YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMF0hLi9CdXNpbmVzc0xpc3RNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZGRiNDM5YSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9