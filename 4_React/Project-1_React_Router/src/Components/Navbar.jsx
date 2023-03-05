import { NavLink } from 'react-router-dom';

import Logo from '../Assets/Logo.svg';

function Navbar() {
	return (
		<nav className='py-4'>
			<div className='container mx-auto'>
				<div className='flex flex-col justify-between items-center gap-4 lg:gap-0 lg:flex-row'>
					<div><NavLink to='/'><img src={Logo} alt='Logo' /></NavLink></div>
					<div className='text-[1.25rem] font-medium flex flex-col justify-between items-center gap-4 lg:gap-16 lg:flex-row'>
						<div className='hover:text-blue'><NavLink className={({isActive}) => (isActive ? 'text-blue' : '')} to='/'>Home</NavLink></div>
						<div className='hover:text-blue'><NavLink className={({isActive}) => (isActive ? 'text-blue' : '')} to='/about'>About Us</NavLink></div>
						<div className='hover:text-blue'><NavLink className={({isActive}) => (isActive ? 'text-blue' : '')} to='/contact'>Contact Us</NavLink></div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
