import React, { useContext } from 'react'
import verified_logo from './verified_logo.png'
import './Video.css'
import ThemeContext from './context/ThemeContext'
 
export default function Video({ title, Channel, Views, time, verifiedData, id, children, dispatch, editVideos }) {
    const theme = useContext(ThemeContext)
    return (
        <>
            <div className={`container ${theme}`} >
                <button className="deleteV"  onClick={() => dispatch({ type: 'DELETE', payload: id })}>X</button>
                <button className='editV' onClick={() => editVideos(id)}>Edit</button>
                <div className="pic">
                    <img src={`https://picsum.photos/id/${id}/180/100`} alt="Thumbnail" />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{Channel}{verifiedData && <img src={verified_logo} alt='verified_logo' />}</div>
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
