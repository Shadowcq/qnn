<template>
<div>
  <div class="container">
			 <h1>热销商品</h1>
		</div>
		
		<div class="container g-suolueTu2 g-suolueTu3">
		<!--第一行-->
		<div class="row">
				<div class="col-xs-6 col-md-3 m-left">
				  	<img src="../../assets/imgs/shouye/index_img_15646239672151.jpg" />
			    </div>
			    <div class="col-xs-6 col-md-9 m-right" >
			      	<div class="row">
			      	 	<div class="col-xs-6 col-md-3 f-info" v-for="item,index in goodsList1">
							<router-link :to="'/detail/'+item.id">
			      	 	  	<p>
			      	 	  		<a href="#"><img :src="item.pic" alt="" /></a>
			      	 	  	</p>
			      	 	  	<p><a href="#">{{item.title}}</a></p>
			      	 	  	<p>{{item.title1}}</p>
			      	 	  	<p><i>￥</i>{{item.price}}</p>
							</router-link>
		                </div>
			      	</div>
			    </div>
		    </div>
		</div> 
</div>
</template>

<script>
import {mapState} from "vuex"
export default {
 computed:{
        ...mapState(["goodsList1"]),
    },
}
</script>

<style>

</style>
