const BlogList = ({ blogs }) => {

    return (
        <div>
            <div className="header"><h1>SVI POSTOVI</h1></div>
            <div className="blog-list">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <img src={blog.image} alt={blog.image} />
                        <h2>{blog.title}</h2>
                        <p>Autor: {blog.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;