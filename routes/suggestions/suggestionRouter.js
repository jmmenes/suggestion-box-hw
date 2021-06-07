const express = require("express");

const router = express.Router();

const { getAllSuggestions, getSingleSuggestion, createSuggestion, updateSuggestion, deleteSuggestion } = require("./controller/suggestionController");

router.get("/", function (req, res, next) {
  res.json({
    test: true,
  });
});

router.get("/all-suggestions", getAllSuggestions);
router.get("/single-suggestion/:id", getSingleSuggestion);
router.post("/create-suggestion", createSuggestion);
router.put("/update-suggestion/:id", updateSuggestion);
router.delete("/delete-suggestion/:id", deleteSuggestion);

module.exports = router;
