import React from 'react'
import verified_logo from './verified_logo.png'
import './Video.css'
export default function Video({ title, Channel, Views, time, verifiedData }) {
   
    return (
        <>
            <div className='container' >
                <div className="pic">
                    <img src="https://wallpapers.com/images/high/textured-solid-grey-image-vignette-fogxulntlildtj4p.webp" alt="Flower Image" />
                </div>
                <div className="title">{title}</div>
    <div className='channel'>{Channel} {verifiedData ? <img src={verified_logo} alt="verified_log"/> : null}</div>
                <div className="views">
                    {Views} Views<span>.</span> {time}
                </div>
            </div>
        </>
    )
}
