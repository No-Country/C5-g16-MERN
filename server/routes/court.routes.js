const CourtController = require("../controllers/court.controller");
const UserController = require("../controllers/user.controller");

const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/courts", authenticate, CourtController.create_court);

  app.get("/api/courts", authenticate, CourtController.get_all);

  app.get("/api/courts/:id", authenticate, CourtController.get_court);

  app.put("/api/courts/:id", authenticate, CourtController.update_court);

  app.delete("/api/courts/:id", authenticate, CourtController.delete_court);

  app.post("/api/register", UserController.register);

  app.post("/api/login", UserController.login);

  app.get("/api/logout", UserController.logout);
};
