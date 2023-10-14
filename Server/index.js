// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
// IMPORTS FROM OTHER FILES
const mangaRouter = require("./routes/manga");
const mangaRouter2 = require("./routes/chapter");
const genreRouter = require("./routes/genre");
const reportRouter = require("./routes/report");
const userRoute = require('./routes/auth');
const favoriteRouter = require('./routes/favorite');
const historyRouter = require('./routes/history');
const userCpanelRoute = require("./routes/userCpanel/auth");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://leviettinh1001:123@mangaapp.pwj7c3n.mongodb.net/?retryWrites=true&w=majority";

//HTTP logger
app.use(morgan("combined"));
//Templates engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.json());
app.use(mangaRouter);
app.use(mangaRouter2);

// Middleware
app.use(express.json());
// http://localhost:3000/api/user
app.use("/api/user", userRoute);
// http://localhost:3000/api/favorite
app.use("/api/favorite", favoriteRouter);
// http://localhost:3000/api/history
app.use("/api/history", historyRouter);
app.use(genreRouter);
app.use(reportRouter);
// http://localhost:3000/
app.use("/", userCpanelRoute);
//View Engine

// app.get("/login", (req, res) => {
//   return res.render("login");
// });
// app.get("/register", (req, res) => {
//   return res.render("register");
// });
app.get("/resetpassword", (req, res) => {
  return res.render("resetpassword");
});
app.get("/addmanga", (req, res) => {
  return res.render("addmanga");
});
app.get("/updatemanga", (req, res) => {
  return res.render("updatemanga");
});

// Connections
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
