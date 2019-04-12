import axios from 'axios';

let helpers = {
  get_access_token : (public_token, metadata) => {
    return axios.post(
      `${process.env.REACT_APP_API}/api/get_access_token`,
       { headers: 
        {
          'Content-Type': 'application/json'
        }, 
        "public_token": public_token,
        "metadata": metadata
      })
      .then(res => {
        return res;
      });
  }
}

export default helpers;