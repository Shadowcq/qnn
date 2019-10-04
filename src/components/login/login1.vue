<template>
  <div role="tabpanel" class="tab-pane active" id="home">
		<input type="text" placeholder="用户名/手机号" id="username" @keydown="handle"  ref="name"/>
		<input type="password" placeholder="登录密码" id="pwd" @keydown="handle2" ref="pwd"/>
		<input type="button" value="登录"  @click="login"  :class="{'active111':isred1&&isred2}"/>
		<p>
			<!-- <a href="register.html">立即注册</a>| -->
			<router-link to="/register">立即注册</router-link>
			<a href="#">忘记密码</a>
		</p>
		<h4><span></span>其它登录方式<span></span></h4>
		<div class="icon-login">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			isred1:false,
			isred2:false
		}
	},
	methods:{
		handle(){
			this.isred1=true
		},
		handle2(){
			this.isred2=true
		},
		login(){
			let that =this;
			 let user = this.$refs.name.value;
			let userpwd = this.$refs.pwd.value;
			if (!user || !pwd) {
                alert("请输入用户名和密码");
                return;
			}
			this.$axios.post(`/api/users/login`, {
                uname:user,
                upass:userpwd
            })
           .then(function(res) {
                    console.log(res.data);
                    if(res.data.errorNo==0)
                    {
                        that.$local.save("user", {
                                login: true,
                                userName: user
                        })
                        that.$router.back();
                    }
                    else{
                        alert(res.data.message);
                        
                        return;
                    }
                    
                   
                })
		}
	}

}
</script>

<style>
.m-login .tab-content .tab-pane input.active111
{
	background-color:#ef0a3b;
	color:white;
}
</style>
