import mongoose from 'mongoose';

async function connectInDatabase () {
    mongoose.connect(process.env.DB_CONNECTION_STRING); // add auth config 

    return mongoose.connection;
}

export default connectInDatabase;
