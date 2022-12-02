// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // handlebars routers --------------

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/about", function (req, res) {
    res.render("about");
  });

  app.get("/day1", function (req, res) {
    res.render("aocday1");
  });

  app.get("/day3", function (req, res) {
    res.render("aocday3");
  });

  app.get("/day2", function (req, res) {
    res.render("aocday2");
  });

  // Non-routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
