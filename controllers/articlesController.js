const db = require("../models");

module.exports = {
  scrape: function(req, res) {
    db.nytreact;
    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url +=
      "?" +
      $.param({
        "api-key": "4467ba2fdfa3457db5dc3446c174f46d"
      });
    $.ajax({
      url: url,
      method: "GET"
    })
      .done(function(res) {
        console.log(res);
      })
      .fail(function(err) {
        throw err;
      });
  },
  save: function(req, res) {
    db.nytreact

  }
};
