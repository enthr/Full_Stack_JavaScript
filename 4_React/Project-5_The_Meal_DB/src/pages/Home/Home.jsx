import { lazy, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Loading = lazy(() => import('@layouts/Loading'));
import {
	getMealsByAreaQuery,
	getMealsByCategoryQuery,
	getMealsByIngredientQuery,
	getMealsBySearchQuery,
	getInfoQuery
} from '@pages/Home/homeLoader';

const Home = () => {
	const [searchMode, setSearchMode] = useState('');
	const [category, setCategory] = useState('');
	const [area, setArea] = useState('');
	const [ingredient, setIngredient] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [data, setData] = useState([]);

	const infoQuery = useQuery(getInfoQuery());
	const categoryQuery = useQuery(getMealsByCategoryQuery(category));
	const areaQuery = useQuery(getMealsByAreaQuery(area));
	const ingredientQuery = useQuery(getMealsByIngredientQuery(ingredient));
	const searchQuery = useQuery(getMealsBySearchQuery(searchValue));

	if (infoQuery.isError) {
		throw new Error('', { status: 404, statusText: 'Not Found' });
	}

	if (categoryQuery.isError) {
		throw new Error('', { status: 404, statusText: 'Not Found' });
	}

	if (areaQuery.isError) {
		throw new Error('', { status: 404, statusText: 'Not Found' });
	}

	if (ingredientQuery.isError) {
		throw new Error('', { status: 404, statusText: 'Not Found' });
	}

	if (searchQuery.isError) {
		throw new Error('', { status: 404, statusText: 'Not Found' });
	}

	useEffect(() => {
		if (searchMode === 'category') {
			if(categoryQuery.isSuccess) setData(categoryQuery.data);
		} else if (searchMode === 'area') {
			if(areaQuery.isSuccess) setData(areaQuery.data);
		} else if (searchMode === 'ingredient') {
			if(ingredientQuery.isSuccess) setData(ingredientQuery.data);
		} else if (searchMode === 'name') {
			if(searchQuery.isSuccess) setData(searchQuery.data);
		}
	}, [searchMode, categoryQuery.data, areaQuery.data, ingredientQuery.data, searchQuery.data]);

	return (
		<section className='h-[85vh] md:h-[90vh] overflow-y-scroll w-full'>
			{(infoQuery.isLoading) ? (<Loading />) : (<></>)}
			{(searchMode === 'category' && categoryQuery.isLoading) ? (<Loading />) : (<></>)}
			{(searchMode === 'area' && areaQuery.isLoading) ? (<Loading />) : (<></>)}
			{(searchMode === 'ingredient' && ingredientQuery.isLoading) ? (<Loading />) : (<></>)}
			{(searchMode === 'name' && searchQuery.isLoading) ? (<Loading />) : (<></>)}
			<div className=''>
				{infoQuery.isSuccess ? (
					<>
						<div className='flex justify-center items-center gap-4 py-4'>
							<select
								name='searchMode'
								id='searchMode'
								className='bg-white dark:bg-darkGrey p-2 border'
								value={searchMode}
								onChange={(e) => {
									setSearchMode(e.target.value);
									setCategory('');
									setArea('');
									setIngredient('');
									setSearchValue('');
									setData([]);
								}}
							>
								<option value=''>Select Search Mode</option>
								<option value='name'>Name</option>
								<option value='category'>Category</option>
								<option value='ingredient'>Ingredient</option>
								<option value='area'>Area</option>
							</select>
							{searchMode === 'name' ? (
								<>
									<input
										type='text'
										placeholder='Enter Meal'
										className='border bg-white dark:bg-darkGrey p-2 rounded'
										value={searchValue}
										onChange={(e) => setSearchValue(e.target.value)}
									/>
									<button
										className='py-2 px-8 text-medium text-lg bg-amber text-white rounded'
										onClick={() => searchQuery.refetch()}
									>
										Search
									</button>
								</>
							) : (
								<></>
							)}

							{searchMode === 'category' ? (
								<>
									<select
										name='category'
										id='category'
										className='bg-white dark:bg-darkGrey p-2 border'
										value={category}
										onChange={(e) => setCategory(e.target.value)}
									>
										<option value=''>Select Category</option>
										{infoQuery.data.categories.map((category) => (
											<option key={category.strCategory} value={category.strCategory}>
												{category.strCategory.toUpperCase()}
											</option>
										))}
									</select>
									<button
										className='py-2 px-8 text-medium text-lg bg-amber text-white rounded'
										onClick={() => categoryQuery.refetch()}
									>
										Search
									</button>
								</>
							) : (
								<></>
							)}

							{searchMode === 'ingredient' ? (
								<>
									<select
										name='ingredient'
										id='ingredient'
										className='bg-white dark:bg-darkGrey p-2 border'
										value={ingredient}
										onChange={(e) => setIngredient(e.target.value)}
									>
										<option value=''>Select Ingredient</option>
										{infoQuery.data.ingredients.map((ingredient) => (
											<option key={ingredient.strIngredient} value={ingredient.strIngredient}>
												{ingredient.strIngredient.toUpperCase()}
											</option>
										))}
									</select>
									<button
										className='py-2 px-8 text-medium text-lg bg-amber text-white rounded'
										onClick={() => ingredientQuery.refetch()}
									>
										Search
									</button>
								</>
							) : (
								<></>
							)}

							{searchMode === 'area' ? (
								<>
									<select
										name='area'
										id='area'
										className='bg-white dark:bg-darkGrey p-2 border'
										value={area}
										onChange={(e) => setArea(e.target.value)}
									>
										<option value=''>Select Area</option>
										{infoQuery.data.areas.map((area) => (
											<option key={area.strArea} value={area.strArea}>
												{area.strArea.toUpperCase()}
											</option>
										))}
									</select>
									<button
										className='py-2 px-8 text-medium text-lg bg-amber text-white rounded'
										onClick={() => areaQuery.refetch()}
									>
										Search
									</button>
								</>
							) : (
								<></>
							)}
						</div>
						<hr />
						<div className='container mx-auto py-4'>
							{(data.length > 0) ? (<h1 className='text-3xl text-center font-bold my-8'>Result</h1>) : (<h1 className='text-3xl text-center font-bold my-8'>Welcome To My Meal DB.</h1>)}
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
								{
									(data.length > 0) ? (
										data.map((meal) => (
											<div key={meal.idMeal} className='bg-lightGrey dark:bg-darkGrey rounded-lg shadow-lg p-8'>
												<NavLink to={`/meal/${meal.idMeal}`}>
													<div className='flex flex-col gap-4'>
														<div><img src={meal.strMealThumb} alt={meal.strMeal} className='w-full object-cover rounded-lg shadow-lg' /></div>
														<h1 className='text-2xl font-semibold'>{meal.strMeal}</h1>
														<p className='text-lg'>Category: <span className='font-bold'>{meal.strCategory || category || 'Not Fetched'}</span></p>
														<p className='text-lg'>Area: <span className='font-bold'>{meal.strArea || area || 'Not Fetched'}</span></p>
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
									) : (<></>)
								}
							</div>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</section>
	);
};

export default Home;