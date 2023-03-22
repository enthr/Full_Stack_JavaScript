import { useContext } from 'react';
import AlphaXCircleOutlineIcon from 'mdi-react/AlphaXCircleOutlineIcon';
import LightbulbOnOutlineIcon from 'mdi-react/LightbulbOnOutlineIcon';
import LightbulbOutlineIcon from 'mdi-react/LightbulbOutlineIcon';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';

import { ThemeContext } from '../context/ThemeContext';
import { GameContext } from '../context/GameContext';

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const { resetGame } = useContext(GameContext);

	return (
		<header>
			<nav className='container mx-auto py-4 px-2 h-[7.5vh]'>
				<div className='flex flex-row justify-between items-center h-full'>
					<div className='flex flex-row items-center gap-2'>
						<AlphaXCircleOutlineIcon />
						<p className='text-2xl font-[500] hidden md:block'>Tic Tac Toe</p>
					</div>
					<div className='flex flex-row items-center gap-4'>
                        <button className='border p-2 flex items-center gap-1' onClick={resetGame}>
                            <DeleteForeverIcon size={30} />
							<span>Reset</span>
                        </button>
						<button onClick={toggleTheme} className='border p-2'>
							{theme === 'dark' ? <LightbulbOutlineIcon size={30} /> : <LightbulbOnOutlineIcon size={30} />}
						</button>
					</div>
				</div>
			</nav>
			<hr />
		</header>
	);
};

export default Header;