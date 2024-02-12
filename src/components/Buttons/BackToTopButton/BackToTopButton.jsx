import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import "./BackToTopButton.css";

const BackToTopButton = ({content}) => {

    const backToTop = () => {
        content.current.scrollTo({
            top : 0,
            behavior : "smooth"
        });
    }

    return (
        <Button className='back-to-top-button' title='En Başa Dön' variant="secondary" onClick={backToTop}>
            <FontAwesomeIcon bounce icon={faChevronUp} />
        </Button>
    )
}

export default BackToTopButton;