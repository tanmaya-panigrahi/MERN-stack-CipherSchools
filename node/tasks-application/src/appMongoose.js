const {connect} = require('mongoose');
require('dotenv').config();
const MONGO_URL= process.env.MONGO_URI;

const DB_NAME=`cs-mern`;
async function connectDB(){
    try{

        await connect(`${MONGO_URL}/${DB_NAME}`);
        console.log("Connected to DB");
    }
    catch(err){
        console.log(err);
    }
}

connectDB();