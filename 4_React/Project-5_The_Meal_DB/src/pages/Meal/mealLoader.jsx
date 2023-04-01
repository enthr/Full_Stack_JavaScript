import { getMealReq } from '@services/mealdb';

export const getMealQuery = (id) => ({
	queryKey: ['meal', id],
	queryFn: async () => {
		const meal = await getMealReq(id);
		if (!meal) {
			throw new Response('', { status: 404, statusText: 'Not Found' });
		}
		return meal;
	}
});

export const mealLoader = (queryClient) => async ({ params }) => {
    const query = getMealQuery(params.id);
    return (queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query)));
};