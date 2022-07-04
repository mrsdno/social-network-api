const { User } = require("../models");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // get a single user by its _i and populated thought and friend data
  getUserById({ params }, res) {
    User.findById({ _id: params.id })
      .populate({
          path: "thoughts",
          select: "-__v"
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(400).json({ message: "No user found with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // POST a new user
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },
  // update a user by id
  updateUser({ params, body }, res) {
    User.findByIdAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(400).json({ message: "No user found with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  deleteUser({ params }, res) {
      User.findByIdAndDelete({ _id: params.id }).then((dbUserData) => {
          if (!dbUserData) {
              res.status(400).json({ message: "No user found with this id!" });
          }
          res.json(dbUserData);
      })
          .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
