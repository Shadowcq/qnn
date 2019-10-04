<template>
  <div role="tabpanel" class="tab-pane" id="profile">
							<input type="text" placeholder="请输入11位手机号" id="tel"  @keydown="handle" ref="tel"/>
							
							<p>
								<input type="password" placeholder="请输入手机验证码" id="telPwd" @keydown="handle2"  ref="userspwd"/>
								<input type="button" value="发送验证码" />
							</p>

							<input type="button" value="登录"  @click="login"  :class="{'active111':isred1&&isred2}"/>
							<p>
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
			let usertel = this.$refs.tel.value;
			let usersspwd = this.$refs.userspwd.value;
			if (!usertel || !usersspwd) {
                alert("请输入用户名和密码");
                return;
			}
			this.$axios.post(`/api/users/login`, {
                uname:usertel,
                upass:usersspwd
            })
           .then(function(res) {
                    if(res.data.errorNo==0)
                    {
                        that.$local.save("user", {
                                login: true,
                                userName: usertel
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
