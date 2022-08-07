import axios from 'axios';
import store from '../store'
import router from '../router';

const user = {
  methods:{
    checkSession: async function checkSession(){
      const sid = localStorage.getItem('sid')
      if(sid){
        try {
          await axios.get('http://783p122.e2.mars-hosting.com/7fit/info/checkSession', {params: {sid: sid}})
          .then(res => {
            if(res.status == 200){
              console.log('user session info:');
              console.log(res);
              store.commit('SET_ROLE', res.data.msg.role)
              store.commit('SET_ISLOGGEDIN', true)
              const role = store.getters.checkRole
              const bool = store.getters.checkIsLoggedIn
              console.log('user role: ' + role);
              console.log('is logged in: ' + bool);
            }  
          })
        } 
        catch (error) {
          console.log(error);
        }
      }
      else{
        console.log('you are not logged in');
      }
    }
  }
}

export default user
