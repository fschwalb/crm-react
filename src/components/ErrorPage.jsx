import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()

    return(
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-red-700 uppercase">Error!</h1>
            <p className="text-center text-blue-900 uppercase font-extrabold">Por favor corrobora el código</p>
            <p className="text-center">{error.statusText || error.message}</p>
        </div>
    )
}