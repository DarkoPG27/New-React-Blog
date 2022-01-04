import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('https://jsonblob.com/api/jsonBlob/926966337956495360/' + id)

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && blog[id - 1] && (
                <article>
                    <h2>{blog[id - 1].title}</h2>
                    <img src={blog[id - 1].image} alt={blog[id - 1].title} />
                    <div className="body">{blog[id - 1].body}</div>
                    <p>Autor: {blog[id - 1].author}</p>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;