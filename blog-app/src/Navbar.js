import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/"><img className="logo" src="/logo.png"></img></Link>
                <Link to="/add-post"> <button className="add-post">Dodaj post</button></Link>
            </div>
        </nav>
    );
}

export default Navbar;