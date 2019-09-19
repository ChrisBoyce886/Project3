import axios from "axios";
const key = "0ada56bb43msh4dc8330a50c1d88p1e94f3jsnf2baceb60c2d";

export default {
    getGeoData: function (query) {
        return axios.get("https://api.opencagedata.com/geocode/v1/geojson?q="+query+"&key=1489bf2c8a9542dda86d1b1608d5bfa5")
            //.catch(err => res.status(422).json(err));
    },
    
    getTrails: function (lat, lon) {
        return axios({
            "method":"GET",
            "url":"https://trailapi-trailapi.p.rapidapi.com/trails/explore/",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"trailapi-trailapi.p.rapidapi.com",
            "x-rapidapi-key":key
            },"params":{
            "lat":lat,
            "lon":lon
            }
            })
            //.catch(err => res.status(422).json(err));
        },
    getWorld: function (query){
        return axios.get("/api/trails")
    }
}

