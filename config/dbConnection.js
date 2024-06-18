const mongoose = require("mongoose");
const MONGO_URI='mongodb+srv://Rachit:jlNIjL7xRJVwZQGL@cluster0.7fceqz7.mongodb.net/';
const connectDB = async() => {
	try
	{
		const db = process.env.MONGO_URI;
		await mongoose.connect(db);
		console.log("MongoDB connected...");
	}
	catch(err)
	{
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;