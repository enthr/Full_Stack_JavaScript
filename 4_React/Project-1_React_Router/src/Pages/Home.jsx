import { Link } from 'react-router-dom';

import Image from '../Assets/image1.png';
import Group from '../Assets/Group.svg';

function Home() {
	return (
		<section className='bg-black text-white py-4'>
			<div class="container mx-auto pb-8 lg:pb-28">
                    <div class="flex flex-col justify-between items-center lg:flex-row">
                        <div class="flex flex-col items-center lg:items-start lg:w-[50%]">
                            <h1 class="font-bold text-5xl py-4">Lorem ipsum dolor sit amet.</h1>
                            <p class="text-[#757575] py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ea explicabo harum, eveniet pariatur quo.</p>
                            <div class="flex flex-row gap-6">
                                <Link to='/contact' class="bg-blue text-[#FFFFFF] py-2 px-8 rounded-full">Contact Us</Link>
                                <Link to='/about' class="border-2 border-blue text-blue py-2 px-8 rounded-full">About Us</Link>
                            </div>
                        </div>
                        <div className='mt-16'><img src={Group} alt="Main Image" /></div>
                    </div>
                </div>
		</section>
	);
}

export default Home;