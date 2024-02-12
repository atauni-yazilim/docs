import { useRef } from "react";
import Button from 'react-bootstrap/Button';
import { ReactComponent as SolidPdfIcon } from "../../../assets/icons/solidWhitePdf.svg";
import "./DownloadButton.css";

const DownloadButton = ({pdfFile, fileName, text}) => {

    const downloadButton = useRef();

    const downloadFile = () => {
        fetch(pdfFile).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `${fileName}.pdf`;
                alink.click();
            })
        })
    }

    return (
        <Button ref={downloadButton} className="download-button" variant="dark" onClick = {downloadFile}>
            <span>{text}</span> <SolidPdfIcon />
        </Button>
    )
}

export default DownloadButton