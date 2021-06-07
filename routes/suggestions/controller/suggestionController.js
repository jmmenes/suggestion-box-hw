const Suggestion = require("../model/Suggestion");

async function getAllSuggestions(req, res) {
  try {
    let foundAllSuggestions = await Suggestion.find({});
    res.json({ message: "Success", data: foundAllSuggestions });
  } catch (e) {
    res.status(500).json({ message: "failure", error: e.message });
  }
}

async function getSingleSuggestion(req, res) {
  const id = req.params.id;
  try {
    let foundSuggestion = await Suggestion.findById({ _id: id });
    res.json({ message: "Success", data: foundSuggestion });
  } catch (e) {
    res.status(500).json({
      message: "failure",
      error: e.message,
    });
  }
}

async function createSuggestion(req, res) {
  try {
    let savedSuggestion = new Suggestion({
      title: req.body.title,
      author: req.body.author,
      suggestion: req.body.suggestion,
      likes: req.body.likes,
      anonymous: req.body.anonymous,
    });
    let createdSuggestion = await savedSuggestion.save();
    res.json({ message: "Success", createdSuggestion });
  } catch (e) {
    res.status(500).json({
      message: "failure",
      error: e.message,
    });
  }
}

async function updateSuggestion(req, res) {
  const id = req.params.id;
  try {
    if (req.body.title || req.body.suggestion) {
      let updatedSuggestion = await Suggestion.findByIdAndUpdate({ _id: id }, req.body, { new: true });
      res.json({ message: "Success", data: updatedSuggestion });
    } else {
      res.status(500).json({ message: "Only able to update title and suggestion" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "failure",
      error: e.message,
    });
  }
}

async function deleteSuggestion(req, res) {
  const id = req.params.id;
  try {
    let deletedSuggestion = await Suggestion.findByIdAndRemove({ _id: id });
    res.json({ message: "Success", data: deletedSuggestion });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "failure", error: e.message });
  }
}

module.exports = {
  getAllSuggestions,
  getSingleSuggestion,
  createSuggestion,
  updateSuggestion,
  deleteSuggestion,
};
