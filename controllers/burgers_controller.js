const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
  burger.all(data => {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(
    ["name", "devoured"],
    [req.body.name, req.body.devoured],
    function () {
      res.redirect("/");
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.update({
      devoured: req.body.devoured
    },
    condition,
    function () {
      res.redirect("/");
    }
  );
});

router.delete("/api/burgers/:id", (req, res) => {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;