// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
// IMPORTS FROM OTHER FILES
var userRoute = require('./routes/auth');

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
"mongodb+srv://leviettinh1001:123@mangaapp.pwj7c3n.mongodb.net/test?retryWrites=true&w=majority";

// Middleware
app.use(express.json());
// http://localhost:3000/api/user
app.use("/api/user", userRoute);

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
