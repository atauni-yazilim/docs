import React from 'react'
import parse from "html-react-parser";

import "./InfoCard.css";

const InfoCard = ({ info }) => {
    return (
        <article className='info'>
            {parse(info)}
        </article>
    )
}

export default InfoCard