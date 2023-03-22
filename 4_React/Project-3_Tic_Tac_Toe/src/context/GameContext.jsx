import { createContext } from 'react';

export const initialBoard = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

export const GameContext = createContext(initialBoard);

export const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

export const checkWin = (board) => {
	let winner = '';
	winConditions.map((condition) => {
		const [a, b, c] = condition;
		if (board[a] === board[b] && board[b] === board[c] && board[a] !== '-') {
			winner = board[a];
		}
	});
	return winner;
};

export const checkDraw = (winner, board) => {
	let isDraw = false;
	if (winner === '') {
		if (board.includes('-')) {
			isDraw = false;
		} else {
			isDraw = true;
		}
	}
	return isDraw;
};