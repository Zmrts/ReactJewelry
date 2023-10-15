
function Footer() {

    return <footer className="footer">
        <p className="fw4 inter">© Copyright { new Date().getFullYear()} </p>
        <ul  className="links">
            <a href="#">Repo</a>
            <a  href="#">About</a>
        </ul>
    </footer>
}

export {Footer}