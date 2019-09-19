const router = require("express").Router();
const axios = require("axios");


router.get("/trails", ({ query: { q } }, res) => {
    axios.get("https://api.opencagedata.com/geocode/v1/geojson?q=",{
      params: {
        q
      }},"&key=1489bf2c8a9542dda86d1b1608d5bfa5")
      .then(({ data: { items } }) => res.json(items))
      .catch(err => res.status(422).json(err));
  })  
router.get("/trails", (req, res)=>{
  console.log("we are here")
  res.status(200)
})
module.exports = router;