import Link from 'next/link';
import { Heart } from 'lucide-react';
const Navigation = () => {
	return (
		<nav className='navigation inline-flex p-4 w-full sticky'>
			<Heart className='text-[#f56565] inline-block mr-auto' />
			<ul className='nav-list inline-flex list-none gap-8'>
				<li className='nav-item'>
					<Link
						href='/'
						className='nav-link'>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						href='/work'
						className='nav-link'>
						Work
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
