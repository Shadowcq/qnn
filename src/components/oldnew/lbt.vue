<template>
  <div class="jumbotron g-juImg3">
			<div class="Container">
				<!-- Flipster List -->
				<div class="flipster">
                    <el-carousel :interval="4000" type="card" >
                        <el-carousel-item v-for="item,index in imglist" :key="index">
                        <!-- <h3 >{{item.pic}}</h3> -->
                        <h3 class="medium"><img :src="item.pic" /></h3>
                        </el-carousel-item>
                    </el-carousel>
				</div>
				<!-- End Flipster List -->
			</div>
		</div>
</template>

<script>
export default {
    data(){
        return{
            imglist:[
                {id:1,pic:require("../../assets/imgs/old_new/l-1.jpg")},
                {id:2,pic:require("../../assets/imgs/old_new/l-2.jpg")},
                {id:3,pic:require("../../assets/imgs/old_new/l-3.jpg")},
            ],
        }
    }
}
</script>

<style>
.g-juImg3  .el-carousel__container{
    height: 755px;
}
.g-juImg3 .el-carousel__item h3 {
    margin: 0;
    width:80%;
    margin-left:10%;
  } 
.g-juImg3    .el-carousel__item h3 img
{
    width:100%;
}
</style>
