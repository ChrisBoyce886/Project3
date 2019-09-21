import axios from 'axios'

export default {
    CreateNewUser: function (info) {
        return axios.post('/user/create', info)
        .then(res => {
            // res.data.token <<<<        
            console.log(res)
        })
    },

    AuthenticateUser: function (info) {
        return axios.post('/user/authenticate', info)
        .then(res => {
            console.log(res.data)
        })
    }
}