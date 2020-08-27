import mongoose from "mongoose";

const DB_CONNECTION = process.env.DB_URI;

export default () => {
  if (!DB_CONNECTION) return;
  mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
