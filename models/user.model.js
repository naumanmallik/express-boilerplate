const { Schema, model } = require('mongoose');
const { makeHashValue } = require('../utils/hash.util');
const JWT = require('jsonwebtoken');
const { JWT_SECRET, TOKEN_EXPIRY } = process.env;
const { omit } = require('lodash');

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      set: (val) => makeHashValue(val),
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
      default: 'male',
    },
    profileImage: String,
    phoneNumber: String,
    location: {
      lat: Number,
      long: Number,
    },
    profession: String,
    role: {
      type: String,
      enum: ['user', 'agent', 'admin'],
      default: 'user',
    },
    deviceType: {
      type: String,
      enum: ['Android', 'Ios', 'Web'],
      default: 'Web',
    },
  },
  { timestamps: true },
);

UserSchema.methods.getJWTToken = function () {
  const payload = {
    name: this.firstName + ' ' + this.lastName,
    email: this.email,
    id: this._id,
  };

  return JWT.sign(payload, JWT_SECRET, {
    expiresIn: TOKEN_EXPIRY,
  });
};

UserSchema.methods.verifyPassword = function (pwd) {
  return this.password == makeHashValue(pwd);
};

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  return omit(obj, ['password']);
};

module.exports = model('User', UserSchema);
