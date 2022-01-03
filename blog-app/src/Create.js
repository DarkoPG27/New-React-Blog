import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const Create = () => {

    const { data: blogs } = useFetch('https://jsonblob.com/api/jsonBlob/926966337956495360/');
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, image, author, id: blogs.length + 1 };
        let data = [...blogs, blog];
        setIsLoading(true)
        fetch('https://jsonblob.com/api/jsonBlob/926966337956495360', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)

        }).then((response) => response.json(),
            setIsLoading(false))
            .then(() => {
                console.log(data);
                history.push('/');
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className="create">
            <h2>Dodaj Novi Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Naslov:</label>
                <input
                    type="text"
                    required
                    maxLength={20}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Sadržaj:</label>
                <textarea
                    required
                    maxLength={250}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>URL fotografije:</label>
                <input
                    type="link"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <label>Ime autora:</label>
                <input
                    type="text"
                    maxLength={20}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isLoading && <button >Dodaj post</button>}
                {isLoading && <button disabled>Dodavanje posta...</button>}
            </form>
        </div>
    );
}

export default Create;