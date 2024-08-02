const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  cast: [{ type: Schema.Types.ObjectId, ref: "Character" }],
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  coAuthor: [{ type: Schema.Types.ObjectId, ref: "Author" }]
});

const BookModel = model("Book", bookSchema);
module.exports = BookModel;
