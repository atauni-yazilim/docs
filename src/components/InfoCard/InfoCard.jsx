import React from 'react'
import "./InfoCard.css";

const InfoCard = ({ info }) => {
    return (
        <article className='info'>
            {info}
        </article>
    )
}

export default InfoCard