class DbConnection{
    constructor(){
        this.mongoose = require('mongoose');
        this.mongoDBConnectionString = process.env.MONGODB_URL + process.env.DATABASE_NAME;
        this.connect();
    }

    async connect(){
        try{
            await this.mongoose.connect(this.mongoDBConnectionString);
            console.log('Connection Established Successfully');
        }
        catch(err){
            console.error('Err while connect to mongoDb :: ', err.message);
            process.exit();
        }
    }

    getDbConnection(){
        return this.mongoose;
    }
}

const db = new DbConnection()

module.exports = db.getDbConnection();