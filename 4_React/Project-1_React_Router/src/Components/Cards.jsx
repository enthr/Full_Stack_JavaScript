import courseImg from '../Assets/cardImg.jpg';

function Cards() {
	return (
		<section className='py-16'>
			<div className='container mx-auto'>
				<div className='flex justify-between items-center gap-8'>
					<div className='bg-[#FFFFFF] p-6 shadow-lg'>
						<div className=""><img src={courseImg} alt="Course Image" /></div>
						<h1 className='text-blue text-[1.5rem] font-semibold my-4'>Ful Stack JavaScript 2.0</h1>
						<p className="mt-8">Hitesh Choudhary, Anurag Tiwari</p>         
					</div>
					<div className='bg-[#FFFFFF] p-6 shadow-lg'>
						<div className=""><img src={courseImg} alt="Course Image" /></div>
						<h1 className='text-blue text-[1.5rem] font-semibold my-4'>Ful Stack JavaScript 2.0</h1>
						<p className="mt-8">Hitesh Choudhary, Anurag Tiwari</p>         
					</div>
					<div className='bg-[#FFFFFF] p-6 shadow-lg'>
						<div className=""><img src={courseImg} alt="Course Image" /></div>
						<h1 className='text-blue text-[1.5rem] font-semibold my-4'>Ful Stack JavaScript 2.0</h1>
						<p className="mt-8">Hitesh Choudhary, Anurag Tiwari</p>         
					</div>
				</div>
			</div>
		</section>
	);
}
export default Cards;
