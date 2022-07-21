<template>
  <div class="container" v-if="show">
    <p class="title">Register</p>
    <form>
      <div class="register-div">
        <div class="wrap">
          <div class="reg-inputs-1" v-if="!show_reg_inputs_2">
            <div class="input-div">
              <input type="text" placeholder="Email" v-model="reg_data.basic.email" required/>
            </div>
            <div class="input-div">
              <input type="text" placeholder="Name" v-model="reg_data.basic.name" required/>
            </div>
            <div class="input-div">
              <input type="text" placeholder="Username" v-model="reg_data.basic.username" required/>
            </div>
            <div class="input-div">
              <input type="password" placeholder="Password" v-model="reg_data.basic.password" required/>
            </div>
            <div class="input-div">
              <input type="password" placeholder="Password (confirm)" v-model="reg_data.basic.password_confirm" required/>
            </div>
            <div class="input-div">
              <input type="date" v-model="reg_data.basic.bday">
            </div>
          </div>
          <div class="reg-inputs-2" v-if="show_reg_inputs_2">
            <div class="input-div">
              <input type="text" placeholder="Weight" v-model="reg_data.weight" required/>
            </div>
            <div class="input-div">
              <input type="text" placeholder="Height" v-model="reg_data.height" required/>
            </div>
            
            <div class="input-div">
              <label for="cars">Gender:</label>
              <select id="goals" v-model="reg_data.sex">
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="form-buttons">
      <button @click="checkInputs" id="next-btn" class="reg-btn">next</button>
      <button @click="emit_reg_data" class="reg-btn" v-if="show_reg_inputs_2">Submit</button>
    </div>
    
    <div class="login-option">
			<p>Already have an account?</p>
			<button class="login-btn" @click="emit_show">Sign In</button>
		</div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props:[
    'show',
  ],
  data(){
    return{
      dayjs,


      show_reg_inputs_2: false,

      reg_data:{
        basic:{
          email: '',
          name: '',
          username: '',
          password: '',
          password_confirm: '',
          bday: ''
        },
        weight: '60',
        height: '180',
        sex: ''
      }     
    }
  },
  methods:{
    emit_reg_data(){
      this.$emit('reg-data', {email: this.reg_data.basic.email,
                              name: this.reg_data.basic.name,
                              username: this.reg_data.basic.username,
                              password: this.reg_data.basic.password,
                              password_confirm: this.reg_data.basic.password_confirm,
                              weight: this.reg_data.weight,
                              height: this.reg_data.height,
                              bday: dayjs(this.reg_data.basic.bday).format('YYYY-MM-DD'),
                              // bday: (() => {
                              //   let date = this.reg_data.bday;
                              //   let day = ("0" + date.getDate()).slice(-2);
                              //   let month = ("0" + (date.getMonth() + 1)).slice(-2);
                              //   let bday = date.getFullYear() + "-" + month + "-" + day;
                              //   return bday;
                              // }),
                              sex: this.reg_data.sex
      })
    },
    emit_show(){
      this.$emit('emit_show')
    },
    changeShowRegInputs2(){
      this.show_reg_inputs_2 = !this.show_reg_inputs_2

      let button = document.getElementById('next-btn')
      if(this.show_reg_inputs_2 == true){
        button.innerText = 'back'
      }
      else{
        button.innerText = 'next'
      }
    },
    checkInputs(){
      this.$emit('form_check', {funcChange: this.changeShowRegInputs2,
                                email: this.reg_data.basic.email,
                                username: this.reg_data.basic.username,
                                password: this.reg_data.basic.password,
                                password_confirm: this.reg_data.basic.password_confirm,
                                bday: this.reg_data.basic.bday})
      console.log(this.reg_data.sex);
    }
  }
}
</script>

<style scoped>
  .container{
    text-align: center;
    overflow: hidden;
  }

  form{
    display: flex;
    justify-content: center;
  }
  .form-buttons button{
    margin-left: 1rem;
    margin-right: 1rem;
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
    padding-top: 5.5rem;
  }

  .register-div {
    display: flex;
    justify-content: center;
    height: 100vh;
    height: 40rem;
    width: 40rem;
    position: relative;
    top: 5rem;
    border-top-style: groove;
    border-bottom-style: groove;
    box-shadow: 0 0 20px 0.5px gray;
  }

  .input-div {
    margin-top: 1.5rem;
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
  ::placeholder{
    font-family: "Bebas Neue", cursive;
    position: relative;
    top: 0.5px;
    font-size: 1.2rem;
  }
  input:focus::placeholder{
    transform: translateY(-3rem);
    transition: 1s;
  }

  button{
    position: relative;
    bottom: 4.7rem;
    width: 6rem;
    height: 3rem;
    border-radius: 10px;
    font-size: 1.5rem;
    border: none;
  }

  .login-option {
    position: relative;
    bottom: 3rem;
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
    align-items: center;
  }
  .login-option p{
    color: rgb(196, 196, 196);
  }
  .login-btn{
    color: rgb(255, 255, 255);
    position: relative;
    bottom: -1.5px;
    background: transparent;
  }
  .login-btn:hover{
    color: #eb2626;
    cursor: pointer;
    transition: 0.2s;
  }

  .reg-btn{
    font-size: 1.7rem;
  }
  .reg-btn:hover{
    color: white;
    background-color: #eb2626;
    cursor: pointer;
    transition: 0.2s;
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
    .register-div{
      border-bottom-style: none;
      box-shadow: none;
    }
  }
</style>