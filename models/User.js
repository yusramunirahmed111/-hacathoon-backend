const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Check if model already exists, otherwise create
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
