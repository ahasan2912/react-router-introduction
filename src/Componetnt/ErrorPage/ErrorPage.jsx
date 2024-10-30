import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Opps!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not found</h3>
                    <p>Go Back where your from</p>
                    <Link to="/">
                    <button>Go Back Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;