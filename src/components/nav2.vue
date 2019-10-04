<template>
    <div>
        <ol class="m-allGoodsList">
            <!--第一个-->
            <li @mouseover="handle2" @mouseout="handle2">
                <div class="u-left" >
                    <p>
                        <a href="hotSall.html">扫地机器人-地宝</a>
                    </p>
                    <p>
                        <a href="javascript:;">T5</a>
                        <a href="javascript:;">Max</a>
                        <a href="javascript:;">DJ65</a>
                        <a href="hotSall.html">DJ35</a>
                        <a href="javascript:;">DG70</a>
                    </p>
                    <p>></p>
                </div>
                <div class="u-right" v-show="isShow2">
                    <div class="goods-subcate-block tags">
                        <h3>帮你选机</h3>
                        <div class="subcate-items">
                            <p>
                                <a target="_blank" href="#">年度重磅新品</a>
                                <a target="_blank" href="#">以旧换新</a>
                                <a target="_blank" href="#">热销爆款</a>
                                <a target="_blank" href="#">视觉导航新品</a>
                                <a target="_blank" href="#">高性价比</a>
                            </p>
                            <p>
                                <a target="_blank" href="#">规划扫拖</a>
                                <a target="_blank" href="#">毛发克星</a>
                            </p>

                        </div>
                    </div>
                    <div class="goods-subcate-block hot">
                        <h3>热门型号</h3>
                        <div class="subcate-items">
                            <a href="#"><img src="../assets/imgs/shouye/a-1.png">
                                <span>T5 Max</span>
                            </a>
                            <a href="#"><img src="../assets/imgs/shouye/a-2.png">
                                <span>DJ65</span>
                            </a>
                            <a href="hotSall.html"><img src="../assets/imgs/shouye/a-3.png">
                                <span>DJ35</span>
                            </a>
                            <a href="#"><img src="../assets/imgs/shouye/a-4.png">
                                <span>DG70</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <!--第二个-->
            <li @mouseover="handle3" @mouseout="handle3">

                <div class="u-left">
                    <p>
                        <a href="javascript:;">擦窗机器人-窗宝</a>
                    </p>
                    <p>
                        <a href="javascript:;">W880</a>
                        <a href="javascript:;">W836</a>
                        <a href="javascript:;">W950</a>

                    </p>
                    <p>></p>
                </div>
                <div class="u-right" v-show="isShow3">
                    <div class="goods-subcate-block tags">
                        <h3>帮你选机</h3>
                        <div class="subcate-items">
                            <p>
                                <a target="_blank" href="#">年度新品</a>
                                <a target="_blank" href="#">热销爆款</a>
                                <a target="_blank" href="#">好评推荐</a>
                                <a target="_blank" href="#">高层必备</a>
                                <a target="_blank" href="#">规划擦窗</a>
                            </p>
                            <p>
                                <a target="_blank" href="#">可擦门窗</a>

                            </p>

                        </div>
                    </div>
                    <div class="goods-subcate-block hot">
                        <h3>热门型号</h3>
                        <div class="subcate-items">
                            <a href="#"><img src="../assets/imgs/shouye/u-info1.png">
                                <span>W880</span>
                            </a>
                            <a href="#"><img src="../assets/imgs/shouye/u-info2.png">
                                <span>W836</span>
                            </a>
                            <a href="#"><img src="../assets/imgs/shouye/u-info3.png">
                                <span>W950</span>
                            </a>

                        </div>
                    </div>
                </div>
            </li>
            <!--第三个-->
            <li @mouseover="handle4" @mouseout="handle4">
                <div class="u-left">
                    <p>
                        <a href="javascript:;">净化机器人-沁宝</a>
                    </p>
                    <p>
                        <a href="javascript:;">A660</a>
                        <a href="javascript:;">AA30</a>

                    </p>
                    <p>></p>
                </div>
                <div class="u-right" v-show="isShow4">
                    <div class="goods-subcate-block tags">
                        <h3>帮你选机</h3>
                        <div class="subcate-items">
                            <p>
                                <a target="_blank" href="#">智能除霾</a>
                                <a target="_blank" href="#">人气推荐</a>
                                <a target="_blank" href="#">移动净化</a>
                                <a target="_blank" href="#">规划净化</a>
                                <a target="_blank" href="#">APP智控</a>
                            </p>
                            <p>
                                <a target="_blank" href="#">有效除甲醛</a>

                            </p>

                        </div>
                    </div>
                    <div class="goods-subcate-block hot">
                        <h3>热门型号</h3>
                        <div class="subcate-items">
                            <a href="#"><img src="../assets/imgs/shouye/u-info3-1.png">
                                <span>W880</span>
                            </a>
                            <a href="#"><img src="../assets/imgs/shouye/u-info3-2.png">
                                <span>W836</span>
                            </a>
                        </div>
                    </div>
                </div>

            </li>
            <!--第四个-->
            <li @mouseover="handle5" @mouseout="handle5">
                <div class="u-left">
                    <p>
                        <a href="javascript:;">管家机器人-悠尼</a>
                    </p>
                    <p>
                        <a href="javascript:;">UNIBOT</a>
                        <a href="javascript:;">净化模块</a>

                    </p>
                    <p>></p>
                </div>
                <div class="u-right"  v-show="isShow5">
                    <div class="goods-subcate-block tags">
                        <h3>帮你选机</h3>
                        <div class="subcate-items">
                            <p>
                                <a target="_blank" href="#">智能管家</a>
                                <a target="_blank" href="#">实时监控</a>
                                <a target="_blank" href="#">规划清扫</a>
                                <a target="_blank" href="#">净化空气</a>
                                <a target="_blank" href="#">家庭安防</a>
                            </p>
                            <p>
                                <a target="_blank" href="#">家电遥控</a>

                            </p>

                        </div>
                    </div>
                    <div class="goods-subcate-block hot">
                        <h3>热门型号</h3>
                        <div class="subcate-items">
                            <a href="#"><img src="../assets/imgs/shouye/u-info4-1.png">
                                <span>W880</span>
                            </a>
                            <a href="#"><img src="../assets/imgs/shouye/u-info4-2.png">
                                <span>W836</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <!--第五个-->
            <li @mouseover="handle6" @mouseout="handle6">
                <div class="u-left">
                    <p>
                        <a href="javascript:;">配件专区</a>
                    </p>
                    <p>
                        <a href="javascript:;">边刷</a>
                        <a href="javascript:;">抹布</a>
                        <a href="javascript:;">滚刷</a>
                        <a href="javascript:;">滤材</a>

                    </p>
                    <p>></p>
                </div>
                <div class="u-right" v-show="isShow6">
                    <div class="goods-subcate-block tags">
                        <h3>帮你选机</h3>
                        <div class="subcate-items">
                            <p>
                                <a target="_blank" href="#">地宝配件</a>
                                <a target="_blank" href="#">窗宝配件</a>
                                <a target="_blank" href="#">沁宝配件</a>
                                <a target="_blank" href="#">管家配件</a>

                            </p>
                            <p>
                                <a target="_blank" href="#">家电遥控</a>

                            </p>

                        </div>
                    </div>
                    <div class="goods-subcate-block hot">
                        <h3>热门型号</h3>
                        <div class="subcate-items">
                            <a href="#"><img src="../assets/imgs/shouye/u-info5-1.png">
                                <span>边刷</span>
                            </a>
                            <a href="#"><img src="../assets/imgs/shouye/u-info5-2.png">
                                <span>抹布</span>
                            </a>
                            <a href="#"><img src="../assets/imgs/shouye/u-info5-3.png">
                                <span>滚刷</span>
                            </a>
                            <a href="#"><img src="../assets/imgs/shouye/u-info5-4.png">
                                <span>滤材</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
 data(){
        return{
            isShow2:false,
            isShow3:false,
            isShow4:false,
            isShow5:false,
            isShow6:false,
        }
    },
  methods:{
      handle2(){
            this.isShow2=!this.isShow2;
      },
      handle3(){
            this.isShow3=!this.isShow3;
      },
      handle4(){
            this.isShow4=!this.isShow4;
      },
      handle5(){
            this.isShow5=!this.isShow5;
      },
      handle6(){
            this.isShow6=!this.isShow6;
      }
  }
}
</script>

<style>
/*全部商品 子菜单*/
.g-nav2 .g-allGoods{
	position: relative;
}
.g-nav2 .g-allGoods .m-allGoodsList{
	position: absolute;
	top: 49px;
	left: 0px;
	height: 360px;
	z-index: 99;
	/* display: none; */
}
.g-nav2 .g-allGoods .m-allGoodsList>li{
	height: 72px;
	position: relative;

}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-left{
	position: absolute;
	top: 0px;
	left: 0px;
	width: 290px;
	padding: 10px 20px 0px 20px;
	background: #f7f8fa;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-left>p:nth-child(1){
	margin: 5px;
	float: left;
	width: 80%;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-left>p:nth-child(1) a{
	color: #283a4a;
	font-size: 16px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-left>p:nth-child(2) a{
	color: #7b7d7e;
	font-size: 14px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-left>p:nth-child(2){
	float: left;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-left>p:nth-child(3){
	float: right;
	margin-top: -20px;
	font-size: 20px;
}

.g-nav2 .g-allGoods .m-allGoodsList>li .u-left>p a:hover{
	color: #ee0a3b;
	text-decoration: none;
}
/*右边详情列表*/
.g-nav2 .g-allGoods .m-allGoodsList>li .u-right{
	position: absolute;
	top: 0px;
	left: 290px;
	width: 800px;
	background: #e8eaec;
	padding: 20px 50px;
	height: 360px;
	/* display: none; */
}
.g-nav2 .g-allGoods .m-allGoodsList>li:nth-child(2) .u-right{
	top: -72px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li:nth-child(3) .u-right{
	top: -144px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li:nth-child(4) .u-right{
	top: -216px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li:nth-child(5) .u-right{
	top: -288px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-right .tags h3,
.g-nav2 .g-allGoods .m-allGoodsList>li .u-right .hot h3{
	font-size: 16px;
	color: #ee0a3b;
	padding-bottom: 20px;
	border-bottom: 1px solid #dadbdd;
	margin: 0px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-right .tags a{
	color: #747577;
	font-size: 16px;
	margin-right: 50px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-right .tags p{
	padding-top: 15px;
	padding-bottom: 0px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-right .tags a:hover{
	color: #ee0a3b;
	text-decoration: none;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-right .hot h3{
	padding-top: 20px;
	margin-bottom: 20px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-right .hot a{
	display: inline-block;
	color: #727375;
	font-size: 14px;
	text-align: center;
	width: 90px;
	margin-right: 60px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-right .hot a>img{
	margin-bottom: 10px;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-right .hot a:hover{
	color: #ee0a3b;
	text-decoration: none;
}
.g-nav2 .g-allGoods .m-allGoodsList>li .u-right .hot a:last-child{
	margin-right: 0px;
}
</style>
