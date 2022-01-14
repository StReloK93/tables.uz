"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_desktop_Views_LegsType_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/LegsType.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/LegsType.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Carusel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Carusel.vue */ "./resources/js/desktop/components/Carusel.vue");
/* harmony import */ var _global_LegsCoordinates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/LegsCoordinates */ "./resources/js/global/LegsCoordinates.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      imagearr: null,
      folderImages: null,
      deskMaterials: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    scene.onReadyObservable.add(function () {
      _this.setLegColor(1);

      var desks = Engine.textures.folders;
      _this.deskMaterials = desks.folders;
      _this.folderImages = desks.images;
      _this.imagearr = _this.folderImages[store.state.params.deskMaterial];
    });
  },
  methods: {
    setDeskImage: function setDeskImage(img) {
      store.commit('setDeskMaterial', img);
      var images = Engine.textures.folders.images;

      var _loop = function _loop(key) {
        elem = images[key].find(function (element) {
          if (element === store.state.params.deskimage) {
            return store.state.params.activeFolder = key;
          }
        });

        if (elem) {
          return "break";
        }
      };

      for (var key in images) {
        var elem;

        var _ret = _loop(key);

        if (_ret === "break") break;
      }
    },
    setLegColor: function setLegColor(colorIndex) {
      var colorArr = ['#D6D6D6', '#8B8B8B', '#222222'];
      var LegsArr = ['oneLeg', 'twoLeg', 'fourLeg', 'fiveLeg', 'threeLegLeft', 'threeLegRight', 'tumbochka'];
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
          _this2.DecorsPosition(Decors, _global_LegsCoordinates__WEBPACK_IMPORTED_MODULE_1__["default"][legIndex - 1][Decors]);
        } else {
          _this2.DecorsHide(Decors, _global_LegsCoordinates__WEBPACK_IMPORTED_MODULE_1__["default"][legIndex - 1][Decors]);
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
    }
  },
  components: {
    Caruosel: _components_Carusel_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/LegsType.vue?vue&type=template&id=ae5f7ede":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/LegsType.vue?vue&type=template&id=ae5f7ede ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold mb-4 xl:text-xl md:text-md text-gray-600"
}, " Available legs ", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "flex text-center justify-between -mr-2"
};
var _hoisted_3 = ["onClick"];
var _hoisted_4 = {
  "class": "xl:h-28 md:h-24 flex items-center justify-center"
};
var _hoisted_5 = ["src"];
var _hoisted_6 = {
  "class": "xl:text-sm md:text-xs"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold mb-1 xl:text-xl md:text-md xl:mt-6 md:mt-4 text-gray-600"
}, " Standing desk material ", -1
/* HOISTED */
);

var _hoisted_8 = {
  key: 0,
  src: "/images/true.png",
  "class": "w-4 -m-1 -mt-2 absolute top-0 right-0 z-20"
};
var _hoisted_9 = ["onClick", "innerHTML"];
var _hoisted_10 = {
  key: 0,
  "class": "flex flex-wrap -mr-2 md:mt-2"
};
var _hoisted_11 = ["title", "onClick"];
var _hoisted_12 = ["src", "title"];
var _hoisted_13 = {
  "class": "xl:pb-8 md:pb-4"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "font-bold xl:mb-6 md:mb-4 xl:text-xl md:text-md text-gray-600"
}, " Choose the leg color ", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "flex flex-wrap -mr-2"
};
var _hoisted_16 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Caruosel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Caruosel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$store.state.legTypes, function (legs, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("aside", {
      key: index,
      onClick: function onClick($event) {
        return $options.setLegType(index + 1);
      },
      "class": "w-1/5 pr-2 cursor-pointer"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'border-myblue': _ctx.$store.state.params.legType == index + 1
      }, "p-2 pt-1 overflow-hidden rounded-xl border bg-white"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: legs.img,
      "class": "w-10/12"
    }, null, 8
    /* PROPS */
    , _hoisted_5)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(legs.name), 1
    /* TEXT */
    )], 2
    /* CLASS */
    )], 8
    /* PROPS */
    , _hoisted_3);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" new "), _hoisted_7, $data.deskMaterials ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Caruosel, {
    key: 0,
    itemCount: 4,
    "class": "text-md text-center text-gray-600"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.deskMaterials, function (materials) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
          key: materials,
          "class": "w-1/4 inline-block align-middle px-2 relative"
        }, [_ctx.$store.state.params.activeFolder == materials.path ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: function onClick($event) {
            return $options.deskFolder(materials.path);
          },
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
            'bg-my text-white': _ctx.$store.state.params.deskMaterial == materials.path
          }, "xl:h-16 md:h-14 xl:text-sm md:text-xs w-full rounded-xl border"]),
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
      return [$data.imagearr ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.imagearr, function (img, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("aside", {
          "class": "w-1/5 pr-2",
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
          title: index,
          onClick: function onClick($event) {
            return $options.setDeskImage(img);
          },
          "class": "mb-6 xl:h-24 md:h-20 cursor-pointer"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
            'shadow-blue': _ctx.$store.state.params.deskimage == img
          }, "border-2 border-white rounded-md object-cover w-full h-full"]),
          src: "/floors/".concat(img),
          title: img
        }, null, 10
        /* CLASS, PROPS */
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
      "class": "w-1/5 pr-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
      onClick: function onClick($event) {
        return $options.setLegColor(n);
      },
      "class": "xl:h-24 md:h-20"
    }, [n == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 0,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'shadow-blue border-2 border-white': _ctx.$store.state.params.legColor == n
      }, "w-full h-full bg-white border border-gray rounded-md"])
    }, null, 2
    /* CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), n == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 1,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'shadow-blue': _ctx.$store.state.params.legColor == n
      }, "w-full h-full bg-gray-400 border-2 border-white rounded-md"])
    }, null, 2
    /* CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), n == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: 2,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'shadow-blue': _ctx.$store.state.params.legColor == n
      }, "w-full h-full bg-black border-2 border-white rounded-md"])
    }, null, 2
    /* CLASS */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_16)]);
  }), 64
  /* STABLE_FRAGMENT */
  ))])])]);
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
  "class": "overflow-hidden flex-grow py-3"
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

/***/ "./resources/js/global/LegsCoordinates.js":
/*!************************************************!*\
  !*** ./resources/js/global/LegsCoordinates.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  image: new BABYLON.Vector3(10, 19.117, -34.423),
  plant: new BABYLON.Vector3(4.522, 1, -31),
  monitor: new BABYLON.Vector3(17.212, 8.01698, -30.788),
  chair: new BABYLON.Vector3(18.739, 1.38094, -20.963),
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
  lamp: new BABYLON.Vector3(21.2717, 8.45, -31.4137),
  tumbochka: new BABYLON.Vector3(3, 1.178, -29.831)
}]);

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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btns{\r\n\ttransform: scale(-1);\r\n   position: relative;\r\n   top: 1px;\n}\n.fades-enter-active,\r\n.fades-leave-active {\r\n  transition: 1s ease;\n}\n.fades-enter-from,\r\n.fades-leave-to {\r\n  opacity: 0;\r\n  transform: scaleX(0);\r\n  width: 0;\n}\r\n", ""]);
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

/***/ "./resources/js/desktop/Views/LegsType.vue":
/*!*************************************************!*\
  !*** ./resources/js/desktop/Views/LegsType.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LegsType_vue_vue_type_template_id_ae5f7ede__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LegsType.vue?vue&type=template&id=ae5f7ede */ "./resources/js/desktop/Views/LegsType.vue?vue&type=template&id=ae5f7ede");
/* harmony import */ var _LegsType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LegsType.vue?vue&type=script&lang=js */ "./resources/js/desktop/Views/LegsType.vue?vue&type=script&lang=js");
/* harmony import */ var C_AMD_OSPanel_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_AMD_OSPanel_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LegsType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LegsType_vue_vue_type_template_id_ae5f7ede__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/desktop/Views/LegsType.vue"]])
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
/* harmony import */ var C_AMD_OSPanel_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_AMD_OSPanel_domains_tables_uz_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Carusel_vue_vue_type_template_id_445e83d1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/desktop/components/Carusel.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/desktop/Views/LegsType.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/desktop/Views/LegsType.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LegsType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LegsType_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LegsType.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/LegsType.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/desktop/Views/LegsType.vue?vue&type=template&id=ae5f7ede":
/*!*******************************************************************************!*\
  !*** ./resources/js/desktop/Views/LegsType.vue?vue&type=template&id=ae5f7ede ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LegsType_vue_vue_type_template_id_ae5f7ede__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LegsType_vue_vue_type_template_id_ae5f7ede__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LegsType.vue?vue&type=template&id=ae5f7ede */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/Views/LegsType.vue?vue&type=template&id=ae5f7ede");


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

/***/ "./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css":
/*!*************************************************************************************************!*\
  !*** ./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_445e83d1_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/desktop/components/Carusel.vue?vue&type=style&index=0&id=445e83d1&lang=css");


/***/ })

}]);