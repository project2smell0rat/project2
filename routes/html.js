const express = require("express");

const router = express.Router();

router
  // DUSTIN'S TEST
  // .get('/', (_, res) => {
  //   res.render('index', {
  //     title: 'My Cool App',
  //     user: 'Nerd'
  //   })
  // })

  // LOG IN
  .get("/", (req, res) => {
    res.render("index", {
      title: "Log In",
      body: "components/login"
      console.log(req)
    });
  })

  // HOME
  .get("/home", (req, res) => {
    res.render("index", {
      title: "Home",
      body: "components/home"
      console.log(req)
    });
  })

  // VIEW JOB
  .get("/view-job", (req, res) => {
    res.render("index", {
      title: "View Job",
      body: "components/view-job"
      console.log(req)
    });
  })

  // ADD JOB
  .get("/add-job", (req, res) => {
    res.render("index", {
      title: "Add a New Job",
      body: "components/add-job"
      console.log(req)
    });
  });

module.exports = router;
