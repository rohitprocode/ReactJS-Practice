import React from 'react'
import './Video.css'
export default function Video({title,Channel,Views,time}) {
    return (
        <>
            <div className='container' >
                <div className="pic">
                    <img src="https://wallpapers.com/images/high/textured-solid-grey-image-vignette-fogxulntlildtj4p.webp" alt="Flower Image"/>
                </div>
                <div className="title">{title}</div>
                <div className="Channel">{Channel}</div>
                <div className="Views">
                    {Views} Views <span>.</span> {time}
                </div>
            </div>
        </>
    )
}
