import InfoCard from "../InfoCard/InfoCard"
import "./MainContent.css";

const MainContent = ({ title, infos }) => {
    return (
        <main>
            <h2>{title}</h2>
            { infos.map (info => <InfoCard info = {info} />)}
        </main>
    )
}

export default MainContent