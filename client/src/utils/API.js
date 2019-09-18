import axios from "axios";

export default {
    getGeoData: function (query) {
        return axios.get("/api/trails",{
            params: { q: query}
        });
    }
}