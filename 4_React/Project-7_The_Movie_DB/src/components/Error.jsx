import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error);
	return (
		<div className='error-container'>
			<h2>Oops! Something went wrong</h2>
			<p>{error.status}</p>
            <p>{error.statusText}</p>
		</div>
	);
};

export default Error;