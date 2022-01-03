import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isLoading, error } = useFetch('https://jsonblob.com/api/jsonBlob/926966337956495360');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div >
    );
}

export default Home;