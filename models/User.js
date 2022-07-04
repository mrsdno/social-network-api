const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: "You need to provide a username!",
    trim: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Create user model using user schema
const User = model("User", UserSchema);

module.exports = User;
