import { useEffect, useState, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import "./SideNav.css";
import BackToTopButton from '../Buttons/BackToTopButton/BackToTopButton';
import MainContent from '../MainContent/MainContent';

const SideNav = ({ pages }) => {

    const [scrollTop, setScrollTop] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const mainContent = useRef();

    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop);
    };

    useEffect(() => {
        if(scrollTop > 99){
            setShowBackToTop(true);
        }
        else{
            setShowBackToTop(false);
        }
    }, [scrollTop]);

    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey={`#${pages[0]?.title}`}>
            <Col sm={3} className='sidenav bg-light' data-bs-theme="light">
                <ListGroup style={{
                    borderRadius: 0
                }}>
                    {pages.map((page, index) => (
                        <ListGroup.Item key={`${page.title}_listgroupitem_${index}`} variant="light" action href={`#${page.title}`}>
                            {page.title}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <Col className='main-content p-4' onScroll={handleScroll} ref={mainContent}>
                <Tab.Content>
                    {pages.map((page, index) => (
                        <Tab.Pane key={`${page.title}_pane_${index}`} eventKey={`#${page.title}`}>
                            <MainContent key={`page_${index}`} title={page.title} pdfFile = {page.pdfFile} fileName = {page.fileName} infos={page.infos} />
                        </Tab.Pane>
                    ))}
                </Tab.Content>
                {showBackToTop ? <BackToTopButton content = {mainContent} /> : ""}
            </Col>
        </Tab.Container>
    )
}

export default SideNav