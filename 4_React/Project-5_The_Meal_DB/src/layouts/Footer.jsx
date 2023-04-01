import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='h-[5vh] w-full'>
            <hr />
			<div className='container mx-auto p-2'>
				<div className='flex justify-between items-center font-medium text-lg'>
					<p>Developed By Jaimin 👍</p>
					<Link className='hover:text-amber' target='_blank' to='https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React'>Repo</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;