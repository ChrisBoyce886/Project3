import axios from 'axios'

export default {
    CreateNewUser: function (info) {
        return axios.post('/user/create', info)
        .then(res => {
            // res.data.token <<<<
            
            console.log(res)
            console.log(res.data)
        })
    }
}