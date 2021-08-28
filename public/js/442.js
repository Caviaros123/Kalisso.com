"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[442],{442:(t,s,a)=>{a.r(s),a.d(s,{default:()=>e});const i={data:function(){return{counter:1}},computed:{product:function(){var t=this;return this.$store.state.products.find((function(s){return s.slug===t.$route.params.slug}))}},methods:{incrementCounter:function(){this.counter>=10?this.counter=10:this.counter++},decrementCounter:function(){this.counter<=1?this.counter=1:this.counter--}}};const e=(0,a(1900).Z)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"py-6 px-10"},[t._m(0),t._v(" "),a("section",{staticClass:"section-content bg-white padding-y"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("aside",{staticClass:"col-md-6"},[a("div",{staticClass:"card"},[a("article",{staticClass:"gallery-wrap"},[a("div",{staticClass:"img-big-wrap"},[a("div",[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:"https://kalisso.com/storage/"+t.product.image}})])])]),t._v(" "),a("div",{staticClass:"thumbs-wrap"},t._l(JSON.parse(t.product.images),(function(t){return a("a",{key:t,staticClass:"item-thumb fill",attrs:{href:"#"}},[a("img",{staticClass:"fill",attrs:{src:"https://kalisso.com/storage/"+t}})])})),0)])])]),t._v(" "),a("main",{staticClass:"col-md-6"},[a("article",{staticClass:"product-info-aside"},[a("h2",{staticClass:"title mt-3",domProps:{textContent:t._s(t.product.name.toString())}}),t._v(" "),a("div",{staticClass:"rating-wrap my-3"},[t._m(1),t._v(" "),null!==t.product.review?a("small",{staticClass:"label-rating text-muted"},[t._v(t._s(t.product.review)+" Commentaires")]):t._e(),t._v(" "),0!==t.product.product_sale?a("small",{staticClass:"label-rating text-success"},[a("i",{staticClass:"fa fa-clipboard-check"}),t._v(" "+t._s(t.product.product_sale)+" \n                                Vendue"+t._s(t.product.product_sale>2?"s":"")+"\n                            ")]):t._e(),a("br"),a("br"),t._v(" "),a("small",{staticClass:"badge badge-warning pr-3"},[a("i",{staticClass:"fas fa-map-marker-alt pr-2 pl-2"}),t._v("\n                                "+t._s(t.product.location)+"\n                            ")])]),t._v(" "),a("div",{staticClass:"mb-3"},[a("var",{staticClass:"price h4"},[t._v(t._s(t.presentPrice(t.product.price)))]),t._v(" "),a("span",{staticClass:"text-muted"},[t._v("Tous frais inclus")])]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.product.details)}}),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.product.description)}}),t._v(" "),t.product.options?a("dl",{staticClass:"row"},[a("dt",{staticClass:"col-sm-3"},[t._v("Manufacturer")]),t._v(" "),t._m(2),t._v(" "),a("dt",{staticClass:"col-sm-3"},[t._v("Article number")]),t._v(" "),a("dd",{staticClass:"col-sm-9"},[t._v("596 065")]),t._v(" "),a("dt",{staticClass:"col-sm-3"},[t._v("Guarantee")]),t._v(" "),a("dd",{staticClass:"col-sm-9"},[t._v("2 year")]),t._v(" "),a("dt",{staticClass:"col-sm-3"},[t._v("Delivery time")]),t._v(" "),a("dd",{staticClass:"col-sm-9"},[t._v("3-4 days")]),t._v(" "),a("dt",{staticClass:"col-sm-3"},[t._v("Availabilty")]),t._v(" "),a("dd",{staticClass:"col-sm-9"},[t._v("in Stock")])]):t._e(),t._v(" "),a("div",{staticClass:"form-row  mt-4"},[a("div",{staticClass:"form-group col-md flex-grow-0"},[a("div",{staticClass:"input-group mb-3 input-spinner"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-light",attrs:{type:"button",id:"button-plus"},on:{click:t.incrementCounter}},[t._v("\n                                            +\n                                        ")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.counter,expression:"counter"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.counter},on:{input:function(s){s.target.composing||(t.counter=s.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-light",attrs:{type:"button",id:"button-minus"},on:{click:t.decrementCounter}},[t._v("\n                                            −\n                                        ")])])])]),t._v(" "),a("div",{staticClass:"form-group col-md"},[t.product.stock>0?a("a",{staticClass:"btn btn-primary",attrs:{href:"#"},on:{click:function(s){return t.$store.commit("addProductToCart",t.product)}}},[a("i",{staticClass:"fas fa-shopping-cart"}),t._v(" "),a("span",{staticClass:"text"},[t._v("Ajoutez au panier")])]):t._e(),t._v(" "),0==t.product.stock?a("a",{staticClass:"btn invalid disabled",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-shopping-cart"}),t._v(" "),a("span",{domProps:{textContent:t._s("Rupture de stock")}})]):t._e()])])])])])])]),t._v(" "),a("section",{class:"section-name padding-y bg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("h5",{staticClass:"title-description"},[t._v("Description")]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.product.description)}}),t._v(" "),t._m(3),t._v(" "),a("h5",{staticClass:"title-description"},[t._v("Specifications")]),t._v(" "),t._m(4)]),t._v(" "),a("aside",{staticClass:"col-md-4"},[a("div",{staticClass:"box"},[a("h5",{staticClass:"title-description"},[t._v("Files")]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.product.details)}}),t._v(" "),a("h5",{staticClass:"title-description"},[t._v("Videos")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])])])])]),t._v(" "),t._m(8)])}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"py-3 bg-light"},[a("div",{staticClass:"container"},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("Category name")])]),t._v(" "),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("Sub category")])]),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n                    Items\n                ")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"rating-stars"},[a("li",{staticClass:"stars-active",staticStyle:{width:"80%"}},[a("i",{staticClass:"fa fa-star"}),t._v(" "),a("i",{staticClass:"fa fa-star"}),t._v(" "),a("i",{staticClass:"fa fa-star"}),t._v(" "),a("i",{staticClass:"fa fa-star"}),t._v(" "),a("i",{staticClass:"fa fa-star"})]),t._v(" "),a("li",[a("i",{staticClass:"fa fa-star"}),t._v(" "),a("i",{staticClass:"fa fa-star"}),t._v(" "),a("i",{staticClass:"fa fa-star"}),t._v(" "),a("i",{staticClass:"fa fa-star"}),t._v(" "),a("i",{staticClass:"fa fa-star"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("dd",{staticClass:"col-sm-9"},[a("a",{attrs:{href:"#"}},[t._v("Great textile Ltd.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"list-check"},[a("li",[t._v("Material: Stainless steel")]),t._v(" "),a("li",[t._v("Weight: 82kg")]),t._v(" "),a("li",[t._v("built-in drip tray")]),t._v(" "),a("li",[t._v("Open base for pots and pans")]),t._v(" "),a("li",[t._v("On request available in propane execution")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table table-bordered"},[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("Basic specs")])]),t._v(" "),a("tr",[a("td",[t._v("Type of energy")]),t._v(" "),a("td",[t._v("Lava stone")])]),t._v(" "),a("tr",[a("td",[t._v("Number of zones")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("Automatic connection")]),t._v(" "),a("td",[a("i",{staticClass:"fa fa-check text-success"}),t._v(" Yes\n                            ")])]),t._v(" "),a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("Dimensions")])]),t._v(" "),a("tr",[a("td",[t._v("Width")]),t._v(" "),a("td",[t._v("500mm")])]),t._v(" "),a("tr",[a("td",[t._v("Depth")]),t._v(" "),a("td",[t._v("400mm")])]),t._v(" "),a("tr",[a("td",[t._v("Height")]),t._v(" "),a("td",[t._v("700mm")])]),t._v(" "),a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("Materials")])]),t._v(" "),a("tr",[a("td",[t._v("Exterior")]),t._v(" "),a("td",[t._v("Stainless steel")])]),t._v(" "),a("tr",[a("td",[t._v("Interior")]),t._v(" "),a("td",[t._v("Iron")])]),t._v(" "),a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("Connections")])]),t._v(" "),a("tr",[a("td",[t._v("Heating Type")]),t._v(" "),a("td",[t._v("Gas")])]),t._v(" "),a("tr",[a("td",[t._v("Connected load gas")]),t._v(" "),a("td",[t._v("15 Kw")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"media mb-3"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-sm mr-3",attrs:{src:"images/posts/3.jpg"}})]),t._v(" "),a("div",{staticClass:"media-body"},[a("h6",{staticClass:"mt-0"},[a("a",{attrs:{href:"#"}},[t._v("How to use this item")])]),t._v(" "),a("p",{staticClass:"mb-2"},[t._v("\n                                    Cras sit amet nibh libero, in gravida\n                                    nulla. Nulla vel metus scelerisque ante\n                                    sollicitudin\n                                ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"media mb-3"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-sm mr-3",attrs:{src:"images/posts/2.jpg"}})]),t._v(" "),a("div",{staticClass:"media-body"},[a("h6",{staticClass:"mt-0"},[a("a",{attrs:{href:"#"}},[t._v("New tips and tricks")])]),t._v(" "),a("p",{staticClass:"mb-2"},[t._v("\n                                    Cras sit amet nibh libero, in gravida\n                                    nulla. Nulla vel metus scelerisque ante\n                                    sollicitudin\n                                ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"media mb-3"},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-sm mr-3",attrs:{src:"images/posts/1.jpg"}})]),t._v(" "),a("div",{staticClass:"media-body"},[a("h6",{staticClass:"mt-0"},[a("a",{attrs:{href:"#"}},[t._v("New tips and tricks")])]),t._v(" "),a("p",{staticClass:"mb-2"},[t._v("\n                                    Cras sit amet nibh libero, in gravida\n                                    nulla. Nulla vel metus scelerisque ante\n                                    sollicitudin\n                                ")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"padding-y-lg bg-light border-top"},[a("div",{staticClass:"container"},[a("p",{staticClass:"pb-2 text-center"},[t._v("\n                Delivering the latest product trends and industry news\n                straight to your inbox\n            ")]),t._v(" "),a("div",{staticClass:"row justify-content-md-center"},[a("div",{staticClass:"col-lg-4 col-sm-6"},[a("form",{staticClass:"form-row"},[a("div",{staticClass:"col-8"},[a("input",{staticClass:"form-control",attrs:{placeholder:"Your Email",type:"email"}})]),t._v(" "),a("div",{staticClass:"col-4"},[a("button",{staticClass:"btn btn-block btn-warning",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-envelope"}),t._v(" Subscribe\n                            ")])])]),t._v(" "),a("small",{staticClass:"form-text"},[t._v("We’ll never share your email address with a\n                        third-party.\n                    ")])])])])])}],!1,null,null,null).exports}}]);