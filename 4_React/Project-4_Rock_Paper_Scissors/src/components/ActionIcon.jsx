import { FaHandRock, FaHandScissors, FaHandPaper } from 'react-icons/fa';

const ActionIcon = ({ action, size }) => {
	const icons = {
		rock: FaHandRock,
		paper: FaHandPaper,
		scissors: FaHandScissors
	};
	const Icon = icons[action];
	return <Icon size={size} />;
};

export default ActionIcon;