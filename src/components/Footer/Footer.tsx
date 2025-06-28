const Footer = () => {
	return (
		<footer className='text-white py-4 text-center mt-auto'>
			<p className='text-sm'>
				&copy; {new Date().getFullYear()} My Website. All rights reserved.
			</p>
			<p className='text-xs mt-2'>
				Made with ❤️ using Next.js and Tailwind CSS.
			</p>
		</footer>
	);
};

export default Footer;
