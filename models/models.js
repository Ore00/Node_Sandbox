const DB = require("../db.js");
const moment = require("moment");

let db = new DB();

const exerciseSchema = new db.mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: moment.utc(),
  },
});
const Exercise = db.mongoose.model("Exercise", exerciseSchema);

const userSchema = new db.mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  exercises: {
    type: [exerciseSchema],
    default: () => [],
  },
});

const User = db.mongoose.model("User", userSchema);

const createAndSaveExercise = async (data) => {
  let exercise = new Exercise({
    description: data.description,
    duration: data.duration,
    date: data.date ? moment.utc(data.date) : moment.utc(),
  });

  try {
    let user = await findUserById(data.userId);
    if (user.exercises) {
      user.exercises.push(exercise);
      let result = await user.save();
      return result;
    }
  } catch (err) {
    console.error("error", err);
    return err.code;
  }
};
const createAndSaveUser = async (data) => {
  let user = new User({
    username: data.username,
  });
  try {
    let result = await user.save();
    return result;
  } catch (err) {
    return err.code;
  }
};

const getAllUsers = async () => {
  let users = await User.find({})
    .then((users) => users)
    .catch((err) => {
      err.message;
    });
  return users;
};

const findUserById = async (userId) => {
  let user = await User.findById(userId)
    .then((user) => user)
    .catch((err) => {
      err.message;
    });

  user.exercises.sort(
    (firstItem, secondItem) => firstItem.date - secondItem.date,
  );

  return user;
};

exports.exerciseSchema = exerciseSchema;
exports.Exercise = Exercise;
exports.CreateExercise = createAndSaveExercise;
exports.User = User;
exports.CreateUser = createAndSaveUser;
exports.findUserById = findUserById;
exports.GetUsers = getAllUsers;
