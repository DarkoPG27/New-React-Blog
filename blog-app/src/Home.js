import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "Moj prvi sajt", body: "dasdasdasdasdas", image: "https://materializecss.com/images/sample-1.jpg", author: "Me", id: 1 },
        { title: "Moj drugi sajt", body: "dasdasdasdasdas", image: "https://materializecss.com/images/sample-1.jpg", author: "Myself", id: 2 },
        { title: "Moj treci sajt", body: "dasdasdasdasdas", image: "https://materializecss.com/images/sample-1.jpg", author: "I", id: 3 }
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} />
        </div >
    );
}

export default Home;