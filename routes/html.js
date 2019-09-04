const express = require("express");

const router = express.Router();

router
  // LOG IN
  .get("/", (_, res) => {
    res.render("index", {
      styling: "/css/login.css",
      title: "Log In",
      body: "components/login"
    });
  })

  // HOME
  .get("/home", (_, res) => {
    res.render("index", {
      styling: "/css/main.css",
      title: "Home",
      body: "components/home"
    });
  })

  // VIEW JOB
  .get("/view-job", (_, res) => {
    res.render("index", {
      styling: "/css/main.css",
      title: "View Job",
      body: "components/view-job"
    });
  })

module.exports = router;