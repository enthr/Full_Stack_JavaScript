import Logo from '../Assets/Logo.svg';
import Profile from '../Assets/Profile.png';

function About() {
	return (
		<section className='py-4'>
			<div className='container mx-auto py-20'>
				<h1 className='text-center text-[1.5rem] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, mollitia!</h1>
				<div className='mt-10 flex flex-col items-center'>
					<div className='mb-8'><img src={Profile} alt='Profile' /></div>
					<p className='font-medium text-[1.5rem]'>Rowan Sullivan</p>
					<p className='font-semibold text-[1.25rem]'>CTO @ SullivanAnalytics</p>
				</div>
				<hr className='text-lightBlue bg-lightBlue border border-lightBlue py-[0.05rem] my-8' />
				<div className='flex flex-col justify-evenly items-center lg:flex-row'>
					<img src={Logo} alt='Logo' />
					<img src={Logo} alt='Logo' />
					<img src={Logo} alt='Logo' />
					<img src={Logo} alt='Logo' />
					<img src={Logo} alt='Logo' />
				</div>
			</div>
		</section>
	);
}

export default About;