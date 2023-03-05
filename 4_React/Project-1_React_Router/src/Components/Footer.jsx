import { Link } from "react-router-dom";

function Footer() {
	return (
		<nav className='text-amber py-6'>
			<div className='container mx-auto'>
				<h1 className="text-center text-[1.5rem] font-medium"><Link to='https://github.com/enthr' target='_blank'>Developed By Jaimin Prajpati 👍</Link></h1>
			</div>
		</nav>
	);
}

export default Footer;
