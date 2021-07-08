(self["webpackChunkiheartmachakos"] = self["webpackChunkiheartmachakos"] || []).push([["src_js_components_BusinessList_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".business-list[data-v-6732024a] {\n  color: #384252;\n}\n", "",{"version":3,"sources":["webpack://./src/js/components/BusinessList.vue"],"names":[],"mappings":"AACA;EACE,cAAyB;AAAA","sourcesContent":["\r\n.business-list {\r\n  color: hsl(217, 19%, 27%);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_useBackend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../composables/useBackend */ "./src/js/composables/useBackend.ts");
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */


// Import components.
const BusinessListAdd = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_js_components_BusinessListAdd_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./BusinessListAdd.vue */ "./src/js/components/BusinessListAdd.vue")));
const BusinessListCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_js_components_BusinessListCard_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./BusinessListCard.vue */ "./src/js/components/BusinessListCard.vue")));
const BusinessListDropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_js_components_BusinessListDropdown_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./BusinessListDropdown.vue */ "./src/js/components/BusinessListDropdown.vue")));
const BusinessListSearchbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "src_js_components_BusinessListSearchbar_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./BusinessListSearchbar.vue */ "./src/js/components/BusinessListSearchbar.vue")));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'BusinessList',
    components: {
        BusinessListAdd,
        BusinessListCard,
        BusinessListSearchbar,
        BusinessListDropdown,
    },
    setup() {
        // Declare data properties.
        const isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
        const pageNo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
        // Get backend properties.
        const { searchTerm, filterTerm, businesses, categories, hasBusinesses, getBusinesses, getCategories, } = (0,_composables_useBackend__WEBPACK_IMPORTED_MODULE_1__.default)();
        // Fetch the data when the component is mounted.
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            // Set to loading.
            isLoading.value = true;
            // Get the first businesses on page load.
            getBusinesses(pageNo.value)
                .then((response) => {
                businesses.value = [...response.data];
            })
                .catch((err) => console.error(err.message));
            // Get the active categories on page load.
            getCategories()
                .then((response) => {
                categories.value = [
                    ...response.data.filter((category) => category.status.toLowerCase() === 'active'),
                ];
            })
                .catch((err) => console.error(err.message));
            // Add a listener to fetch more records on scroll-to-bottom.
            window.onscroll = () => {
                if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                    // Set the state to loading.
                    isLoading.value = true;
                    // Add the page count.
                    pageNo.value += 1;
                    // Get the requests.
                    getBusinesses(pageNo.value)
                        .then((response) => {
                        // Check if any new data was returned.
                        if (response.data.length > 0) {
                            // Update the businesses with the incoming data.
                            businesses.value.push(...response.data);
                        }
                        else {
                            // Decrement the page counter.
                            pageNo.value -= 1;
                        }
                    })
                        .catch(() => {
                        // Decrement the page counter.
                        pageNo.value -= 1;
                    });
                    // Set the state from loading.
                    isLoading.value = false;
                }
            };
            // Set from loading.
            isLoading.value = false;
        });
        // Provide the categories and updateBusiness to the children.
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('categories', categories);
        return {
            isLoading,
            searchTerm,
            filterTerm,
            categories,
            businesses,
            hasBusinesses,
        };
    },
}));


/***/ }),

/***/ "./src/js/composables/useBackend.ts":
/*!******************************************!*\
  !*** ./src/js/composables/useBackend.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useBackend)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

// API Base URI.
const baseUrl = 'https://heartofkenya.com';
function useBackend() {
    const searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    const filterTerm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    const categories = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([
        {
            "param": "beauty",
            "title": "Beauty and Health",
            "status": "Active"
        },
        {
            "param": "bookstores",
            "title": "Book Stores",
            "status": "Active"
        }
    ]);
    const businesses = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([
        {
            "directoryIdx": 4,
            "worldid": "kenyaheart",
            "library": "Machakos",
            "category": "Beauty",
            "title": "Ruth Beauty Parlour",
            "owner": "Bernard",
            "website": "",
            "city": "Machakos",
            "localowned": null,
            "status": "Active",
            "modified": "4/16/2021 11:55:35 PM"
        },
        {
            "directoryIdx": 1,
            "worldid": "kenyaheart",
            "library": "machakos",
            "category": "bookstores",
            "title": "Chap Chap Enterprise",
            "owner": "Richard Wasike",
            "website": null,
            "city": "Machakos",
            "localowned": "true",
            "status": "Active",
            "modified": ""
        }
    ]);
    const hasCategories = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => categories.value.length > 0);
    const hasBusinesses = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => businesses.value.length > 0);
    /**
     * Function to query endpoint.
     *
     * @param page {number} The page number.
     * @param term {null | string} The search term
     * @returns Promise<IBusiness[]>
     * @author Brian K. Kiragu <bkariuki@hotmail.com>
     */
    const getBusinesses = async (page = 1, term = null) => {
        // Set the request endpoint.
        let endpoint = `${baseUrl}/TableSearchJson?config=directoryMachakosJson&page=${page}`;
        // Check if a search term was provided.
        endpoint = term ? `${endpoint}&search=${term}` : endpoint;
        // Launch the request.
        const response = await fetch(endpoint);
        // Check for errors.
        if (!response.ok) {
            throw new Error(`There was an error ${response.statusText}`);
        }
        // Get the data from the request.
        return response.json();
    };
    /**
     * Update a business
     *
     * @param data {IBusinessForm} User input data
     * @author Brian K. Kiragu <bkariuki@hotmail.com>
     */
    const updateBusiness = async (data) => {
        // Launch the request.
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        // Check for errors.
        if (!response.ok) {
            throw new Error(`There was an error ${response.statusText}`);
        }
        // Get the data from the request.
        return response.json();
    };
    /**
    * Function to query categories.
    *
    * @param page {number} The page number.
    * @param term {null | string} The search term
    * @returns Promise</ICategory[]>
    * @author Brian K. Kiragu <bkariuki@hotmail.com>
    */
    const getCategories = async (page = 1, term = null) => {
        // Set the request endpoint.
        let endpoint = `${baseUrl}/TableSearchJson?config=businessCategories&page=${page}`;
        // Check if a search term was provided.
        endpoint = term ? `${endpoint}&search=${term}` : endpoint;
        // Launch the request.
        const response = await fetch(endpoint);
        // Check for errors.
        if (!response.ok) {
            throw new Error(`There was an error ${response.statusText}`);
        }
        // Get the data from the request.
        return response.json();
    };
    // Return the function results.
    return {
        searchTerm,
        filterTerm,
        categories,
        businesses,
        hasCategories,
        hasBusinesses,
        getCategories,
        getBusinesses,
        updateBusiness
    };
}
;


/***/ }),

/***/ "./src/js/components/BusinessList.vue":
/*!********************************************!*\
  !*** ./src/js/components/BusinessList.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BusinessList_vue_vue_type_template_id_6732024a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BusinessList.vue?vue&type=template&id=6732024a&scoped=true */ "./src/js/components/BusinessList.vue?vue&type=template&id=6732024a&scoped=true");
/* harmony import */ var _BusinessList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BusinessList.vue?vue&type=script&lang=ts */ "./src/js/components/BusinessList.vue?vue&type=script&lang=ts");
/* harmony import */ var _BusinessList_vue_vue_type_style_index_0_id_6732024a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true */ "./src/js/components/BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true");




;
_BusinessList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.render = _BusinessList_vue_vue_type_template_id_6732024a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_BusinessList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-6732024a"
/* hot reload */
if (false) {}

_BusinessList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/js/components/BusinessList.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BusinessList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/js/components/BusinessList.vue?vue&type=script&lang=ts":
/*!********************************************************************!*\
  !*** ./src/js/components/BusinessList.vue?vue&type=script&lang=ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessList_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessList.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/js/components/BusinessList.vue?vue&type=template&id=6732024a&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/js/components/BusinessList.vue?vue&type=template&id=6732024a&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessList_vue_vue_type_template_id_6732024a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessList_vue_vue_type_template_id_6732024a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessList.vue?vue&type=template&id=6732024a&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=template&id=6732024a&scoped=true");


/***/ }),

/***/ "./src/js/components/BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/js/components/BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessList_vue_vue_type_style_index_0_id_6732024a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessList_vue_vue_type_style_index_0_id_6732024a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessList_vue_vue_type_style_index_0_id_6732024a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessList_vue_vue_type_style_index_0_id_6732024a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_BusinessList_vue_vue_type_style_index_0_id_6732024a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=template&id=6732024a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=template&id=6732024a&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-6732024a")

;(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6732024a")
const _hoisted_1 = { class: "business-list px-3 py-4" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { id: "teleport" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Page Views. "),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { id: "business-views" }),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modals. "),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { id: "business-modals" })
], -1 /* HOISTED */)
const _hoisted_3 = { class: "business-list__add mb-5" }
const _hoisted_4 = { class: "row g-2" }
const _hoisted_5 = { class: "col-md-3" }
const _hoisted_6 = { class: "col" }
const _hoisted_7 = {
  key: 0,
  class: "business-list__card"
}
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "Loading...", -1 /* HOISTED */)
const _hoisted_9 = {
  key: 1,
  class: "business-list__no-cards text-center"
}
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", { class: "mb-4 mt-5" }, "There are no businesses to display.", -1 /* HOISTED */)
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_BusinessListAdd = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BusinessListAdd")
  const _component_BusinessListDropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BusinessListDropdown")
  const _component_BusinessListSearchbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BusinessListSearchbar")
  const _component_BusinessListCard = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BusinessListCard")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Add a new business. "),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BusinessListAdd)
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Dropdown Filter. "),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BusinessListDropdown, {
          "filter-term": _ctx.filterTerm,
          "onUpdate:filter-term": _cache[1] || (_cache[1] = $event => (_ctx.filterTerm = $event)),
          "filter-termModifiers": { lazy: true }
        }, null, 8 /* PROPS */, ["filter-term"])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Searchbar. "),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BusinessListSearchbar, {
          "search-term": _ctx.searchTerm,
          "onUpdate:search-term": _cache[2] || (_cache[2] = $event => (_ctx.searchTerm = $event)),
          "search-termModifiers": { lazy: true }
        }, null, 8 /* PROPS */, ["search-term"])
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" List of businesses. "),
    (_ctx.hasBusinesses)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_7, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.businesses, (business) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BusinessListCard, {
              key: business.directoryIdx,
              business: business
            }, null, 8 /* PROPS */, ["business"]))
          }), 128 /* KEYED_FRAGMENT */)),
          (_ctx.isLoading)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
                key: 0,
                class: ["business-list__loader d-flex justify-content-center", { 'd-none': !_ctx.isLoading }]
              }, [
                _hoisted_8,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img\r\n          src=\"../../assets/loaders/loading.gif\"\r\n          alt=\"Loader icon\"\r\n          class=\"img-fluid\"\r\n          loading=\"lazy\"\r\n        /> ")
              ], 2 /* CLASS */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]))
      : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_9, [
          _hoisted_10
        ]))
  ]))
})

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/js/components/BusinessList.vue?vue&type=style&index=0&id=6732024a&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3a3e4e32", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9paGVhcnRtYWNoYWtvcy8uL3NyYy9qcy9jb21wb25lbnRzL0J1c2luZXNzTGlzdC52dWU/MGU2ZSIsIndlYnBhY2s6Ly9paGVhcnRtYWNoYWtvcy8uL3NyYy9qcy9jb21wb25lbnRzL0J1c2luZXNzTGlzdC52dWU/OTdjMCIsIndlYnBhY2s6Ly9paGVhcnRtYWNoYWtvcy8uL3NyYy9qcy9jb21wb3NhYmxlcy91c2VCYWNrZW5kLnRzIiwid2VicGFjazovL2loZWFydG1hY2hha29zLy4vc3JjL2pzL2NvbXBvbmVudHMvQnVzaW5lc3NMaXN0LnZ1ZT84MTNhIiwid2VicGFjazovL2loZWFydG1hY2hha29zLy4vc3JjL2pzL2NvbXBvbmVudHMvQnVzaW5lc3NMaXN0LnZ1ZT9iNzViIiwid2VicGFjazovL2loZWFydG1hY2hha29zLy4vc3JjL2pzL2NvbXBvbmVudHMvQnVzaW5lc3NMaXN0LnZ1ZSIsIndlYnBhY2s6Ly9paGVhcnRtYWNoYWtvcy8uL3NyYy9qcy9jb21wb25lbnRzL0J1c2luZXNzTGlzdC52dWU/NWEzNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwyRUFBMkUsbUJBQW1CLEdBQUcsU0FBUyxxR0FBcUcsV0FBVyw2Q0FBNkMsZ0NBQWdDLEtBQUssdUJBQXVCO0FBQ25VO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QywrQkFBK0I7QUFDL0IseUNBQXlDO0FBQ3pDLHNDQUFzQztBQVF6QjtBQUNzQztBQUVuRCxxQkFBcUI7QUFDckIsTUFBTSxlQUFlLEdBQUcseURBQW9CLENBQzFDLEdBQUcsRUFBRSxDQUFDLDBNQUErQixDQUN0QyxDQUFDO0FBQ0YsTUFBTSxnQkFBZ0IsR0FBRyx5REFBb0IsQ0FDM0MsR0FBRyxFQUFFLENBQUMsNk1BQWdDLENBQ3ZDLENB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QUZOLFVBRU07TUFESixpREFBbUI7O0lBR3JCLGlEQVVNLE9BVk4sVUFVTTtNQVRKLDZFQUF5QjtNQUN6QixpREFFTSxPQUZOLFVBRU07UUFESixpREFBOEQ7VUFBaEMsYUFBVyxFQUFPLGVBQVU7dUVBQVYsZUFBVTtrQ0FBcEMsY0FBcUM7OztNQUc3RCx1RUFBbUI7TUFDbkIsaURBRU0sT0FGTixVQUVNO1FBREosaURBQStEO1VBQWhDLGFBQVcsRUFBTyxlQUFVO3VFQUFWLGVBQVU7a0NBQXBDLGNBQXFDOzs7O0lBSWhFLGdGQUE0QjtLQUNqQixrQkFBYTsyREFBeEIsaURBb0JNLE9BcEJOLFVBb0JNO2lFQW5CSixpREFJRSxpR0FIbUIsZUFBVSxHQUF0QixRQUFRO3NFQURqQixpREFJRTtjQUZDLEdBQUcsRUFBRSxRQUFRLENBQUMsWUFBWTtjQUMxQixRQUFRLEVBQUUsUUFBUTs7O1dBSWIsY0FBUztpRUFEakIsaURBWU07O2dCQVZKLEtBQUssR0FBQyxxREFBcUQsZUFDdEMsY0FBUzs7Z0JBRTlCLFVBQXVCO2dCQUN2QixxT0FLTTs7OzsyREFJVixpREFFTSxPQUZOLFVBRU07VUFESixXQUE0RDs7Ozs7Ozs7Ozs7OztBQ25EbEU7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsc29CQUFzVTtBQUM1VjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkpBQWlGO0FBQzNGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoic3JjX2pzX2NvbXBvbmVudHNfQnVzaW5lc3NMaXN0X3Z1ZS5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1c2luZXNzLWxpc3RbZGF0YS12LTY3MzIwMjRhXSB7XFxuICBjb2xvcjogIzM4NDI1MjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvQnVzaW5lc3NMaXN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGNBQXlCO0FBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLmJ1c2luZXNzLWxpc3Qge1xcclxcbiAgY29sb3I6IGhzbCgyMTcsIDE5JSwgMjclKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXHJcbmltcG9ydCB7XHJcbiAgZGVmaW5lQXN5bmNDb21wb25lbnQsXHJcbiAgZGVmaW5lQ29tcG9uZW50LFxyXG4gIG9uTW91bnRlZCxcclxuICBwcm92aWRlLFxyXG4gIFJlZixcclxuICByZWYsXHJcbn0gZnJvbSAndnVlJztcclxuaW1wb3J0IHVzZUJhY2tlbmQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlQmFja2VuZCc7XHJcblxyXG4vLyBJbXBvcnQgY29tcG9uZW50cy5cclxuY29uc3QgQnVzaW5lc3NMaXN0QWRkID0gZGVmaW5lQXN5bmNDb21wb25lbnQoXHJcbiAgKCkgPT4gaW1wb3J0KCcuL0J1c2luZXNzTGlzdEFkZC52dWUnKVxyXG4pO1xyXG5jb25zdCBCdXNpbmVzc0xpc3RDYXJkID0gZGVmaW5lQXN5bmNDb21wb25lbnQoXHJcbiAgKCkgPT4gaW1wb3J0KCcuL0J1c2luZXNzTGlzdENhcmQudnVlJylcclxuKTtcclxuY29uc3QgQnVzaW5lc3NMaXN0RHJvcGRvd24gPSBkZWZpbmVBc3luY0NvbXBvbmVudChcclxuICAoKSA9PiBpbXBvcnQoJy4vQnVzaW5lc3NMaXN0RHJvcGRvd24udnVlJylcclxuKTtcclxuY29uc3QgQnVzaW5lc3NMaXN0U2VhcmNoYmFyID0gZGVmaW5lQXN5bmNDb21wb25lbnQoXHJcbiAgKCkgPT4gaW1wb3J0KCcuL0J1c2luZXNzTGlzdFNlYXJjaGJhci52dWUnKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICBuYW1lOiAnQnVzaW5lc3NMaXN0JyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBCdXNpbmVzc0xpc3RBZGQsXHJcbiAgICBCdXNpbmVzc0xpc3RDYXJkLFxyXG4gICAgQnVzaW5lc3NMaXN0U2VhcmNoYmFyLFxyXG4gICAgQnVzaW5lc3NMaXN0RHJvcGRvd24sXHJcbiAgfSxcclxuXHJcbiAgc2V0dXAoKSB7XHJcbiAgICAvLyBEZWNsYXJlIGRhdGEgcHJvcGVydGllcy5cclxuICAgIGNvbnN0IGlzTG9hZGluZzogUmVmPGJvb2xlYW4+ID0gcmVmKHRydWUpO1xyXG4gICAgY29uc3QgcGFnZU5vOiBSZWY8bnVtYmVyPiA9IHJlZigxKTtcclxuXHJcbiAgICAvLyBHZXQgYmFja2VuZCBwcm9wZXJ0aWVzLlxyXG4gICAgY29uc3Qge1xyXG4gICAgICBzZWFyY2hUZXJtLFxyXG4gICAgICBmaWx0ZXJUZXJtLFxyXG4gICAgICBidXNpbmVzc2VzLFxyXG4gICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICBoYXNCdXNpbmVzc2VzLFxyXG4gICAgICBnZXRCdXNpbmVzc2VzLFxyXG4gICAgICBnZXRDYXRlZ29yaWVzLFxyXG4gICAgfSA9IHVzZUJhY2tlbmQoKTtcclxuXHJcbiAgICAvLyBGZXRjaCB0aGUgZGF0YSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgIG9uTW91bnRlZCgoKSA9PiB7XHJcbiAgICAgIC8vIFNldCB0byBsb2FkaW5nLlxyXG4gICAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlO1xyXG5cclxuICAgICAgLy8gR2V0IHRoZSBmaXJzdCBidXNpbmVzc2VzIG9uIHBhZ2UgbG9hZC5cclxuICAgICAgZ2V0QnVzaW5lc3NlcyhwYWdlTm8udmFsdWUpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBidXNpbmVzc2VzLnZhbHVlID0gWy4uLnJlc3BvbnNlLmRhdGFdO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxuXHJcbiAgICAgIC8vIEdldCB0aGUgYWN0aXZlIGNhdGVnb3JpZXMgb24gcGFnZSBsb2FkLlxyXG4gICAgICBnZXRDYXRlZ29yaWVzKClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNhdGVnb3JpZXMudmFsdWUgPSBbXHJcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlLmRhdGEuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkuc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT09ICdhY3RpdmUnXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxuXHJcbiAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIGZldGNoIG1vcmUgcmVjb3JkcyBvbiBzY3JvbGwtdG8tYm90dG9tLlxyXG4gICAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAvLyBTZXQgdGhlIHN0YXRlIHRvIGxvYWRpbmcuXHJcbiAgICAgICAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIC8vIEFkZCB0aGUgcGFnZSBjb3VudC5cclxuICAgICAgICAgIHBhZ2VOby52YWx1ZSArPSAxO1xyXG5cclxuICAgICAgICAgIC8vIEdldCB0aGUgcmVxdWVzdHMuXHJcbiAgICAgICAgICBnZXRCdXNpbmVzc2VzKHBhZ2VOby52YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYW55IG5ldyBkYXRhIHdhcyByZXR1cm5lZC5cclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGJ1c2luZXNzZXMgd2l0aCB0aGUgaW5jb21pbmcgZGF0YS5cclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzZXMudmFsdWUucHVzaCguLi5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVjcmVtZW50IHRoZSBwYWdlIGNvdW50ZXIuXHJcbiAgICAgICAgICAgICAgICBwYWdlTm8udmFsdWUgLT0gMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gRGVjcmVtZW50IHRoZSBwYWdlIGNvdW50ZXIuXHJcbiAgICAgICAgICAgICAgcGFnZU5vLnZhbHVlIC09IDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIFNldCB0aGUgc3RhdGUgZnJvbSBsb2FkaW5nLlxyXG4gICAgICAgICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gU2V0IGZyb20gbG9hZGluZy5cclxuICAgICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQcm92aWRlIHRoZSBjYXRlZ29yaWVzIGFuZCB1cGRhdGVCdXNpbmVzcyB0byB0aGUgY2hpbGRyZW4uXHJcbiAgICBwcm92aWRlKCdjYXRlZ29yaWVzJywgY2F0ZWdvcmllcyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICBzZWFyY2hUZXJtLFxyXG4gICAgICBmaWx0ZXJUZXJtLFxyXG4gICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICBidXNpbmVzc2VzLFxyXG4gICAgICBoYXNCdXNpbmVzc2VzLFxyXG4gICAgfTtcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IHsgY29tcHV0ZWQsIFJlZiwgcmVmIH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgSUJ1c2luZXNzLCBJQnVzaW5lc3NGb3JtLCBJQ2F0ZWdvcnksIElQYWdpbmF0ZWRCdXNpbmVzc1Jlc3BvbnNlLCBJUGFnaW5hdGVkQ2F0ZWdvcnlSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XG5cbi8vIEFQSSBCYXNlIFVSSS5cbmNvbnN0IGJhc2VVcmw6IHN0cmluZyA9ICdodHRwczovL2hlYXJ0b2ZrZW55YS5jb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VCYWNrZW5kKCkge1xuICBjb25zdCBzZWFyY2hUZXJtOiBSZWY8c3RyaW5nPiA9IHJlZignJyk7XG4gIGNvbnN0IGZpbHRlclRlcm06IFJlZjxzdHJpbmc+ID0gcmVmKCcnKTtcbiAgY29uc3QgY2F0ZWdvcmllczogUmVmPElDYXRlZ29yeVtdPiA9IHJlZihbXG4gICAge1xuICAgICAgXCJwYXJhbVwiOiBcImJlYXV0eVwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkJlYXV0eSBhbmQgSGVhbHRoXCIsXG4gICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBhcmFtXCI6IFwiYm9va3N0b3Jlc1wiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkJvb2sgU3RvcmVzXCIsXG4gICAgICBcInN0YXR1c1wiOiBcIkFjdGl2ZVwiXG4gICAgfVxuICBdKTtcbiAgY29uc3QgYnVzaW5lc3NlczogUmVmPElCdXNpbmVzc1tdPiA9IHJlZihbXG4gICAge1xuICAgICAgXCJkaXJlY3RvcnlJZHhcIjogNCxcbiAgICAgIFwid29ybGRpZFwiOiBcImtlbnlhaGVhcnRcIixcbiAgICAgIFwibGlicmFyeVwiOiBcIk1hY2hha29zXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiQmVhdXR5XCIsXG4gICAgICBcInRpdGxlXCI6IFwiUnV0aCBCZWF1dHkgUGFybG91clwiLFxuICAgICAgXCJvd25lclwiOiBcIkJlcm5hcmRcIixcbiAgICAgIFwid2Vic2l0ZVwiOiBcIlwiLFxuICAgICAgXCJjaXR5XCI6IFwiTWFjaGFrb3NcIixcbiAgICAgIFwibG9jYWxvd25lZFwiOiBudWxsLFxuICAgICAgXCJzdGF0dXNcIjogXCJBY3RpdmVcIixcbiAgICAgIFwibW9kaWZpZWRcIjogXCI0LzE2LzIwMjEgMTE6NTU6MzUgUE1cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJkaXJlY3RvcnlJZHhcIjogMSxcbiAgICAgIFwid29ybGRpZFwiOiBcImtlbnlhaGVhcnRcIixcbiAgICAgIFwibGlicmFyeVwiOiBcIm1hY2hha29zXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYm9va3N0b3Jlc1wiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkNoYXAgQ2hhcCBFbnRlcnByaXNlXCIsXG4gICAgICBcIm93bmVyXCI6IFwiUmljaGFyZCBXYXNpa2VcIixcbiAgICAgIFwid2Vic2l0ZVwiOiBudWxsLFxuICAgICAgXCJjaXR5XCI6IFwiTWFjaGFrb3NcIixcbiAgICAgIFwibG9jYWxvd25lZFwiOiBcInRydWVcIixcbiAgICAgIFwic3RhdHVzXCI6IFwiQWN0aXZlXCIsXG4gICAgICBcIm1vZGlmaWVkXCI6IFwiXCJcbiAgICB9XG4gIF0pO1xuXG4gIGNvbnN0IGhhc0NhdGVnb3JpZXM6IFJlZjxib29sZWFuPiA9IGNvbXB1dGVkKCgpID0+IGNhdGVnb3JpZXMudmFsdWUubGVuZ3RoID4gMClcbiAgY29uc3QgaGFzQnVzaW5lc3NlczogUmVmPGJvb2xlYW4+ID0gY29tcHV0ZWQoKCkgPT4gYnVzaW5lc3Nlcy52YWx1ZS5sZW5ndGggPiAwKVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBxdWVyeSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHBhZ2Uge251bWJlcn0gVGhlIHBhZ2UgbnVtYmVyLlxuICAgKiBAcGFyYW0gdGVybSB7bnVsbCB8IHN0cmluZ30gVGhlIHNlYXJjaCB0ZXJtXG4gICAqIEByZXR1cm5zIFByb21pc2U8SUJ1c2luZXNzW10+XG4gICAqIEBhdXRob3IgQnJpYW4gSy4gS2lyYWd1IDxia2FyaXVraUBob3RtYWlsLmNvbT5cbiAgICovXG4gIGNvbnN0IGdldEJ1c2luZXNzZXMgPSBhc3luYyAoXG4gICAgcGFnZTogbnVtYmVyID0gMSxcbiAgICB0ZXJtOiBudWxsIHwgc3RyaW5nID0gbnVsbFxuICApOiBQcm9taXNlPElQYWdpbmF0ZWRCdXNpbmVzc1Jlc3BvbnNlPiA9PiB7XG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IGVuZHBvaW50LlxuICAgIGxldCBlbmRwb2ludCA9IGAke2Jhc2VVcmx9L1RhYmxlU2VhcmNoSnNvbj9jb25maWc9ZGlyZWN0b3J5TWFjaGFrb3NKc29uJnBhZ2U9JHtwYWdlfWA7XG5cbiAgICAvLyBDaGVjayBpZiBhIHNlYXJjaCB0ZXJtIHdhcyBwcm92aWRlZC5cbiAgICBlbmRwb2ludCA9IHRlcm0gPyBgJHtlbmRwb2ludH0mc2VhcmNoPSR7dGVybX1gIDogZW5kcG9pbnQ7XG5cbiAgICAvLyBMYXVuY2ggdGhlIHJlcXVlc3QuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCk7XG5cbiAgICAvLyBDaGVjayBmb3IgZXJyb3JzLlxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgd2FzIGFuIGVycm9yICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGRhdGEgZnJvbSB0aGUgcmVxdWVzdC5cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhIGJ1c2luZXNzXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhIHtJQnVzaW5lc3NGb3JtfSBVc2VyIGlucHV0IGRhdGFcbiAgICogQGF1dGhvciBCcmlhbiBLLiBLaXJhZ3UgPGJrYXJpdWtpQGhvdG1haWwuY29tPlxuICAgKi9cbiAgY29uc3QgdXBkYXRlQnVzaW5lc3MgPSBhc3luYyAoZGF0YTogSUJ1c2luZXNzRm9ybSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIC8vIExhdW5jaCB0aGUgcmVxdWVzdC5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVcmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pO1xuXG4gICAgLy8gQ2hlY2sgZm9yIGVycm9ycy5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIHdhcyBhbiBlcnJvciAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBkYXRhIGZyb20gdGhlIHJlcXVlc3QuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIC8qKlxuICAqIEZ1bmN0aW9uIHRvIHF1ZXJ5IGNhdGVnb3JpZXMuXG4gICpcbiAgKiBAcGFyYW0gcGFnZSB7bnVtYmVyfSBUaGUgcGFnZSBudW1iZXIuXG4gICogQHBhcmFtIHRlcm0ge251bGwgfCBzdHJpbmd9IFRoZSBzZWFyY2ggdGVybVxuICAqIEByZXR1cm5zIFByb21pc2U8L0lDYXRlZ29yeVtdPlxuICAqIEBhdXRob3IgQnJpYW4gSy4gS2lyYWd1IDxia2FyaXVraUBob3RtYWlsLmNvbT5cbiAgKi9cbiAgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jIChcbiAgICBwYWdlOiBudW1iZXIgPSAxLFxuICAgIHRlcm06IG51bGwgfCBzdHJpbmcgPSBudWxsXG4gICk6IFByb21pc2U8SVBhZ2luYXRlZENhdGVnb3J5UmVzcG9uc2U+ID0+IHtcbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgZW5kcG9pbnQuXG4gICAgbGV0IGVuZHBvaW50ID0gYCR7YmFzZVVybH0vVGFibGVTZWFyY2hKc29uP2NvbmZpZz1idXNpbmVzc0NhdGVnb3JpZXMmcGFnZT0ke3BhZ2V9YDtcblxuICAgIC8vIENoZWNrIGlmIGEgc2VhcmNoIHRlcm0gd2FzIHByb3ZpZGVkLlxuICAgIGVuZHBvaW50ID0gdGVybSA/IGAke2VuZHBvaW50fSZzZWFyY2g9JHt0ZXJtfWAgOiBlbmRwb2ludDtcblxuICAgIC8vIExhdW5jaCB0aGUgcmVxdWVzdC5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcblxuICAgIC8vIENoZWNrIGZvciBlcnJvcnMuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSB3YXMgYW4gZXJyb3IgJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgZGF0YSBmcm9tIHRoZSByZXF1ZXN0LlxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIGZ1bmN0aW9uIHJlc3VsdHMuXG4gIHJldHVybiB7XG4gICAgc2VhcmNoVGVybSxcbiAgICBmaWx0ZXJUZXJtLFxuICAgIGNhdGVnb3JpZXMsXG4gICAgYnVzaW5lc3NlcyxcbiAgICBoYXNDYXRlZ29yaWVzLFxuICAgIGhhc0J1c2luZXNzZXMsXG4gICAgZ2V0Q2F0ZWdvcmllcyxcbiAgICBnZXRCdXNpbmVzc2VzLFxuICAgIHVwZGF0ZUJ1c2luZXNzXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQnVzaW5lc3NMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzMyMDI0YSZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0J1c2luZXNzTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQnVzaW5lc3NMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vQnVzaW5lc3NMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3MzIwMjRhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5zY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNjczMjAyNGFcIlxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcIjY3MzIwMjRhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNjczMjAyNGEnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnNjczMjAyNGEnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CdXNpbmVzc0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3MzIwMjRhJnNjb3BlZD10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzY3MzIwMjRhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcInNyYy9qcy9jb21wb25lbnRzL0J1c2luZXNzTGlzdC52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzBdIS4vQnVzaW5lc3NMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMF0hLi9CdXNpbmVzc0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImJ1c2luZXNzLWxpc3QgcHgtMyBweS00XCI+XHJcbiAgICA8ZGl2IGlkPVwidGVsZXBvcnRcIj5cclxuICAgICAgPCEtLSBQYWdlIFZpZXdzLiAtLT5cclxuICAgICAgPGRpdiBpZD1cImJ1c2luZXNzLXZpZXdzXCI+PC9kaXY+XHJcblxyXG4gICAgICA8IS0tIE1vZGFscy4gLS0+XHJcbiAgICAgIDxkaXYgaWQ9XCJidXNpbmVzcy1tb2RhbHNcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gQWRkIGEgbmV3IGJ1c2luZXNzLiAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJidXNpbmVzcy1saXN0X19hZGQgbWItNVwiPlxyXG4gICAgICA8QnVzaW5lc3NMaXN0QWRkIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGctMlwiPlxyXG4gICAgICA8IS0tIERyb3Bkb3duIEZpbHRlci4gLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgIDxCdXNpbmVzc0xpc3REcm9wZG93biB2LW1vZGVsOmZpbHRlci10ZXJtLmxhenk9XCJmaWx0ZXJUZXJtXCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8IS0tIFNlYXJjaGJhci4gLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICA8QnVzaW5lc3NMaXN0U2VhcmNoYmFyIHYtbW9kZWw6c2VhcmNoLXRlcm0ubGF6eT1cInNlYXJjaFRlcm1cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gTGlzdCBvZiBidXNpbmVzc2VzLiAtLT5cclxuICAgIDxkaXYgdi1pZj1cImhhc0J1c2luZXNzZXNcIiBjbGFzcz1cImJ1c2luZXNzLWxpc3RfX2NhcmRcIj5cclxuICAgICAgPEJ1c2luZXNzTGlzdENhcmRcclxuICAgICAgICB2LWZvcj1cImJ1c2luZXNzIGluIGJ1c2luZXNzZXNcIlxyXG4gICAgICAgIDprZXk9XCJidXNpbmVzcy5kaXJlY3RvcnlJZHhcIlxyXG4gICAgICAgIDpidXNpbmVzcz1cImJ1c2luZXNzXCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICB2LWlmPVwiaXNMb2FkaW5nXCJcclxuICAgICAgICBjbGFzcz1cImJ1c2luZXNzLWxpc3RfX2xvYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiXHJcbiAgICAgICAgOmNsYXNzPVwieyAnZC1ub25lJzogIWlzTG9hZGluZyB9XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgPCEtLSA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIuLi8uLi9hc3NldHMvbG9hZGVycy9sb2FkaW5nLmdpZlwiXHJcbiAgICAgICAgICBhbHQ9XCJMb2FkZXIgaWNvblwiXHJcbiAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgLz4gLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJidXNpbmVzcy1saXN0X19uby1jYXJkcyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8cCBjbGFzcz1cIm1iLTQgbXQtNVwiPlRoZXJlIGFyZSBubyBidXNpbmVzc2VzIHRvIGRpc3BsYXkuPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXHJcbmltcG9ydCB7XHJcbiAgZGVmaW5lQXN5bmNDb21wb25lbnQsXHJcbiAgZGVmaW5lQ29tcG9uZW50LFxyXG4gIG9uTW91bnRlZCxcclxuICBwcm92aWRlLFxyXG4gIFJlZixcclxuICByZWYsXHJcbn0gZnJvbSAndnVlJztcclxuaW1wb3J0IHVzZUJhY2tlbmQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlQmFja2VuZCc7XHJcblxyXG4vLyBJbXBvcnQgY29tcG9uZW50cy5cclxuY29uc3QgQnVzaW5lc3NMaXN0QWRkID0gZGVmaW5lQXN5bmNDb21wb25lbnQoXHJcbiAgKCkgPT4gaW1wb3J0KCcuL0J1c2luZXNzTGlzdEFkZC52dWUnKVxyXG4pO1xyXG5jb25zdCBCdXNpbmVzc0xpc3RDYXJkID0gZGVmaW5lQXN5bmNDb21wb25lbnQoXHJcbiAgKCkgPT4gaW1wb3J0KCcuL0J1c2luZXNzTGlzdENhcmQudnVlJylcclxuKTtcclxuY29uc3QgQnVzaW5lc3NMaXN0RHJvcGRvd24gPSBkZWZpbmVBc3luY0NvbXBvbmVudChcclxuICAoKSA9PiBpbXBvcnQoJy4vQnVzaW5lc3NMaXN0RHJvcGRvd24udnVlJylcclxuKTtcclxuY29uc3QgQnVzaW5lc3NMaXN0U2VhcmNoYmFyID0gZGVmaW5lQXN5bmNDb21wb25lbnQoXHJcbiAgKCkgPT4gaW1wb3J0KCcuL0J1c2luZXNzTGlzdFNlYXJjaGJhci52dWUnKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICBuYW1lOiAnQnVzaW5lc3NMaXN0JyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBCdXNpbmVzc0xpc3RBZGQsXHJcbiAgICBCdXNpbmVzc0xpc3RDYXJkLFxyXG4gICAgQnVzaW5lc3NMaXN0U2VhcmNoYmFyLFxyXG4gICAgQnVzaW5lc3NMaXN0RHJvcGRvd24sXHJcbiAgfSxcclxuXHJcbiAgc2V0dXAoKSB7XHJcbiAgICAvLyBEZWNsYXJlIGRhdGEgcHJvcGVydGllcy5cclxuICAgIGNvbnN0IGlzTG9hZGluZzogUmVmPGJvb2xlYW4+ID0gcmVmKHRydWUpO1xyXG4gICAgY29uc3QgcGFnZU5vOiBSZWY8bnVtYmVyPiA9IHJlZigxKTtcclxuXHJcbiAgICAvLyBHZXQgYmFja2VuZCBwcm9wZXJ0aWVzLlxyXG4gICAgY29uc3Qge1xyXG4gICAgICBzZWFyY2hUZXJtLFxyXG4gICAgICBmaWx0ZXJUZXJtLFxyXG4gICAgICBidXNpbmVzc2VzLFxyXG4gICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICBoYXNCdXNpbmVzc2VzLFxyXG4gICAgICBnZXRCdXNpbmVzc2VzLFxyXG4gICAgICBnZXRDYXRlZ29yaWVzLFxyXG4gICAgfSA9IHVzZUJhY2tlbmQoKTtcclxuXHJcbiAgICAvLyBGZXRjaCB0aGUgZGF0YSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC5cclxuICAgIG9uTW91bnRlZCgoKSA9PiB7XHJcbiAgICAgIC8vIFNldCB0byBsb2FkaW5nLlxyXG4gICAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlO1xyXG5cclxuICAgICAgLy8gR2V0IHRoZSBmaXJzdCBidXNpbmVzc2VzIG9uIHBhZ2UgbG9hZC5cclxuICAgICAgZ2V0QnVzaW5lc3NlcyhwYWdlTm8udmFsdWUpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBidXNpbmVzc2VzLnZhbHVlID0gWy4uLnJlc3BvbnNlLmRhdGFdO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxuXHJcbiAgICAgIC8vIEdldCB0aGUgYWN0aXZlIGNhdGVnb3JpZXMgb24gcGFnZSBsb2FkLlxyXG4gICAgICBnZXRDYXRlZ29yaWVzKClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNhdGVnb3JpZXMudmFsdWUgPSBbXHJcbiAgICAgICAgICAgIC4uLnJlc3BvbnNlLmRhdGEuZmlsdGVyKFxyXG4gICAgICAgICAgICAgIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkuc3RhdHVzLnRvTG93ZXJDYXNlKCkgPT09ICdhY3RpdmUnXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpKTtcclxuXHJcbiAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIGZldGNoIG1vcmUgcmVjb3JkcyBvbiBzY3JvbGwtdG8tYm90dG9tLlxyXG4gICAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAvLyBTZXQgdGhlIHN0YXRlIHRvIGxvYWRpbmcuXHJcbiAgICAgICAgICBpc0xvYWRpbmcudmFsdWUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIC8vIEFkZCB0aGUgcGFnZSBjb3VudC5cclxuICAgICAgICAgIHBhZ2VOby52YWx1ZSArPSAxO1xyXG5cclxuICAgICAgICAgIC8vIEdldCB0aGUgcmVxdWVzdHMuXHJcbiAgICAgICAgICBnZXRCdXNpbmVzc2VzKHBhZ2VOby52YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYW55IG5ldyBkYXRhIHdhcyByZXR1cm5lZC5cclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGJ1c2luZXNzZXMgd2l0aCB0aGUgaW5jb21pbmcgZGF0YS5cclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzZXMudmFsdWUucHVzaCguLi5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVjcmVtZW50IHRoZSBwYWdlIGNvdW50ZXIuXHJcbiAgICAgICAgICAgICAgICBwYWdlTm8udmFsdWUgLT0gMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gRGVjcmVtZW50IHRoZSBwYWdlIGNvdW50ZXIuXHJcbiAgICAgICAgICAgICAgcGFnZU5vLnZhbHVlIC09IDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIFNldCB0aGUgc3RhdGUgZnJvbSBsb2FkaW5nLlxyXG4gICAgICAgICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gU2V0IGZyb20gbG9hZGluZy5cclxuICAgICAgaXNMb2FkaW5nLnZhbHVlID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQcm92aWRlIHRoZSBjYXRlZ29yaWVzIGFuZCB1cGRhdGVCdXNpbmVzcyB0byB0aGUgY2hpbGRyZW4uXHJcbiAgICBwcm92aWRlKCdjYXRlZ29yaWVzJywgY2F0ZWdvcmllcyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNMb2FkaW5nLFxyXG4gICAgICBzZWFyY2hUZXJtLFxyXG4gICAgICBmaWx0ZXJUZXJtLFxyXG4gICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICBidXNpbmVzc2VzLFxyXG4gICAgICBoYXNCdXNpbmVzc2VzLFxyXG4gICAgfTtcclxuICB9LFxyXG59KTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5idXNpbmVzcy1saXN0IHtcclxuICBjb2xvcjogaHNsKDIxNywgMTklLCAyNyUpO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMF0hLi9CdXNpbmVzc0xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjczMjAyNGEmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjNhM2U0ZTMyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMF0hLi9CdXNpbmVzc0xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjczMjAyNGEmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVswXSEuL0J1c2luZXNzTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzMyMDI0YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==