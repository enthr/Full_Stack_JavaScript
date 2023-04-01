export const listAllMealsReq = async () => {
    const mealList = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < alphabet.length; i++) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet[i]}`);
        const { meals } = await response.json();
        if(meals) {
            mealList.push({ char: alphabet[i], meals });
        }
    }
    return mealList;
};

export const getMealReq = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const { meals } = await response.json();
    return meals[0];
}

export const getRandomMealReq = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    const { meals } = await response.json();
    return meals[0];
}

export const getCategoriesReq = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
    const { meals } = await response.json();
    return meals;
}

export const getAreasReq = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const { meals } = await response.json();
    return meals;
}

export const getIngredientsReq = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const { meals } = await response.json();
    return meals;
}

export const getMealsByCategoryReq = async (category) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const { meals } = await response.json();
    return meals;
}

export const getMealsByAreaReq = async (area) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const { meals } = await response.json();
    return meals;
}

export const getMealsByIngredientReq = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const { meals } = await response.json();
    return meals;
}

export const getMealsBySearchReq = async (searchValue) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
    const { meals } = await response.json();
    return meals;
}