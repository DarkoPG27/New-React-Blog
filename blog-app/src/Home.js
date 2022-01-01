import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch('https://jsonblob.com/api/jsonBlob/926305735986659328')
            .then(response => {
                if (!response.ok) {
                    throw Error("could not fetch the data")
                }
                return response.json();
            })
            .then(response => {
                setBlogs(response.blogs);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                setIsLoading(false);
                setError(error.message);
            });
    }, []);
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div >
    );
}

export default Home;