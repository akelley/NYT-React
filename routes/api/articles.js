const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/saved")
  .get(articlesController.findAll);

router
  .route("/saved/:id")
  .post(articlesController.create)
  .delete(articlesController.remove);

module.exports = router;

