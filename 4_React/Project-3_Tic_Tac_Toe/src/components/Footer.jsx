import GithubIcon from 'mdi-react/GithubIcon';

const Footer = () => {
	return (
		<footer>
			<hr />
			<nav className='container mx-auto py-4 px-2 h-[7.5vh]'>
				<div className='flex justify-between items-center h-full'>
					<p className='text-lg'>Developed By Jaimin 👍</p>
					<a href='https://github.com/enthr/Full_Stack_JavaScript/tree/main/4_React' className='flex items-center gap-1' target='_blank'>
						<GithubIcon size={30} />
						<p className='text-lg hidden md:block'>Repo</p>
					</a>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;