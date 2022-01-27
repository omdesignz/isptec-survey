"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Survey_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Survey.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Survey.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/disclosure/disclosure.esm.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/menu/menu.esm.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/radio-group/radio-group.esm.js");
/* harmony import */ var _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/vue/outline */ "./node_modules/@heroicons/vue/outline/esm/index.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/index.js");
/* harmony import */ var _Shared_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/Logo */ "./resources/js/Shared/Logo.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _vueform_multiselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vueform/multiselect */ "./node_modules/@vueform/multiselect/dist/multiselect.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    layout: null,
    classes: Array,
    subjects: Array
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var genderOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      value: 'M',
      label: 'Masculino',
      description: null
    }, {
      value: 'F',
      label: 'Feminino',
      description: null
    }]);
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_4__.useForm)({
      gender: 'M',
      "class": null,
      subjects: [],
      no_delays: [],
      few_delays: [],
      lots_of_delays: [],
      no_absences: [],
      few_absences: [],
      lots_of_absences: []
    });

    var submit = function submit() {
      form.post('/surveys', {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          form.reset();
        }
      });
    };

    var selectClasses = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return {
        container: 'relative max-w-lg w-full flex items-center justify-end cursor-pointer border-gray-300 rounded-md bg-white text-base leading-snug outline-none sm:max-w-xs sm:text-sm',
        containerDisabled: 'cursor-default bg-gray-100',
        containerOpen: 'rounded-b-none',
        containerOpenTop: 'rounded-t-none',
        containerActive: '',
        singleLabel: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5',
        multipleLabel: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5',
        search: 'max-w-lg w-full absolute shadow-sm border-gray-300 text-base font-sans bg-white rounded-md pl-3.5 sm:text-sm',
        tags: 'flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2',
        tag: 'bg-yellow-400 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap',
        tagDisabled: 'pr-2 opacity-50',
        tagRemove: 'flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group',
        tagRemoveIcon: 'bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60',
        tagsSearchWrapper: 'inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full',
        tagsSearch: 'absolute inset-0 border-0 outline-none appearance-none p-0 text-base font-sans box-border w-full',
        tagsSearchCopy: 'invisible whitespace-pre-wrap inline-block h-px',
        placeholder: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400',
        caret: 'bg-multiselect-caret bg-center bg-no-repeat w-2.5 h-4 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none',
        caretOpen: 'rotate-180 pointer-events-auto',
        clear: 'pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80',
        clearIcon: 'bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block',
        spinner: 'bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0',
        dropdown: 'max-h-60 absolute -left-px -right-px bottom-0 transform translate-y-full border border-gray-300 -mt-px overflow-y-scroll z-50 bg-white flex flex-col rounded-b',
        dropdownTop: '-translate-y-full top-px bottom-auto flex-col-reverse rounded-b-none rounded-t',
        dropdownHidden: 'hidden',
        options: 'flex flex-col p-0 m-0 list-none',
        optionsTop: 'flex-col-reverse',
        group: 'p-0 m-0',
        groupLabel: 'flex text-sm box-border items-center justify-start text-left py-1 px-3 font-semibold bg-gray-200 cursor-default leading-normal',
        groupLabelPointable: 'cursor-pointer',
        groupLabelPointed: 'bg-gray-300 text-gray-700',
        groupLabelSelected: 'bg-green-600 text-white',
        groupLabelDisabled: 'bg-gray-100 text-gray-300 cursor-not-allowed',
        groupLabelSelectedPointed: 'bg-green-600 text-white opacity-90',
        groupLabelSelectedDisabled: 'text-green-100 bg-green-600 bg-opacity-50 cursor-not-allowed',
        groupOptions: 'p-0 m-0',
        option: 'flex items-center justify-start box-border text-left cursor-pointer text-base leading-snug py-2 px-3',
        optionPointed: 'text-gray-800 bg-gray-100',
        optionSelected: 'text-white bg-yellow-400',
        optionDisabled: 'text-gray-300 cursor-not-allowed',
        optionSelectedPointed: 'text-white bg-yellow-400 opacity-90',
        optionSelectedDisabled: 'text-green-100 bg-yellow-400 bg-opacity-50 cursor-not-allowed',
        noOptions: 'py-2 px-3 text-gray-600 bg-white',
        noResults: 'py-2 px-3 text-gray-600 bg-white',
        fakeInput: 'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent',
        spacer: 'h-9 py-px box-content'
      };
    });
    var __returned__ = {
      genderOptions: genderOptions,
      form: form,
      submit: submit,
      selectClasses: selectClasses,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      Disclosure: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.Disclosure,
      DisclosureButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.DisclosureButton,
      DisclosurePanel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_6__.DisclosurePanel,
      Menu: _headlessui_vue__WEBPACK_IMPORTED_MODULE_7__.Menu,
      MenuButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_7__.MenuButton,
      MenuItem: _headlessui_vue__WEBPACK_IMPORTED_MODULE_7__.MenuItem,
      MenuItems: _headlessui_vue__WEBPACK_IMPORTED_MODULE_7__.MenuItems,
      RadioGroup: _headlessui_vue__WEBPACK_IMPORTED_MODULE_8__.RadioGroup,
      RadioGroupDescription: _headlessui_vue__WEBPACK_IMPORTED_MODULE_8__.RadioGroupDescription,
      RadioGroupLabel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_8__.RadioGroupLabel,
      RadioGroupOption: _headlessui_vue__WEBPACK_IMPORTED_MODULE_8__.RadioGroupOption,
      BellIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__.BellIcon,
      MenuIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__.MenuIcon,
      XIcon: _heroicons_vue_outline__WEBPACK_IMPORTED_MODULE_1__.XIcon,
      CheckCircleIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_2__.CheckCircleIcon,
      Logo: _Shared_Logo__WEBPACK_IMPORTED_MODULE_3__["default"],
      useForm: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_4__.useForm,
      Multiselect: _vueform_multiselect__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Survey.vue?vue&type=template&id=42540143":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Survey.vue?vue&type=template&id=42540143 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "relative flex items-center justify-between h-16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "absolute inset-y-0 left-0 flex items-center sm:hidden"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-shrink-0 flex items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <logo class=\"fill-white block h-8\" width=\"320\" height=\"72\" /> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img class=\"block lg:hidden h-8 w-auto\" src=\"https://tailwindui.com/img/logos/workflow-mark-yellow-400.svg\" alt=\"Workflow\" />\n            <img class=\"hidden lg:block h-8 w-auto\" src=\"https://tailwindui.com/img/logos/workflow-logo-yellow-400-mark-white-text.svg\" alt=\"Workflow\" /> ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "hidden sm:block sm:ml-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex space-x-4"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
})])], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "bg-white shadow sm:rounded-lg ml-4 mr-4 mt-4"
};
var _hoisted_4 = {
  "class": "px-4 py-5 sm:p-6"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg leading-6 font-medium text-gray-900"
}, " Género ", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "mt-2 max-w-xl text-sm text-gray-500"
};
var _hoisted_7 = {
  "class": "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
};
var _hoisted_8 = {
  "class": "flex-1 flex"
};
var _hoisted_9 = {
  "class": "flex flex-col"
};
var _hoisted_10 = {
  "class": "mt-3 text-sm"
};
var _hoisted_11 = {
  key: 0,
  "class": "mt-2 text-sm text-red-600",
  id: "name-error"
};
var _hoisted_12 = {
  "class": "bg-white shadow sm:rounded-lg ml-4 mr-4 mt-4"
};
var _hoisted_13 = {
  "class": "px-4 py-5 sm:p-6"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg leading-6 font-medium text-gray-900"
}, " Turma ", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "mt-2 max-w-xl text-sm text-gray-500"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Por favor, seleccione a turma em que está inscrita no presente semestre lectivo (1º Semestre Ano Lectivo 2021/2022). ", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "mt-3 text-sm"
};
var _hoisted_18 = {
  key: 0,
  "class": "mt-2 text-sm text-red-600",
  id: "name-error"
};
var _hoisted_19 = {
  "class": "bg-white shadow sm:rounded-lg ml-4 mr-4 mt-4"
};
var _hoisted_20 = {
  "class": "px-4 py-5 sm:p-6"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg leading-6 font-medium text-gray-900"
}, " PONTUALIDADE ", -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2 max-w-xl text-lg text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Indique as disciplinas em que o respectivo docente "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "não tem registado atrasos "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" às aulas. ")])], -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "mt-3 text-sm"
};
var _hoisted_24 = {
  role: "list",
  "class": "mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
};
var _hoisted_25 = {
  "class": "flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md"
};
var _hoisted_26 = ["id", "name", "value"];
var _hoisted_27 = {
  "class": "flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
};
var _hoisted_28 = {
  "class": "flex-1 px-4 py-2 text-sm truncate"
};
var _hoisted_29 = {
  "class": "text-gray-500"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_31 = {
  key: 0,
  "class": "mt-2 text-sm text-red-600",
  id: "no_delays-error"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2 max-w-xl text-lg text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Indique as disciplinas em que o respectivo docente "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "tem registado poucos atrasos "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" às aulas. ")])], -1
/* HOISTED */
);

var _hoisted_34 = {
  "class": "mt-3 text-sm"
};
var _hoisted_35 = {
  role: "list",
  "class": "mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
};
var _hoisted_36 = {
  "class": "flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md"
};
var _hoisted_37 = ["id", "name", "value"];
var _hoisted_38 = {
  "class": "flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
};
var _hoisted_39 = {
  "class": "flex-1 px-4 py-2 text-sm truncate"
};
var _hoisted_40 = {
  "class": "text-gray-500"
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_42 = {
  key: 0,
  "class": "mt-2 text-sm text-red-600",
  id: "few_delays-error"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2 max-w-xl text-lg text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Indique as disciplinas em que o respectivo docente "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "tem registado muitos atrasos "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" às aulas. ")])], -1
/* HOISTED */
);

var _hoisted_45 = {
  "class": "mt-3 text-sm"
};
var _hoisted_46 = {
  role: "list",
  "class": "mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
};
var _hoisted_47 = {
  "class": "flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md"
};
var _hoisted_48 = ["id", "name", "value"];
var _hoisted_49 = {
  "class": "flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
};
var _hoisted_50 = {
  "class": "flex-1 px-4 py-2 text-sm truncate"
};
var _hoisted_51 = {
  "class": "text-gray-500"
};

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_53 = {
  key: 0,
  "class": "mt-2 text-sm text-red-600",
  id: "lots_of_delays-error"
};

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex justify-end mt-4"
}, null, -1
/* HOISTED */
);

var _hoisted_56 = {
  "class": "bg-white shadow sm:rounded-lg ml-4 mr-4 mt-4"
};
var _hoisted_57 = {
  "class": "px-4 py-5 sm:p-6"
};

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-lg leading-6 font-medium text-gray-900"
}, " ASSIDUIDADE ", -1
/* HOISTED */
);

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2 max-w-xl text-lg text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Indique as disciplinas em que o respectivo docente "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "não tem registado faltas "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" às aulas. ")])], -1
/* HOISTED */
);

var _hoisted_60 = {
  "class": "mt-3 text-sm"
};
var _hoisted_61 = {
  role: "list",
  "class": "mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
};
var _hoisted_62 = {
  "class": "flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md"
};
var _hoisted_63 = ["id", "name", "value"];
var _hoisted_64 = {
  "class": "flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
};
var _hoisted_65 = {
  "class": "flex-1 px-4 py-2 text-sm truncate"
};
var _hoisted_66 = {
  "class": "text-gray-500"
};

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_68 = {
  key: 0,
  "class": "mt-2 text-sm text-red-600",
  id: "no_absences-error"
};

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2 max-w-xl text-lg text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Indique as disciplinas em que o respectivo docente "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "tem registado poucas faltas "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" às aulas. ")])], -1
/* HOISTED */
);

var _hoisted_71 = {
  "class": "mt-3 text-sm"
};
var _hoisted_72 = {
  role: "list",
  "class": "mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
};
var _hoisted_73 = {
  "class": "flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md"
};
var _hoisted_74 = ["id", "name", "value"];
var _hoisted_75 = {
  "class": "flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
};
var _hoisted_76 = {
  "class": "flex-1 px-4 py-2 text-sm truncate"
};
var _hoisted_77 = {
  "class": "text-gray-500"
};

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_79 = {
  key: 0,
  "class": "mt-2 text-sm text-red-600",
  id: "few_absences-error"
};

var _hoisted_80 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2 max-w-xl text-lg text-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Indique as disciplinas em que o respectivo docente "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "tem registado muitos atrasos "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" às aulas. ")])], -1
/* HOISTED */
);

var _hoisted_82 = {
  "class": "mt-3 text-sm"
};
var _hoisted_83 = {
  role: "list",
  "class": "mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
};
var _hoisted_84 = {
  "class": "flex-shrink-0 flex items-center justify-center w-16 text-gray-800 text-sm font-medium rounded-l-md"
};
var _hoisted_85 = ["id", "name", "value"];
var _hoisted_86 = {
  "class": "flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
};
var _hoisted_87 = {
  "class": "flex-1 px-4 py-2 text-sm truncate"
};
var _hoisted_88 = {
  "class": "text-gray-500"
};

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_90 = {
  key: 0,
  "class": "mt-2 text-sm text-red-600",
  id: "lots_of_absences-error"
};

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_92 = {
  "class": "flex justify-end mt-4"
};
var _hoisted_93 = ["disabled"];

var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Disclosure"], {
    as: "nav",
    "class": "bg-white"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var open = _ref.open;
      return [_hoisted_1, _hoisted_2];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RadioGroup"], {
    modelValue: $setup.form.gender,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.gender = $event;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RadioGroupLabel"], {
        "class": "text-base font-medium text-gray-900"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.genderOptions, function (gender) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["RadioGroupOption"], {
          as: "template",
          key: gender.value,
          value: gender.value
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
            var checked = _ref2.checked,
                active = _ref2.active;
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([checked ? 'border-transparent' : 'border-gray-300', active ? 'ring-2 ring-yellow-400' : '', 'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'])
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RadioGroupLabel"], {
              as: "span",
              "class": "block text-sm font-medium text-gray-900"
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gender.label), 1
                /* TEXT */
                )];
              }),
              _: 2
              /* DYNAMIC */

            }, 1024
            /* DYNAMIC_SLOTS */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["RadioGroupDescription"], {
              as: "span",
              "class": "mt-1 flex items-center text-sm text-gray-500"
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gender.description), 1
                /* TEXT */
                )];
              }),
              _: 2
              /* DYNAMIC */

            }, 1024
            /* DYNAMIC_SLOTS */
            )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CheckCircleIcon"], {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([!checked ? 'invisible' : '', 'h-5 w-5 text-yellow-500']),
              "aria-hidden": "true"
            }, null, 8
            /* PROPS */
            , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
              "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'border' : 'border-2', checked ? 'border-yellow-400' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']),
              "aria-hidden": "true"
            }, null, 2
            /* CLASS */
            )], 2
            /* CLASS */
            )];
          }),
          _: 2
          /* DYNAMIC */

        }, 1032
        /* PROPS, DYNAMIC_SLOTS */
        , ["value"]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [$setup.form.errors.gender ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.gender), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Multiselect"], {
    modelValue: $setup.form["class"],
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form["class"] = $event;
    }),
    options: $props.classes,
    id: "class",
    searchable: true,
    filterResults: true,
    placeholder: "Seleccione a sua turma",
    minChars: 1,
    resolveOnLoad: true,
    delay: 0,
    mode: "single",
    ref: "class",
    classes: $setup.selectClasses,
    "class": "mt-1"
  }, null, 8
  /* PROPS */
  , ["modelValue", "options", "classes"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [$setup.form.errors["class"] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors["class"]), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_24, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.subjects, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: item.id,
      "class": "col-span-1 flex shadow-sm rounded-md bg-gray-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: item.id,
      name: item.name,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
        return $setup.form.no_delays = $event;
      }),
      type: "checkbox",
      value: item.id,
      "class": "h-4 w-4 text-green-500 focus:ring-green-500 rounded-full"
    }, null, 8
    /* PROPS */
    , _hoisted_26), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.no_delays]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    )])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), _hoisted_30, $setup.form.errors.no_delays ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.no_delays), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_32, _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_35, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.subjects, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: item.id,
      "class": "col-span-1 flex shadow-sm rounded-md bg-gray-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: item.id,
      name: item.name,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
        return $setup.form.few_delays = $event;
      }),
      type: "checkbox",
      value: item.id,
      "class": "h-4 w-4 text-orange-400 focus:ring-orange-400 rounded-full"
    }, null, 8
    /* PROPS */
    , _hoisted_37), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.few_delays]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    )])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), _hoisted_41, $setup.form.errors.few_delays ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.few_delays), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_43, _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_46, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.subjects, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: item.id,
      "class": "col-span-1 flex shadow-sm rounded-md bg-gray-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: item.id,
      name: item.name,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
        return $setup.form.lots_of_delays = $event;
      }),
      type: "checkbox",
      value: item.id,
      "class": "h-4 w-4 text-red-500 focus:ring-red-500 rounded-full"
    }, null, 8
    /* PROPS */
    , _hoisted_48), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.lots_of_delays]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    )])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), _hoisted_52, $setup.form.errors.lots_of_delays ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.lots_of_delays), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_54, _hoisted_55])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_hoisted_58, _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_61, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.subjects, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: item.id,
      "class": "col-span-1 flex shadow-sm rounded-md bg-gray-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: item.id,
      name: item.name,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
        return $setup.form.no_absences = $event;
      }),
      type: "checkbox",
      value: item.id,
      "class": "h-4 w-4 text-green-500 focus:ring-green-500 rounded-full"
    }, null, 8
    /* PROPS */
    , _hoisted_63), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.no_absences]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    )])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), _hoisted_67, $setup.form.errors.no_absences ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.no_absences), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_69, _hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_72, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.subjects, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: item.id,
      "class": "col-span-1 flex shadow-sm rounded-md bg-gray-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: item.id,
      name: item.name,
      "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
        return $setup.form.few_absences = $event;
      }),
      type: "checkbox",
      value: item.id,
      "class": "h-4 w-4 text-orange-400 focus:ring-orange-400 rounded-full"
    }, null, 8
    /* PROPS */
    , _hoisted_74), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.few_absences]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    )])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), _hoisted_78, $setup.form.errors.few_absences ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.few_absences), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_80, _hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_83, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.subjects, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: item.id,
      "class": "col-span-1 flex shadow-sm rounded-md bg-gray-100"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      id: item.id,
      name: item.name,
      "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
        return $setup.form.lots_of_absences = $event;
      }),
      type: "checkbox",
      value: item.id,
      "class": "h-4 w-4 text-red-500 focus:ring-red-500 rounded-full"
    }, null, 8
    /* PROPS */
    , _hoisted_85), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.lots_of_absences]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    )])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), _hoisted_89, $setup.form.errors.lots_of_absences ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.lots_of_absences), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $setup.form.processing,
    type: "button",
    "class": "flex items-end px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-900 bg-yellow-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400",
    onClick: _cache[8] || (_cache[8] = function () {
      return $setup.submit && $setup.submit.apply($setup, arguments);
    })
  }, " Submeter Respostas ", 8
  /* PROPS */
  , _hoisted_93)])])]), _hoisted_94], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Survey.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Survey.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Survey_vue_vue_type_template_id_42540143__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Survey.vue?vue&type=template&id=42540143 */ "./resources/js/Pages/Survey.vue?vue&type=template&id=42540143");
/* harmony import */ var _Survey_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Survey.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Survey.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_Oz_Apps_isptec_survey_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_Oz_Apps_isptec_survey_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Survey_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Survey_vue_vue_type_template_id_42540143__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Survey.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Survey.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Survey.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Survey_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Survey_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Survey.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Survey.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Survey.vue?vue&type=template&id=42540143":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Survey.vue?vue&type=template&id=42540143 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Survey_vue_vue_type_template_id_42540143__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Survey_vue_vue_type_template_id_42540143__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Survey.vue?vue&type=template&id=42540143 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Survey.vue?vue&type=template&id=42540143");


/***/ })

}]);