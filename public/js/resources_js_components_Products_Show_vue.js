"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Products_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      counter: 1
    };
  },
  computed: {
    product: function product() {
      var _this = this;

      return this.$store.state.products.find(function (element) {
        return element.slug === _this.$route.params.slug;
      });
    }
  },
  methods: {
    incrementCounter: function incrementCounter() {
      if (this.counter >= 10) {
        this.counter = 10;
      } else {
        this.counter++;
      }
    },
    decrementCounter: function decrementCounter() {
      if (this.counter <= 1) {
        this.counter = 1;
      } else {
        this.counter--;
      }
    }
  },
  mounted: function mounted() {
    window.scrollTo(0, 0);
  }
});

/***/ }),

/***/ "./resources/js/components/Products/Show.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Products/Show.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=3722748d& */ "./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/Show.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Products/Show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3722748d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=3722748d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Show.vue?vue&type=template&id=3722748d& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("nav-section"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "section-content bg-white padding-y" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("aside", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card" }, [
                _c("article", { staticClass: "gallery-wrap" }, [
                  _c("div", { staticClass: "img-big-wrap" }, [
                    _c("div", [
                      _c("a", { attrs: { href: "#" } }, [
                        _c("img", {
                          attrs: {
                            src:
                              "https://kalisso.com/storage/" + _vm.product.image
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "thumbs-wrap" },
                    _vm._l(JSON.parse(_vm.product.images), function(img) {
                      return _c(
                        "a",
                        {
                          key: img,
                          staticClass: "item-thumb fill",
                          attrs: { href: "#" }
                        },
                        [
                          _c("img", {
                            staticClass: "fill",
                            attrs: { src: "https://kalisso.com/storage/" + img }
                          })
                        ]
                      )
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("main", { staticClass: "col-md-6" }, [
              _c("article", { staticClass: "product-info-aside" }, [
                _c("h2", {
                  staticClass: "title mt-3",
                  domProps: { textContent: _vm._s(_vm.product.name.toString()) }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "rating-wrap my-3" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm.product.review !== null
                    ? _c("small", { staticClass: "label-rating text-muted" }, [
                        _vm._v(_vm._s(_vm.product.review) + " Commentaires")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.product.product_sale !== 0
                    ? _c(
                        "small",
                        { staticClass: "label-rating text-success" },
                        [
                          _c("i", { staticClass: "fa fa-clipboard-check" }),
                          _vm._v(
                            " " +
                              _vm._s(_vm.product.product_sale) +
                              " \n                                Vendue" +
                              _vm._s(_vm.product.product_sale > 2 ? "s" : "") +
                              "\n                            "
                          )
                        ]
                      )
                    : _vm._e(),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c("small", { staticClass: "badge badge-warning pr-3" }, [
                    _c("i", { staticClass: "fas fa-map-marker-alt pr-2 pl-2" }),
                    _vm._v(
                      "\n                                " +
                        _vm._s(_vm.product.location) +
                        "\n                            "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-3" }, [
                  _c("var", { staticClass: "price h4" }, [
                    _vm._v(_vm._s(_vm.presentPrice(_vm.product.price)))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("Tous frais inclus")
                  ])
                ]),
                _vm._v(" "),
                _c("p", {
                  domProps: { innerHTML: _vm._s(_vm.product.details) }
                }),
                _vm._v(" "),
                _c("p", {
                  domProps: { innerHTML: _vm._s(_vm.product.description) }
                }),
                _vm._v(" "),
                _vm.product.options
                  ? _c("dl", { staticClass: "row" }, [
                      _c("dt", { staticClass: "col-sm-3" }, [
                        _vm._v("Manufacturer")
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-sm-3" }, [
                        _vm._v("Article number")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-sm-9" }, [
                        _vm._v("596 065")
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-sm-3" }, [
                        _vm._v("Guarantee")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-sm-9" }, [_vm._v("2 year")]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-sm-3" }, [
                        _vm._v("Delivery time")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-sm-9" }, [
                        _vm._v("3-4 days")
                      ]),
                      _vm._v(" "),
                      _c("dt", { staticClass: "col-sm-3" }, [
                        _vm._v("Availabilty")
                      ]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "col-sm-9" }, [
                        _vm._v("in Stock")
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-row  mt-4" }, [
                  _c("div", { staticClass: "form-group col-md" }, [
                    _vm.product.stock > 0
                      ? _c(
                          "a",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.$store.commit(
                                  "addProductToCart",
                                  _vm.product
                                )
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-shopping-cart" }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text" }, [
                              _vm._v("Ajoutez au panier")
                            ])
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.product.stock == 0
                      ? _c(
                          "a",
                          {
                            staticClass: "btn invalid disabled",
                            attrs: { href: "#" }
                          },
                          [
                            _c("i", { staticClass: "fas fa-shopping-cart" }),
                            _vm._v(" "),
                            _c("span", {
                              domProps: {
                                textContent: _vm._s("Rupture de stock")
                              }
                            })
                          ]
                        )
                      : _vm._e()
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { class: "section-name padding-y bg" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-8" }, [
              _c("h5", { staticClass: "title-description" }, [
                _vm._v("Description")
              ]),
              _vm._v(" "),
              _c("p", {
                domProps: { innerHTML: _vm._s(_vm.product.description) }
              }),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c("h5", { staticClass: "title-description" }, [
                _vm._v("Specifications")
              ]),
              _vm._v(" "),
              _vm._m(4)
            ]),
            _vm._v(" "),
            _c("aside", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "box" }, [
                _c("h5", { staticClass: "title-description" }, [
                  _vm._v("Files")
                ]),
                _vm._v(" "),
                _c("p", {
                  domProps: { innerHTML: _vm._s(_vm.product.details) }
                }),
                _vm._v(" "),
                _c("h5", { staticClass: "title-description" }, [
                  _vm._v("Videos")
                ]),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _vm._m(7)
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(8),
      _vm._v(" "),
      _c("footer-section")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "py-3 bg-light" }, [
      _c("div", { staticClass: "container" }, [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Category name")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Sub category")])
          ]),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "breadcrumb-item active",
              attrs: { "aria-current": "page" }
            },
            [_vm._v("\n                    Items\n                ")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "rating-stars" }, [
      _c("li", { staticClass: "stars-active", staticStyle: { width: "80%" } }, [
        _c("i", { staticClass: "fa fa-star" }),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-star" }),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-star" }),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-star" }),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-star" })
      ]),
      _vm._v(" "),
      _c("li", [
        _c("i", { staticClass: "fa fa-star" }),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-star" }),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-star" }),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-star" }),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-star" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dd", { staticClass: "col-sm-9" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Great textile Ltd.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list-check" }, [
      _c("li", [_vm._v("Material: Stainless steel")]),
      _vm._v(" "),
      _c("li", [_vm._v("Weight: 82kg")]),
      _vm._v(" "),
      _c("li", [_vm._v("built-in drip tray")]),
      _vm._v(" "),
      _c("li", [_vm._v("Open base for pots and pans")]),
      _vm._v(" "),
      _c("li", [_vm._v("On request available in propane execution")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table table-bordered" }, [
      _c("tr", [
        _c("th", { attrs: { colspan: "2" } }, [_vm._v("Basic specs")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Type of energy")]),
        _vm._v(" "),
        _c("td", [_vm._v("Lava stone")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Number of zones")]),
        _vm._v(" "),
        _c("td", [_vm._v("2")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Automatic connection")]),
        _vm._v(" "),
        _c("td", [
          _c("i", { staticClass: "fa fa-check text-success" }),
          _vm._v(" Yes\n                            ")
        ])
      ]),
      _vm._v(" "),
      _c("tr", [_c("th", { attrs: { colspan: "2" } }, [_vm._v("Dimensions")])]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Width")]),
        _vm._v(" "),
        _c("td", [_vm._v("500mm")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Depth")]),
        _vm._v(" "),
        _c("td", [_vm._v("400mm")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Height")]),
        _vm._v(" "),
        _c("td", [_vm._v("700mm")])
      ]),
      _vm._v(" "),
      _c("tr", [_c("th", { attrs: { colspan: "2" } }, [_vm._v("Materials")])]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Exterior")]),
        _vm._v(" "),
        _c("td", [_vm._v("Stainless steel")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Interior")]),
        _vm._v(" "),
        _c("td", [_vm._v("Iron")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { attrs: { colspan: "2" } }, [_vm._v("Connections")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Heating Type")]),
        _vm._v(" "),
        _c("td", [_vm._v("Gas")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Connected load gas")]),
        _vm._v(" "),
        _c("td", [_vm._v("15 Kw")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("article", { staticClass: "media mb-3" }, [
      _c("a", { attrs: { href: "#" } }, [
        _c("img", {
          staticClass: "img-sm mr-3",
          attrs: { src: "images/posts/3.jpg" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "media-body" }, [
        _c("h6", { staticClass: "mt-0" }, [
          _c("a", { attrs: { href: "#" } }, [_vm._v("How to use this item")])
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-2" }, [
          _vm._v(
            "\n                                    Cras sit amet nibh libero, in gravida\n                                    nulla. Nulla vel metus scelerisque ante\n                                    sollicitudin\n                                "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("article", { staticClass: "media mb-3" }, [
      _c("a", { attrs: { href: "#" } }, [
        _c("img", {
          staticClass: "img-sm mr-3",
          attrs: { src: "images/posts/2.jpg" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "media-body" }, [
        _c("h6", { staticClass: "mt-0" }, [
          _c("a", { attrs: { href: "#" } }, [_vm._v("New tips and tricks")])
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-2" }, [
          _vm._v(
            "\n                                    Cras sit amet nibh libero, in gravida\n                                    nulla. Nulla vel metus scelerisque ante\n                                    sollicitudin\n                                "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("article", { staticClass: "media mb-3" }, [
      _c("a", { attrs: { href: "#" } }, [
        _c("img", {
          staticClass: "img-sm mr-3",
          attrs: { src: "images/posts/1.jpg" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "media-body" }, [
        _c("h6", { staticClass: "mt-0" }, [
          _c("a", { attrs: { href: "#" } }, [_vm._v("New tips and tricks")])
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-2" }, [
          _vm._v(
            "\n                                    Cras sit amet nibh libero, in gravida\n                                    nulla. Nulla vel metus scelerisque ante\n                                    sollicitudin\n                                "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "padding-y-lg bg-light border-top" }, [
      _c("div", { staticClass: "container" }, [
        _c("p", { staticClass: "pb-2 text-center" }, [
          _vm._v(
            "\n                Delivering the latest product trends and industry news\n                straight to your inbox\n            "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row justify-content-md-center" }, [
          _c("div", { staticClass: "col-lg-4 col-sm-6" }, [
            _c("form", { staticClass: "form-row" }, [
              _c("div", { staticClass: "col-8" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { placeholder: "Your Email", type: "email" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-block btn-warning",
                    attrs: { type: "submit" }
                  },
                  [
                    _c("i", { staticClass: "fa fa-envelope" }),
                    _vm._v(" Subscribe\n                            ")
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("small", { staticClass: "form-text" }, [
              _vm._v(
                "We’ll never share your email address with a\n                        third-party.\n                    "
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);