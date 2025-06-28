import { Header } from '@/components';

export default async function Home() {
	return (
		<main className='flex flex-grow-1 flex-col items-center justify-center'>
			<Header />
			<h1>My Homepage</h1>
		</main>
	);
}
