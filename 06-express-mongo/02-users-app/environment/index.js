const env = require("dotenv");

env.config();

module.exports = process.env.NODE_ENV === "production" ?
                        require("./environment.prod") :
                        require("./environment.dev")
