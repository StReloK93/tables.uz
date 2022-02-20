"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_Views_Customization_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/Customization.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/Customization.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_customization_Corners_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/customization/Corners.vue */ "./resources/js/desktop/components/customization/Corners.vue");
/* harmony import */ var _components_customization_Chair_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/customization/Chair.vue */ "./resources/js/desktop/components/customization/Chair.vue");
/* harmony import */ var _components_customization_Grommet_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/customization/Grommet.vue */ "./resources/js/desktop/components/customization/Grommet.vue");
/* harmony import */ var _components_customization_Partition_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/customization/Partition.vue */ "./resources/js/desktop/components/customization/Partition.vue");
/* harmony import */ var _components_customization_Accessories_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/customization/Accessories.vue */ "./resources/js/desktop/components/customization/Accessories.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    customPages: function customPages(page) {
      this.$store.state.customActiveLink = page;
    }
  },
  components: {
    Corners: _components_customization_Corners_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Chair: _components_customization_Chair_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Grommet: _components_customization_Grommet_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Partition: _components_customization_Partition_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Accessories: _components_customization_Accessories_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["itemCount"],
  data: function data() {
    return {
      prosent: 0,
      endItem: null,
      slots: null
    };
  },
  computed: {
    transform: function transform() {
      return {
        transform: "translateX(".concat(this.prosent, "%)")
      };
    },
    casr: function casr() {
      var count = this.$refs.mainBlock.children.length;
      if (count % this.itemCount == 0) return 0;
      return this.itemCount - count % this.itemCount;
    }
  },
  mounted: function mounted() {
    this.slots = this.$refs.mainBlock.children.length;
    var countItem = this.$refs.mainBlock.children.length - this.itemCount; //10 - 4

    var viewItem = this.itemCount;
    this.endItem = -countItem * 100 / viewItem;
  },
  methods: {
    next: function next() {
      var viewItem = this.itemCount;
      if (this.endItem < this.prosent) this.prosent += -100 / viewItem;
    },
    prev: function prev() {
      if (this.prosent < 0) this.prosent += 100 / this.itemCount;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Accessories.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Accessories.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      events: Engine.Customization
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Chair.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Chair.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Carusel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Carusel.vue */ "./resources/js/desktop/components/Carusel.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      easy: [{
        name: 'Emery Chair',
        path: '/images/easy/Emery Chair.jpg'
      }, {
        name: 'Ricks Chair',
        path: '/images/easy/Ricks Chair.png'
      }, {
        name: 'Vision Chair',
        path: '/images/easy/Vision Chair.png'
      }],
      normal: [{
        name: 'Bestuhl S10',
        path: '/images/normal/Bestuhl S10.jpg'
      }, {
        name: 'Bestuhl S15',
        path: '/images/normal/Bestuhl S15.jpg'
      }, {
        name: 'Duorest D2',
        path: '/images/normal/Duorest D2.jpg'
      }, {
        name: 'MO Chair',
        path: '/images/normal/MO Chair.jpg'
      }],
      hard: [{
        name: 'Allseating You Too',
        path: '/images/hard/Allseating You Too.jpg'
      }, {
        name: 'Lives High Back',
        path: '/images/hard/Lives High Back.jpg'
      }, {
        name: 'Okamura Slyphy',
        path: '/images/hard/Okamura Slyphy.jpg'
      }],
      hardest: [{
        name: 'Okamura Contessa Foam Seat',
        path: '/images/hardest/Okamura Contessa Foam Seat.jpg'
      }, {
        name: 'Okamura Contessa Mesh',
        path: '/images/hardest/Okamura Contessa Mesh.jpg'
      }, {
        name: 'Wagner Alumedic',
        path: '/images/hardest/Wagner Alumedic.jpg'
      }, {
        name: 'Wagner Titan Ltd S',
        path: '/images/hardest/Wagner Titan Ltd S.jpg'
      }],
      events: Engine.Customization
    };
  },
  components: {
    Carusel: _Carusel_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Corners.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Corners.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      events: Engine.Legs
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      events: Engine.Customization
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Partition.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Partition.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      events: Engine.Customization
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/Customization.vue?vue&type=template&id=08c04e9e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/Customization.vue?vue&type=template&id=08c04e9e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold xl:mb-2 xl:text-xl md:text-md text-gray-600"
}, "Customization", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "flex justify-between md:text-xs xl:text-sm"
};
var _hoisted_3 = {
  "class": "border-t border-gray-300 xl:pt-6 md:pt-4"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Corners = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Corners");

  var _component_Grommet = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Grommet");

  var _component_Partition = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Partition");

  var _component_Accessories = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Accessories");

  var _component_Chair = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Chair");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.customPages(1);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-blue-900': _ctx.$store.state.customActiveLink == 1
    }, "border-b-2 border-white px-1 py-4 hover:border-blue-900"])
  }, " Corners Finish ", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.customPages(2);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-blue-900': _ctx.$store.state.customActiveLink == 2
    }, "border-b-2 border-white px-1 py-4 hover:border-blue-900"])
  }, " Grommet Holes ", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.customPages(3);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-blue-900': _ctx.$store.state.customActiveLink == 3
    }, "border-b-2 border-white px-1 py-4 hover:border-blue-900"])
  }, " Partition or Modesty Panel ", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.customPages(4);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-blue-900': _ctx.$store.state.customActiveLink == 4
    }, "border-b-2 border-white px-1 py-4 hover:border-blue-900"])
  }, " Accessories ", 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.customPages(5);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-blue-900': _ctx.$store.state.customActiveLink == 5
    }, "border-b-2 border-white px-1 py-4 hover:border-blue-900"])
  }, " Chair ", 2
  /* CLASS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.$store.state.customActiveLink == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Corners, {
        key: 0
      })) : _ctx.$store.state.customActiveLink == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Grommet, {
        key: 1
      })) : _ctx.$store.state.customActiveLink == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Partition, {
        key: 2
      })) : _ctx.$store.state.customActiveLink == 4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Accessories, {
        key: 3
      })) : _ctx.$store.state.customActiveLink == 5 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Chair, {
        key: 4
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=template&id=445e83d1":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=template&id=445e83d1 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-between items-center relative"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/leftang.png",
  "class": "w-2/3 btns"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = {
  "class": "overflow-hidden py-3 px-1 flex-grow"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/leftang.png",
  "class": "w-2/3"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fades",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.prosent != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.prev && $options.prev.apply($options, arguments);
        }),
        "class": "absolute left-ang top-0 left-0 w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"
      }, _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
    ref: "mainBlock",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.transform),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      '-ml-2': $data.prosent == 0
    }, "whitespace-nowrap easy-transition"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 6
  /* CLASS, STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fades",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.prosent != $data.endItem && $data.slots > $props.itemCount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[1] || (_cache[1] = function () {
          return $options.next && $options.next.apply($options, arguments);
        }),
        "class": "absolute right-ang w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"
      }, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Accessories.vue?vue&type=template&id=306400a8":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Accessories.vue?vue&type=template&id=306400a8 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold mb-4 xl:text-xl md:text-md text-gray-600"
}, "Accessories", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "flex -mx-2 text-center pb-10 flex-wrap"
};
var _hoisted_3 = ["onClick"];
var _hoisted_4 = {
  key: 0,
  src: "/images/true.jpg",
  "class": "w-6 -m-3 absolute top-0 right-0 z-20"
};
var _hoisted_5 = {
  "class": "mb-8 text-center"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  "class": "text-sm mt-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$store.state.accessories, function (element, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("aside", {
      key: index,
      "class": "px-2 w-1/3"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      onClick: function onClick($event) {
        return $data.events.accessories(element);
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'border-myblue': element.active == true
      }, "cursor-pointer xl:pt-8 md:pt-4 pb-2 text-center rounded relative border border-transparent mb-4"])
    }, [element.active == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: element.image,
      "class": "w-20 h-20 object-cover inline"
    }, null, 8
    /* PROPS */
    , _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(element.name), 1
    /* TEXT */
    )], 10
    /* CLASS, PROPS */
    , _hoisted_3)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Chair.vue?vue&type=template&id=92c6c87e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Chair.vue?vue&type=template&id=92c6c87e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "-mx-8 -mt-6"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "mx-8 font-bold my-4 xl:text-xl md:text-md text-gray-600"
}, "Chairs", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "mx-8 font-bold my-4 text-md text-blue-900"
}, "Below $3000", -1
/* HOISTED */
);

var _hoisted_4 = ["onClick"];
var _hoisted_5 = {
  key: 0,
  src: "/images/true.png",
  "class": "w-6 bg-white -m-2 -mt-3 absolute top-0 right-0 z-20"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  "class": "text-xs mt-5"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "mx-8 font-bold my-4 text-md text-blue-900"
}, "$3500-$5500", -1
/* HOISTED */
);

var _hoisted_9 = ["onClick"];
var _hoisted_10 = {
  key: 0,
  src: "/images/true.png",
  "class": "w-6 bg-white -m-2 -mt-3 absolute top-0 right-0 z-20"
};
var _hoisted_11 = ["src"];
var _hoisted_12 = {
  "class": "text-xs mt-5"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "mx-8 font-bold my-4 text-md text-blue-900"
}, "$5501-$8500", -1
/* HOISTED */
);

var _hoisted_14 = ["onClick"];
var _hoisted_15 = {
  key: 0,
  src: "/images/true.png",
  "class": "w-6 bg-white -m-2 -mt-3 absolute top-0 right-0 z-20"
};
var _hoisted_16 = ["src"];
var _hoisted_17 = {
  "class": "text-xs mt-5"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "mx-8 font-bold my-4 text-md text-blue-900"
}, "$8500+", -1
/* HOISTED */
);

var _hoisted_19 = ["onClick"];
var _hoisted_20 = {
  key: 0,
  src: "/images/true.png",
  "class": "w-6 bg-white -m-2 -mt-3 absolute top-0 right-0 z-20"
};
var _hoisted_21 = ["src"];
var _hoisted_22 = {
  "class": "text-xs mt-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Carusel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Carusel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [_hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Carusel, {
    itemCount: 3,
    "class": "text-md text-center text-gray-600 mx-8"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.easy, function (img) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
          key: img,
          onClick: function onClick($event) {
            return $data.events.setter(img.name, 'chair');
          },
          "class": "w-1/3 px-1 inline-block"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
            'border-myblue': _ctx.$store.state.custom.chair == img.name
          }, "py-4 relative text-center rounded-md border border-transparent"])
        }, [_ctx.$store.state.custom.chair == img.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_5)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: img.path,
          "class": "w-28 h-28 object-cover inline-block"
        }, null, 8
        /* PROPS */
        , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(img.name), 1
        /* TEXT */
        )], 2
        /* CLASS */
        )], 8
        /* PROPS */
        , _hoisted_4);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Carusel, {
    itemCount: 3,
    "class": "text-md text-center text-gray-600 mx-8"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.normal, function (img) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
          key: img,
          onClick: function onClick($event) {
            return $data.events.setter(img.name, 'chair');
          },
          "class": "w-1/3 px-1 inline-block"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
            'border-myblue': _ctx.$store.state.custom.chair == img.name
          }, "py-4 relative text-center rounded-md border border-transparent"])
        }, [_ctx.$store.state.custom.chair == img.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: img.path,
          "class": "w-28 h-28 object-cover inline-block"
        }, null, 8
        /* PROPS */
        , _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(img.name), 1
        /* TEXT */
        )], 2
        /* CLASS */
        )], 8
        /* PROPS */
        , _hoisted_9);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Carusel, {
    itemCount: 3,
    "class": "text-md text-center text-gray-600 mx-8"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.hard, function (img) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
          key: img,
          onClick: function onClick($event) {
            return $data.events.setter(img.name, 'chair');
          },
          "class": "w-1/3 px-1 inline-block"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
            'border-myblue': _ctx.$store.state.custom.chair == img.name
          }, "py-4 relative text-center rounded-md border border-transparent"])
        }, [_ctx.$store.state.custom.chair == img.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: img.path,
          "class": "w-28 h-28 object-cover inline-block"
        }, null, 8
        /* PROPS */
        , _hoisted_16), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(img.name), 1
        /* TEXT */
        )], 2
        /* CLASS */
        )], 8
        /* PROPS */
        , _hoisted_14);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Carusel, {
    itemCount: 3,
    "class": "text-md text-center text-gray-600 mx-8"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.hardest, function (img) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
          key: img,
          onClick: function onClick($event) {
            return $data.events.setter(img.name, 'chair');
          },
          "class": "w-1/3 px-1 inline-block"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
            'border-myblue': _ctx.$store.state.custom.chair == img.name
          }, "py-4 relative text-center rounded-md border border-transparent"])
        }, [_ctx.$store.state.custom.chair == img.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_20)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: img.path,
          "class": "w-28 h-28 object-cover inline-block"
        }, null, 8
        /* PROPS */
        , _hoisted_21), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(img.name), 1
        /* TEXT */
        )], 2
        /* CLASS */
        )], 8
        /* PROPS */
        , _hoisted_19);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Corners.vue?vue&type=template&id=58335f8c":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Corners.vue?vue&type=template&id=58335f8c ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold mb-4 xl:text-xl md:text-md text-gray-600"
}, "Corners Finish", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "flex -mx-3 text-center pb-10"
};
var _hoisted_3 = {
  "class": "px-3 w-1/3"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/rect/1.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm mt-5"
}, " Sharp corners ", -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_4, _hoisted_5];
var _hoisted_7 = {
  "class": "px-3 w-1/3"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/rect/2.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm mt-5"
}, " Combined corners ", -1
/* HOISTED */
);

var _hoisted_10 = [_hoisted_8, _hoisted_9];
var _hoisted_11 = {
  "class": "px-3 w-1/3"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/rect/3.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm mt-5"
}, " Round corners ", -1
/* HOISTED */
);

var _hoisted_14 = [_hoisted_12, _hoisted_13];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.events.setCorner(1);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.custom.corners == 1
    }, "cursor-pointer xl:p-4 md:p-2 border border-transparent"])
  }, _hoisted_6, 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.events.setCorner(2);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.custom.corners == 2
    }, "cursor-pointer xl:p-4 md:p-2 border border-transparent"])
  }, _hoisted_10, 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.events.setCorner(3);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.custom.corners == 3
    }, "cursor-pointer xl:p-4 md:p-2 border border-transparent"])
  }, _hoisted_14, 2
  /* CLASS */
  )])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=template&id=70b7e62f&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=template&id=70b7e62f&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-70b7e62f"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
    "class": "font-bold mb-4 xl:text-xl md:text-md text-gray-600"
  }, "Grommet Holes", -1
  /* HOISTED */
  );
});

var _hoisted_2 = {
  "class": "flex -mr-2 text-center pb-10"
};
var _hoisted_3 = {
  "class": "pr-2 w-1/3"
};
var _hoisted_4 = {
  key: 0,
  src: "/images/true.jpg",
  "class": "w-6 -m-3 absolute top-0 right-0 z-20"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<main class=\"mb-8\" data-v-70b7e62f><svg class=\"inline scaling\" width=\"111\" height=\"76\" viewBox=\"0 0 111 76\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-70b7e62f><rect x=\"1\" y=\"1\" width=\"109\" height=\"74\" rx=\"15\" stroke=\"#494949\" stroke-width=\"2\" data-v-70b7e62f></rect><rect x=\"39.5\" y=\"13.5\" width=\"32\" height=\"10\" stroke=\"#494949\" data-v-70b7e62f></rect></svg></main><main class=\"mb-8\" data-v-70b7e62f><svg class=\"inline scaling\" width=\"111\" height=\"75\" viewBox=\"0 0 111 75\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-70b7e62f><path d=\"M110 59C110 67.2843 103.284 74 95 74L16 74C7.71573 74 1.00001 67.2843 1.00001 59L1 1L110 0.999992L110 59Z\" stroke=\"#494949\" stroke-width=\"2\" data-v-70b7e62f></path><rect x=\"39.5\" y=\"12.5\" width=\"32\" height=\"11\" stroke=\"#494949\" data-v-70b7e62f></rect></svg></main><main class=\"mb-8\" data-v-70b7e62f><svg class=\"inline scaling\" width=\"111\" height=\"77\" viewBox=\"0 0 111 77\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-70b7e62f><rect x=\"1\" y=\"1\" width=\"109\" height=\"75\" stroke=\"#494949\" stroke-width=\"2\" data-v-70b7e62f></rect><rect x=\"39.5\" y=\"14.5\" width=\"32\" height=\"10\" stroke=\"#494949\" data-v-70b7e62f></rect></svg></main><p class=\"text-sm mt-5\" data-v-70b7e62f> Wooden Flippers </p>", 4);

var _hoisted_9 = {
  "class": "pr-2 w-1/3"
};
var _hoisted_10 = {
  key: 0,
  src: "/images/true.jpg",
  "class": "w-6 -m-3 absolute top-0 right-0 z-20"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<main class=\"mb-8\" data-v-70b7e62f><svg class=\"inline scaling\" width=\"111\" height=\"76\" viewBox=\"0 0 111 76\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-70b7e62f><rect x=\"1\" y=\"1\" width=\"109\" height=\"74\" rx=\"15\" stroke=\"#494949\" stroke-width=\"2\" data-v-70b7e62f></rect><rect x=\"45.5\" y=\"13.5\" width=\"20\" height=\"10\" stroke=\"#494949\" data-v-70b7e62f></rect></svg></main><main class=\"mb-8\" data-v-70b7e62f><svg class=\"inline scaling\" width=\"111\" height=\"75\" viewBox=\"0 0 111 75\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-70b7e62f><path d=\"M110 59C110 67.2843 103.284 74 95 74L16 74C7.71573 74 1.00001 67.2843 1.00001 59L1 1L110 0.999992L110 59Z\" stroke=\"#494949\" stroke-width=\"2\" data-v-70b7e62f></path><rect x=\"45.5\" y=\"13.5\" width=\"20\" height=\"10\" stroke=\"#494949\" data-v-70b7e62f></rect></svg></main><main class=\"mb-8\" data-v-70b7e62f><svg class=\"inline scaling\" width=\"111\" height=\"77\" viewBox=\"0 0 111 77\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-70b7e62f><rect x=\"1\" y=\"1\" width=\"109\" height=\"75\" stroke=\"#494949\" stroke-width=\"2\" data-v-70b7e62f></rect><rect x=\"45.5\" y=\"13.5\" width=\"20\" height=\"10\" stroke=\"#494949\" data-v-70b7e62f></rect></svg></main><p class=\"text-sm mt-5\" data-v-70b7e62f> Plastic Flippers </p>", 4);

var _hoisted_15 = {
  "class": "pr-2 w-1/3"
};
var _hoisted_16 = {
  key: 0,
  src: "/images/true.jpg",
  "class": "w-6 -m-3 absolute top-0 right-0 z-20"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<main class=\"mb-8\" data-v-70b7e62f><svg class=\"inline scaling\" width=\"111\" height=\"76\" viewBox=\"0 0 111 76\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-70b7e62f><rect x=\"1\" y=\"1\" width=\"109\" height=\"74\" rx=\"15\" stroke=\"#494949\" stroke-width=\"2\" data-v-70b7e62f></rect><rect x=\"38.5\" y=\"1.5\" width=\"34\" height=\"12\" stroke=\"#494949\" data-v-70b7e62f></rect></svg></main><main class=\"mb-8\" data-v-70b7e62f><svg class=\"inline scaling\" width=\"111\" height=\"75\" viewBox=\"0 0 111 75\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-70b7e62f><path d=\"M110 59C110 67.2843 103.284 74 95 74L16 74C7.71573 74 1.00001 67.2843 1.00001 59L1 1L110 0.999992L110 59Z\" stroke=\"#494949\" stroke-width=\"2\" data-v-70b7e62f></path><rect x=\"38.5\" y=\"1.5\" width=\"34\" height=\"12\" stroke=\"#494949\" data-v-70b7e62f></rect></svg></main><main class=\"mb-8\" data-v-70b7e62f><svg class=\"inline scaling\" width=\"111\" height=\"77\" viewBox=\"0 0 111 77\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-70b7e62f><rect x=\"1\" y=\"1\" width=\"109\" height=\"75\" stroke=\"#494949\" stroke-width=\"2\" data-v-70b7e62f></rect><rect x=\"38.5\" y=\"1.5\" width=\"34\" height=\"12\" stroke=\"#494949\" data-v-70b7e62f></rect></svg></main><p class=\"text-sm mt-5\" data-v-70b7e62f> Melamine Flippers </p>", 4);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.events.setter(1, 'grommet');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.custom.grommet == 1
    }, "cursor-pointer xl:pt-8 md:pt-4 pb-2 text-center relative border border-transparent"])
  }, [_ctx.$store.state.custom.grommet == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_5], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.events.setter(2, 'grommet');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.custom.grommet == 2
    }, "cursor-pointer xl:pt-8 md:pt-4 pb-2 border border-transparent relative"])
  }, [_ctx.$store.state.custom.grommet == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_11], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.events.setter(3, 'grommet');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.custom.grommet == 3
    }, "cursor-pointer xl:pt-8 md:pt-4 pb-2 border border-transparent relative"])
  }, [_ctx.$store.state.custom.grommet == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_17], 2
  /* CLASS */
  )])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Partition.vue?vue&type=template&id=5c6c2b66":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Partition.vue?vue&type=template&id=5c6c2b66 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold mb-4 xl:text-xl md:text-md text-gray-600"
}, "Partitiob or Modesty Panel", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "flex -mx-2 text-center pb-10"
};
var _hoisted_3 = {
  "class": "px-2 w-1/3"
};
var _hoisted_4 = {
  key: 0,
  src: "/images/true.jpg",
  "class": "w-6 -m-3 absolute top-0 right-0 z-20"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/rect/part1.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm"
}, " Sharp corners ", -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "px-2 w-1/3"
};
var _hoisted_8 = {
  key: 0,
  src: "/images/true.jpg",
  "class": "w-6 -m-3 absolute top-0 right-0 z-20"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/rect/part2.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-sm"
}, " Combined corners ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.events.setter(1, 'partition');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.custom.partition == 1
    }, "cursor-pointer py-4 border border-transparent rounded-md relative"])
  }, [_ctx.$store.state.custom.partition == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_5, _hoisted_6], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.events.setter(2, 'partition');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.custom.partition == 2
    }, "cursor-pointer py-4 border border-transparent rounded-md relative"])
  }, [_ctx.$store.state.custom.partition == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_9, _hoisted_10], 2
  /* CLASS */
  )])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btns {\r\n   transform: scale(-1);\r\n   position: relative;\r\n   top: 1px;\n}\n.fades-enter-active,\r\n.fades-leave-active {\r\n   transition: 1s ease;\n}\n.fades-enter-from,\r\n.fades-leave-to {\r\n   opacity: 0;\r\n   transform: scaleX(0);\r\n   width: 0;\n}\n.easy-transition {\r\n   transition: 0.5s;\n}\n.left-ang {\r\n   left: -35px;\r\n   transform: translateY(-50%) scale(0.8);\r\n   top: 50%;\n}\n.right-ang {\r\n   right: -35px;\r\n   transform: translateY(-50%) scale(0.8);\r\n   top: 50%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.scaling[data-v-70b7e62f]{\r\n        transform: scale(1.2);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_445e83d1_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_445e83d1_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_445e83d1_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Grommet_vue_vue_type_style_index_0_id_70b7e62f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Grommet_vue_vue_type_style_index_0_id_70b7e62f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Grommet_vue_vue_type_style_index_0_id_70b7e62f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/desktop/Views/Customization.vue":
/*!******************************************************!*\
  !*** ./resources/js/desktop/Views/Customization.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Customization_vue_vue_type_template_id_08c04e9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customization.vue?vue&type=template&id=08c04e9e */ "./resources/js/desktop/Views/Customization.vue?vue&type=template&id=08c04e9e");
/* harmony import */ var _Customization_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customization.vue?vue&type=script&lang=js */ "./resources/js/desktop/Views/Customization.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Customization_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Customization_vue_vue_type_template_id_08c04e9e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/desktop/Views/Customization.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/desktop/components/Carusel.vue":
/*!*****************************************************!*\
  !*** ./resources/js/desktop/components/Carusel.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Carusel_vue_vue_type_template_id_445e83d1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carusel.vue?vue&type=template&id=445e83d1 */ "./resources/js/desktop/components/Carusel.vue?vue&type=template&id=445e83d1");
/* harmony import */ var _Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carusel.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/Carusel.vue?vue&type=script&lang=js");
/* harmony import */ var _Carusel_vue_vue_type_style_index_0_id_445e83d1_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css */ "./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css");
/* harmony import */ var C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Carusel_vue_vue_type_template_id_445e83d1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/desktop/components/Carusel.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/desktop/components/customization/Accessories.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Accessories.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Accessories_vue_vue_type_template_id_306400a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accessories.vue?vue&type=template&id=306400a8 */ "./resources/js/desktop/components/customization/Accessories.vue?vue&type=template&id=306400a8");
/* harmony import */ var _Accessories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accessories.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/customization/Accessories.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Accessories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Accessories_vue_vue_type_template_id_306400a8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/desktop/components/customization/Accessories.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/desktop/components/customization/Chair.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Chair.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chair_vue_vue_type_template_id_92c6c87e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chair.vue?vue&type=template&id=92c6c87e */ "./resources/js/desktop/components/customization/Chair.vue?vue&type=template&id=92c6c87e");
/* harmony import */ var _Chair_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chair.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/customization/Chair.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Chair_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Chair_vue_vue_type_template_id_92c6c87e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/desktop/components/customization/Chair.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/desktop/components/customization/Corners.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Corners.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Corners_vue_vue_type_template_id_58335f8c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Corners.vue?vue&type=template&id=58335f8c */ "./resources/js/desktop/components/customization/Corners.vue?vue&type=template&id=58335f8c");
/* harmony import */ var _Corners_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Corners.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/customization/Corners.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Corners_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Corners_vue_vue_type_template_id_58335f8c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/desktop/components/customization/Corners.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/desktop/components/customization/Grommet.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Grommet.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Grommet_vue_vue_type_template_id_70b7e62f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grommet.vue?vue&type=template&id=70b7e62f&scoped=true */ "./resources/js/desktop/components/customization/Grommet.vue?vue&type=template&id=70b7e62f&scoped=true");
/* harmony import */ var _Grommet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grommet.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/customization/Grommet.vue?vue&type=script&lang=js");
/* harmony import */ var _Grommet_vue_vue_type_style_index_0_id_70b7e62f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css */ "./resources/js/desktop/components/customization/Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css");
/* harmony import */ var C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Grommet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Grommet_vue_vue_type_template_id_70b7e62f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-70b7e62f"],['__file',"resources/js/desktop/components/customization/Grommet.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/desktop/components/customization/Partition.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Partition.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Partition_vue_vue_type_template_id_5c6c2b66__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partition.vue?vue&type=template&id=5c6c2b66 */ "./resources/js/desktop/components/customization/Partition.vue?vue&type=template&id=5c6c2b66");
/* harmony import */ var _Partition_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partition.vue?vue&type=script&lang=js */ "./resources/js/desktop/components/customization/Partition.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Partition_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Partition_vue_vue_type_template_id_5c6c2b66__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/desktop/components/customization/Partition.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/desktop/Views/Customization.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/desktop/Views/Customization.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customization_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customization_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Customization.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/Customization.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/desktop/components/Carusel.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/desktop/components/Carusel.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/desktop/components/customization/Accessories.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Accessories.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Accessories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Accessories_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Accessories.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Accessories.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/desktop/components/customization/Chair.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Chair.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chair_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chair_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chair.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Chair.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/desktop/components/customization/Corners.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Corners.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Corners_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Corners_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Corners.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Corners.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/desktop/components/customization/Grommet.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Grommet.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Grommet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Grommet_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Grommet.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/desktop/components/customization/Partition.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Partition.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Partition_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Partition_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Partition.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Partition.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/desktop/Views/Customization.vue?vue&type=template&id=08c04e9e":
/*!************************************************************************************!*\
  !*** ./resources/js/desktop/Views/Customization.vue?vue&type=template&id=08c04e9e ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customization_vue_vue_type_template_id_08c04e9e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Customization_vue_vue_type_template_id_08c04e9e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Customization.vue?vue&type=template&id=08c04e9e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/Customization.vue?vue&type=template&id=08c04e9e");


/***/ }),

/***/ "./resources/js/desktop/components/Carusel.vue?vue&type=template&id=445e83d1":
/*!***********************************************************************************!*\
  !*** ./resources/js/desktop/components/Carusel.vue?vue&type=template&id=445e83d1 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_template_id_445e83d1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_template_id_445e83d1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=template&id=445e83d1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=template&id=445e83d1");


/***/ }),

/***/ "./resources/js/desktop/components/customization/Accessories.vue?vue&type=template&id=306400a8":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Accessories.vue?vue&type=template&id=306400a8 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Accessories_vue_vue_type_template_id_306400a8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Accessories_vue_vue_type_template_id_306400a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Accessories.vue?vue&type=template&id=306400a8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Accessories.vue?vue&type=template&id=306400a8");


/***/ }),

/***/ "./resources/js/desktop/components/customization/Chair.vue?vue&type=template&id=92c6c87e":
/*!***********************************************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Chair.vue?vue&type=template&id=92c6c87e ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chair_vue_vue_type_template_id_92c6c87e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chair_vue_vue_type_template_id_92c6c87e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chair.vue?vue&type=template&id=92c6c87e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Chair.vue?vue&type=template&id=92c6c87e");


/***/ }),

/***/ "./resources/js/desktop/components/customization/Corners.vue?vue&type=template&id=58335f8c":
/*!*************************************************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Corners.vue?vue&type=template&id=58335f8c ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Corners_vue_vue_type_template_id_58335f8c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Corners_vue_vue_type_template_id_58335f8c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Corners.vue?vue&type=template&id=58335f8c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Corners.vue?vue&type=template&id=58335f8c");


/***/ }),

/***/ "./resources/js/desktop/components/customization/Grommet.vue?vue&type=template&id=70b7e62f&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Grommet.vue?vue&type=template&id=70b7e62f&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Grommet_vue_vue_type_template_id_70b7e62f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Grommet_vue_vue_type_template_id_70b7e62f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Grommet.vue?vue&type=template&id=70b7e62f&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=template&id=70b7e62f&scoped=true");


/***/ }),

/***/ "./resources/js/desktop/components/customization/Partition.vue?vue&type=template&id=5c6c2b66":
/*!***************************************************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Partition.vue?vue&type=template&id=5c6c2b66 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Partition_vue_vue_type_template_id_5c6c2b66__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Partition_vue_vue_type_template_id_5c6c2b66__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Partition.vue?vue&type=template&id=5c6c2b66 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Partition.vue?vue&type=template&id=5c6c2b66");


/***/ }),

/***/ "./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css":
/*!*************************************************************************************************!*\
  !*** ./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_445e83d1_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css");


/***/ }),

/***/ "./resources/js/desktop/components/customization/Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/desktop/components/customization/Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Grommet_vue_vue_type_style_index_0_id_70b7e62f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/customization/Grommet.vue?vue&type=style&index=0&id=70b7e62f&scoped=true&lang=css");


/***/ })

}]);