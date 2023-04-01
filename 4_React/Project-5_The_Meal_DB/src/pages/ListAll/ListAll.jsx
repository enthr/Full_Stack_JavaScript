import { lazy } from 'react';
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';

const Loading = lazy(() => import('@layouts/Loading'));
import { listAllQuery } from '@pages/ListAll/listAllLoader';

const ListAll = () => {
	const { isError, isLoading, data, isSuccess } = useQuery(listAllQuery());

	if (isError) {
		throw new Error('', { status: 404, statusText: 'Not Found' });
	}

	return (
		<section className='w-full'>
			{isLoading ? <div className='h-[85vh] md:h-[90vh]'><Loading /></div> : 
				<div className='container mx-auto py-4'>
					<div className='flex justify-center items-center flex-wrap mt-8 mb-2'>
						{'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('').map((char, index) => (
							<a href={`#${char}`} key={index+1} className='text-lg font-medium hover:text-amber px-3 my-2 border-x'>{char}</a>
						))}
					</div>
					<div className='flex flex-col gap-20'>
						{isSuccess ? (
							<>
								{data.map(({ char, meals }) => (
									<div key={char+1} id={char.toUpperCase()}>
										<h1 className='text-[5rem] font-bold mb-4'>{char.toUpperCase()}</h1>
										<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
											{
												meals.map((meal) => (
													<div key={meal.idMeal} className='bg-lightGrey dark:bg-darkGrey rounded-lg shadow-lg p-8'>
														<NavLink to={`/meal/${meal.idMeal}`}>
															<div className='flex flex-col gap-4'>
																<img src={meal.strMealThumb} alt={meal.strMeal} className='w-full object-cover rounded-lg shadow-lg' />
																<h1 className='text-2xl font-semibold'>{meal.strMeal}</h1>
																<p className='text-lg'>Category: <span className='font-bold'>{meal.strCategory}</span></p>
																<p className='text-lg'>Area: <span className='font-bold'>{meal.strArea}</span></p>
																<div className='text-lg'>
																	<p className='mb-2'>Tags:</p> 
																	{
																		meal.strTags ? (
																			<span className='font-bold flex items-center flex-wrap gap-4'>{meal.strTags.split(',').map((tag) => (
																				(tag) ? (
																					<span key={tag} className='px-4 py-1 text-white bg-amber rounded-lg'>{tag}</span>
																				) : (
																					null
																				)
																			))}</span>
																		) : (
																			<span className='font-bold'>None</span>
																		)
																	}
																</div>
															</div>
														</NavLink>
													</div>
												))
											}
										</div>
									</div>
								))}
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			}
		</section>
	);
};

export default ListAll;
