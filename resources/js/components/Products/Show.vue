<template>
    <div>
        <nav-section ></nav-section>
        <!-- <div
            class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden"
        >
            <div
                class="w-1/3 bg-cover"
                style="background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"
            ></div>
            <div class="w-2/3 p-4">
                <h1 class="text-gray-900 font-bold text-2xl">
                    {{ product.name }}
                </h1>
                <p class="mt-2 text-gray-600 text-sm">
                    {{ product.description }}
                </p>
                <div class="flex item-center justify-between mt-3">
                    <h1 class="text-gray-700 font-bold text-xl">
                        {{ product.price / 100 }} €
                    </h1>
                    <button
                        @click="$store.commit('addProductToCart', product)"
                        class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div> -->

        <section class="py-3 bg-light">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item">
                        <a href="#">Category name</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="#">Sub category</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        Items
                    </li>
                </ol>
            </div>
        </section>

        <!-- ========================= SECTION CONTENT ========================= -->
        <section class="section-content bg-white padding-y">
            <div class="container">
                <!-- ============================ ITEM DETAIL ======================== -->
                <div class="row">
                    <aside class="col-md-6">
                        <div class="card">
                            <article class="gallery-wrap">
                                <div class="img-big-wrap">
                                    <div>
                                        <a href="#"
                                            ><img :src="'https://kalisso.com/storage/'+product.image"
                                        /></a>
                                    </div>
                                </div>
                                <!-- slider-product.// -->
                                <div class="thumbs-wrap">
                                    <a href="#" class="item-thumb fill" v-for="img in JSON.parse(product.images)" :key="img">
                                        <img class="fill" :src="'https://kalisso.com/storage/'+img"
                                    /></a>
                                </div>
                                <!-- slider-nav.// -->
                            </article>
                            <!-- gallery-wrap .end// -->
                        </div>
                        <!-- card.// -->
                    </aside>
                    <main class="col-md-6">
                        <article class="product-info-aside">
                            <h2 class="title mt-3" v-text="product.name.toString()">
                               
                            </h2>

                            <div class="rating-wrap my-3">
                                <ul class="rating-stars">
                                    <li style="width:80%" class="stars-active">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </li>
                                </ul>
                                <small class="label-rating text-muted"
                                    v-if="product.review !== null">{{product.review}} Commentaires</small
                                >
                                <small class="label-rating text-success" v-if="product.product_sale !== 0">
                                    <i class="fa fa-clipboard-check"></i> {{product.product_sale}} 
                                    Vendue{{product.product_sale > 2 ? 's' : ''}}
                                </small><br><br>
                                <small class="badge badge-warning pr-3" >
                                    <i class="fas fa-map-marker-alt pr-2 pl-2"></i>
                                    {{product.location}}
                                </small>
                            </div>
                            <!-- rating-wrap.// -->

                            <div class="mb-3">
                                <var class="price h4">{{presentPrice(product.price)}}</var>
                                <span class="text-muted"
                                    >Tous frais inclus</span
                                >
                            </div>
                            <!-- price-detail-wrap .// -->
                            <p v-html="product.details" >
                                
                            </p>
                            <p v-html="product.description" >
                                
                            </p>

                            <dl class="row" v-if="product.options">
                                <dt class="col-sm-3">Manufacturer</dt>
                                <dd class="col-sm-9">
                                    <a href="#">Great textile Ltd.</a>
                                </dd>

                                <dt class="col-sm-3">Article number</dt>
                                <dd class="col-sm-9">596 065</dd>

                                <dt class="col-sm-3">Guarantee</dt>
                                <dd class="col-sm-9">2 year</dd>

                                <dt class="col-sm-3">Delivery time</dt>
                                <dd class="col-sm-9">3-4 days</dd>

                                <dt class="col-sm-3">Availabilty</dt>
                                <dd class="col-sm-9">in Stock</dd>
                            </dl>

                            <div class="form-row  mt-4">
                                <div class="form-group col-md flex-grow-0">
                                    <div class="input-group mb-3 input-spinner">
                                        <div class="input-group-prepend">
                                            <button
                                                class="btn btn-light"
                                                type="button"
                                                id="button-plus"
                                                 @click="incrementCounter"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="counter"
                                        />
                                        <div class="input-group-append">
                                            <button
                                                class="btn btn-light"
                                                type="button"
                                                id="button-minus"
                                                @click="decrementCounter"
                                            >
                                                &minus;
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!-- col.// -->
                                <div class="form-group col-md">
                                    <a href="#" class="btn btn-primary" v-if="product.stock > 0" @click="$store.commit('addProductToCart', product)">
                                        <i class="fas fa-shopping-cart"></i>
                                        <span class="text"  >Ajoutez au panier</span>
                                    </a>

                                    <a href="#" class="btn invalid disabled" v-if="product.stock == 0" >
                                        <i class="fas fa-shopping-cart"></i>
                                        <span  v-text="'Rupture de stock'"></span>
                                    </a>
                                    <!-- <a href="#" class="btn btn-light">
                                        <i class="fas fa-envelope"></i>
                                        <span class="text"
                                            >Contact supplier</span
                                        >
                                    </a> -->
                                </div>
                                <!-- col.// -->
                            </div>
                            <!-- row.// -->
                        </article>
                        <!-- product-info-aside .// -->
                    </main>
                    <!-- col.// -->
                </div>
                <!-- row.// -->

                <!-- ================ ITEM DETAIL END .// ================= -->
            </div>
            <!-- container .//  -->
        </section>
        <!-- ========================= SECTION CONTENT END// ========================= -->

        <!-- ========================= SECTION  ========================= -->
        <section v-bind:class="'section-name padding-y bg'">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <h5 class="title-description">Description</h5>
                        
                        <p v-html="product.description" >
                                
                        </p>
                        <ul class="list-check">
                            <li>Material: Stainless steel</li>
                            <li>Weight: 82kg</li>
                            <li>built-in drip tray</li>
                            <li>Open base for pots and pans</li>
                            <li>On request available in propane execution</li>
                        </ul>

                        <h5 class="title-description">Specifications</h5>
                        <table class="table table-bordered">
                            <tr>
                                <th colspan="2">Basic specs</th>
                            </tr>
                            <tr>
                                <td>Type of energy</td>
                                <td>Lava stone</td>
                            </tr>
                            <tr>
                                <td>Number of zones</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Automatic connection</td>
                                <td>
                                    <i class="fa fa-check text-success"></i> Yes
                                </td>
                            </tr>

                            <tr>
                                <th colspan="2">Dimensions</th>
                            </tr>
                            <tr>
                                <td>Width</td>
                                <td>500mm</td>
                            </tr>
                            <tr>
                                <td>Depth</td>
                                <td>400mm</td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>700mm</td>
                            </tr>

                            <tr>
                                <th colspan="2">Materials</th>
                            </tr>
                            <tr>
                                <td>Exterior</td>
                                <td>Stainless steel</td>
                            </tr>
                            <tr>
                                <td>Interior</td>
                                <td>Iron</td>
                            </tr>

                            <tr>
                                <th colspan="2">Connections</th>
                            </tr>
                            <tr>
                                <td>Heating Type</td>
                                <td>Gas</td>
                            </tr>
                            <tr>
                                <td>Connected load gas</td>
                                <td>15 Kw</td>
                            </tr>
                        </table>
                    </div>
                    <!-- col.// -->

                    <aside class="col-md-4">
                        <div class="box">
                            <h5 class="title-description">Files</h5>
                            <p v-html="product.details" >
                                
                            </p>

                            <h5 class="title-description">Videos</h5>

                            <article class="media mb-3">
                                <a href="#"
                                    ><img
                                        class="img-sm mr-3"
                                        src="images/posts/3.jpg"
                                /></a>
                                <div class="media-body">
                                    <h6 class="mt-0">
                                        <a href="#">How to use this item</a>
                                    </h6>
                                    <p class="mb-2">
                                        Cras sit amet nibh libero, in gravida
                                        nulla. Nulla vel metus scelerisque ante
                                        sollicitudin
                                    </p>
                                </div>
                            </article>

                            <article class="media mb-3">
                                <a href="#"
                                    ><img
                                        class="img-sm mr-3"
                                        src="images/posts/2.jpg"
                                /></a>
                                <div class="media-body">
                                    <h6 class="mt-0">
                                        <a href="#">New tips and tricks</a>
                                    </h6>
                                    <p class="mb-2">
                                        Cras sit amet nibh libero, in gravida
                                        nulla. Nulla vel metus scelerisque ante
                                        sollicitudin
                                    </p>
                                </div>
                            </article>

                            <article class="media mb-3">
                                <a href="#"
                                    ><img
                                        class="img-sm mr-3"
                                        src="images/posts/1.jpg"
                                /></a>
                                <div class="media-body">
                                    <h6 class="mt-0">
                                        <a href="#">New tips and tricks</a>
                                    </h6>
                                    <p class="mb-2">
                                        Cras sit amet nibh libero, in gravida
                                        nulla. Nulla vel metus scelerisque ante
                                        sollicitudin
                                    </p>
                                </div>
                            </article>
                        </div>
                        <!-- box.// -->
                    </aside>
                    <!-- col.// -->
                </div>
                <!-- row.// -->
            </div>
            <!-- container .//  -->
        </section>
        <!-- ========================= SECTION CONTENT END// ========================= -->

        <!-- ========================= SECTION SUBSCRIBE  ========================= -->
        <section class="padding-y-lg bg-light border-top">
            <div class="container">
                <p class="pb-2 text-center">
                    Delivering the latest product trends and industry news
                    straight to your inbox
                </p>

                <div class="row justify-content-md-center">
                    <div class="col-lg-4 col-sm-6">
                        <form class="form-row">
                            <div class="col-8">
                                <input
                                    class="form-control"
                                    placeholder="Your Email"
                                    type="email"
                                />
                            </div>
                            <!-- col.// -->
                            <div class="col-4">
                                <button
                                    type="submit"
                                    class="btn btn-block btn-warning"
                                >
                                    <i class="fa fa-envelope"></i> Subscribe
                                </button>
                            </div>
                            <!-- col.// -->
                        </form>
                        <small class="form-text"
                            >We’ll never share your email address with a
                            third-party.
                        </small>
                    </div>
                    <!-- col-md-6.// -->
                </div>
            </div>
        </section>
        <!-- ========================= SECTION SUBSCRIBE END// ========================= -->
    <footer-section ></footer-section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 1
        }
    },
    computed: {
        product() {
            return this.$store.state.products.find(
                element => element.slug === this.$route.params.slug
            );
        },
        
    },
    methods: {
        incrementCounter() {
            if(this.counter >= 10){
                this.counter = 10;
            }else{
                this.counter++;
            }
        },
        decrementCounter() {
            if(this.counter <= 1){
                this.counter = 1;
            }else{
                this.counter--;
            }
        }
    }
};
</script>
