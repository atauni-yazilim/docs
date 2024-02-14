import InfoCard from "../InfoCard/InfoCard"
import "./MainContent.css";
import DownloadButton from "../Buttons/DownloadButton/DownloadButton";

const MainContent = ({ title, pdfFile, fileName, infos  }) => {
    return (
        <main>
            <h2>{title}</h2>
            <DownloadButton pdfFile={pdfFile} fileName={fileName} text={"Pdf İndir"}/>
            { infos.map (info => <InfoCard key={`info_${info.index}`} info = {info.text} />)}
        </main>
    )
}

export default MainContent