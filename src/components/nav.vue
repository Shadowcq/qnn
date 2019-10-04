<template>
  <div class="container-fluid g-nav2">
			<div class="container g-nav2-top">
				<ul>
					<li class="g-allGoods" @mouseover="handlein" @mouseout="handleout">
						<a href="index.html">全部商品</a>
						 <my-nav2  v-show="isShow2"></my-nav2> 
                         <!-- v-show="isShow1" -->
					</li>
					<li>
						<!-- <a href="index.html">商城首页</a> -->
                        <router-link to="/">商城首页</router-link>
					</li>
					<li>
						<!-- <a href="Replace_old_new.html">以旧换新 </a> -->
                        <router-link to="/old">以旧换新</router-link>
                    </li>
					<li>
                        <router-link to="/hotsell">热卖推荐</router-link>
						<!-- <a href="hotSall.html">热卖推荐</a> -->
					</li>
					<li>
                        <router-link to="/hotsell">AIVI新品</router-link>
						<!-- <a href="hotSall.html">AIVI新品</a> -->
					</li>
					<li>
                        <router-link to="/parts">全网配件</router-link>
						<!-- <a href="parts.html">全网配件</a> -->
					</li>
				</ul>
			</div>
		</div>
</template>

<script>
import MyNav2 from "./nav2"
export default {
    data(){
        return{
            isShow2:this.$route.meta.isShow1
        }
    },
 components:{
    MyNav2,
  },
  methods:{
      handlein(){
            // this.isShow1=!this.isShow1;
            this.isShow2=true;
            // console.log(this.$route.meta.isShow1);
      },
      handleout(){
            
            if(this.$route.meta.isShow1)
            {
                 this.isShow2=true;
            }
            else{
                this.isShow2=false;
            }
            // console.log(this.$route.meta.isShow1);
         }
      }
}
</script>

<style>

</style>
