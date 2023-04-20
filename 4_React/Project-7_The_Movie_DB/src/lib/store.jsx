import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Store for OMDb API data

const useStore = create(
	persist(
		(set) => ({
			// Theme Switcher
			darkMode: false,
			setDarkMode: (darkMode) => set({ darkMode }),

			// Tab Switcher
			tabIndex: 0,
			setTabIndex: (tabIndex) => set({ tabIndex }),

			// Search
			searchTerm: '',
			setSearchTerm: (searchTerm) => set({ searchTerm }),
			year: '',
			setYear: (year) => set({ year }),
			type: '',
			setType: (type) => set({ type }),
			pageNumber: 1,
			setPageNumber: (pageNumber) => set({ pageNumber }),
			pageSize: 10,

			// Store for Features
			favourites: [],
			setFavourites: (favourites) => set({ favourites }),
			wishlist: [],
			setWishlist: (wishlist) => set({ wishlist }),
			watched: [],
			setWatched: (watched) => set({ watched })
		}),
		{ name: 'movie-store' }
	)
);

export default useStore;