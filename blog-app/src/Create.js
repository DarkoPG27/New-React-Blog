import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [url, setUrl] = useState("");

    return (
        <div className="create">
            <h2>Dodaj Novi Post</h2>
            <form>
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
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
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