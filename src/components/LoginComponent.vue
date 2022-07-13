<template>
	<div class="container">
		<div class="logo">
			<img class="logo" src="../assets/logo.png" alt="" />
		</div>
		<p class="title">Sign in</p>
		<form>
			<div class="login-div">
				<div class="wrap">
					<div class="input-div">
						<input type="text" placeholder="Email" v-model="email"/>
					</div>
					<div class="input-div">
						<input type="password" placeholder="Password" v-model="password"/>
					</div>
				</div>
			</div>
		</form>
		<button @click="emitData" class="login-btn">log in</button>
		<div class="register-option">
			<p>Already have an account?</p>
			<button class="register-btn" @click="redirect">Register</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		emitData() {
			this.$emit("loginData", { email: this.email, password: this.password });
		},
    redirect(){
      this.$router.push('/register');
    }
	},
};
</script>

<style scoped>
a {
	font-family: "Roboto Condensed", sans-serif;
	margin-left: 0.5rem;
	color: #eb2626;
}
a:hover {
	cursor: pointer;
}

.container {
	text-align: center;
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

.logo {
	display: flex;
	justify-content: center;
}
.logo img {
	width: 7rem;
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

.input-div {
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
  transition: 0.5;
}

.login-btn{
  font-size: 1.7rem;
}
.login-btn:hover{
  color: white;
  background-color: #eb2626;
  cursor: pointer;
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
}
</style>