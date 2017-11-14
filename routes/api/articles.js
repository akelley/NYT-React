const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/saved")
  .get(articlesController.findAll)
  .post(articlesController.create);

router
  .route("/saved/:id")
  .delete(articlesController.remove);

module.exports = router;

