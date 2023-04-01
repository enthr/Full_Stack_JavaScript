import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiMeal } from 'react-icons/gi';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Header = () => {
	const [darkMode, setDarkMode] = useState(false);
    
	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

	return (
		<header className='h-[10vh] md:h-[5vh] w-full'>
			<div className='container mx-auto p-2'>
				<div className='flex flex-col justify-between items-center gap-2 md:flex-row md:gap-0'>
					<div className='flex items-center gap-2 font-black'>
						<GiMeal size={30} />
						<h1 className='text-xl'>The Meal DB</h1>
					</div>
					<div className='flex items-center gap-4 font-medium md:gap-8'>
						<NavLink to='/' className={({ isActive }) => (isActive) ? ('text-amber') : ('hover:text-amber')}>Home</NavLink>
						<NavLink to='listall' className={({ isActive }) => (isActive) ? ('text-amber') : ('hover:text-amber')}>List All</NavLink>
						<NavLink to='random' className={({ isActive }) => (isActive) ? ('text-amber') : ('hover:text-amber')}>Random</NavLink>
                        <button className='hover:text-amber' onClick={() => setDarkMode(!darkMode)}>{ (darkMode) ? <MdDarkMode size={25} /> : <MdOutlineLightMode size={25} /> }</button>
					</div>
				</div>
			</div>
			<hr />
		</header>
	);
};

export default Header;