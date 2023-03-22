import { checkWin } from '../context/GameContext';

export const emptyIndexes = (aiBoard) => {
	const emptyMoves = []
	aiBoard.filter((square, index) => {
		if (square === '-') return emptyMoves.push(index);
		return;
	});
	return emptyMoves;
};

const minimax = (gameInfo, turn) => {
	const { aiBoard, playerValue, opponentValue } = gameInfo;
	const availableSpots = emptyIndexes(aiBoard);

	if (checkWin(aiBoard) === playerValue) {
		return { score: -10 };
	} else if (checkWin(aiBoard) === opponentValue) {
		return { score: 10 };
	} else if (availableSpots.length === 0) {
		return { score: 0 };
	}

	const moves = [];
	for(let i = 0; i < availableSpots.length; i++) {
		const move = {};
		move.index = availableSpots[i];
		aiBoard[availableSpots[i]] = turn;

		if (turn === opponentValue) {
			const result = minimax(gameInfo, playerValue);
			move.score = result.score;
		} else {
			const result = minimax(gameInfo, opponentValue);
			move.score = result.score;
		}

		aiBoard[availableSpots[i]] = '-';
		moves.push(move);
	}

	let bestMove;
	if (turn === opponentValue) {
		let bestScore = -10000;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		let bestScore = 10000;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
};

export const bestMove = (gameInfo, turn) => {
	const move = minimax(gameInfo, turn);
	return move.index;
};