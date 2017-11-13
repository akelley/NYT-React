const db = require("../models");

// Defining methods for the articlesController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};


// app.get("/scrape", function(req, res) {
//   var counter = 0;
//   request("http://www.nytimes.com", function(error, response, html) {
//     var $ = cheerio.load(html);

//     $("article.story.theme-summary").each(function(i, element) {
//       var result = {};

//       result.headline = $(this).children(".story-heading").children("a").text().trim();
//       result.link = $(this).children(".story-heading").children("a").attr('href');
//       result.summary = $(this).children("p.summary").text().trim();
//       result.details = $(this).children("p.byline").text();
//       result.saved = false;

//       if(result.headline && result.link && result.summary){
//         counter++;
//         Article.create(result).then(function(dbArticle) {
//           res.send("Number of scraped articles: " + counter);
//         }).catch(function(err) {
//           res.json(err);
//         });
//       }
//     });
//     //console.log("Number of scraped articles: " + counter);
//   });