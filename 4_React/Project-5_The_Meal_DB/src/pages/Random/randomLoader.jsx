import { getRandomMealReq } from '@services/mealdb';

export const getRandomMealQuery = () => ({
	queryKey: ['randomMeal'],
	queryFn: async () => {
		const meal = await getRandomMealReq();
		if (!meal) {
			throw new Error('', { status: 404, statusText: 'Not Found' });
		}
		return meal;
	},
	refetchOnWindowFocus: true
});

export const randomLoader = (queryClient) => async () => {
    const query = getRandomMealQuery();
    return (queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query)));
};