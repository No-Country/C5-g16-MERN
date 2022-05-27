const Court = require("../models/court.model");

//Get all the courts
module.exports.get_all = (req, res) => {
  Court.find()
    .then((courts) => res.json(courts))
    .catch((err) => res.status(400).json(err));
};

//Create a Court
module.exports.create_court = (req, res) => {
  Court.create(req.body)
    .then((court) => res.json(court))
    .catch((err) => res.status(400).json(err));
};

//Find one Court
module.exports.get_court = (req, res) => {
  Court.findOne({ _id: req.params.id })
    .then((court) => res.json(court))
    .catch((err) => res.status(400).json(err));
};

//Update a Court
module.exports.update_court = (req, res) => {
  Court.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((court) => res.json(court))
    .catch((err) => res.status(400).json(err));
};

//Delete a Court
module.exports.delete_court = (req, res) => {
  Court.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};
