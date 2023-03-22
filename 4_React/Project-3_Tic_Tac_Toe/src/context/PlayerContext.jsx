import { createContext } from 'react';

export const initialPlayer = {
	name: '',
	playerValue: '',
	opponentValue: '',
	ai: '',
	win: 0,
	lose: 0,
	draw: 0
};

export const PlayerContext = createContext(initialPlayer);