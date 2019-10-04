<template>
<div>
  <section class="container cartMain">
			<div class="cartMain_hd">
				<ul class="order_lists cartTop row">
					<li class=" col-xs-1 col-md-1 list_chk">
						<!--所有商品全选-->
						<!-- <input type="checkbox" id="all" class="whole_check"> -->
                        <input type="checkbox" id="all" class="whole_check" @click="chooseall"  v-model="allCheck">
						<!-- <label for="all" class="glyphicon glyphicon-ok"></label> 全选 -->
                        <!-- <input type="checkbox"  /> -->
                        全选
                        <!--  -->
					</li>
					<li class=" col-xs-5 col-md-5 list_con">商品信息</li>
					<li class="list_price col-xs-2 col-md-2">单价</li>
					<li class="list_amount col-xs-2 col-md-2">数量</li>
					<li class="list_sum col-xs-1 col-md-1">金额</li>
					<li class="list_op col-xs-1 col-md-1">操作</li>
				</ul>
			</div>
            <!--购物车主体-->
            
			<div class="cartBox">
				<div class="order_content">
					<ul class="order_lists row" v-for="item,index in cartData">
						<li class="list_chk col-xs-1 col-md-1">
							<input type="checkbox" id="checkbox_2" class="son_check" @click="choose(index)" v-model="item.checked">
						</li>
						<li class="list_con col-xs-5 col-md-5">
							<div class="list_img">
								<a href="hotSall.html"><img :src="item.pic"/></a>
							</div>
							<div class="list_text">
								<a href="hotSall.html">{{item.title}}</a>
							</div>
						</li>
						
						<li class="list_price col-xs-2 col-md-2">
							<p class="price">￥{{item.price}}</p>
						</li>
						<li class="list_amount col-xs-2 col-md-2">
							<div class="amount_box">
								<input type="button" value="-" @click="subNum(index)">
								<input type="text" value="1" class="sum" v-model="item.count">
								<input type="button" value="+" @click="addNum(index)"> 
							</div>
						</li>
						<li class="list_sum col-xs-1 col-md-1">
							<p class="sum_price">￥{{item.price*item.count}}</p>
						</li>
						<li class="list_op col-xs-1 col-md-1">
							<p class="del">
								<a href="javascript:;" class="delBtn glyphicon glyphicon-trash" @click="delete1(index)"></a>
							</p>
						</li>
					</ul>
					
				</div>
			</div>

			<!--底部-->
			<div class="bar-wrapper">
				<div class="bar-left">
					<p>
						<!-- <a href="#">继续购物</a> -->
                        <router-link to="/">继续购物</router-link>
						<a href="javascript:;" id="clearCarts" @click="qingkong">清空购物车</a>
					</p>
				</div>
				<div class="bar-right">
					<div class="piece">已选商品<strong class="piece_num">{{totleCount}}</strong>件</div>
					<div class="totalMoney">共计: <strong class="total_text">￥{{totlePrice}}</strong></div>
					<div class="calBtn">
						<a href="javascript:;" @click="qingkong" :class="{'active123':totleCount&&totlePrice}">结算</a>
					</div>
				</div>
			</div>
			
			<div class="g-Hotgoods">
        		<h1>热门商品</h1>
	        	<div class="row m-Hotgoods">
	        		<div class="col-xs-6 col-md-3">
	        			<div>
	        				<img src="../assets/imgs/carts/h1.png" alt="" />
	        			</div>
	        			
	        			<p>地宝DJ35&nbsp;视觉导航</p>
	        			<p>￥1699</p>
	        			<a href="#">加入购物车</a>
	        		</div>
	        		<div class="col-xs-6 col-md-3">
	        			<div>
	        				<img src="../assets/imgs/carts/h2.png" alt="" />
	        			</div>
	        			<p>地宝DJ35&nbsp;视觉导航</p>
	        			<p>￥1699</p>
	        			<a href="#">加入购物车</a>
	        		</div>
	        		<div class="col-xs-6 col-md-3">
	        			<div>
	        				<img src="../assets/imgs/carts/h3.png" alt="" />
	        			</div>
	        			<p>地宝DJ35&nbsp;视觉导航</p>
	        			<p>￥1699</p>
	        			<a href="#">加入购物车</a>
	        		</div>
	        		<div class="col-xs-6 col-md-3">
	        			<div>
	        				<img src="../assets/imgs/carts/h4.png" alt="" />
	        			</div>
	        			<p>地宝DJ35&nbsp;视觉导航</p>
	        			<p>￥1699</p>
	        			<a href="#">加入购物车</a>
	        		</div>
	        	</div>
        	</div>
		</section>
		
		<!--热门商品-->
        <!--<div class="container g-Hotgoods" >
        </div>-->
		<section class="model_bg"></section>
		<section class="my_model">
			<p class="title">删除宝贝<span class="closeModel">X</span></p>
			<p id="isDeleteAll">您确认要删除该宝贝吗？</p>
			<div class="opBtn">
				<a href="javascript:;" class="dialog-sure">确定</a>
				<a href="javascript:;" class="dialog-close">关闭</a>
			</div>
		</section>
        </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    // data(){
    //     return{
    //         allCheck:false,
    //         num11:0
    //     }
    // },
      computed:{
        ...mapState(["cartData"]),
        // ,"allCheck"
        ...mapGetters(["totleCount","totlePrice"]),
        allCheck:{
            get(){
                return this.$store.state.allCheck
            },
            set(val){
                this.$store.state.allCheck=val
            }
        }
    },
 methods:{
        delete1(idx){ 
            this.$store.dispatch("delAction",{index:idx})
        },
        closeCarts(){
             this.$emit("closecart");
        },
       subNum(idx){
            this.$store.dispatch("changeAction",{flag:1,index:idx})
               },
        addNum(idx){
            this.$store.dispatch("changeAction",{flag:2,index:idx})
        },
        chooseall(){
             this.$store.dispatch("allAction",this.allCheck)

            // this.allCheck=!this.allCheck;
            // for(let item of this.cartData){
            //         item.checked=this.allCheck;
            //     }
            // this.num11=this.cartData.filter(item=>item.checked==true).length;
        },
        choose(idx){
            this.$store.dispatch("chooseAction",{index:idx})


            // this.cartData[idx].checked=!this.cartData[idx].checked;
            // this.num11=this.cartData.filter(item=>item.checked==true).length;
            //     if (this.num11==this.cartData.length){
            //         this.allCheck=true;
            //     }else{
            //         this.allCheck=false;
            //     }
        },
        qingkong(){
            this.$store.dispatch("qingkongAction")
        }
    },
  
    
}
</script>

<style scoped>
.padd{
    padding-left: 0px;
    padding-right: 0px;
}
html,body{
     position: relative;
    width: 100%;
    
}
body{
    background: #efefef;
}
/* input[type="checkbox"]{
    display: none;
} */
label .pos-rela{
   
    display: inline-block;
    z-index: 1;
    border: 1px solid #b8b8b8;
    margin-left: 10px;
    border-radius: 1px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    color: white;
    font-size: 12px;
}
label.mark{
background: #ee0a3b;
border:none;
}

a:hover{
    color: #ff873e;
    text-decoration: underline;
}

.cartMain .pos-rela{
    
    margin-top: 60px;
    padding-left: 0px;
    padding-right: 0px;
    
}


.col-xs-1.col-md-1{
    padding-right: 0px; 
}
.col-xs-5.col-md-5{
    padding-right: 0px;
    text-align: center; 
}
.col-xs-2.col-md-2{
    padding-right: 0px;
    text-align: center; 
}
/*购物车头部*/
.cartMain_hd{
    width: 100%;
    color: #666666;
    height: 110px;
    line-height: 110px;
    background: white;
}
.cartMain_hd .cartTop{
        font-size: 17px;
        color: #666666;  
        
    }
.cartBox{
    width: 100%;
    margin-bottom: 15px;
   
    
}
.cartBox .order_content{
        border: 1px solid transparent;
    }
 .cartBox .order_content    a{
            display: block;
        }
.order_content{
     background: white;
}
/*商品列表*/
.order_lists{
    width: 100%;
    height: 130px;
    margin-right: 0px;
    margin-left:0px;
}

.order_lists li{
    float: left;
    height: 130px;
    line-height: 130px;
}

.order_lists .list_chk{
    position: relative;
}
/* .order_lists .list_chk input[type="checkbox"]{
    position: absolute;
    z-index: 0;
    left: -20px;
    top: -20px; 
} */
.order_lists .list_chk label{
    margin: 0px 0 0 0px;
}

.order_lists .list_con .list_img{
   width: 15%;
    float: left;
}
.order_lists .list_con .list_img img{
    width: 100%;
    vertical-align: middle;
}
.order_lists .list_con .list_text{
    margin: 0px 0 0 10px;
    line-height: 130px;
    width: 80%;
    float: left;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
.order_lists .list_con .list_text a{
    color: #747774;
    font-size: 16px;
    
}
.order_lists .list_con .list_text a:hover{
    color: #ee0a3b;
}
.order_lists .list_price{
    height: 130px;
    line-height: 130px;
}
.order_lists .list_price .price{
    font-family: Verdana,Tahoma,arial;
    color: #666666;
    font-weight: bold;
}
.order_lists .list_amount{
    padding-left: 0px;
}
.order_lists .list_amount .amount_box{
    width:100%;
    height: 50px;
}
.order_lists .list_amount .amount_box input{
    width: 10%;
    color: #343434;
    font-size: 18px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border: none;
}
.order_lists .list_amount .amount_box a{
   font-size: 20px;
   font-weight: 600;
   color: #757575;
}
.order_lists .list_amount .amount_box a:hover{
    text-decoration: none;
    color:#ee0a3b;
    z-index: 3;
}



.order_lists .list_sum .sum_price{
    line-height: 130px;
    font-family: Verdana,Tahoma,arial;
    color:  #ee0a3b;
    font-weight: bold;
}

.order_lists .list_op .del{
    height: 130px;
    padding-top:55px;
    /* line-height: 130px; */
    font-size: 20px;
}
.order_lists .list_op .del a{
    color: #666666;
}
.order_lists .list_op .del a:hover{
    color: #ee0a3b;
    text-decoration: none;
}
/*底部总计算价*/
.bar-wrapper{
    margin-top: 40px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    height: 100px;
    z-index: 99;
    background: white;
    margin-bottom: 40px;
}
.bar-wrapper .bar-left{
    line-height: 100px;
    float: left;
    margin-top: 0px;
}
.bar-wrapper .bar-left a{
    color: #666666;
    font-size: 16px;
    text-decoration: none;
    padding-left: 30px;
    padding-right: 30px;
}
.bar-wrapper .bar-left a:first-child{
    border-right: 1px solid #666666;
}
.bar-wrapper .bar-left a:hover{
    color: #ee0a3b;
}
.bar-wrapper .bar-right{
    font-size: 16px;
    height: 100px;
    float: right;
    color: #3c3c3c;
    padding-top: 25px;
    padding-right: 20px;
}
.bar-wrapper .bar-right strong{
    color: #ee0a3b;
}

.bar-wrapper .bar-right .piece{
    float: left;
    min-width: 110px;
    margin-right: 20px;
    height: 50px;
    line-height: 50px;
}
.bar-wrapper .bar-right .piece .piece_num{
    display: inline-block;
    padding: 0 10px;
    font-weight: 700;
    font-size: 18px;
    font-family: tohoma,arial;
}
.bar-wrapper .bar-right .totalMoney{
    float: left;
    min-width: 100px;
    height: 50px;
    line-height: 50px;
}
.bar-wrapper .bar-right .totalMoney .total_text{
    float: right;
    font-weight: 400;
    font-size: 20px;
    font-family: Arial;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: 15px;
}
.bar-wrapper .bar-right .calBtn{
    float: left;
}.bar-wrapper .bar-right .calBtn a.active123 
{
    background: #ef0a3b;
}
.bar-wrapper .bar-right .calBtn a{
    display: block;
    width: 220px;
    height: 60px;
    color: white;
    background: #969293;
    cursor: not-allowed;
    font-size: 22px;
    letter-spacing: 5px;
    text-decoration: none;
    line-height: 60px;
    text-align: center;
}
.bar-wrapper .bar-right .calBtn a.btn_sty{
    cursor: pointer;
   background: #ee0a3b;
}

.g-Hotgoods{
    height: 500px;
    /* background: red; */
    padding-left: 0px;
    padding-right: 0px;
}
.g-Hotgoods h1{
    color: #333333;
    background: white;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    padding-left: 20px;
}
.g-Hotgoods .m-Hotgoods{
    padding: 30px 20px;
    background: white;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: -8px;
    margin-bottom: 65px;
}
.g-Hotgoods .m-Hotgoods>div{
    text-align: center;
    border: 1px solid #dddddd;
    padding: 15px;
    margin-right: 10px;
    width: 24%;
}
.g-Hotgoods .m-Hotgoods>div:last-child{
     margin-right: 0px;
}
.g-Hotgoods .m-Hotgoods>div img{
    margin-bottom: 20px;
}
.g-Hotgoods .m-Hotgoods>div p{
    font-size: 16px;
    color: #333333;
    margin-bottom: 10px;
}
.g-Hotgoods .m-Hotgoods>div p:nth-child(3){
     color: #ee0a3b;
     font-weight: 600;
     border-bottom: 1px solid #dddddd;
     padding-bottom: 8px;
}
.g-Hotgoods .m-Hotgoods>div a{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    width: 130px;
    color: white;
    background: #ee0a3b;
    font-size:18px ;
    text-decoration: none;
}
.g-Hotgoods .m-Hotgoods>div img:hover{
    transform: scale(1.1);
    transition: .3s linear;
}
/*自己定义的模态框*/
.model_bg{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.6);
    z-index: 999;
    display: none;
}
.my_model{
    position: fixed;
    display: none;
    top:50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -150px;
    z-index: 9999;
    width: 300px;
    height: 200px;
    padding: 20px;
    background:white;
    text-align: center;
}
.my_model .title{
    font-size: 18px;
    color: #616161;
    font-weight: 700;
    margin-bottom: 30px;
}
.my_model .title .closeModel{
    float: right;
    cursor: pointer;
}
.my_model p{
    font-size: 18px;
    color: #616161;
}
.my_model .opBtn{
    margin-top: 20px;
}
.my_model .opBtn a{
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    -ms-border-radius: 1px;
    border-radius: 1px;
    display: inline-block;
    margin-right: 10px;
    font-weight: 700;
}
.my_model .dialog-sure{
    background: #ee0a3b;
    color:white;
}

.my_model .dialog-close{
    background:white;
    border: 1px solid #ee0a3b;
    color: #ee0a3b;
}


</style>
