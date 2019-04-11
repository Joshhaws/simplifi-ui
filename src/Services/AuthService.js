import axios from 'axios'

let helpers = {
  login : (email, password) => {
    return axios.post(
      `${process.env.REACT_APP_API}/api/users/sign_in`,
       { headers: 
        {
          'Content-Type': 'application/json'
        }, 
        "email": email,
        "password": password 
      })
      .then(res => {
        return res;
      });
  }
}

export default helpers