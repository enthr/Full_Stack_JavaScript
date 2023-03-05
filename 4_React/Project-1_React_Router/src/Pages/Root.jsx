import { Outlet } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Cards from '../Components/Cards';

function Root() {
	return (
		<>
			<header className='bg-white text-black'>
				<Navbar />
			</header>
			<main className='bg-white text-black'>
				<Outlet />
				<Cards />
			</main>
			<footer className='bg-white text-black'>
				<Footer />
			</footer>
		</>
	);
}

export default Root;
