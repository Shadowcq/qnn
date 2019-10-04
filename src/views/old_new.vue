<template>
  <div>
    <div class="container-fluid g-jumu">
			<img src="../assets/imgs/old_new/20190820092340_80143.jpg" />
		</div>
    <my-banner></my-banner>
    <div class="jumbotron g-juImg2"></div>
	<my-lbt></my-lbt>

    <div class="container-fluid g-jumu4">
			<img src="../assets/imgs/old_new/20190716100805_60416.jpg" />
		</div>

		<!--bnaner 巨幕-->
		<div class="container-fluid g-jumu5">
			<img src="../assets/imgs/old_new/yjhx_pc_06.jpg" />
		</div>
    <my-questions></my-questions>
  </div>
</template>

<script>
import MyBanner from "../components/oldnew/banner"
import MyLbt from "../components/oldnew/lbt"
import MyQuestions from "../components/oldnew/questions"

export default {
components:{
    MyBanner,
    MyQuestions,
	MyLbt
 }
}
</script>

<style>
.g-jumu{
	height: 460px;
	padding: 0px;
	margin-bottom: 60px;
	
}
.g-jumu img{
	width: 100%;
	height: 480px;
}
/*.g-nav2 .m-all>ol{
	display: none;
}*/

.g-juImg2{
	width: 100%;
	margin-top: 60px;
	background-image: url(../assets/imgs/old_new/20190715111435_82762.jpg);
		background-size: cover;
		background-position: center;
		height:800px;
		background-repeat: no-repeat;
    margin-bottom: 0px;
}
.g-juImg3{
	width: 100%;
	background-image: url(../assets/imgs/old_new/sxh_bg.jpg);
		background-size: cover;
		background-position: center;
		height:1060px;
		background-repeat: no-repeat;
		padding-top: 280px;
}
.Button.Block {
    padding: 20px 40px;
    width: 525px;
    height: 755px;
}

.flipster-carousel .flip-next {
    -webkit-transform: translateX(60%) translateZ(0) rotateY(-80deg) scale(0.8);
    -moz-transform: translateX(60%) translateZ(0) rotateY(-80deg) scale(0.8);
    -o-transform: translateX(60%) translateZ(0) rotateY(-80deg) scale(0.8);
    -ms-transform: translateX(60%) translateZ(0) rotateY(-80deg) scale(0.8);
    transform: translateX(70%) translateZ(0) rotateY(-40deg) scale(0.8);
}

.flipster-carousel .flip-prev {
    -webkit-transform: translateX(-60%) translateZ(0) rotateY(80deg) scale(0.8);
    -moz-transform: translateX(-60%) translateZ(0) rotateY(80deg) scale(0.8);
    -o-transform: translateX(-60%) translateZ(0) rotateY(80deg) scale(0.8);
    -ms-transform: translateX(-60%) translateZ(0) rotateY(80deg) scale(0.8);
    transform: translateX(-70%) translateZ(0) rotateY(40deg) scale(0.8);
}

.g-jumu4 img{
	width: 100%;
	height:792px;
}
.g-jumu5 img{
	width: 100%;
	height:600px;
}
.g-jumu6{
	position: relative;
	height:700px;
}
.g-jumu6>img{
	width: 100%;
	height:700px;
	position: absolute;
	top: 0px;
	left: 0px;
}
.g-jumu6 .m-userSay{
	position: absolute;
	top: 0px;
	left: 10%;
	text-align: center;
    
}
.g-jumu6 .m-userSay{
	/*border: 1px solid red;*/
	padding-top: 65px;
}
.g-jumu6 .m-userSay>h1{
	font-size: 45px;
	margin-bottom: 110px;
}
.g-jumu6 .m-userSay .u-say{
    position: relative;
}
.g-jumu6 .m-userSay .u-say p{
	font-size: 18px;
	text-align:left ;
	position: absolute;
}
.g-jumu6 .m-userSay .u-say p span{
	margin-bottom: 20px;
}
.g-jumu6 .m-userSay .u-say p>img:nth-child(1){
	width: 39px;
	height: 39px;
}
.g-jumu6 .m-userSay .u-say p>img:nth-child(3){
	display: none;
	left: 40px;
	z-index: 999;
}
.g-jumu6 .m-userSay .u-say p:nth-child(1){
	left:40%;
	top:0px;
}
.g-jumu6 .m-userSay .u-say p:nth-child(2){
	left:10%;
	top: 70px;
}
.g-jumu6 .m-userSay .u-say p:nth-child(3){
	left:55%;
	top: 150px;
}
.g-jumu6 .m-userSay .u-say p:nth-child(4){
	left:20%;
	top: 200px;
}


/*.g-jumu6 .m-userSay .u-say p span:hover .showImg{
	display: block;
	z-index: 999;
}*/
.g-question{
	background: #253746;
	padding-top: 65px;
	padding-bottom: 65px;
}
.g-question{
	background: #253746;
	padding-top: 65px;
	padding-bottom: 65px;
}
.g-question h1{
	font-size: 48px;
	color: #fcfefe;
	margin-bottom: 140px;
	text-align: center;
}
.g-question .panel-group .panel {
    margin-bottom: 0;
    border-radius: 0px;
}

.g-question .panel-default {
    border-color: transparent;
}
.g-question .panel-default>.panel-heading {
    color: #fafafb;
    background-color: #253746;
    border-color: #253746;
}
.g-question .panel-title a span{
	 color: #fafafb;
}
.g-question .panel {
	color: #999999;
    margin-bottom: 20px;
    background-color: #253746;
     border: none; 
    border-radius: 0px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.g-question .panel-title a span:last-child{
	 right:0px;
}
.g-question .btn input{
	height: 65px;
	border: 1px solid #999999;
	background:#253746;
	color:  #fafafb;
	font-size: 28px;
	padding: 10px 40px;
	text-align: center;
	margin-right: 20px;
	margin-top: 50px;
	outline: none;
	}

</style>
