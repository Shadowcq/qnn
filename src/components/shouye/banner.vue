<template>
   <div class="lbt1">
  <el-carousel  :interval="2000" arrow="always">
    <el-carousel-item v-for="item,index in imglist" :key="index">
      <h3><img :src="item.pic" /></h3>
    </el-carousel-item>
  </el-carousel>
</div>

</template>

<script>
export default {
 data(){
            return{
                imglist:[
                    {id:1,pic:require("../../assets/imgs/shouye/banner1.jpg")},
                    {id:2,pic:require("../../assets/imgs/shouye/banner2.jpg")},
                    {id:3,pic:require("../../assets/imgs/shouye/banner3.jpg")},
                ],
            }
        }
}
</script>

<style>

.lbt1 .el-carousel__container{
    height: 360px;
}
 .lbt1 .el-carousel__item h3 {
    margin: 0;
  } 
.lbt1   .el-carousel__item h3 img
{
    width:100%;
}
</style>
