const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/suggestion-hw", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`MONGO DB CONNECTED`);
  })
  .catch(function (e) {
    console.log(e);
  });

const indexRouter = require("./routes/indexRouter");
const suggestionRouter = require("./routes/suggestions/suggestionRouter");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api/suggestions", suggestionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: "error",
    error: err,
  });
});

module.exports = app;
