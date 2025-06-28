import Image from 'next/image';
const Header = () => {
	return (
		<header className='p-4'>
			<Image
				src='/images/boat.jpg'
				alt='Image of a boat'
				className=''
				width='1064'
				height='800'
			/>
		</header>
	);
};

export default Header;
