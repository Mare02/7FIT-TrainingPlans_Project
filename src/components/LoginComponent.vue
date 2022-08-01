<template>
	<div class="container"  v-if="show">
		<p class="title">Sign in</p>
		<form>
			<div class="login-div">
				<div class="wrap">
					<div class="input-div">
						<input type="text" placeholder="Email" v-model="log_data.email" required/>
					</div>
					<div class="input-div">
						<input type="password" placeholder="password" v-model="log_data.password" required/>
					</div>
				</div>
			</div>
		</form>
		<button @click="emit_log_data" class="login-btn">log in</button>
		<div class="register-option">
			<p>Don't have an account?</p>
			<button class="register-btn" @click="emit_show">Register</button>
		</div>
	</div>
</template>
<script>
export default {
  props:[
    'show'
  ],
	data() {
		return {
      log_data:{
        email: "",
			  password: "",
      }			
		};
	},
	methods: {
		emit_log_data() {
			this.$emit("loginData", { email: this.log_data.email, password: this.log_data.password });
		},
    emit_show(){
      this.$emit('emit_show')
    }
	},
};
</script>

<style scoped>
a{
	font-family: "Roboto Condensed", sans-serif;
	margin-left: 0.5rem;
	color: #eb2626;
}
a:hover {
	cursor: pointer;
}

.container{
  text-align: center;
  overflow: hidden;
}

form{
  display: flex;
  justify-content: center;
}
.container .title {
	font-family: "Bebas Neue", cursive;
	font-size: 2rem;
	position: relative;
	top: 1rem;
}

.wrap {
  position: relative;
  bottom: 4.5rem;
	text-align: left;
	padding-top: 9rem;
}

.login-div {
	display: flex;
  justify-content: center;
	height: 100vh;
	height: 30rem;
  width: 40rem;
	position: relative;
	top: 5rem;
	border-top-style: groove;
	border-bottom-style: groove;
  box-shadow: 0 0 20px 0.5px gray;
}

.input-div{
	margin-top: 2rem;
}

input{
	width: 30rem;
	height: 3rem;
	background-color: rgb(15, 15, 15);
	border: 2px solid gray;
	border-radius: 10px;
	color: white;
	padding-left: 1rem;
	padding-right: 1rem;
	font-size: 1.2rem;
}
input:focus::placeholder{
  transform: translateY(-3rem);
  transition: 1s;
}

button{
	position: relative;
	bottom: 6rem;
	width: 6rem;
	height: 3rem;
	border-radius: 10px;
	font-size: 1.5rem;
	border: none;
}

.register-option {
  position: relative;
  bottom: 3rem;
	display: flex;
	justify-content: center;
	font-size: 1.3rem;
	align-items: center;
}
.register-option p{
  color: rgb(196, 196, 196);
}
.register-btn{
  color: rgb(255, 255, 255);
  position: relative;
  bottom: -1.5px;
  background: transparent;
}
.register-btn:hover{
  color: #eb2626;
  cursor: pointer;
  transition: 0.2s;
}

.login-btn{
  font-size: 1.7rem;
}
.login-btn:hover{
  color: white;
  background-color: #eb2626;
  cursor: pointer;
  transition: 0.2s;
}

::placeholder{
	font-family: "Bebas Neue", cursive;
	position: relative;
	top: 0.5px;
	font-size: 1.2rem;
}

@media only screen and (max-width: 700px){
  .login-div{
    width: 100%;
  }
}
@media only screen and (max-width: 500px){
  input{
    width: 23rem;
    height: 2.5rem;
  }
  button{
    width: 5.5rem;
	  height: 2.5rem;
  }
  .login-btn{
    font-size: 1.5rem;
  }
  .login-div{
    border-bottom-style: none;
    box-shadow: none;
  }
}
</style>