import ActionIcon from './ActionIcon';

const Player = ({ name = 'Player', score = 0, action = 'rock' }) => {
	return (
		<div className='border flex flex-col items-center gap-8 py-4 px-6'>
			<div className='text-lg border-b'>{name}: {score}</div>
			<div>
				{action === '' ? (<></>) : (<ActionIcon action={action} size={100} />)}
			</div>
		</div>
	);
};

export default Player;
