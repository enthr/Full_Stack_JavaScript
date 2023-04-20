import useSWR from 'swr';

const fetcher = async (url) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Failed to fetch data: ${response.statusText}`);
	}

	const data = await response.json();

	return data;
};

export const useMovies = (searchTerm, year, type, page = 1) => {
	const url = `http://www.omdbapi.com/?s=${searchTerm}&page=${page}&y=${year}&type=${type}&r=json&apikey=${import.meta.env.VITE_API_KEY}`;
	const { data, error } = useSWR(url, fetcher);

	return {
		movies: data?.Search ?? [],
		totalResults: data?.totalResults ?? 0,
		isLoading: !error && !data,
		isError: error
	};
};

export const useMovie = (id) => {
	const url = `http://www.omdbapi.com/?i=${id}&plot=full&r=json&apikey=${import.meta.env.VITE_API_KEY}`;
	const { data, error } = useSWR(url, fetcher);

	return {
		movie: data,
		isLoading: !error && !data,
		isError: error
	};
};