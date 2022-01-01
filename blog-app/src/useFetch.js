import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error("could not fetch the data")
                }
                return response.json();
            })
            .then(response => {
                setData(response.blogs); //
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error.message);
            });
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;