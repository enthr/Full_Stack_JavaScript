import { listAllMealsReq } from '@services/mealdb';

export const listAllQuery = () => ({
	queryKey: ['listAllMeals'],
	queryFn: async () => {
		const meals = await listAllMealsReq();
		if (!meals) {
			throw new Response('', { status: 404, statusText: 'Not Found' });
		}
		return meals;
	}
});

export const listAllLoader = (queryClient) => async () => {
    const query = listAllQuery();
    return (queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query)));
}