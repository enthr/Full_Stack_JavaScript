import { useContext, useEffect, useState } from 'react';
import MinusIcon from 'mdi-react/MinusIcon';
import CircleOutlineIcon from 'mdi-react/CircleOutlineIcon';
import CloseIcon from 'mdi-react/CloseIcon';

import { GameContext } from '../context/GameContext';

const Game = () => {
    const { board, chooseSquare, turn } = useContext(GameContext);
    const [localBoard, setLocalBoard] = useState([]);

    useEffect(() => {
        const iconBoard = []
        
        board.map((value) => {
            if (value === 'X') {
                return iconBoard.push(<CloseIcon size={120} />);
            } else if (value === 'O') {
                return iconBoard.push(<CircleOutlineIcon size={120} />);
            } else if(value === '-') {
                return iconBoard.push(<MinusIcon size={120} />);
            }
            return;
        });

        setLocalBoard(iconBoard);
    }, [board]);

	return (
		<div className='w-full md:w-[50%]'>
			<div className='flex flex-col items-center w-full'>
				<div className='flex justify-center items-center gap-6 border-b'>
					<button onClick={() => chooseSquare(0, turn)}>{localBoard[0] || <MinusIcon size={120} />}</button>
					<button onClick={() => chooseSquare(1, turn)} className='border-x px-2'>{localBoard[1] || <MinusIcon size={120} />}</button>
					<button onClick={() => chooseSquare(2, turn)}>{localBoard[2] || <MinusIcon size={120} />}</button>
				</div>
				<div className='flex justify-center items-center gap-6 border-b'>
					<button onClick={() => chooseSquare(3, turn)}>{localBoard[3] || <MinusIcon size={120} />}</button>
					<button onClick={() => chooseSquare(4, turn)} className='border-x px-2'>{localBoard[4] || <MinusIcon size={120} />}</button>
					<button onClick={() => chooseSquare(5, turn)}>{localBoard[5] || <MinusIcon size={120} />}</button>
				</div>
				<div className='flex justify-center items-center gap-6'>
					<button onClick={() => chooseSquare(6, turn)}>{localBoard[6] || <MinusIcon size={120} />}</button>
					<button onClick={() => chooseSquare(7, turn)} className='border-x px-2'>{localBoard[7] || <MinusIcon size={120} />}</button>
					<button onClick={() => chooseSquare(8, turn)}>{localBoard[8] || <MinusIcon size={120} />}</button>
				</div>
			</div>
		</div>
	);
};

export default Game;