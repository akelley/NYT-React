import axios from 'axios';

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var api_key = "0c50478d9da74815949535a5616e0578";

export default {
  loadArticles: function(topic, start_date, end_date) {
    start_date += '0101';
    end_date += '1231';

    return axios.get(url, {
      params: {
        'api-key': api_key,
        'q': topic,
        'begin_date': start_date,
        'end_date': end_date
      }
    });
  },

  getArticles: function() {
    return axios.get("/saved");
  },

  deleteArticle: function(id) {
    return axios.delete("/saved/" + id);
  },

  saveArticle: function(bookData) {
    return axios.post("/saved", bookData);
  }
};