<template>
   <div class="lbt1 container">
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
                    {id:1,pic:require("../../assets/imgs/old_new/banner01.png")},
                    {id:2,pic:require("../../assets/imgs/old_new/banner02.png")},
                ],
            }
        }
}
</script>

<style>

.lbt1 .el-carousel__container{
    height: 470px;
}
 .lbt1 .el-carousel__item h3 {
    margin: 0;
  } 
.lbt1   .el-carousel__item h3 img
{
    width:100%;
}
</style>
