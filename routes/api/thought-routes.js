const router = require("express").Router();

const {
  getAllThoughts,
  //   getUserById,
  //   createUser,
  //   updateUser,
  //   deleteUser,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts)
    // .post(createUser);

// router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;

