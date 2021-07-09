const path = require("path");

const basepath = path.join(__dirname,"/packages");

module.exports = {
  apps : [{
    script: basepath + '/gateway/index.js',
    watch: true,
    env : {
      PORT : 3030,
      SERVICE_DB_PORT : 4040
    }
  }, {
    script: basepath + '/database_service/index.js',
    watch: true,
    env : {
      PORT : 4040
    }
  }]
};
