<template>
  <div>
      <my-banner></my-banner>
      <my-suolue></my-suolue>
      <my-huodong></my-huodong>
      <my-rexiao></my-rexiao> 
        <div class="container">
            <div class="jumbotron XboxJU"></div>
        </div>
    <my-peijian></my-peijian>
    <my-like></my-like>
  </div>
</template>

<script>
import MyBanner from "../components/shouye/banner"
import MySuolue from "../components/shouye/suolue"
import MyHuodong from "../components/shouye/huodong"
import MyRexiao from "../components/shouye/rexiao"
import MyPeijian from "../components/shouye/peijian"
import MyLike from "../components/shouye/like"

export default {
 components:{
    MyBanner,
    MySuolue,
    MyHuodong,
    MyRexiao,
    MyPeijian,
    MyLike
 }
}
</script>

<style>

.g-suolueTu1 .m-left{
	background: white;
    background-image: url(../assets/imgs/shouye/fastnavL-bg.png);
	background-repeat: no-repeat;
	background-size: contain;
	height: 220px;

	
}
.g-suolueTu1 .m-left ul{
	overflow: hidden;
}
.g-suolueTu1 .m-left ul li{
	float: left;
	padding: 20px 19px;
	text-align: center;

	
}
.g-suolueTu1 .m-left ul li img{
	margin-bottom: 13px;
}
.g-suolueTu1 .m-left ul li p{
	font-size: 12px;
	color: #757575;
	
}
.g-suolueTu1 .m-left ul li p:hover{
	color: #f00a3b;
}
.g-suolueTu1 .m-left:hover{
	box-shadow: 0px 0px 10px #cac7c7;
}
.g-suolueTu1 .m-right{
/*	border: 1px solid red;*/
	height: 220px;
	line-height: 220px;
    padding-left: 10px;
    
}
.g-suolueTu1 .m-right a{
	display: block;
	width: 100%;
	background: white;
/*	padding:40px 0px;*/
}
.g-suolueTu1 .m-right img{
	width: 100%;
}
.g-suolueTu1 .m-right img:hover{
	box-shadow: 0px 0px 10px #cac7c7;
}
h1{
	font-size: 24px;
	color: #263746;
	padding-top: 25px;
	padding-bottom: 25px;
	margin-bottom: 0px;
	margin-top: 0px;
}
.g-suolueTu2 .m-left img{
  width: 100%;
  height: 340px;
}
.g-suolueTu2 .m-right .f-info{
	width: 23%;
	height: 340px;
	background: white;
	margin-right: 19px;
}
.g-suolueTu2 .m-right .f-info:last-child{
	margin-right: 0px;
}
.g-suolueTu2 .m-right .f-info p{
	text-align: center;
}
.g-suolueTu2 .m-right .f-info p img{
	width: 100%;
	padding-top: 30px;
	padding-bottom: 30px;
}
.g-suolueTu2 .m-right .f-info p:nth-child(2) a{
	margin-bottom: 12px;
	font-size: 15px;
	color: #263746;
}
.g-suolueTu2 .m-right .f-info p:nth-child(3){
	font-size: 15px;
	color: #828282;
	margin-bottom: 25px;
}
.g-suolueTu2 .m-right .f-info p:nth-child(4){
	font-size: 15px;
	color: #ee0a3b;
}
.g-suolueTu2 .m-right .f-info p:nth-child(4) i{
	font-style: normal;
}
.g-suolueTu2 .m-right .f-info:hover{
	box-shadow: 0px 0px 10px #cac7c7;
	transform: translateY(-5px);
	transition: 0.3s linear;
}

.g-suolueTu3 .m-left img{
  width: 100%;
  height: 615px;
}
.g-suolueTu3 .m-right .f-info{
	width: 23%;
	height: 300px;
	background: white;
	margin-right: 17px;
	margin-bottom: 15px;
}

.g-suolueTu3 .m-right .f-info p img{
	width: 100%;
	padding-top: 20px;
	padding-bottom: 10px;
}
.g-suolueTu3 .m-right .f-info:hover{
	box-shadow: 0px 0px 10px #cac7c7;
	transform: translateY(-5px);
	transition: 0.3s linear;
}
.XboxJU{
		background-image: url(../assets/imgs/shouye/jumu.jpg);
		background-size: cover;
		height: 140px;
	}
	
.g-suolueTu5 .f-info2{
	background: white;
	height: 340px;
	text-align: center;
	padding-right: 0px;
	margin-right: 20px;
    width: 23%;
}

.g-suolueTu5 .f-info2 img{
	width: 70%;
	padding-top: 30px;
	padding-bottom: 30px;
}
.g-suolueTu5 .f-info2 p:nth-child(2) a{
	margin-bottom: 12px;
	font-size: 15px;
	color: #263746;
}
.g-suolueTu5 .f-info2 p:nth-child(3){
	font-size: 15px;
	color: #828282;
	margin-bottom: 25px;
}
.g-suolueTu5 .f-info2 p:nth-child(4){
	font-size: 15px;
	color: #ee0a3b;
}
.g-suolueTu5 .f-info2 p:nth-child(4) i{
	font-style: normal;
}
.g-suolueTu5 .f-info2:hover{
	box-shadow: 0px 0px 10px #cac7c7;
	transform: translateY(-5px);
	transition: 0.3s linear;
}
.g-suolueTu5{
	margin-bottom: 70px;
}

</style>
