import { revalidatePath } from 'next/cache';
import { addPost } from '../../../utils/actions/post';
import { PostList } from '@/components';
import mongoConnect from '@/../utils/mongodb';

export const Form = async () => {
	const mongo = await mongoConnect();
	const postCollection =
		mongo.connection.db!.collection<IPostCollectionDoc>('posts');
	const postData = (await postCollection.find({}).limit(5).toArray()).map(
		(doc) => {
			return {
				_id: doc._id,
				title: doc.title,
			};
		}
	);
	console.log(postData);

	const handleSubmit = async (formData: FormData) => {
		// Create a wrapper function because our server actions are imported from another file.
		'use server';
		await addPost(formData);
		revalidatePath('/server-actions'); // Revalidate the path to update the UI after form submission
	};

	return (
		<div className='max-w-md mx-auto mt-8'>
			<h1 className='text-2xl font-bold mb-4'>Create a New Post</h1>
			<form
				action={handleSubmit}
				className='flex flex-col gap-4 p-4'>
				<label
					htmlFor='name'
					className='text-lg font-semibold'>
					Title
				</label>
				<input
					type='text'
					id='title'
					name='title'
					className='border border-gray-300 rounded p-2'
					placeholder='Enter a title'
				/>

				<label
					htmlFor='body'
					className='text-lg font-semibold'>
					Body
				</label>
				<textarea
					id='body'
					name='body'
					className='border border-gray-300 rounded p-2'
					placeholder='Enter body text'
				/>

				<button
					type='submit'
					className='bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition-colors'>
					Submit
				</button>
			</form>
			<PostList posts={postData} />
		</div>
	);
};

interface IPostCollectionDoc {
	_id: number;
	title: string;
}
