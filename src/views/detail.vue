<template>
    <div>
        <div class="container g-main1">
            <div class="m-rood-nav">
                <p>您当前的位置：</p>
                <ol class="breadcrumb">
                    <li>
                        <a href="index.html">首页</a>
                    </li>
                    <li>
                        <a href="hotSall.html">地宝(扫地机器人)</a>
                    </li>
                    <li class="active">{{onegoods.title}}</li>
                </ol>
            </div>
            <div class="row m-goodsInfo">
                <!--左边商品展示区-->
                <!--<div class="col-md-5">-->
                <div class="col-md-5 g-left bg">
                    <div class="bg_left">

                        <div class="m-show">
                            <div class="show">
                                <img :src="onegoods.pic" alt="">
                                <div class="mask"></div>
                                <div class="vidieoBtn">
                                    <span id="showBtn"></span>
                                    <!--<span id="hide"></span>-->
                                </div>
                            </div>

                            <div class="smallshow">
                                <p class="prev prevnone"></p>
                                <div class="middle_box">
                                    <ul class="middle">
                                        <li><img :src="onegoods.pic" alt=""></li>
                                        <li><img :src="onegoods.pic" alt=""></li>
                                    </ul>
                                </div>
                                <p class="next "></p>
                            </div>
                        </div>

                        <video id="small-video" width="430px" height="430px" controls="controls">
                            <source src="http://cloud.video.taobao.com/play/u/420722466/p/1/e/6/t/1/50169596347.mp4" type="video/mp4">
                        </video>

                    </div>
                    <div class="bg_right">
                        <div class="bigshow">
                            <div class="bigitem">
                                <img :src="onegoods.pic" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <!--</div>-->
                <div class="col-md-7 g-right-info">

                    <div class="g-mn2 cls" id="product-information">
                        <h1 class="f-title">科沃斯扫拖一体地宝DJ35 智能家用超薄全自动扫地机器人</h1>
                        <!--商品卖点-->
                        <div class="sell-points cls">
                            <span style="color:#000000;">{{onegoods.title1}}</span><br />
                            <span style="color:#E53333;">新注册会员享200元优惠券礼包</span><br />
                            <span style="color:#E53333;">*购机即享包邮+全国联保服务</span><br />
                        </div>
                        <!--商品促销-->

                        <div class="f-info">
                            <div class="J-lazyload">
                                <div>
                                    <span>销售价:</span>
                                    <span>￥{{onegoods.price}}</span>
                                    <!--<a class="openChatBox" href="javascript:;">咨询客服</a>-->
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                                        咨询客服
                                    </button>

                                  
                                </div>
                                <p>
                                    <span>促销信息:</span>
                                    <span class="showErweima"></span>
                                </p>
                                <p class="erwerima">
                                    <span></span>
                                    <img src="../assets/imgs/hotSall/2656.png" alt="" />
                                </p>
                                <p>
                                    <span>服务：</span>
                                    <span><img src="../assets/imgs/hotSall/cuxiaofuwu01.jpg" />免期分期</span>
                                    <span><img src="../assets/imgs/hotSall/cuxiaofuwu02.jpg" />官方正品</span>
                                    <span><img src="../assets/imgs/hotSall/cuxiaofuwu03.jpg" />全国联保</span>
                                    <span><img src="../assets/imgs/hotSall/cuxiaofuwu04.jpg" />全场满99包邮</span>
                                    <span><img src="../assets/imgs/hotSall/cuxiaofuwu05.jpg" />7天无理由退货</span>
                                </p>
                                <p>
                                    <span>购买数量：</span>
                                    <span>
                                        <button id="reduce" @click="subHandle">-</button>
                                        <input type="text" value="1" v-model="num" id="inpNum" />
                                        <button id="add" @click="addHandle">+</button>
										
                                    </span>
                                    <span>
                                        销量:
                                        <em>50506</em>
                                    </span>
                                </p>
                            </div>

                        </div>

                        <!--购买按钮-->
                        <div class="buy">

                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal2">
                                <span class="glyphicon glyphicon-shopping-cart"></span>
                                <span @click="buyhandle(1)">加入购物车</span>
								<!-- <input type="button" class="f-buyBtn" value="加入购物车" @click="buyhandle(1)"/> -->
                            </button>
 
                          <!--  <a href="myCart.html">立即购买</a> -->
							<input type="button" class="f-buyBtn" value="立即购买" @click="buyhandle(2)"/>
                        </div>
                    </div>
                </div>
            </div>

            <!--分享到-->
            <div class="share">
                <p>分享到</p>
                <p>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>

                <p>收藏商品</p>
            </div>
            <!--关联商品推荐-->
            <div class="g-about">
                <h3>关联商品推荐</h3>
                <div class="row">
                    <div class="col-md-9 col-xs-9 m-left">
                        <div class="row">
                            <div class="col-md-2 col-xs-2">
                                <img src="../assets/imgs/hotSall/about1.png" alt="" />
                                <p>科沃斯扫地机器人</p>
                            </div>
                            <div class="col-md-2 col-xs-2">+</div>
                            <div class="col-md-2 col-xs-2">
                                <img src="../assets/imgs/hotSall/about3.png" alt="" />
                                <p>
                                    <span>边刷</span>
                                    <span>一对</span>
                                    <span>地宝</span>
                                </p>
                                <p>
                                    <input type="checkbox" class="checkOne" />
                                    <span>￥24.00</span>
                                </p>
                            </div>
                            <div class="col-md-2 col-xs-2">
                                <img src="../assets/imgs/hotSall/about2.png" alt="" />
                                <p>
                                    <span>边刷</span>
                                    <span>一对</span>
                                    <span>地宝</span>
                                </p>
                                <p>
                                    <input type="checkbox" class="checkOne" />
                                    <span>￥24.00</span>
                                </p>
                            </div>
                            <div class="col-md-2 col-xs-2">
                                <img src="../assets/imgs/hotSall/about3.png" alt="" />
                                <p>
                                    <span>边刷</span>
                                    <span>一对</span>
                                    <span>地宝</span>
                                </p>
                                <p>
                                    <input type="checkbox" class="checkOne" />
                                    <span>￥24.00</span>
                                </p>
                            </div>
                            <div class="col-md-2 col-xs-2">
                                <img src="../assets/imgs/hotSall/about4.png" alt="" />
                                <p>
                                    <span>边刷</span>
                                    <span>一对</span>
                                    <span>地宝</span>
                                </p>
                                <p>
                                    <input type="checkbox" class="checkOne" />
                                    <span>￥24.00</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-3 col-xs-3 m-right">
                        <div>=</div>
                        <div>
                            <p>已选择
                                <span>1</span>个产品</p>
                            <p>总价：
                                <span>￥1699</span>
                            </p>
                            <a href="javascript:;">加入购物车</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!--标签页-->
        <div class="container g-main3">
            <div class="row">
                <div class="col-md-9 col-xs-9 g-left-side">
                    <div>

                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation">
                                <!-- <a href="#home" aria-controls="home" role="tab" data-toggle="tab">商品详情</a> -->
                                <router-link to="/hotsell" active-class="activeClass1" exact>商品详情</router-link>
                            </li>
                            <li role="presentation">
                                <router-link to="/hotsell/sell2" active-class="activeClass1">详细参数</router-link>
                                <!-- <a href="#profile2" aria-controls="profile" role="tab" data-toggle="tab">详细参数</a> -->
                            </li>
                            <li role="presentation">
                                <router-link to="/hotsell/sell3" active-class="activeClass1">商品评论</router-link>
                                <!-- <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">商品评论</a> -->
                            </li>
                            <li role="presentation">
                                <router-link to="/hotsell/sell4" active-class="activeClass1">商品咨询</router-link>
                                <!-- <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">商品咨询</a> -->
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <router-view />
                            <!--详细参数-->
                            
                            <!--商品评论-->
                            
                            
                        </div>

                    </div>
                </div>
                <div class="col-md-3 col-xs-3 g-right-side">
                    <div>
                        <img src="../assets/imgs/hotSall/right-side00.png" alt="" />
                    </div>

                    <ul>
                        <li>
                            <a href="hotSall.html"><img src="../assets/imgs/hotSall/right-side01.png" alt="" /></a>
                            <p>
                                <a href="hotSall.html">地宝DJ35&nbsp;视觉导航</a>
                            </p>
                            <p>￥1399</p>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/imgs/hotSall/right-side02.png" alt="" /></a>
                            <p>
                                <a href="#">地宝DN555&nbsp;高端新品</a>
                            </p>
                            <p>￥1999</p>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/imgs/hotSall/right-side03.png" alt="" /></a>
                            <p>
                                <a href="#">地宝DD35&nbsp;智控扫拖</a>
                            </p>
                            <p>￥1189</p>
                        </li>
                        <li>
                            <a href="#"><img src="../assets/imgs/hotSall/right-side04.png" alt="" /></a>
                            <p>
                                <a href="#">地宝魔镜S&nbsp;扫拖一体</a>
                            </p>
                            <p>￥899</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {goodsList1} from "../datas/goodsdata.js"
import {mapState} from "vuex"
export default {
  data(){
    return{
	  onegoods:{},
	  num:1
    }
  },
//组件创建时
created(){{
  let gid=this.$route.params.gid;
  this.onegoods=goodsList1.filter(item=>item.id==gid)[0];
}},
// computed:{
//     ...mapState(["isShowCart"])
//   },
methods:{
	buyhandle(flag){
		if(!this.$local.fetch("user").userName)
		{
			alert("请先登录");
			return;
		}
		if(flag==1)
		{
			alert("添加到购物车");
		}
		this.$store.dispatch("addAction",{onegoods:this.onegoods,num:this.num,checked:false});
	},
	subHandle(){
		this.num--;
		if(this.num<1)
		{
			this.num=1;
		}
	},
	addHandle(){
		this.num++;
	}
}
}
</script>

<style>
 * {
 	margin: 0;
 	padding: 0;
 }
 
 ul,
 li {
 	list-style: none;
 }
 /*路径导航*/
 .g-main1 .m-rood-nav {
 	overflow: hidden;
 	font-size: 16px;
 	padding-top: 20px;
 }
 .activeClass1
 {
     color:#ef0a3b;
 }
 .g-main1 .m-rood-nav p {
 	float: left;
 	margin-top: 8px;
 }
 
.g-main1 .m-rood-nav ol {
 	float: left;
 }
 
.g-main1 .m-rood-nav ol li a {
 	color: #333333;
 }
 .g-main1 .breadcrumb{
 	background: transparent;
 }
 /*商品放大镜*/
 
 ul,
 li {
 	list-style: none;
 	margin: 0;
 	padding: 0;
 }
 
 .g-main1 .bg {
 	width: 920px;
 	height: 540px;
 	margin: 0 auto;
 	padding: 20px;
 	overflow: hidden;
 	min-width: 900px;
 	box-sizing: border-box;
 	background: #fff;
 	position: relative;
/* 	border: 1px solid red;*/
 }
 
  .g-main1 .bg_left {
 	width: 430px;
 	height: auto;
 	float: left;
 	position: relative;
 }
 /*放大部分*/
  .g-main1 .bg_right {
 	float: left;
/* 	border: 1px solid red;*/
 	position: absolute;
 	top: 18px;
 	left:450px ;
 }
 /*视频*/
 .g-main1 #small-video{
 	position: absolute;
 	top: 0px;
 	left: 0px;
background: black;
 	display: none;
 }
  .g-main1 .m-show{
 	position: absolute;
 	top: 0px;
 	left: 0px;
 }
  .g-main1 .show {
  	
 	width: 430px;
 	height: 430px;
 	margin-bottom: 10px;
 	position: relative;
 	cursor: move
 }
 
  .g-main1 .show img {
 	width: 430px;
 	height: 430px;
/* 	border: 1px solid red;*/
 }
  .g-main1 .show .vidieoBtn{
 	position: absolute;
 	top: 0px;
 	left: 0px;
 	width: 430px;
 	height: 430px;
/* 	border: 1px solid blue;*/
 	
 }
 .g-main1 .show .vidieoBtn span:first-child{
 	display: block;
 	width: 60px;
 	height: 60px;
 	background-image: url(../assets/imgs/hotSall/video-icon.png);
 	background-repeat: no-repeat;
    margin-top: 370px;
 	float: left;
 }

 .g-main1 .mask {
 	width: 215px;
 	height: 215px;
 	background: #000;
 	filter: Alpha(opacity=50);
 	opacity: 0.5;
 	position: absolute;
 	top: 0px;
 	left: 0px;
 	display: none;
 	margin-bottom: 20px;
 	/*border: 1px solid red;*/
 }
 .bg_right{
 	position: relative;
 }
 
 .g-main1 .bigshow {
 	width: 430px;
 	height: 430px;
 	overflow: hidden;
 	display: none;
 	border: 1px solid #E8E8E8;
 	position: absolute;
 	top: 0px;
 	left: 0px; 
 	z-index: 999;	
 }
 
 .g-main1 .bigshow img {
 	width: 860px;
 	height: 860px;
 	margin-right: 10px;
 }
 
 .g-main1 .smallshow {
 	width: 100%;
 	height: 70px;
 	position: relative
 }
 
 .g-main1 .smallshow img {
 	width: 100%;
 	border: 1px solid #e8e8e8;
 	box-sizing: border-box;
 	transition: all 0.5s
 }
 
 .g-main1 .smallshow>.middle_box {
 	margin-left: 30px;
 	margin-right: 30px;
 	width: 370px;
 	overflow: hidden;
 	height: 70px;
 }
 
 .g-main1 .smallshow .middle {
 	overflow: hidden;
 	transition: all 0.5s;
 	height: 70px;
 }
 
 .g-main1 .smallshow .middle>li {
 	width: 64px;
 	height: 64px;
 	float: left;
 	cursor: pointer;
 	padding: 0 5px;
 }
 
 .g-main1 .smallshow>p {
 	position: absolute;
 	top: 50%;
 	width: 22px;
 	height: 32px;
 	margin-top: -16px;
 }
 
 /* .g-main1 .smallshow>.prev {
 	left: 0;
 	background: url(img/hover-prev.png) no-repeat;
 	transition: all 0.5s
 }
 
 .g-main1 .smallshow>.next {
 	right: 0;
 	background: url(img/hover-next.png) no-repeat;
 	transition: all 0.5s
 }
 
 .g-main1 .smallshow>.prev.prevnone {
 	left: 0;
 	background: url(img/prev.png) no-repeat;
 	cursor: not-allowed
 }
 
 .g-main1 .smallshow>.next.nextnone {
 	right: 0;
 	background: url(img/next.png) no-repeat;
 	cursor: not-allowed
 } */
.g-main1 .m-goodsInfo{
 	position: relative;
 }
.g-main1 .m-goodsInfo .g-right-info{
	position: absolute;
	top: 0px;
	left: 450px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 h1{
	font-size: 24px;
	margin-bottom: 15px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .sell-points span{
	font-size: 16px;
	margin-bottom: 15px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .sell-points{
	margin-bottom: 40px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload div:first-child span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(2) span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) span:first-child

{
	display: inline-block;
	font-size: 16px;
	color: #636363;
	width: 100px;
	height: 20px;
	/*border: 1px solid red;*/
	text-align: right;
    margin-right: 23px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload div:first-child span:nth-child(2){
	font-size: 24px;
	color: #ee0a3b;
	font-weight: bold;
	/*margin-left: 30px;*/
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload div:first-child button{
	font-size: 16px;
	background: #233846;
	padding: 5px 20px;
	color: #ffffff;
	float: right;
	border-radius: 0px;
}
/*二维码*/
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(2) span:last-child{
	display: inline-block;
	background: url(../assets/imgs/hotSall/goods_mp_qrcode.png);
	background-position: 0 0;
	width: 190px;
	height: 30px;
	margin-top: 10px;
	margin-left:0px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload{
	position: relative;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(3){
	width: 250px;
	height: 270px;
	position: absolute;
	top: 42px;
	left: 90px;
	background: white;
	box-shadow: 0px 0px 10px grey;
	z-index: 99;
	text-align: center;
	display: none;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(3) span:first-child{
	display: inline-block;
	background: url(../assets/imgs/hotSall/goods_mp_qrcode2.png);
	background-position: 0 0;
	width: 190px;
	height: 30px;
	margin-top: 10px;
	
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(3)>img{
	display: block;
	width: 200px;
	height: 200px;
	margin-left: 20px;
}
/*服务*/
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span{
	margin-left: 10px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span:first-child,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(4) span:nth-child(2){
	margin-left: 0px;
	font-size: 16px;
}
/*购买数量*/ 
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5){
	margin-top: 30px;
    margin-bottom: 40px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) button,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) input{
	width: 40px;
	height: 40px;
	background: white;
	outline: none;
	border: none;
	margin: 0px;
	text-shadow: none;
	font-size: 18px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) input{
	border:1px solid #e0e0e0;
	margin-left: 0px;
	text-align: center;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) button:last-child{
	margin-right: 60px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) span:last-child{
	font-size: 16px;
	margin-left: 60px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .J-lazyload p:nth-child(5) span:last-child em{
	font-style: normal;
	margin-left: 25px;
}
/*购买按钮*/
/*加入购物车*/
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy a,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>button{
	display: inline-block;
	width: 200px;
	height: 55px;
	border: 1px solid #ee0a3b;
	text-align: center;
	color: #ee0a3b;
	font-size: 16px;
	line-height: 55px;
	text-decoration: none;
	background: transparent;
	border-radius: 0px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>.btn-primary:hover {
    color: #ee0a3b;
    background-color: transparent;
     border-color: #ee0a3b; 
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>.btn-primary.focus,
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>.btn-primary:focus {
    color: #ee0a3b;
    background-color: transparent;
    border-color: transparent;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy>button{
	padding-top: 0px;
}
/*加入购物车  模态框*/
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .m-add-car{
	padding-top: 150px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .close{
	float: right;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-dialog{
	width: 500px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content{
	width: 500px;
	text-align: center;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content h4{
	float: left;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content .modal-body{
	padding-bottom: 45px;
	padding-top: 45px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content .modal-body p{
	font-size: 18px;
	margin-bottom: 30px;
}
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy .modal-content .modal-body p>span{
	color: #ee0a3b;
	font-weight: 600;
}
/*立即购买*/
.g-main1 .m-goodsInfo .g-right-info .g-mn2 .buy a:last-child{
	background: #ee0a3b;
	color: white;
	margin-left: 20px;
}



/*分享*/
.g-main1 .share{
	margin-top: 50px;
	margin-bottom: 80px;
}
.g-main1 .share p{
	float: left;
	
}
.g-main1 .share p:first-child,.g-main1 .share p:last-child{
	font-size: 18px;
	/*border: 1px solid red;*/
	margin-top: 2px;
}
.g-main1 .share span:nth-child(2),
.g-main1 .share span:nth-child(3),
.g-main1 .share span:nth-child(4),
.g-main1 .share span:nth-child(5),
.g-main1 .share span:nth-child(6),
.g-main1 .share span:nth-child(1){
	width: 20px;
	height: 20px;
	display: inline-block;
	background-image: url(../assets/imgs/hotSall/share.png);
	background-position: 0px 0px;
	margin-left: 10px;
	margin-top: 5px;
}
.g-main1 .share span:nth-child(2){
	background-position: -20px 0px;
}
.g-main1 .share span:nth-child(3){
	background-position: -40px 0px;
}
.g-main1 .share span:nth-child(4){
	background-position: -60px 0px;
}
.g-main1 .share span:nth-child(5){
	background-position: -80px 0px;
}
.g-main1 .share span:nth-child(6){
	background-position: -100px 0px;
	margin-left: 30px;
}
/*关联商品推荐*/
.g-main1 .g-about{
	border: 1px solid transparent;
}
.g-main1 .g-about h3{
	font-size: 18px;
	color: #333333;
	margin-top: 50px;
	padding-bottom: 12px;
	border-bottom: 1px solid #333333;
	margin-bottom: 50px;
}
.g-main1 .g-about .m-left .col-md-2.col-xs-2{
	text-align: center;
}
.g-main1 .g-about .m-left .col-md-2.col-xs-2:first-child img{
	width: 77px;
	height: 77px;
	margin-bottom: 35px;
	
}
.g-main1 .g-about .m-left .col-md-2.col-xs-2:first-child p{
	font-size: 16px;
	color: #333333;
}
.g-main1 .g-about .m-left .col-md-2.col-xs-2:nth-child(2){
	font-size: 28px;
	color:#333333 ;
	font-weight: bold;
	padding-top: 30px;
}
.g-main1 .g-about .m-left .col-md-2.col-xs-2 p:last-child span{
	color: #ee0a3b;
	font-weight: bold;
}
.g-main1 .g-about .m-right div{
	float: left;
	
}
.g-main1 .g-about .m-right div:first-child{
	font-size: 28px;
	color:#cccccc ;
	font-weight: bold;
	padding-top: 30px;
	margin-right: 50px;
	text-align: right;
}
.g-main1 .g-about .m-right div:last-child p{
	font-size: 16px;
	
}
.g-main1 .g-about .m-right div:last-child p:nth-child(1){
	margin-bottom: 15px;
}
.g-main1 .g-about .m-right div:last-child p:nth-child(2) span{
	color: #ee0a3b;
	font-weight: bold;
}
.g-main1 .g-about .m-right div:last-child a{
	display: block;
	height: 50px;
	width: 140px;
	background:  #ee0a3b;
	color: white;
	font-size: 18px;
	line-height: 50px;
	text-align: center;
}
/*标签页   主体3*/
.g-main3{
	margin-top: 60px;
}
.g-main3 #home>p{
	padding-top: 25px;
	padding-bottom: 15px;
	padding-left: 25px;
	color: #a699a6;
}
.g-main3 #home>p span{
	padding-left: 0px;
	padding-right: 0px;
}
/*注*/
.g-main3 #home .g-notes{
	margin-bottom: 30px;
	font-size: 16px;
	color: #333333;
}
/*电子发票*/
.g-main3 #home .note-title{
	font-size: 24px;
	color: #253746;
	padding: 20px 20px;
	background: #efefef;
	margin-bottom: 15px;
}
.g-main3 #home .note-content{
	padding-left: 20px;
	font-size:  16px;
}
/*详细参数*/

.g-main3 #profile2 table th{
	padding: 15px 20px;
	font-size: 17px;
	border: 1px solid #dddddd;
}
.g-main3 #profile2 table td{
	border: 1px solid #dddddd;
	padding: 15px 20px;
	
}
.g-main3 #profile2 table{
	border: 1px solid red;
}

.g-main3 #profile2 table td:first-child{
	text-align: right;
	width: 30%;
}
.g-main3 #profile2 table td:last-child{
	width: 70%;
}
/*商品评论*/
#comt_xlist{
	padding-top: 50px;
}

#comt_xlist .rate-score p{
	font-size: 16px;
}
#comt_xlist .rate-score .star span{
	color: #ee0a3b;
}
#comt_xlist .rate-score .red{
	color:#ee0a3b ;
}
#comt_xlist .rate-tags .tag-list span{
	margin-right: 25px;
	font-size: 14px;
}
#comt_xlist .rate-tags .label{
	font-size: 15px;
	color: #a5a5a5;
	float: left;
	height: 60px;
	line-height: 60px;
	margin-right: 30px;
}
#comt_xlist .comment-filter{
	height: 55px;
	border: 1px solid #cccccc;
	font-size: 14px;
	line-height: 55px;
	padding-left: 25px;
	padding-right: 25px;
}
#comt_xlist .comment-filter .fr{
	float: right;
}
#comt_xlist .comment-filter label{
	font-weight: 600;
	margin-right: 25px;
}
#comt_xlist .comment-filter .order-by{
	width: 95px;
	height: 30px;
	border: 1px solid #aaaaaa;
}
#comt_xlist .g-xlist li{
	/*height: 190px;*/
	/*border: 1px solid red;*/
	padding: 30px;
	
}
#comt_xlist .g-xlist li .u-avatar img{
	width: 60px;
	height: 60px;
	;
}
#comt_xlist .g-xlist li .u-avatar{
	float: left;
	margin-right: 60px;
	padding-top: 30px
}

#comt_xlist .g-xlist li .rate-tags span:nth-child(1),
#comt_xlist .g-xlist li .rate-tags span:nth-child(2),
#comt_xlist .g-xlist li .rate-tags span:nth-child(3),
#comt_xlist .g-xlist li .rate-tags span:nth-child(4),
#comt_xlist .g-xlist li .rate-tags span:nth-child(5)
{
	color: #ee0b3c;
}
#comt_xlist .g-xlist li .rate-tags span:nth-child(5){
	margin-right: 20px;
}
#comt_xlist .g-xlist li .rate-tags{
	margin-bottom: 30px;
}
#comt_xlist .g-xlist li .c-content{
	margin-bottom: 30px;
}
#comt_xlist .g-xlist li .c-time{
color: #999999;
margin-left: 130px;
}
#comt_xlist .g-xlist li .comt-thumbs{
	margin-left: 130px;
}
#comt_xlist .g-xlist li .tag-list .good-comment{
	color: #333333;
}
#comt_xlist .pagination li a{
	color: #333333;
}
#comt_xlist .pagination li a:active{
	border: 1px solid #ee0a3b;
	color: #ee0a3b;
}
#comt_xlist .pagination{
	float: right;
}
/*客户服务   模态框*/

.close {
    float: none;
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    color: black;
    text-shadow: 0 0px 0 transparent;
    filter: alpha(opacity=20);
    opacity: 1;
}
.modal-body input[type="button"]{
	background: #ee0a3b;
	color: white;
}
.modal{
	padding-top: 60px;
}

/*主体右边栏     热销排行*/
.g-main3 .g-right-side{
	border: 1px solid #d4d4d4;
	text-align: center;
	padding-right: 0px;
	padding-left: 0px;
}
.g-main3 .g-right-side>div{
	width: 100%;
	background: #f3f3f3;
	padding: 20px;
}
.g-main3 .g-right-side>div img{
	width: 98px;
	
}
.g-main3 .g-right-side ul>li{
	border: 1px solid #d4d4d4;
	padding: 20px;
	
}

.g-main3 .g-right-side ul>li p,.g-main3 .g-right-side ul>li p>a{
	font-size: 14px;
	color: #9a9ab4;
	margin-top: 10px;
	text-decoration: none;
}
.g-main3 .g-right-side ul>li img:hover{
	transform: scale(1.1);
	transition: 0.3s;
}
.g-main3 .g-right-side ul>li p{
	color: #fe0000;
	font-size: 16px;
	font-weight: 600;
}
</style>
