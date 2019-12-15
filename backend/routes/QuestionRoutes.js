const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

router.get("/getQuestions", async (_, res, next) => {
  try {
    const questions = await Question.find();
    res.send(questions);
  } catch (err) {
    res.send({ err });
  }
});

router.get("/questions/:category/:subcategory", async (req, res) => {
  const {
    params: { category = "", subcategory = "" }
  } = req;
  const questionCategory = subcategory ? `${category}/${subcategory}` : category;
  const questions = await Question.find({ category: questionCategory });
  res.send(questions.sort(() => Math.random() - 0.5));
});

module.exports = router;
