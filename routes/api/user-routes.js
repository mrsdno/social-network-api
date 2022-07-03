const router = require("express").Router();

const { getAllUsers } = require("../../controllers/user-contoller");

router.route("/").get(getAllUsers);

module.exports = router;
