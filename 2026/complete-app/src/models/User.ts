import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    index: true,
    unique: true
  },
  password: String,
  role: String
});

export const User = mongoose.model('User', userSchema);