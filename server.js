const express = require("express");

const cors = require("cors");
const app = express();

//to use json and get data from url
app.use(express.json(), express.urlencoded({ extended: true }));

//to access from different directions
app.use(
  cors({
    origin: "http://localhost/3000",
  })
);

require("./server/config/mongoose.config");

const myRoutes = require("./server/routes/court.routes");
myRoutes(app);

app.listen(8000, () => console.log("Server is ready!"));
