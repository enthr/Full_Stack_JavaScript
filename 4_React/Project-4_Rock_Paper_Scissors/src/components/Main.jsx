import Player from './Player';
import ActionIcon from './ActionIcon';

const Main = ({ score, playerAction, computerAction, onActionClick, message }) => {

	return (
		<main>
			<section className='container mx-auto h-[85vh]'>
				<div className='flex flex-col justify-center items-center gap-8 md:gap-24 p-4 h-full'>
					<div className='flex items-center gap-16'>
						<Player name='Player' action={playerAction} score={score.win} />
						<Player name='Computer' action={computerAction} score={score.lose} />
					</div>
					<p className='text-md'>Player Choice:</p>
					<div className='flex items-center gap-4 md:gap-16'>
						<button className='border p-8 rounded-[50%]' onClick={() => onActionClick('rock')}>
							<ActionIcon action='rock' size={50} />
						</button>
						<button className='border p-8 rounded-[50%]' onClick={() => onActionClick('paper')}>
							<ActionIcon action='paper' size={50} />
						</button>
						<button className='border p-8 rounded-[50%]' onClick={() => onActionClick('scissors')}>
							<ActionIcon action='scissors' size={50} />
						</button>
					</div>
					<h2 className='text-3xl font-bold'>{message}</h2>
				</div>
			</section>
		</main>
	);
};

export default Main;
