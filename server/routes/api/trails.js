const router = require("express").Router();
const axios = require("axios");
const key = process.env.TRAIL_KEY;
const key2 = process.env.GEO_KEY;


router.get("/trails", ({ query: { q } }, res) => {
  console.log('im here')
    axios.get("https://api.opencagedata.com/geocode/v1/geojson?q=" + q + "&key="+key2)
      .then(({data}) => {
        res.json(data);
      })
      .catch(err => res.status(422).json(err));
  })  
router.get("/trails/:lat/:lon", (req, res) => {
    return axios({
        "method":"GET",
        "url":"https://trailapi-trailapi.p.rapidapi.com/trails/explore/",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"trailapi-trailapi.p.rapidapi.com",
        "x-rapidapi-key":key
        },"params":{
        "lat":req.params.lat,
        "lon":req.params.lon
        }
        }).then(({data}) => {
          res.json(data);
        })
        .catch(err => res.status(422).json(err));
})

module.exports = router;