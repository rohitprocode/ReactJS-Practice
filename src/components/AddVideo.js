import { useContext, useEffect, useState } from 'react';
import './AddVideo.css'
import ThemeContext from './context/ThemeContext';

const initialState = {
    Channel: 'rohitech',
    time: '6 months ago',
    verifiedData: true,
    title: '',
    Views: ''
}

function AddVideo({ dispatch, editableVideo}) {
    const [video, setVideo] = useState(initialState)
    function clickHandler(e) {
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (editableVideo) {
            dispatch({type : 'UPDATE', payload:video})
        } else {
            dispatch({type : 'ADD' , payload:video })
            setVideo(initialState)
        }
    }

    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo)
        }
    }, [editableVideo])

    const theme = useContext(ThemeContext)

    return (
        <form>
            <input className={theme} type="text" name="title" onChange={clickHandler} placeholder='Title' value={video.title} />
            <input className={theme} type="text" name='Views' onChange={clickHandler} placeholder='Views' value={video.Views} />
            <button className={theme} onClick={handleSubmit} >{editableVideo ? "Edit Video" : "Add Video"}</button>
        </form>
    )
}

export default AddVideo 