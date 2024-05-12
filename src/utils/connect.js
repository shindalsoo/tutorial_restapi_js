import mongoose from 'mongoose';
import config from "config";
import logger from "./logger.js"

async function connect(){
    const dbUri = config.get("dbUri");
    try{
        mongoose.connect(dbUri);
        logger.info("DB connected");
    }catch(error){
        logger.info("Could not connect to db");
        process.exit(1);
    }
}

export default connect;