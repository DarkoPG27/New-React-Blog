import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonblob.com/api/jsonBlob/926305735986659328')
            .then(response => {
                return response.json();
            })
            .then(response => {
                setBlogs(response.blogs);
                setIsLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div >
    );
}

export default Home;