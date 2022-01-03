import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(response => {
                if (!response.ok) {
                    throw Error("could not fetch the data")
                }
                return response.json();
            })
            .then(response => {
                setData(response); //
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log("fetch aborted")
                } else {
                    setIsLoading(false);
                    setError(error.message);
                }
            });
        return () => abortCont.abort();
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch;