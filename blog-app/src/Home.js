import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "Moj novi sajt", body: "dasdasdasdasdas", image: "https://materializecss.com/images/sample-1.jpg", author: "Me", id: 1 }
    ])

    return (
        <div className="home">
            <h1>SVI POSTOVI</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <img src={blog.image} alt={blog.image} />
                    <h2>{blog.title}</h2>
                    <p>Autor: {blog.author}</p>
                </div>
            ))}

        </div >
    );
}

export default Home;