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
/* harmony import */ var _components_Carusel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Carusel.vue */ "./resources/js/components/Carusel.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      Coordinates: [{
        image: new BABYLON.Vector3(10, 19.117, -34.423),
        plant: new BABYLON.Vector3(0, 1, -31),
        monitor: new BABYLON.Vector3(10.368, 8.13698, -21.8846),
        chair: new BABYLON.Vector3(15.5757, 1.38094, -11.7009),
        lamp: new BABYLON.Vector3(22.511, 6.92616, -31.4137),
        tumbochka: new BABYLON.Vector3(22.503, 1.178, -29.831)
      }, //
      {
        image: new BABYLON.Vector3(1.215, 19.117, -34.423),
        plant: new BABYLON.Vector3(3.080, 1, -31.333),
        monitor: new BABYLON.Vector3(14.214, 7.689, -31.565),
        chair: new BABYLON.Vector3(15.661, 1.381, -17.889),
        lamp: new BABYLON.Vector3(19.627, 7.668, -31.414),
        tumbochka: new BABYLON.Vector3(22.503, 1.178, -29.831)
      }, //
      {
        image: new BABYLON.Vector3(1.215, 19.117, -34.423),
        plant: new BABYLON.Vector3(-3.09833, 1, -31.333),
        monitor: new BABYLON.Vector3(15.1378, 7.66257, -30.3906),
        chair: new BABYLON.Vector3(17.7362, 1.38094, -18.8789),
        lamp: new BABYLON.Vector3(20.8322, 7.62824, -31.414),
        tumbochka: new BABYLON.Vector3(1, 1.178, -29.831)
      }, {
        image: new BABYLON.Vector3(9.82315, 19.117, -34.423),
        plant: new BABYLON.Vector3(-1.77979, 1, -31.333),
        monitor: new BABYLON.Vector3(1.45031, 7.68734, -7.10365),
        chair: new BABYLON.Vector3(9.11413, 1.38094, -2.60271),
        lamp: new BABYLON.Vector3(22.5794, 6.95014, -31.4137),
        tumbochka: new BABYLON.Vector3(22.503, 1.178, -29.831)
      }, {
        image: new BABYLON.Vector3(2.96359, 19.117, -34.423),
        plant: new BABYLON.Vector3(-1.35887, 1, -31.333),
        monitor: new BABYLON.Vector3(13.7972, 8.53316, -31.3336),
        chair: new BABYLON.Vector3(13.1428, 1.38094, -21.123),
        lamp: new BABYLON.Vector3(21.2717, 8.50354, -31.4137),
        tumbochka: new BABYLON.Vector3(3, 1.178, -29.831)
      }]
    };
  },
  methods: {
    setLegColor: function setLegColor(colorIndex) {
      var colorArr = ['#EEFCFD', '#ada7a7', '#222222'];
      var metalOne = scene.getMaterialByName('twoLeg');
      var albedoColor = BABYLON.Color3.FromHexString(colorArr[colorIndex - 1]).toLinearSpace(); //Animate(target,ParamterToEdit,Property, Keyframes, CallbackEndAnimation)

      Animate(metalOne, 'albedoColor', COLOR3, [{
        frame: 0,
        value: metalOne.albedoColor
      }, {
        frame: 15,
        value: albedoColor
      }]);
      store.state.params.legColor = colorIndex;
    },
    //< ------------ main -- //
    setLegType: function setLegType(legIndex) {
      var _this = this;

      if (store.state.params.legType == legIndex) return;
      var coords = this.Coordinates;
      var activeDecors = this.getDecors();
      activeDecors.forEach(function (Decors) {
        if (store.state.decor[Decors]) {
          _this.DecorsPosition(Decors, coords[legIndex - 1][Decors]);
        } else {
          _this.DecorsHide(Decors, coords[legIndex - 1][Decors]);
        }
      });
      store.commit('setLegType', legIndex);
    },
    setDeskMaterial: function setDeskMaterial(deskIndex) {
      store.state.params.deskMaterial = deskIndex;
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
      var _this2 = this;

      var hide = new BABYLON.Vector3(0, 0, 0); //soralgan meshni topamiz

      var mesh = scene.getNodeByName(node); //Agar bu mesh bor bolsa agar bo'lmasa uni iconcasi ciqmaydi yani this['node'] = true ishlamaydi

      Animate(mesh, 'scaling', VECTOR3, [{
        frame: 0,
        value: mesh.scaling
      }, {
        frame: 10,
        value: hide
      }], function () {
        _this2.DecorsPosition(node, coords, function () {
          _this2.DecorsShow(mesh);
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
    }
  },
  components: {
    Caruosel: _components_Carusel_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
}); //One leg Image     new BABYLON.Vector3(10,19.117,-34.423) //
//One leg plant     new BABYLON.Vector3(0,1,-31) //
//One leg Monitor   new BABYLON.Vector3(10.368,8.13698,-21.8846) //
//One leg Chair     new BABYLON.Vector3(15.5757,1.38094,-11.7009) //
//One leg Lamp      new BABYLON.Vector3(22.511,6.92616,-31.4137) //
//two leg Image     new BABYLON.Vector3(1.215,19.117,-34.423) //
//two leg plant     new BABYLON.Vector3(3.080,1,-31.333) //
//two leg Monitor   new BABYLON.Vector3(14.214,7.689,-31.565) //
//two leg Chair     new BABYLON.Vector3(15.661,1.381,-17.889) //
//two leg Lamp      new BABYLON.Vector3(19.627,7.668,-31.414) //
//three leg Image   new BABYLON.Vector3(1.215,19.117,-34.423) //
//three leg plant   new BABYLON.Vector3(-3.09833,1,-31.333) //
//three leg Monitor new BABYLON.Vector3(15.1378,7.66257,-30.3906) //
//three leg Chair   new BABYLON.Vector3(17.7362,1.38094,-18.8789) //
//three leg Lamp    new BABYLON.Vector3(20.8322,7.62824,-31.414) //
//four leg Image    new BABYLON.Vector3(9.82315,19.117,-34.423) //
//four leg plant    new BABYLON.Vector3(-1.77979,1,-31.333) // 
//four leg Monitor  new BABYLON.Vector3(1.45031,7.68734,-7.10365) //
//four leg Chair    new BABYLON.Vector3(9.11413,1.38094,-2.60271)  //
//four leg Lamp     new BABYLON.Vector3(22.5794,6.95014,-31.4137) //
//five leg Image    new BABYLON.Vector3(2.96359,19.117,-34.423) //
//five leg plant    new BABYLON.Vector3(-1.35887,1,-31.333) // 
//five leg Monitor  new BABYLON.Vector3(13.7972,8.53316,-31.3336) //
//five leg Chair    new BABYLON.Vector3(13.1428,1.38094,-21.123) //
//five leg Lamp     new BABYLON.Vector3(21.2717,8.50354,-31.4137) //

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
    },
    casr: function casr() {
      var count = this.$refs.mainBlock.children.length;
      if (count % this.itemCount == 0) return 0;
      return this.itemCount - count % this.itemCount;
    }
  },
  mounted: function mounted() {
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

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
  "class": "w-24 h-28 flex items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/1leg.png",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2"
}, " 1 legs ", -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_4, _hoisted_5];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
  "class": "w-24 h-28 flex items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/2leg.png",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2"
}, " 2 legs ", -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_7, _hoisted_8];

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
  "class": "w-24 h-28 flex items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/3leg.png",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2"
}, " 3 legs ", -1
/* HOISTED */
);

var _hoisted_12 = [_hoisted_10, _hoisted_11];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
  "class": "w-24 h-28 flex items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/4leg.png",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2"
}, " 4 legs ", -1
/* HOISTED */
);

var _hoisted_15 = [_hoisted_13, _hoisted_14];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
  "class": "w-24 h-28 flex items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/5leg.png",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mt-2"
}, " Side cabinet ", -1
/* HOISTED */
);

var _hoisted_18 = [_hoisted_16, _hoisted_17];

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold mb-4 text-xl mt-6 text-gray-600"
}, " Standing desk material ", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "w-1/4 inline-block align-middle px-2"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Solid wood ");

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Live Edge ");

var _hoisted_24 = [_hoisted_21, _hoisted_22, _hoisted_23];
var _hoisted_25 = {
  "class": "w-1/4 inline-block align-middle px-2"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Solid wood ");

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Traditional ");

var _hoisted_29 = [_hoisted_26, _hoisted_27, _hoisted_28];
var _hoisted_30 = {
  "class": "w-1/4 inline-block align-middle px-2"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Solid wood ");

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Epoxy ");

var _hoisted_34 = [_hoisted_31, _hoisted_32, _hoisted_33];
var _hoisted_35 = {
  "class": "w-1/4 inline-block align-middle px-2"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Melamine ");

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" With glass top ");

var _hoisted_39 = [_hoisted_36, _hoisted_37, _hoisted_38];
var _hoisted_40 = {
  "class": "w-1/4 inline-block align-middle px-2"
};
var _hoisted_41 = {
  "class": "w-1/4 inline-block align-middle px-2"
};
var _hoisted_42 = {
  "class": "w-1/4 inline-block align-middle px-2"
};
var _hoisted_43 = {
  "class": "w-1/4 inline-block align-middle px-2"
};
var _hoisted_44 = {
  "class": "pb-8"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold mb-6 text-xl text-gray-600"
}, " Choose the leg color ", -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "flex flex-wrap -mx-3"
};
var _hoisted_47 = ["onClick"];
var _hoisted_48 = {
  key: 0,
  "class": "w-full h-full bg-white border border-gray-300 rounded-md"
};
var _hoisted_49 = {
  key: 1,
  "class": "w-full h-full bg-gray-400 border border-gray-300 rounded-md"
};
var _hoisted_50 = {
  key: 2,
  "class": "w-full h-full bg-black border border-gray-300 rounded-md"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Caruosel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Caruosel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.setLegType(1);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.params.legType == 1
    }, "px-3 py-2 rounded-xl border bg-white"])
  }, _hoisted_6, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.setLegType(2);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.params.legType == 2
    }, "px-3 py-2 rounded-xl border bg-white"])
  }, _hoisted_9, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.setLegType(3);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.params.legType == 3
    }, "px-3 py-2 rounded-xl border bg-white"])
  }, _hoisted_12, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.setLegType(4);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.params.legType == 4
    }, "px-3 py-2 rounded-xl border bg-white"])
  }, _hoisted_15, 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.setLegType(5);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'border-myblue': _ctx.$store.state.params.legType == 5
    }, "px-3 py-2 rounded-xl border bg-white"])
  }, _hoisted_18, 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" new "), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Caruosel, {
    itemCount: 4,
    "class": "text-md text-center text-gray-600"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return $options.setDeskMaterial(1);
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'bg-my text-white': _ctx.$store.state.params.deskMaterial == 1
        }, "h-20 w-full rounded-xl border"])
      }, _hoisted_24, 2
      /* CLASS */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[6] || (_cache[6] = function ($event) {
          return $options.setDeskMaterial(2);
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'bg-my text-white': _ctx.$store.state.params.deskMaterial == 2
        }, "h-20 w-full rounded-xl border"])
      }, _hoisted_29, 2
      /* CLASS */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[7] || (_cache[7] = function ($event) {
          return $options.setDeskMaterial(3);
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'bg-my text-white': _ctx.$store.state.params.deskMaterial == 3
        }, "h-20 w-full rounded-xl border"])
      }, _hoisted_34, 2
      /* CLASS */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[8] || (_cache[8] = function ($event) {
          return $options.setDeskMaterial(4);
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'bg-my text-white': _ctx.$store.state.params.deskMaterial == 4
        }, "h-20 w-full rounded-xl border"])
      }, _hoisted_39, 2
      /* CLASS */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[9] || (_cache[9] = function ($event) {
          return $options.setDeskMaterial(5);
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'bg-my text-white': _ctx.$store.state.params.deskMaterial == 5
        }, "h-20 w-full rounded-xl border"])
      }, " Veneer ", 2
      /* CLASS */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[10] || (_cache[10] = function ($event) {
          return $options.setDeskMaterial(6);
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'bg-my text-white': _ctx.$store.state.params.deskMaterial == 6
        }, "h-20 w-full rounded-xl border"])
      }, " Melamine ", 2
      /* CLASS */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[11] || (_cache[11] = function ($event) {
          return $options.setDeskMaterial(7);
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'bg-my text-white': _ctx.$store.state.params.deskMaterial == 7
        }, "h-20 w-full rounded-xl border"])
      }, " Bamboo ", 2
      /* CLASS */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[12] || (_cache[12] = function ($event) {
          return $options.setDeskMaterial(8);
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'bg-my text-white': _ctx.$store.state.params.deskMaterial == 8
        }, "h-20 w-full rounded-xl border"])
      }, " Laminate ", 2
      /* CLASS */
      )])];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(3, function (n) {
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
    }, [n == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_48)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), n == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_49)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), n == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 10
    /* CLASS, PROPS */
    , _hoisted_47)]);
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
    "class": "whitespace-nowrap easy-transition"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 4
  /* STYLE */
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
/* harmony import */ var D_media_openserver_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LegsType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LegsType_vue_vue_type_template_id_75dd31be__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Views/LegsType.vue"]])
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
/* harmony import */ var D_media_openserver_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Carusel_vue_vue_type_template_id_1bf5d304__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Carusel.vue"]])
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