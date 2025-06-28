import { PostQuery, PostQuerySkeleton } from '@/components/PostQuery/PostQuery';
import { Suspense } from 'react';

const Work = async () => {
	return (
		<div>
			<main>
				<h1 className='text-2xl font-bold mb-4'>Work Archive</h1>
				<p className='text-gray-700'>This is the work archive content.</p>
				<Suspense fallback={<PostQuerySkeleton />}>
					<PostQuery
						collection='work'
						limit={5}
					/>
				</Suspense>
			</main>
		</div>
	);
};
export default Work;
