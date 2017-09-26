const userFunctions = require('./db/users')

const logIn = (email, password) => {
  return userFunctions.logIn(email, password)
    .then((user) => {
      user.join_date = user.join_date.toDateString();
      return user;
    })
}

module.exports = {
  signUpUser: userFunctions.newUser,
  logInUser: logIn,
  findUserByEmail: userFunctions.findUserByEmail,
  findUserById: userFunctions.findUserById
};
