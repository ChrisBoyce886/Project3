const router = require("express").Router();
const axios = require("axios");



router.get("/trails", ({ query: { q } }, res) => {
    axios.get("https://api.opencagedata.com/geocode/v1/json?q=",{
      params: {
        q
      }},"&key=1489bf2c8a9542dda86d1b1608d5bfa5")
      .then(({ data: { items } }) => res.json(items))
      .catch(err => res.status(422).json(err));
  })

  // // gets saved books from mongodb
  // router.get("/books/saved", booksController.findAll)

  // // saves a book to mongodb
  // router.post("/books/saved", booksController.create);

  // router.delete("/books/saved/:id", booksController.remove);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;