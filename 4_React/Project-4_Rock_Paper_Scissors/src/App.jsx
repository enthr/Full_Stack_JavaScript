import { useState, useEffect, lazy } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Header = lazy(() => import('./components/Header'));
const Main = lazy(() => import('./components/Main'));
const Footer = lazy(() => import('./components/Footer'));
import { randomAction, checkWinner } from './utils/commonUtils';

const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [score, setScore] = useState({ win: 0, lose: 0 });
	const [playerAction, setPlayerAction] = useState('');
	const [computerAction, setComputerAction] = useState('');
	const [message, setMessage] = useState('');

	const onActionClick = (action) => {
		setPlayerAction(action);
		const move = randomAction();
		setComputerAction(move);
		const result = checkWinner(playerAction, computerAction);

		if (result === 'win') {
			setScore({ ...score, win: score.win + 1 });
			toast.success('You Won!');
			setMessage('Player Wins!')
		} else if (result === 'lose') {
			setScore({ ...score, lose: score.lose + 1 });
			toast.error('You Lost!');
			setMessage('Computer Wins!');
		} else {
			setScore({ ...score });
			toast('Draw!');
			setMessage('Draw!');
		}
		return;
	};

	const resetGame = () => {
		setScore({ win: 0, lose: 0 });
		setPlayerAction('');
		setComputerAction('');
		setMessage('');
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

    useEffect(() => {
        if (darkMode === true) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);
	
	return (
		<div className='h-screen w-screenbg-white text-black dark:bg-black dark:text-white'>
			<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} resetGame={resetGame} />
			<hr />
			<Main score={score} playerAction={playerAction} computerAction={computerAction} onActionClick={onActionClick} message={message} />
			<hr />
			<Footer />
			<Toaster position='bottom-right' />
		</div>
	);
};

export default App;
