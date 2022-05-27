const CourtController = require("../controllers/court.controller");

module.exports = (app) => {
  app.post("/api/courts", CourtController.create_court);

  app.get("/api/courts", CourtController.get_all);

  app.get("/api/courts/:id", CourtController.get_court);

  app.put("/api/courts/:id", CourtController.update_court);

  app.delete("/api/courts/:id", CourtController.delete_court);
};
