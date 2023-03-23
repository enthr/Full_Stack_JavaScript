import LightbulbOnOutlineIcon from 'mdi-react/LightbulbOnOutlineIcon';
import LightbulbIcon from 'mdi-react/LightbulbIcon';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';

const Header = ({ darkMode, toggleDarkMode, resetGame }) => {
	
	return (
		<header>
			<nav className='container mx-auto h-[7.5vh]'>
                <div className='flex justify-between items-center p-4 h-full'>
                    <h1 className='text-2xl font-semibold'>Rock, Paper, Scissors</h1>
                    <div className='flex gap-4 items-center'>
                        <button className='p-2 border' onClick={() => resetGame()}><DeleteForeverIcon size={30} /></button>
                        <button className='p-2 border' onClick={() => toggleDarkMode()}>
                            {darkMode ? <LightbulbIcon size={30} /> : <LightbulbOnOutlineIcon size={30} />}
                        </button>
                    </div>
                </div>
            </nav>
		</header>
	);
};

export default Header;
