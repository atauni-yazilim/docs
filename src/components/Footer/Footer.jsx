import Social from "../Social/Social";
import "./Footer.css";
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <footer className="bg-body-tertiary" data-bs-theme="dark">
            <div className="container py-3 d-flex flex-column">
                <Nav style={{
                    justifyContent : "center"
                }}>
                    <Social/>
                </Nav>
                <p className="text-center text-light">Copyright &copy; 2023&nbsp;
                    <a className="footer-link" href="https://birimler.atauni.edu.tr/yazilim-muhendisligi/">Atatürk Üniversitesi - Yazılım Mühendisliği</a>. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer