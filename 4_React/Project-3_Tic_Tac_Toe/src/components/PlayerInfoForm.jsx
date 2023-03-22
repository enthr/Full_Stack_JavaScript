import { useContext, useState } from 'react';

import { PlayerContext } from '../context/PlayerContext';

const PlayerInfoForm = () => {
	const { setPlayerInfo } = useContext(PlayerContext);
    const [info, setInfo] = useState({ name: '', playerValue: '', ai: '' });

	return (
		<main>
			<div className='container mx-auto h-[85vh]'>
                <div className='flex flex-col justify-center items-center gap-8 h-full'>
                    <h1 className='text-5xl font-bold text-center'>Player Info</h1>
                    <form className='flex flex-col gap-4'>
                        <label htmlFor='name'>Name</label>
                        <input className='p-2 bg-white border border-black dark:bg-black dark:border-white' type='text' id='name' value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} />

                        <label htmlFor='value'>Symbol Choice:</label>
                        <select className='p-2 bg-white border border-black dark:border-white dark:bg-black' id='value' value={info.playerValue} onChange={(e) => setInfo({ ...info, playerValue: e.target.value })}>
                            <option value=''>Select</option>
                            <option value='X'>X</option>
                            <option value='O'>O</option>
                        </select>

                        <label htmlFor='value'>AI Choice:</label>
                        <select className='p-2 bg-white border border-black dark:border-white dark:bg-black' id='value' value={info.ai} onChange={(e) => setInfo({ ...info, ai: e.target.value })}>
                            <option value=''>Select</option>
                            <option value='random'>Easy AI</option>
                            <option value='unbeatable'>Hard AI</option>
                        </select>
                        
                        <button className='py-2 px-4 border border-black dark:border-white mt-4' onClick={() => setPlayerInfo(info)}>Submit</button>
                    </form>
                </div>
			</div>
		</main>
	);
};

export default PlayerInfoForm;
