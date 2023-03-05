import { Link } from 'react-router-dom';

import btnImage from '../Assets/btn_google.svg';

function Contact() {
	return (
		<section className='my-8'>
			<div className="container mx-auto">
				<div className='bg-lightBlue p-8 lg:w-[60%] mx-auto'>
					<div className='bg-[#FFFFFF] flex flex-col gap-4 py-8 px-12'>
						<h1 className='text-black text-center text-[3rem] font-medium'>Contact Us</h1>
						<input placeholder='Your Email' className='p-4 border-2' />
						<input placeholder='Your Name' type='text' className='p-4 border-2' />
						<input placeholder='Your Message' type='text' className='p-4 border-2' />
						<a href='#' className='bg-blue text-white py-4 text-center text-[1.25rem]'>Send Message</a>
						<p className='self-center font-bold'>OR</p>
						<p className='self-center'><Link to='https://google.com' target='_blank'><img src={btnImage} alt='Sign In' /></Link></p>
						<hr className='text-[#E9E9E9] bg-[#E9E9E9] border border-[#E9E9E9] py-[0.05rem]' />
						<p className='text-[#757575] self-center'>Already have an account ? <a href='#' className='text-blue'>Login</a></p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;