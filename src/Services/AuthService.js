import axios from 'axios'

let helpers = {
  login : () => {
    axios.post(
      `${process.env.REACT_APP_API}/api/users/sign_in`,
       { headers: 
        {
          'Content-Type': 'application/json'
        }, 
        "email": this.state.email,
        "password": this.state.password 
      })
      .then(res => {
        return res
      });
  }
}

export default helpers