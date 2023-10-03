// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
// IMPORTS FROM OTHER FILES
const mangaRouter = require("./routes/manga");
const mangaRouter2 = require("./routes/chapter");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://leviettinh1001:123@mangaapp.pwj7c3n.mongodb.net/?retryWrites=true&w=majority";

// Middleware
app.use(express.json());
app.use(mangaRouter);
app.use(mangaRouter2);


// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
