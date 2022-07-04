const router = require("express").Router();

const {
  getAllThoughts,
    getThoughtById,
    createThought,
  //   updateUser,
  //   deleteUser,
} = require("../../controllers/thought-controller");

router.route("/")
    .get(getAllThoughts)
    .post(createThought);

router.route("/:id")
    .get(getThoughtById)
    // .put(updateUser)
    // .delete(deleteUser);

module.exports = router;

