const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
      match: /.+\@.+\..+/
    }
  }
)