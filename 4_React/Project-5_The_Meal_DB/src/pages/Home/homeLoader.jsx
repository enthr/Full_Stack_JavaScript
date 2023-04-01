import {
	getCategoriesReq,
	getIngredientsReq,
	getAreasReq,
	getMealsByCategoryReq,
	getMealsByAreaReq,
	getMealsByIngredientReq,
	getMealsBySearchReq
} from '@services/mealdb';

export const getInfoQuery = () => ({
	queryKey: ['info'],
	queryFn: async () => {
		const categories = await getCategoriesReq();
		const ingredients = await getIngredientsReq();
		const areas = await getAreasReq();

		if (!categories || !ingredients || !areas) {
			throw new Response('', { status: 404, statusText: 'Not Found' });
		}

		return { categories, ingredients, areas };
	}
});

export const getMealsByCategoryQuery = (category) => ({
	queryKey: ['category', category],
	queryFn: async () => {
		const meals = await getMealsByCategoryReq(category);
		if (!meals) {
			throw new Response('', { status: 404, statusText: 'Not Found' });
		}
		return meals;
	},
	enabled: false
});

export const getMealsByAreaQuery = (area) => ({
	queryKey: ['area', area],
	queryFn: async () => {
		const meals = await getMealsByAreaReq(area);
		if (!meals) {
			throw new Response('', { status: 404, statusText: 'Not Found' });
		}
		return meals;
	},
	enabled: false
});

export const getMealsByIngredientQuery = (ingredient) => ({
	queryKey: ['ingredient', ingredient],
	queryFn: async () => {
		const meals = await getMealsByIngredientReq(ingredient);
		if (!meals) {
			throw new Response('', { status: 404, statusText: 'Not Found' });
		}
		return meals;
	},
	enabled: false
});

export const getMealsBySearchQuery = (searchValue) => ({
	queryKey: ['search', searchValue],
	queryFn: async () => {
		const meals = await getMealsBySearchReq(searchValue);
		if (!meals) {
			throw new Response('', { status: 404, statusText: 'Not Found' });
		}
		return meals;
	},
	enabled: false
});

export const homeLoader = (queryClient) => async () => {
	const query = getInfoQuery();
	return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
};
