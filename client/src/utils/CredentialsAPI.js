import axios from 'axios'

export default {
    CreateNewUser: function (info) {
        return axios.post('/user/create', { info })
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
    }
}