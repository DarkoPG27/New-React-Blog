import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "Moj prvi sajt", body: "dasdasdasdasdas", image: "https://materializecss.com/images/sample-1.jpg", author: "Me", id: 1 },
        { title: "Moj drugi sajt", body: "dasdasdasdasdas", image: "https://materializecss.com/images/sample-1.jpg", author: "Myself", id: 2 },
        { title: "Moj treci sajt", body: "dasdasdasdasdas", image: "https://materializecss.com/images/sample-1.jpg", author: "I", id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} handleDelete={handleDelete} />
        </div >
    );
}

export default Home;