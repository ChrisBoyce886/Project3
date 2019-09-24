import axios from 'axios';

export default {
	CreateNewUser: function(info) {
		return axios.post('/user/create', info).then((res) => {
			// res.data.token <<<<
			console.log(res);
		});
	},

	AuthenticateUser: function(info) {
		return axios.post('/user/authenticate', info)
			// let token = res.data
			// console.log(token)
			// window.localStorage.setItem('authToken', res.data);
	}
};
