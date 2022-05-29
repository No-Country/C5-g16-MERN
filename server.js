const express = require("express");

const cors = require("cors");
const app = express();

const cookieParser = require("cookie-parser");

//to use json and get data from url
app.use(express.json(), express.urlencoded({ extended: true }));

//to use cookies
app.use(cookieParser());

//to access from different directions
app.use(
  cors({
    origin: "http://localhost:3000",
    //Credentials required
    credentials: true,
  })
);

require("./server/config/mongoose.config");

const myRoutes = require("./server/routes/court.routes");
myRoutes(app);

app.listen(8000, () => console.log("Server is ready!"));
