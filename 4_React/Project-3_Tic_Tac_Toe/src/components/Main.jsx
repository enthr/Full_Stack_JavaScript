import { useContext } from 'react';

import { PlayerContext } from '../context/PlayerContext';
import { GameContext } from '../context/GameContext';
import Game from './Game';

const Main = () => {
	const { player } = useContext(PlayerContext);
	const { restartGame, gameStatus } = useContext(GameContext);
	const aiType = (player.ai === 'random') ? 'Easy AI' : 'Hard AI';

	return (
		<main className='relative'>
			{(gameStatus === '') ? (<></>) : (
				<div className='absolute w-full h-full flex flex-col justify-center items-center gap-8 bg-black dark:bg-white opacity-[0.9]'>
                	<p className='text-white dark:text-black text-5xl font-bold'>{gameStatus}</p>
                	<button className='text-white border border-white dark:text-black dark:border-black py-2 px-8' onClick={() => restartGame()}>Restart Game</button>
            	</div>
			)}
			<section className='container mx-auto h-[85vh]'>
				<div className='flex flex-col justify-around items-center h-full md:flex-row'>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-row gap-4 md:flex-col'>
							<p className='text-2xl'>{player.name || 'Player'}</p>
							<p className='text-2xl'>Choice: {player.playerValue || 'X'}</p>
						</div>
						<div className='text-2xl flex flex-row gap-4 md:flex-col'>
							<p className=''>Wins: <span className='text-green font-bold'>{player.win || 0}</span></p>
							<p className=''>Losses: <span className='text-red font-bold'>{player.lose || 0}</span></p>
							<p className=''>Draws: <span className='text-blue font-bold'>{player.draw || 0}</span></p>
						</div>
					</div>

					<Game />

					<div className='flex flex-col gap-4'>
						<div className='flex flex-row gap-4 md:flex-col'>
							<p className='text-2xl'>Computer</p>
							<p className='text-2xl'>Choice: {player.opponentValue || 'O'}</p>
							<p className='text-2xl'>Mode: {aiType || ''}</p>
						</div>
						<div className='text-2xl flex flex-row gap-4 md:flex-col'>
							<p className=''>Wins: <span className='text-green font-bold'>{player.lose || 0}</span></p>
							<p className=''>Losses: <span className='text-red font-bold'>{player.win || 0}</span></p>
							<p className=''>Draws: <span className='text-blue font-bold'>{player.draw || 0}</span></p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Main;