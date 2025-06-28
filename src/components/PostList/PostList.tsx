interface IProps {
	posts: {
		_id: number;
		[key: string]: unknown;
	}[];
}
const PostList: React.FC<IProps> = ({ posts }) => {
	return (
		<ul className='post-list list-none p-4 w-200'>
			{posts.map((post) => (
				<li
					key={post._id}
					className='post-item mb-4'>
					{post.title as string}
				</li>
			))}
		</ul>
	);
};
export default PostList;
