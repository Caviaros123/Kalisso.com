<template>
  <!-- ========================= SECTION CONTENT ========================= -->
  <main class="col-md-9" >

		<article class="card mb-3">
			<div class="card-body">
				
				<figure class="icontext">
						<div class="icon">
							<img class="rounded-circle img-sm border" :src="storage_url+user.avatar">
						</div>
						<div class="text">
							<strong> {{ user.name }} </strong> <br> 
							<p class="mb-2"> {{ user.email }}  </p> 
							<router-link href="#" :to="{ name: 'profile.index', params: { tab: 'ProfileSettings' }}" class="btn btn-light btn-sm">Modifier</router-link>
						</div>
				</figure>
				<hr>
				<p>
					<i class="fa fa-map-marker text-muted"></i> &nbsp; Mon adresse:  
					 <br>
					Tashkent city, Street name, Building 123, House 321 &nbsp; 
					<a href="#" class="btn-link"> Editer</a>
				</p>

				<article class="card-group card-stat">
					<figure class="card bg">
						<div class="p-3">
							 <h4 class="title" v-text="this.$store.state.orders.length"></h4>
							<span>Commandes</span>
						</div>
					</figure>
					<figure class="card bg">
						<div class="p-3">
							 <h4 class="title" v-text="this.$store.state.wishlist.length"></h4>
							<span>Favoris</span>
						</div>
					</figure>
					<figure class="card bg">
						<div class="p-3">
							 <h4 class="title">12</h4>
							<span>Awaiting delivery</span>
						</div>
					</figure>
					<figure class="card bg">
						<div class="p-3">
							 <h4 class="title">50</h4>
							<span>Delivered items</span>
						</div>
					</figure>
				</article>
				

			</div> <!-- card-body .// -->
		</article> <!-- card.// -->

		<article class="card  mb-3">
			<div class="card-body">
				<h5 class="card-title mb-4">Recent orders </h5>	

				<div class="row">
				<div class="col-md-6">
					<figure class="itemside  mb-3">
						<div class="aside"><img src="images/items/1.jpg" class="border img-sm"></div>
						<figcaption class="info">
							<time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
							<p>Great book name goes here </p>
							<span class="text-success">Order confirmed </span>
						</figcaption>
					</figure>
				</div> <!-- col.// -->
				<div class="col-md-6">
					<figure class="itemside  mb-3">
						<div class="aside"><img src="images/items/2.jpg" class="border img-sm"></div>
						<figcaption class="info">
							<time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
							<p>How to be rich</p>
							<span class="text-success">Departured</span>
						</figcaption>
					</figure>
				</div> <!-- col.// -->
				<div class="col-md-6">
					<figure class="itemside mb-3">
						<div class="aside"><img src="images/items/3.jpg" class="border img-sm"></div>
						<figcaption class="info">
							<time class="text-muted"><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
							<p>Harry Potter book </p>
							<span class="text-success">Shipped  </span>
						</figcaption>
					</figure>
				</div> <!-- col.// -->
			</div> <!-- row.// -->

			<a href="#" class="btn btn-outline-primary btn-block"> See all orders <i class="fa fa-chevron-down"></i>  </a>
			</div> <!-- card-body .// -->
		</article> <!-- card.// -->

		<component :is='ProfileSettings'></component>
	</main> <!-- col.// -->
</template>

<script>
import ProfileSettings from './Settings'

export default {
  name: "ProfileUser",
  
  data() {
      return {
          user: '',
          orders: [],
		  storage_url: 'https://kalisso.com/storage/',
		  activeTab: 'ProfileSettings'
      }
       
  },
  components: {
	ProfileSettings,
  },
  created() {
      this.$store.dispatch('retrieveUserInfo')
	  .then(response => {
        this.user = this.$store.state.user
      })
  },
  methods: {
    swapComponent: function(component) {
      this.currentComponent = component;
    }
  }
};
</script>