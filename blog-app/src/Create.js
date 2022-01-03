import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const Create = () => {

    const { id } = useParams();
    const { data: blogs, error, isLoading } = useFetch('https://jsonblob.com/api/jsonBlob/926966337956495360/' + id)

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, image, author };
        let data = [...blogs, blog];
        fetch('https://jsonblob.com/api/jsonBlob/926966337956495360', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)

        }).then((response) => response.json())
            .then((data) => console.log(data))
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Sadržaj:</label>
                <textarea
                    required
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
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button >Dodaj post</button>
            </form>
        </div>
    );
}

export default Create;