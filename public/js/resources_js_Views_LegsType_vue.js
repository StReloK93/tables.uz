"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_LegsType_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/LegsType.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/LegsType.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Carusel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Carusel.vue */ "./resources/js/components/Carusel.vue");
/* harmony import */ var _LegsCoordinates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LegsCoordinates */ "./resources/js/LegsCoordinates.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      imagearr: null,
      folderImages: null,
      deskMaterials: null
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var desks;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Engine.textures.deskTextures();

            case 2:
              desks = _context.sent;
              _this.deskMaterials = desks.folders;
              _this.folderImages = desks.images;
              _this.imagearr = _this.folderImages[store.state.params.deskMaterial];

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    setLegColor: function setLegColor(colorIndex) {
      var colorArr = ['#C8C8C8', '#6B6B6B', '#222222'];
      var LegsArr = ['oneLeg', 'twoLeg', 'fourLeg', 'fiveLeg', 'threeLegLeft', 'threeLegRight'];
      LegsArr.forEach(function (legName) {
        var leg = scene.getMaterialByName(legName);
        var albedoColor = BABYLON.Color3.FromHexString(colorArr[colorIndex - 1]).toLinearSpace(); //Animate(target,ParamterToEdit,Property, Keyframes, CallbackEndAnimation no required)

        Animate(leg, 'albedoColor', COLOR3, [{
          frame: 0,
          value: leg.albedoColor
        }, {
          frame: 15,
          value: albedoColor
        }]);
      });
      store.state.params.legColor = colorIndex;
    },
    //< ------------ main -- //
    setLegType: function setLegType(legIndex) {
      var _this2 = this;

      if (store.state.params.legType == legIndex) return;
      var activeDecors = this.getDecors();
      activeDecors.forEach(function (Decors) {
        if (store.state.decor[Decors]) {
          _this2.DecorsPosition(Decors, _LegsCoordinates__WEBPACK_IMPORTED_MODULE_2__["default"][legIndex - 1][Decors]);
        } else {
          _this2.DecorsHide(Decors, _LegsCoordinates__WEBPACK_IMPORTED_MODULE_2__["default"][legIndex - 1][Decors]);
        }
      });
      store.commit('setLegType', legIndex);
    },
    deskFolder: function deskFolder(deskIndex) {
      var _this3 = this;

      this.imagearr = null;
      setTimeout(function () {
        _this3.imagearr = _this3.folderImages[deskIndex];
        store.state.params.deskMaterial = deskIndex;
      }, 100);
    },
    //poisk active decors
    getDecors: function getDecors() {
      var decors = store.state.decor;
      var arrayWithActiveDecors = [];

      for (var key in decors) {
        arrayWithActiveDecors.push(key);
      }

      return arrayWithActiveDecors;
    },
    //hide to active decors
    DecorsHide: function DecorsHide(node, coords) {
      var _this4 = this;

      var hide = new BABYLON.Vector3(0, 0, 0); //soralgan meshni topamiz

      var mesh = scene.getNodeByName(node); //Agar bu mesh bor bolsa agar bo'lmasa uni iconcasi ciqmaydi yani this['node'] = true ishlamaydi

      Animate(mesh, 'scaling', VECTOR3, [{
        frame: 0,
        value: mesh.scaling
      }, {
        frame: 10,
        value: hide
      }], function () {
        _this4.DecorsPosition(node, coords, function () {
          _this4.DecorsShow(mesh);
        });
      });
    },
    DecorsPosition: function DecorsPosition(node, position) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var mesh = scene.getNodeByName(node);
      Animate(mesh, 'position', VECTOR3, [{
        frame: 0,
        value: mesh.position
      }, {
        frame: 1,
        value: position
      }], callback());
    },
    DecorsShow: function DecorsShow(mesh) {
      var show = new BABYLON.Vector3(1, 1, 1);
      Animate(mesh, 'scaling', VECTOR3, [{
        frame: 0,
        value: mesh.scaling
      }, {
        frame: 10,
        value: show
      }]);
    },
    setDeskMaterial: function setDeskMaterial(textureName) {
      var materialNames = ['oneTable', 'twoTable', 'threeTable', 'fourTable', 'fiveTable'];
      materialNames.forEach(function (element) {
        var material = scene.getMaterialByName(element);
        material.albedoTexture = scene.getTextureByName(textureName);
      });
    }
  },
  components: {
    Caruosel: _components_Carusel_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['itemCount'],
  data: function data() {
    return {
      prosent: 0,
      endItem: null
    };
  },
  computed: {
    transform: function transform() {
      return {
        transform: "translateX(".concat(this.prosent, "%)")
      };
    }
  },
  mounted: function mounted() {
    var countItem = this.$refs.mainBlock.children.length - this.itemCount; //10 - 4

    this.endItem = -countItem * 100 / this.itemCount;
  },
  methods: {
    next: function next() {
      if (this.endItem < this.prosent) {
        this.prosent += -100 / this.itemCount;
      }
    },
    prev: function prev() {
      if (this.prosent < 0) this.prosent += 100 / this.itemCount;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/LegsType.vue?vue&type=template&id=75dd31be":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/LegsType.vue?vue&type=template&id=75dd31be ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pb-8"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold mb-4 text-xl text-gray-600"
}, " Available legs ", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "flex text-center justify-between"
};
var _hoisted_4 = ["onClick"];
var _hoisted_5 = {
  "class": "w-24 h-28 flex items-center"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  "class": "mt-2"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold mb-4 text-xl mt-6 text-gray-600"
}, " Standing desk material ", -1
/* HOISTED */
);

var _hoisted_9 = ["onClick", "innerHTML"];
var _hoisted_10 = {
  key: 0,
  "class": "flex flex-wrap -mx-3 mt-6"
};
var _hoisted_11 = ["onClick"];
var _hoisted_12 = ["src"];
var _hoisted_13 = {
  "class": "pb-8"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold mb-6 text-xl text-gray-600"
}, " Choose the leg color ", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "flex flex-wrap -mx-3"
};
var _hoisted_16 = ["onClick"];
var _hoisted_17 = {
  key: 0,
  "class": "w-full h-full bg-white border border-gray-300 rounded-md"
};
var _hoisted_18 = {
  key: 1,
  "class": "w-full h-full bg-gray-400 border border-gray-300 rounded-md"
};
var _hoisted_19 = {
  key: 2,
  "class": "w-full h-full bg-black border border-gray-300 rounded-md"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Caruosel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Caruosel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$store.state.legTypes, function (legs, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("aside", {
      key: index,
      onClick: function onClick($event) {
        return $options.setLegType(index + 1);
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'border-myblue': _ctx.$store.state.params.legType == index + 1
      }, "px-3 py-2 rounded-xl border bg-white"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: legs.img,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_6)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(legs.name), 1
    /* TEXT */
    )], 10
    /* CLASS, PROPS */
    , _hoisted_4);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" new "), _hoisted_8, $data.deskMaterials ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Caruosel, {
    key: 0,
    itemCount: 4,
    "class": "text-md text-center text-gray-600"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.deskMaterials, function (materials) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
          key: materials,
          "class": "w-1/4 inline-block align-middle px-2"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.deskFolder(materials.path);
          },
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
            'bg-my text-white': _ctx.$store.state.params.deskMaterial == materials.path
          }, "h-20 w-full rounded-xl border"]),
          innerHTML: materials.text
        }, null, 10
        /* CLASS, PROPS */
        , _hoisted_9)]);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "in-out"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.imagearr ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.imagearr, function (img) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("aside", {
          "class": "w-1/5 px-3",
          key: img
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" :class=\"{'shadow-blue': $store.state.params.floor == img.name}\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
          onClick: function onClick($event) {
            return $options.setDeskMaterial(img);
          },
          "class": "mb-6 p-1 h-32 rounded-xl cursor-pointer shadow-md"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: "/floors/".concat(img),
          "class": "rounded-md object-cover w-full h-full"
        }, null, 8
        /* PROPS */
        , _hoisted_12)], 8
        /* PROPS */
        , _hoisted_11)]);
      }), 128
      /* KEYED_FRAGMENT */
      ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(3, function (n) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", {
      key: n,
      "class": "w-1/5 px-3"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
      onClick: function onClick($event) {
        return $options.setLegColor(n);
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'shadow-blue': _ctx.$store.state.params.legColor == n
      }, "p-1 rounded-md h-36"])
    }, [n == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), n == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), n == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_19)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_16)]);
  }), 64
  /* STABLE_FRAGMENT */
  ))])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-between items-center"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/leftang.png",
  "class": "w-2/3 btns"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = {
  "class": "overflow-hidden flex-grow"
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
        "class": "w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"
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
      return [$data.prosent != $data.endItem ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[1] || (_cache[1] = function () {
          return $options.next && $options.next.apply($options, arguments);
        }),
        "class": "w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"
      }, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./resources/js/LegsCoordinates.js":
/*!*****************************************!*\
  !*** ./resources/js/LegsCoordinates.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  image: new BABYLON.Vector3(10, 19.117, -34.423),
  plant: new BABYLON.Vector3(0, 1, -31),
  monitor: new BABYLON.Vector3(10.368, 8.01698, -21.8846),
  chair: new BABYLON.Vector3(15.5757, 1.38094, -11.7009),
  lamp: new BABYLON.Vector3(22.511, 6.92616, -31.4137),
  tumbochka: new BABYLON.Vector3(22.503, 1.178, -29.831)
}, {
  image: new BABYLON.Vector3(1.215, 19.117, -34.423),
  plant: new BABYLON.Vector3(3.080, 1, -31.333),
  monitor: new BABYLON.Vector3(14.214, 7.689, -31.565),
  chair: new BABYLON.Vector3(15.661, 1.381, -17.889),
  lamp: new BABYLON.Vector3(19.627, 7.668, -31.414),
  tumbochka: new BABYLON.Vector3(22.503, 1.178, -29.831)
}, {
  image: new BABYLON.Vector3(1.215, 19.117, -34.423),
  plant: new BABYLON.Vector3(-3.09833, 1, -31.333),
  monitor: new BABYLON.Vector3(15.1378, 7.7, -30.3906),
  chair: new BABYLON.Vector3(17.7362, 1.38094, -18.8789),
  lamp: new BABYLON.Vector3(20.8322, 7.5, -31.414),
  tumbochka: new BABYLON.Vector3(1, 1.178, -29.831)
}, {
  image: new BABYLON.Vector3(9.82315, 19.117, -34.423),
  plant: new BABYLON.Vector3(-1.77979, 1, -31.333),
  monitor: new BABYLON.Vector3(1.45031, 7.7, -7.10365),
  chair: new BABYLON.Vector3(9.11413, 1.38094, -2.60271),
  lamp: new BABYLON.Vector3(22.5794, 6.95014, -31.4137),
  tumbochka: new BABYLON.Vector3(22.503, 1.178, -29.831)
}, {
  image: new BABYLON.Vector3(2.96359, 19.117, -34.423),
  plant: new BABYLON.Vector3(-1.35887, 1, -31.333),
  monitor: new BABYLON.Vector3(13.7972, 8.52, -31.3336),
  chair: new BABYLON.Vector3(13.1428, 1.38094, -21.123),
  lamp: new BABYLON.Vector3(21.2717, 8.3, -31.4137),
  tumbochka: new BABYLON.Vector3(3, 1.178, -29.831)
}]);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btns{\r\n\ttransform: scale(-1);\r\n   position: relative;\r\n   top: 1px;\n}\n.fades-enter-active,\r\n.fades-leave-active {\r\n  transition: 1s ease;\n}\n.fades-enter-from,\r\n.fades-leave-to {\r\n  opacity: 0;\r\n  transform: scaleX(0);\r\n  width: 0;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_1bf5d304_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_1bf5d304_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_1bf5d304_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Views/LegsType.vue":
/*!*****************************************!*\
  !*** ./resources/js/Views/LegsType.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LegsType_vue_vue_type_template_id_75dd31be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LegsType.vue?vue&type=template&id=75dd31be */ "./resources/js/Views/LegsType.vue?vue&type=template&id=75dd31be");
/* harmony import */ var _LegsType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LegsType.vue?vue&type=script&lang=js */ "./resources/js/Views/LegsType.vue?vue&type=script&lang=js");
/* harmony import */ var C_AMD_OSPanel_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_AMD_OSPanel_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LegsType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LegsType_vue_vue_type_template_id_75dd31be__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/LegsType.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Carusel.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Carusel.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Carusel_vue_vue_type_template_id_1bf5d304__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carusel.vue?vue&type=template&id=1bf5d304 */ "./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304");
/* harmony import */ var _Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carusel.vue?vue&type=script&lang=js */ "./resources/js/components/Carusel.vue?vue&type=script&lang=js");
/* harmony import */ var _Carusel_vue_vue_type_style_index_0_id_1bf5d304_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css */ "./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css");
/* harmony import */ var C_AMD_OSPanel_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_AMD_OSPanel_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Carusel_vue_vue_type_template_id_1bf5d304__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Carusel.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Views/LegsType.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/Views/LegsType.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LegsType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LegsType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LegsType.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/LegsType.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Carusel.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Carusel.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Views/LegsType.vue?vue&type=template&id=75dd31be":
/*!***********************************************************************!*\
  !*** ./resources/js/Views/LegsType.vue?vue&type=template&id=75dd31be ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LegsType_vue_vue_type_template_id_75dd31be__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LegsType_vue_vue_type_template_id_75dd31be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LegsType.vue?vue&type=template&id=75dd31be */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Views/LegsType.vue?vue&type=template&id=75dd31be");


/***/ }),

/***/ "./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_template_id_1bf5d304__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_template_id_1bf5d304__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=template&id=1bf5d304 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304");


/***/ }),

/***/ "./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_1bf5d304_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css");


/***/ })

}]);