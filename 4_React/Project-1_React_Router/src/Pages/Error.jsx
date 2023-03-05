import { useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center gap-16 h-[100vh]">
                <h1 className="text-8xl font-bold text-center">Oops!</h1>
                <p className="text-4xl text-center">Sorry, an unexpected error has occurred.</p>
                <p className="text-xl text-center">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default Error;