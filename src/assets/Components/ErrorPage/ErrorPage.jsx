import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)
    return (
        <div>

            <h2>Opps!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>GO back where you from</p>
                    <Link to="/" >  <button>Go back</button></Link>
                </div>
            }

        </div>
    )
}

export default ErrorPage
