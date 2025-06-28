import mongoConnect from '@/../utils/mongodb';
import { PostList } from '@/components';

export const PostQuery = async ({ collection, limit }: IProps) => {
	const mongo = await mongoConnect();
	const collectionDB = mongo.connection.db!.collection(collection);
	const posts = await collectionDB
		.find<AnyCollectionDoc>({})
		.limit(limit)
		.toArray();
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return <PostList posts={posts} />;
};

export const PostQuerySkeleton = () => {
	return (
		<ul className='post-list list-none p-4 w-200'>
			{Array.from({ length: 5 }).map((_, index) => (
				<div
					key={index}
					className='animate-pulse bg-gray-200 h-[1.5rem] rounded-md mb-4'
				/>
			))}
		</ul>
	);
};

interface IProps {
	collection: string;
	limit: number;
}

interface AnyCollectionDoc {
	_id: number;
	[key: string]: unknown; // Allow any additional fields
}
