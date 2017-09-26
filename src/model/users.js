const userFunctions = require('./db/users')

const logInUser = (email, password) => {
  return userFunctions.logInUser(email, password)
    .then((user) => {
      if(user){
        user.join_date = user.join_date.toDateString();
        return user;
      } else {
        return user;
      }
    })
}

const findUserById = (id) => {
return userFunctions.findUserById(id)
  .then((user) => {
    user.join_date = user.join_date.toDateString();
    return user;
  })
}
module.exports = {
  signUpUser: userFunctions.newUser,
  logInUser: logInUser,
  findUserByEmail: userFunctions.findUserByEmail,
  findUserById: findUserById,
  updateProfile: userFunctions.updateProfile
};
