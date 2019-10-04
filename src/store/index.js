import Vue from "vue"
import Vuex from "vuex"
import {goodsList,goodsList1} from "../datas/goodsdata"


Vue.use(Vuex);

let store =new Vuex.Store({
     state:{
        goodsList,
        goodsList1,
        cartData:[],

        allCheck:false,
        num11:0

    },
     mutations:{
        addCart(state,data){
            // console.log("data",data);
            let boff=true;
            state.cartData.forEach((goods)=>{
                if(goods.id==data.onegoods.id)
                    {
                        // goods.count++;
                        goods.count+=data.num;
                        boff=false;
                    }
            })
                if(boff)
                    {
                        let goodsData=data.onegoods;
                        Vue.set(goodsData,"count",data.num);
                        Vue.set(goodsData,"checked",false);
                        state.cartData.push(goodsData)
                    }
        },
        changeNum(state,data)
        {
            if(data.flag==1)
                {
                    state.cartData[data.index].count--;
                    if(state.cartData[data.index].count<1)
                    {
                        state.cartData.splice(data.index,1);
                    }
                }
            else
                {
                    state.cartData[data.index].count++; 
                }
        },
        delCart(state,data){
            state.cartData.splice(data.index,1);
        },
        popShow(state)
        {
            state.isShowCart =!state.isShowCart;
        },
        closePop(state)
        {
            if(state.isShowCart)
                {
                    state.isShowCart=false;
                }
        },
        allCart(state)
        {
            state.allCheck=!state.allCheck;
            for(let item of state.cartData){
                    item.checked=state.allCheck;
                }
           state.num11=state.cartData.filter(item=>item.checked==true).length;
        },
        chooseCart(state,data)
        {
            state.cartData[data.index].checked=!state.cartData[data.index].checked;
            state.num11=state.cartData.filter(item=>item.checked==true).length;
                if (state.num11==state.cartData.length){
                    state.allCheck=true;
                }else{
                    state.allCheck=false;
                }
        },
        qingkongCart(state){
            state.cartData=""
        }
    },
    actions:{
        addAction(context,data)
        {
            context.commit("addCart",data);
        },
        changeAction(context,data)
        {
            context.commit("changeNum",data);
        }, 
        popShowAction(context)
        {
            context.commit("popShow");
        }, 
        closePopAction(context)
        {
            context.commit("closePop");
        },
        delAction(context,data)
        {
            context.commit("delCart",data);
        },
        allAction(context,allCheck)
        {
            context.commit("allCart",allCheck);
        },
        chooseAction(context,data)
        {
            context.commit("chooseCart",data);
        },
        qingkongAction(context)
        {
            context.commit("qingkongCart");
        },
    },
    getters:{
        totleCount(state){
            let count1=0;
            for(let i=0;i<state.cartData.length;i++){
                if(state.cartData[i].checked)
                    {
                        count1+=state.cartData[i].count;
                    }
                
            }
            return count1;
        },
        totlePrice(state){
            let count2=0;
            for(let i=0;i<state.cartData.length;i++){
                if(state.cartData[i].checked)
                {
                    count2+=state.cartData[i].price*state.cartData[i].count;
                }
                
            }
            return count2;
        }
    }
})
export default store