// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { engine } = require("express-handlebars");
const path = require("path");
// IMPORTS FROM OTHER FILES
const mangaRouter = require("./routes/manga");
const chapterRouter = require("./routes/chapter");
const genreRouter = require("./routes/genre");
const reportRouter = require("./routes/report");
const favoriteRouter = require("./routes/favorite");
const mangaCpanel = require("./cpanel/manga");
const chapterCpanel = require("./cpanel/chapter");
const userRoute = require('./routes/auth');
const historyRouter = require('./routes/history');
const userCpanelRoute = require("./cpanel/auth");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://leviettinh1001:123@mangaapp.pwj7c3n.mongodb.net/?retryWrites=true&w=majority";

//HTTP logger
app.use(morgan("combined"));
//Engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.use('/assets', express.static('assets'));
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Middleware
app.use(express.json());
app.use(mangaRouter);
app.use(chapterRouter);
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/favorite", favoriteRouter);
// http://localhost:3000/api/history
app.use("/api/history", historyRouter);
app.use(genreRouter);
app.use(reportRouter);
app.use(mangaCpanel);
app.use(chapterCpanel);

// http://localhost:3000/
app.use("/", userCpanelRoute);
app.get("/resetpassword", (req, res) => {
  return res.render("resetpassword");
});
app.get("/addmanga", (req, res) => {
  return res.render("addmanga");
});
app.get("/detail", (req, res) => {
  return res.render("detailManga");
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
