const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SchemaUser = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nombre es obligatorio"],
    },

    email: {
      type: String,
      required: [true, "Email es obligatorio"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Ingrese email válido",
      },
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Password obligatorio."],
      minlength: [8, "Password debe tener al menos 8 caracteres"],
    },
  },

  { timestamps: true, versionKey: false }
);

//its temporary just to compare
SchemaUser.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

//middleware
SchemaUser.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Las contraseñas no coinciden");
  }
  next();
});

//Encryption of password
SchemaUser.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

const User = mongoose.model("users", SchemaUser);
module.exports = User;
