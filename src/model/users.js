const userFunctions = require('./db/users')

module.exports = {
  signUpUser: userFunctions.newUser,
  logInUser: userFunctions.logIn,
  findUserByEmail: userFunctions.findUserByEmail,
  findUserById: userFunctions.findUserById
};
