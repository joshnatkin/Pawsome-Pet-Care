import "../css/Footer.css";
import footer from "../images/FooterHeader/footer-pic.png"
const Footer = () => {
    return (
        <footer id="main-footer">
            <p>Providing Pet Help for over 1 month</p>
            <div>
                <img id="footer-img" src={footer} alt="Footer Image" />
            </div>  
        </footer>
    );
}

export default Footer;
