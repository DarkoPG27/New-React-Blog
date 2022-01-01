import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState("");

    useEffect(() => {
        fetch('https://jsonblob.com/api/jsonBlob/926305735986659328')
            .then(response => {
                return response.json();
            })
            .then(response => {
                setBlogs(response.blogs);
                console.log(response.blogs)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} />}
        </div >
    );
}

export default Home;