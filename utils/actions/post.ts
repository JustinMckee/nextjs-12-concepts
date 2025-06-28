import mongoConnect from '../mongodb';

export const addPost = async (formData: FormData) => {
	'use server';
	const mongo = await mongoConnect();
	const postCollection = mongo.connection.db!.collection('posts');
	const newPost = {
		title: formData.get('title') as string,
		body: formData.get('body') as string,
		createdAt: Date.now(),
	};
	const result = await postCollection.insertOne(newPost);
	return result;
};
