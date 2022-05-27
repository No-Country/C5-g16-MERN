const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/courtsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conected with database"))
  .catch((err) => console.log("Error in connecting with DB " + err));
