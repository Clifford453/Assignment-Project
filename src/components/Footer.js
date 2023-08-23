import { Link } from "react-router-dom";
export default function Footer(){
    return (
        <footer>
<menu>
    <li className="img-footer">
        <img 
        src={require("../assets/footer-logo.png")} 
        alt="Little Lemon logo"
        ></img>
    </li>
    <li className="contact">
        <h1 className="footer-header">Navigation</h1>
        <ul className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a 
        href={require("../assets/menu.webp")}
        target="_blank"
        rel="noreferrer"
        >
         Menu
        </a>
        <Link to="/reservations">Reservations</Link>
        <Link to="/order">Order</Link>
        <Link to="/login">Login</Link>
        </ul>
    </li>

    <li>
        <h1 className="footer-header">Contact</h1>
        <ul className="footer-links">
            <li>533510 Riverwalk,</li>
            <li>Chicago Riverwalk</li>
            <br></br>
            <li>(456)-231-9674</li>
            <br></br>
            <a href="matthew: info@Littlelemon.com"
               target="_blank" 
               rel="noreferrer"
               >
                   matthew@Littlelemon.com
            </a>
        </ul>
    </li>
    <li>
        <h1 className="footer-header">Connect with me at</h1>
        <ul className="footer-links">
            <a 
            href="https://www.facebook.com/thelittlelemonshop"
            target="_blank"
            rel="noreferrer">
                Facebook
            </a>
            <a
            href="https://www.instagram.com/littlelemonstar/"
            target="_blank"
            rel="noreferrer">
                Instagram
                </a>
                <a 
                href="https://www.youtube.com/watch?v=3Li-FfypZYE"
                target="_blank"
                rel="noreferrer">
                    Subscribe
                </a>
        </ul>
    </li>
</menu>
        </footer>
     );
}
