const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <a href="/"><img className="logo" src="/logo.png"></img></a>
                <a href="/add-post"> <button className="add-post">Dodaj post</button></a>
            </div>
        </nav>
    );
}

export default Navbar;