import mongoose from 'mongoose';
const MONGODB_URI: string = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env'
	);
}

interface MongooseCache {
	conn: typeof mongoose | null;
	promise: Promise<typeof mongoose> | null;
}

declare global {
	var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };
global.mongoose = cached;

async function mongoConnect() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
			return mongoose;
		});
	}

	cached.conn = await cached.promise;
	return cached.conn;
}

export default mongoConnect;
