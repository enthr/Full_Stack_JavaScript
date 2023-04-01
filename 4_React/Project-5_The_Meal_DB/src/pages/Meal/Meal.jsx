import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Loading = lazy(() => import('@layouts/Loading'));
import { getMealQuery } from '@pages/Meal/mealLoader';

const Meal = () => {
	const { id } = useParams();
    const { isError, isLoading, data } = useQuery(getMealQuery(id));

    if(isError) {
        throw new Error('', { status: 404, statusText: 'Not Found' });
    }

	return (
		<section className='w-full'>
            {isLoading ? <div className='h-[85vh] md:h-[90vh]'><Loading /></div> : 
                <div className='container mx-auto py-16'>
                    <div className='flex flex-col items-center gap-8'>
                        <h1 className='text-3xl font-bold'>{data.strMeal.toUpperCase()}</h1>
                        <div className='flex items-center gap-12'>
                            <p className='text-lg'><span className='font-bold'>CATEGORY:</span> {data.strCategory.toUpperCase()}</p>
                            <p className='text-lg'><span className='font-bold'>AREA:</span> {data.strArea.toUpperCase()}</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <h2 className='text-lg font-bold'>TAGS:</h2>
                            {
                                data.strTags ? (
                                    <span className='text-lg flex items-center gap-4'>{data.strTags.split(',').map((tag) => (
                                        <span key={tag} className='px-4 py-1 text-white bg-amber rounded-lg'>{tag}</span>
                                    ))}</span>
                                ) : (<span className='text-lg'>None</span>)
							}
                        </div>
                        <div className='my-10'><img src={`${data.strMealThumb}`} alt={data.strMeal} /></div>
                        <div className='flex flex-col items-center gap-4 w-[95%] md:w-1/2'>
                            <h2 className='text-2xl font-bold'>INSTRUCTIONS:</h2>
                            {data.strInstructions.split('\r\n').map((instruction, index) => (
                                <p key={index} className='text-lg w-full'>{instruction.toUpperCase()}</p>
                            ))}
                        </div>
                        <div className='flex flex-col items-center gap-4 mt-8'>
                            <h1 className='text-3xl font-bold'>INGREDIENTS:</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8'>
                                {
                                    Object.keys(data).map((key) => {
                                        if(key.includes('strIngredient') && data[key]) {
                                            return (
                                                <div key={key} className='flex flex-col items-center gap-2'>
                                                    {/* data[key] return ingredient abd the strMeasure string attached with last two numbers from key returns corresponding ingredient measurement  */}
                                                    <p className='text-lg font-bold'>{data[key].toUpperCase()}</p>
                                                    <p className='text-lg'>{data[`strMeasure${key.slice(13)}`].toUpperCase()}</p>
                                                    {/* Ingredient Image */}
                                                    <div className=''><img src={`https://www.themealdb.com/images/ingredients/${data[key]}-Small.png`} alt={data[key]} /></div>
                                                </div>
                                            );
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className='flex items-center gap-4 mt-8'>
                            <h1 className='text-3xl font-bold'>VIDEO GUIDE:</h1>
                            <a href={data.strYoutube} target='_blank' rel='noreferrer' className='text-3xl font-bold hover:text-amber'>LINK</a>
                        </div>
                    </div>
                </div>
            }
		</section>
	);
};

export default Meal;