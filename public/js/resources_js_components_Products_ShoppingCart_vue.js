"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Products_ShoppingCart_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: {
    coupon: "",
    qty: ""
  },
  computed: {
    getCart: function getCart() {
      return this.$store.state.cart;
    },
    totalProduct: function totalProduct() {
      return this.$store.state.cart.reduce(function (acc, current) {
        return acc + current.qty;
      }, 0);
    },
    totalPrice: function totalPrice() {
      return this.$store.state.cart.reduce(function (acc, current) {
        return acc + current.price * current.qty;
      }, 0);
    },
    methods: {
      onChange: function onChange(event) {
        console.log(event.target.value);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Products/ShoppingCart.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Products/ShoppingCart.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShoppingCart.vue?vue&type=template&id=066dc0b8& */ "./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8&");
/* harmony import */ var _ShoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingCart.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ShoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/ShoppingCart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShoppingCart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ShoppingCart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingCart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShoppingCart_vue_vue_type_template_id_066dc0b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShoppingCart.vue?vue&type=template&id=066dc0b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ShoppingCart.vue?vue&type=template&id=066dc0b8& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("section", [
    _c("section", { staticClass: "section-pagetop bg-gray" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "ml-3" }, [
          _c("h2", { staticClass: "title-page" }, [_vm._v("Mon Panier")]),
          _vm._v(" "),
          _c("h5", { staticClass: "text-danger" }, [
            _vm._v(
              "\n          " +
                _vm._s(_vm.totalProduct) +
                " produits dans votre panier\n        "
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "section-content padding-y" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("main", { staticClass: "col-md-9" }, [
            _c("div", { staticClass: "card" }, [
              this.$store.state.cart.length > 0
                ? _c(
                    "table",
                    {
                      staticClass: "table table-borderless table-shopping-cart"
                    },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.getCart, function(product, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [
                              _c("figure", { staticClass: "itemside" }, [
                                _c("div", { staticClass: "aside" }, [
                                  _c("img", {
                                    staticClass: "img-sm",
                                    attrs: {
                                      src:
                                        "https://kalisso.com/storage/" +
                                        product.image
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c(
                                  "figcaption",
                                  { staticClass: "info" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "title text-dark",
                                        attrs: {
                                          to: {
                                            name: "products.show",
                                            params: { slug: product.slug }
                                          },
                                          href: "#"
                                        }
                                      },
                                      [_vm._v(_vm._s(product.name))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "text-muted small" },
                                      [
                                        _vm._v(
                                          "\n                          " +
                                            _vm._s(product.details) +
                                            "\n                          "
                                        ),
                                        _c("br")
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.qty,
                                      expression: "qty"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.qty = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      },
                                      function($event) {
                                        return _vm.onChange(this.value)
                                      }
                                    ]
                                  }
                                },
                                _vm._l(10, function(n) {
                                  return _c(
                                    "option",
                                    _vm._b(
                                      { key: n, domProps: { value: n } },
                                      "option",
                                      n == product.qty
                                        ? (_vm.qty = product.qty)
                                        : null,
                                      false
                                    ),
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(n) +
                                          "\n                      "
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("div", { staticClass: "price-wrap" }, [
                                _c("var", { staticClass: "price" }, [
                                  _vm._v(_vm._s(product.price) + " FCFA")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._m(1, true),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-light",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$store.commit(
                                        "removeProductToCart",
                                        index
                                      )
                                    }
                                  }
                                },
                                [_vm._v("\n                      Retirer")]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              this.$store.state.cart.length <= 0
                ? _c("div", { staticClass: "jumbotron" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-8" },
                        [
                          _c("h2", [_vm._v("Votre Panier est Vide")]),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-light",
                              attrs: { to: { name: "home" } }
                            },
                            [
                              _c("i", { staticClass: "fa fa-chevron-left" }),
                              _vm._v(
                                "\n                    Retour au shopping\n                  "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._m(2)
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body border-top" },
                [
                  this.$store.state.cart.length > 0
                    ? _c(
                        "router-link",
                        {
                          staticClass: "btn btn-primary float-md-right",
                          attrs: { to: { name: "checkout.payment" } }
                        },
                        [
                          _vm._v(
                            "\n                Passer à la caisse\n                "
                          ),
                          _c("i", { staticClass: "fa fa-chevron-right" })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  this.$store.state.cart.length > 0
                    ? _c(
                        "router-link",
                        {
                          staticClass: "btn btn-light",
                          attrs: { to: { name: "home" } }
                        },
                        [
                          _c("i", { staticClass: "fa fa-chevron-left" }),
                          _vm._v(
                            "\n                Retour au shopping\n              "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            this.$store.state.cart.length > 0
              ? _c("div", { staticClass: "alert alert-success mt-3" }, [
                  _vm._m(3)
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          this.$store.state.cart.length > 0
            ? _c("aside", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "card mb-3" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("form", { attrs: { role: "form" } }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Vous avez un coupon?")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.coupon,
                                expression: "coupon"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", placeholder: "Coupon code" },
                            domProps: { value: _vm.coupon },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.coupon = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(4)
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("dl", { staticClass: "dlist-align" }, [
                      _c("dt", [_vm._v("Total :")]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(_vm.totalPrice) + " FCFA")
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _c("dl", { staticClass: "dlist-align" }, [
                      _c("dt", [_vm._v("Total à payer:")]),
                      _vm._v(" "),
                      _c("dd", { staticClass: "text-right h5" }, [
                        _c("strong", [_vm._v(_vm._s(_vm.totalPrice) + " FCFA")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _vm._m(6)
                  ])
                ])
              ])
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(7),
    _vm._v(" "),
    _c("div", { staticClass: "container mx-auto", attrs: { hidden: "" } }, [
      _c("div", { staticClass: "flex shadow-md" }, [
        _c(
          "div",
          { staticClass: "w-3/4 bg-white px-10 py-10" },
          [
            _c("div", { staticClass: "flex justify-between border-b pb-8" }, [
              _c("h1", { staticClass: "font-semibold text-2xl" }, [
                _vm._v("Shopping Cart")
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "font-semibold text-2xl" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.totalProduct) +
                    " produits dans votre panier\n          "
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(8),
            _vm._v(" "),
            _vm._l(_vm.getCart, function(product, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass:
                    "flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                },
                [
                  _c("div", { staticClass: "flex w-2/5" }, [
                    _vm._m(9, true),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "flex flex-col justify-between ml-4 flex-grow"
                      },
                      [
                        _c("span", { staticClass: "font-bold text-sm" }, [
                          _vm._v(_vm._s(product.name))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-gray-500 text-xs" }, [
                          _vm._v(_vm._s(product.description))
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "font-semibold hover:text-red-500 text-gray-500 text-xs",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.$store.commit(
                                  "removeProductToCart",
                                  index
                                )
                              }
                            }
                          },
                          [_vm._v("Supprimer du panier")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex justify-center w-1/5" }, [
                    _c("span", {
                      staticClass: "mx-2 border text-center w-8",
                      domProps: { textContent: _vm._s(product.qty) }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "text-center w-1/5 font-semibold text-sm" },
                    [_vm._v(_vm._s(product.price / 100))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "text-center w-1/5 font-semibold text-sm" },
                    [_vm._v(_vm._s((product.price * product.qty) / 100))]
                  )
                ]
              )
            }),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "flex font-semibold text-indigo-600 text-sm mt-10",
                attrs: { to: { name: "products.index" } }
              },
              [_vm._v("\n          Revenir faire les courses")]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "w-1/4 px-8 py-10", attrs: { id: "summary" } },
          [
            _c("h1", { staticClass: "font-semibold text-2xl border-b pb-8" }, [
              _vm._v("Informations")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "border-t mt-8" }, [
              _c(
                "div",
                {
                  staticClass:
                    "flex font-semibold justify-between py-6 text-sm uppercase"
                },
                [
                  _c("span", [_vm._v("price total")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.totalPrice / 100) + " €")])
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "\n              bg-indigo-500\n              font-semibold\n              hover:bg-indigo-600\n              py-3\n              text-sm text-white\n              uppercase\n              w-full\n            "
                },
                [_vm._v("\n            Passer à la caisse\n          ")]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "text-muted" }, [
      _c("tr", { staticClass: "small text-uppercase" }, [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Produit")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col", width: "120" } }, [
          _vm._v("Quantité")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col", width: "120" } }, [_vm._v("prix")]),
        _vm._v(" "),
        _c("th", {
          staticClass: "text-right",
          attrs: { scope: "col", width: "200" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-light",
        attrs: {
          "data-original-title": "Save to Wishlist",
          title: "",
          href: "",
          "data-toggle": "tooltip"
        }
      },
      [_c("i", { staticClass: "fa fa-heart" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-4" }, [
      _c("img", {
        staticClass: "img-fluid",
        attrs: { src: "/images/emptCart3.png", alt: "Cart is Empty" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "icontext" }, [
      _c("i", { staticClass: "icon text-success fa fa-truck" }),
      _vm._v("\n              Livraison gratuite sous 48h\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-append" }, [
      _c("button", { staticClass: "btn btn-primary" }, [_vm._v("Appliquer")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", { staticClass: "dlist-align" }, [
      _c("dt", [_vm._v("Réduction:")]),
      _vm._v(" "),
      _c("dd", { staticClass: "text-right" }, [_vm._v("0 FCFA")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center mb-3" }, [
      _c("img", { attrs: { src: "/images/misc/payments.png", height: "32" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "section-name border-top padding-y" }, [
      _c("div", { staticClass: "container" }, [
        _c("h6", [_vm._v("Politique de paiement et de remboursement")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n        Nous vous rembourserons tous les paiements que nous avons reçus de\n        votre part, y compris les frais de livraison standard (c'est-à-dire la\n        livraison la moins chère que nous proposons) au plus tard 15 jours à\n        compter de la réception de votre demande de retrait. Nous utiliserons\n        le même mode de paiement que celui que vous avez utilisé pour votre\n        commande initiale, sauf si vous acceptez expressément un autre mode de\n        paiement. En aucun cas, ce remboursement ne vous occasionnera de frais\n        supplémentaires. Nous pouvons suspendre le remboursement jusqu'à ce\n        que nous ayons reçu le ou les produits ou jusqu'à ce que vous ayez\n        fourni une preuve d'expédition du ou des produits, quelle que soit la\n        date d'échéance. premier de ces faits. Si le remboursement intervient\n        après le délai mentionné ci-dessus, le montant qui vous est dû sera\n        automatiquement majoré.\n      "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex mt-10 mb-5" }, [
      _c(
        "h3",
        { staticClass: "font-semibold text-gray-600 text-xs uppercase w-2/5" },
        [_vm._v("\n            Détails du produit\n          ")]
      ),
      _vm._v(" "),
      _c(
        "h3",
        {
          staticClass:
            "\n              font-semibold\n              text-center text-gray-600 text-xs\n              uppercase\n              w-1/5\n              text-center\n            "
        },
        [_vm._v("\n            Quantité\n          ")]
      ),
      _vm._v(" "),
      _c(
        "h3",
        {
          staticClass:
            "\n              font-semibold\n              text-center text-gray-600 text-xs\n              uppercase\n              w-1/5\n              text-center\n            "
        },
        [_vm._v("\n            price\n          ")]
      ),
      _vm._v(" "),
      _c(
        "h3",
        {
          staticClass:
            "\n              font-semibold\n              text-center text-gray-600 text-xs\n              uppercase\n              w-1/5\n              text-center\n            "
        },
        [_vm._v("\n            Total\n          ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-20" }, [
      _c("img", {
        staticClass: "h-24",
        attrs: {
          src:
            "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
          alt: ""
        }
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);