<template>
<div>
  <div class="container">
			 <h1>活动专区</h1>
		</div>
	   
	    
	    <div class="container g-suolueTu2">
			<div class="row">
			  <div class="col-xs-6 col-md-3 m-left">
			  	<img src="../../assets/imgs/shouye/index_img_15662636494951.jpg" />
		      </div>
		      <div class="col-xs-6 col-md-9 m-right">
		      	 <div class="row">
		      	 	  <div class="col-xs-6 col-md-3 f-info" v-for="item,index in goodsList">
			      	 	  	<p>
			      	 	  		<a href="#"><img :src="item.pic" alt="" /></a>
			      	 	  	</p>
			      	 	  	<p><a href="#">{{item.title}}</a></p>
			      	 	  	<p>{{item.title1}}</p>
			      	 	  	<p><i>￥</i>{{item.price}}</p>
		      	 	  	
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
        ...mapState(["goodsList"]),
    },
}
</script>

<style>

</style>
