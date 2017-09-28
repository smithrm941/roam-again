const Immutable = require('immutable');

module.exports = (() => {
  let config;

  const getEnv = () => {
    return process.env.NODE_ENV;
  }

  const makeConfig = () => {
    if(getEnv() === 'development') {
      require('dotenv').config({path: __dirname + "/../../.env"});
    }
    config = Immutable.Map({
      db: Immutable.Map({
        url: process.env.DATABASE_URL
      }),
      server: Immutable.Map({
        port: process.env.PORT,
        secret: process.env.SECRET
      })
    });
  };

  makeConfig();

  const getConfig = () => {
    return config;
  }

  return {
    getConfig
  };

})();
