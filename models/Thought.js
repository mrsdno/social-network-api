const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema({
  // set custom id to avoid confusion with parent thought _id
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: "You need to include some reaction text!",
    validate: [
      ({ length }) => length <= 280,
      "The thought must be between 1 and 290 characters.",
    ],
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});


const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: "You need to include some thought text!",
        validate: [({ length }) => length >= 1 && length <= 280, "The thought must be between 1 and 290 characters."]
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [ReactionSchema]
},
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false,
    });


// // reaction count virtual
// ThoughtSchema.virtual('reactionCount').get(function () {
//     return this.replies.length
// })

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
