import axios from 'axios';

export default {
	getGeoData: function(query) {
		return axios.get('/api/trails', { params: { q: query } });
	},

	getTrails: function(lat, lon) {
		// console.log("LATITUDE: " + lat)
		// console.log("LONGITUDE: " + lon)
		return axios(`/api/trails/${lat}/${lon}`);
    },
    
    planTrail: function(trail) {
        console.log('intending to mark trail as planned')
        return axios.post("/trails/plan", (trail))
    },

    doneTrail: function(trail) {
        console.log('intending to mark trail as done')
    },

    favTrail: function(trail) {
        console.log('intending to mark trail as favorite')
    }
};
