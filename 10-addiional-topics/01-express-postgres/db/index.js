const { Client } = require("pg");

const client = new Client({
    connectionString : "postgres://ofjtazfbnfoorg:1d06f17191e0310984568fe7d4e38c498e68cecd87798aef2b441dfa1dc40ff2@ec2-23-20-124-77.compute-1.amazonaws.com:5432/db7i95nasp2qeg",
    ssl : {
        rejectUnauthorized : false
    }
})

client.connect()
    .then(resp => {
        console.log("Postgres connected...")
    }).catch(err => {
        console.log(err);
        process.exit(1);
    })

module.exports = client;