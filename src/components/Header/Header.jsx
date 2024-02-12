import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Social from '../Social/Social';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css";
import logo from "../../assets/images/logo512.png";

const Header = ({ title }) => {
    return (
        <Navbar collapseOnSelect expand="lg" className="light" data-bs-theme="light">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src = {logo}
                        style={{
                        height: 40,
                        width: 40
                        }}
                    />
                    <span>
                        {title}
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="top"
                    className = "bg-body-tertiary"
                    data-bs-theme="dark"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            {title}
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="justify-content-end" style={{gap: 20}}>
                        <Nav>
                            <Social />
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Header;