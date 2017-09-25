const userFunctions = require('./db/users')

module.exports = {
  signUpUser: userFunctions.newUser,
  logInUser: userFunctions.logIn,
  findUser: userFunctions.findUser
};
