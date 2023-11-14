import React from 'react'
import verified_logo from './verified_logo.png'
import './Video.css'

export default function Video({ title, Channel, Views, time, verifiedData,id,children}) {
    
    return (
        <>
            <div className='container' >
                <div className="pic">
                    <img src={`https://picsum.photos/id/${id}/180/100`} />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{Channel}{verifiedData && <img src={verified_logo} alt='verified_logo'/>}</div>
                <div className="views">
                    {Views} Views<span>.</span>{time}
                </div>
                <div className="btn">
                    {children}
                </div>
            </div>
        </>
    )
}
