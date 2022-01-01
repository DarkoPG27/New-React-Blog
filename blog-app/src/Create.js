import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, image, author };

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
                <button>Dodaj post</button>
            </form>
        </div>
    );
}

export default Create;