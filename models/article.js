const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
	article_key: { type: String, required: true },
  title: { type: String, required: true },
  author: {type: String },
  pub_date: { type: String },
  web_url: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
