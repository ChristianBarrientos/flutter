const app = require('./app');
const { connect } = require('./databse');

async function main(){
    await connect();
    await app.listen(4000);
    console.log("Server on port 4000: Connected ");
}

main();