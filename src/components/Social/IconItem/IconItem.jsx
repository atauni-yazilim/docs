import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faDribbble
} from "@fortawesome/free-brands-svg-icons";

const IconItem = ({ url, title}) => {

    const icons = {
        "GitHub": faGithub,
        "Instagram": faInstagram,
        "Website": faDribbble
    }

    return (
        <Nav.Link href={url} target="_blank" title={title} data-bs-theme="dark">
            <FontAwesomeIcon icon={icons[`${title}`]} />
        </Nav.Link>
    )
}

export default IconItem