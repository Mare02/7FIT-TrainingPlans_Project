import axios from 'axios'
{
  async function checkSession(id){
    await axios.get('', {params:{id: id}})
    .then(res => {
      console.log(res);
      return res.data
    }) 
  }
}
