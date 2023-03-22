import { useState, useEffect, lazy } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { ThemeContext } from './context/ThemeContext';
import { PlayerContext, initialPlayer } from './context/PlayerContext';
import { GameContext, initialBoard, checkWin, checkDraw } from './context/GameContext';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import ('./components/Footer'));
import Main from './components/Main';
import PlayerInfoForm from './components/PlayerInfoForm';
import { bestMove, emptyIndexes } from './utils/computerMove';

const App = () => {
	const [theme, setTheme] = useState('light');
	const [player, setPlayer] = useState(initialPlayer);
	const [board, setBoard] = useState(initialBoard);
	const [turn, setTurn] = useState('');
	const [gameStatus, setGameStatus] = useState('');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		return toast.success('Theme Changed!');
	};

	const setPlayerInfo = (info) => {
		setPlayer({ ...initialPlayer, ...info, opponentValue: (info.playerValue === 'X') ? 'O' : 'X' });
		setTurn(info.playerValue);
		toast.success('Player Info Entered!');
		toast.success('Game Started!');
		return;
	}

	const resetGame = () => {
		setBoard(initialBoard);
		setPlayer(initialPlayer);
		toast.success('Game Reset!');
		return;
	};

	const restartGame = () => {
		setBoard(initialBoard);
		toast.success('Game Restarted!');
		return;
	};

	const chooseSquare = (pos, turn) => {
		pos = parseInt(pos);
		if (board[pos] === 'X' || board[pos] === 'O') {
			toast.error('Square already taken!');
			return;
		} else if(board[pos] === '-' && turn === player.playerValue || turn === player.opponentValue) {
			const newBoard = [...board];
			newBoard[pos] = turn;
			setBoard(newBoard);
			return;
		}
		return;
	};

	const changeTurn = () => {
		const newTurn = (turn === player.playerValue) ? player.opponentValue : player.playerValue;
		setTurn(newTurn);
		return;
	};

	const handleGameStatus = () => {
		let winner = checkWin(board);
		let isDraw = checkDraw(winner, board);

		if (winner !== '') {
			if(winner === player.playerValue) {
				setPlayer({ ...player, win: player.win + 1 });
				setGameStatus(`${player.name} Wins!`);
				return;
			}
			if(winner === player.opponentValue) {
				setPlayer({ ...player, lose: player.lose + 1 });
				setGameStatus('Computer Wins!');
				return;
			}
		} else if (isDraw) {
			setPlayer({ ...player, draw: player.draw + 1 });
			setGameStatus('Draw!');
			return;
		} else {
			setGameStatus('');
			return;
		}
		return;
	};

	useEffect(() => {
		handleGameStatus();
		changeTurn();
	}, [board]);

	useEffect(() => {
		if(turn === player.opponentValue && player.opponentValue !== '' && player.playerValue !== '' && gameStatus === '') {
			let aiBoard = [...board];
			let aiMove
			if(player.ai === 'random') {
				const emptySpot = emptyIndexes(aiBoard);
				aiMove = emptySpot[Math.floor(Math.random() * emptySpot.length)];
			}
			if(player.ai === 'unbeatable') {
				const gameInfo = { aiBoard: aiBoard, playerValue: player.playerValue, opponentValue: player.opponentValue };
				aiMove = bestMove(gameInfo, turn);
			}
			chooseSquare(aiMove, turn);
		}
	}, [turn]);

	useEffect(() => {
		if (theme === 'dark') {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [theme]);

	return (
		<>
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				<PlayerContext.Provider value={{ player, setPlayerInfo }}>
					<GameContext.Provider value={{ board, turn, resetGame, chooseSquare, restartGame, gameStatus }}>
						<div className='h-screen w-screen bg-white text-black dark:text-white dark:bg-black'>
							<Header />
							{(player.name === '') ? (<PlayerInfoForm />) : (<Main />)}
							<Footer />
							<Toaster position='bottom-right' containerStyle={{ bottom: 64, right: 32 }} gutter={8} />
						</div>
					</GameContext.Provider>
				</PlayerContext.Provider>
			</ThemeContext.Provider>
		</>
	);
};

export default App;