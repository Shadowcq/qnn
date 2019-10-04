<template>
<div>
  <my-remai></my-remai>
  <my-nav></my-nav>
  <my-paixu></my-paixu>
  <my-zhuti></my-zhuti>
  
</div>
</template>

<script>
import MyRemai from "../components/parts/remai"
import MyNav from "../components/parts/nav"
import MyPaixu from "../components/parts/paixu"
import MyZhuti from "../components/parts/zhuti"

export default {
components:{
    MyRemai,
    MyNav,
    MyPaixu,
    MyZhuti

 }
}
</script>

<style>
.yichu {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.padd {
  padding-left: 0px;
  padding-right: 0px;
}
/*热卖推荐*/
.g-hotSalling {
  background: #fbfbfb;
  padding-bottom: 20px;
  padding-left: 20px;
}
.g-hotSalling > div > div:nth-child(2) {
  margin-left: 30px;
}
/*路径导航*/
.g-select .breadcrumb {
  background: transparent;
  padding-top: 30px;
}
.g-select .breadcrumb li a {
  font-size: 17px;
  color: #333333;
  text-decoration: none;
}
.g-select .breadcrumb li a:hover {
  color: #ee0a3b;
}
/*选择*/
.li {
  font-size: 17px;
  color: #333333;
  float: left;
  padding: 15px 20px;
}
.a {
  color: #333333;
  text-decoration: none;
}
.g-select {
  padding-left: 0px;
  padding-right: 0px;
  margin-bottom: 20px;
}
.g-select .first {
  overflow: hidden;
  border: 1px dashed #333333;
  margin-bottom: 0px;
}
.g-select .first li {
  font-size: 17px;
  color: #333333;
  float: left;
  padding: 15px 20px;
}
.g-select .first li a {
  font-size: 13px;
  color: #333333;
  text-decoration: none;
}
.g-select .first li a:hover {
  color: #ee0a3b;
}
.g-select .first li:nth-child(2) a {
  color: #ee0a3b;
}
.g-select .second {
  overflow: hidden;
  border: 1px dashed #333333;
  margin-bottom: 0px;
  margin-left: 0px;
}
.g-select .second li {
  font-size: 17px;
  color: #333333;
  float: left;
  padding: 15px 20px;
}
.g-select .second li a {
  font-size: 13px;
  color: #333333;
  text-decoration: none;
}
.g-select .second li a:hover {
  color: #ee0a3b;
}
.g-select .second li:nth-child(2) a {
  color: #ee0a3b;
}
.border-solid {
  border: 1px solid #dfdfdf;
}
.g-sorting {
  border: 1px solid #dfdfdf;
  background: #f5f5f5;
  padding-left: 0px;
  margin-bottom: 40px;
}
.g-sorting li {
  font-size: 17px;
  color: #333333;
  float: left;
  padding: 15px 20px;
}
.g-sorting li a {
  color: #333333;
  text-decoration: none;
}
.g-sorting li:hover {
  background: white;
}
.g-sorting li:hover a {
  color: #ee0a3b;
}
.trs {
  transform: translateY(-5px);
  transition: 0.3s linear;
  box-shadow: 0px 0px 5px #c8c7c7;
}
.g-mainBox .m-left-Img > img {
  width: 100%;
}
.g-mainBox .row {
  margin-bottom: 20px;
}
.g-mainBox .m-other img {
  width: 90%;
  margin-left: 5%;
}
.g-mainBox .m-other p {
  font-size: 17px;
  color: #333333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 13px;
}
.g-mainBox .m-other p a {
  color: #333333;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  border: 1px solid #dfdfdf;
  padding-bottom: 8px;
  padding-top: 8px;
}
.g-mainBox .m-other p a:first-child {
  width: 40%;
}
.g-mainBox .m-other p a:nth-child(2) {
  width: 57%;
}
.g-mainBox .m-other p a:hover {
  color: #ee0a3b;
  border: 1px solid #ee0a3b;
}
.g-mainBox .m-other p:nth-child(2),
.g-mainBox .m-other p:nth-child(4) {
  color: #ee0a3b;
}
.g-mainBox .m-other p:last-child {
  display: none;
}
.g-mainBox .m-other:hover {
  transform: translateY(-5px);
  transition: 0.3s linear;
  box-shadow: 0px 0px 5px #c8c7c7;
}
.g-mainBox .m-other:hover p:last-child {
  display: block;
}

</style>
