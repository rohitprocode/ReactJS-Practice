import { useContext, useEffect, useRef, useState } from 'react';
import './AddVideo.css'

const initialState = {
    Channel: 'rohitech',
    time: '6 months ago',
    verifiedData: true,
    title: '',
    Views: ''
}

function AddVideo({ dispatch, editableVideo}) {
    const [video, setVideo] = useState(initialState)
    const InputRef = useRef(null)
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
        InputRef.current.focus()
    }, [editableVideo])

    return (
        <form >
            <input ref={InputRef} type="text" name="title" onChange={clickHandler} placeholder='Title' value={video.title} />
            <input type="text" name='Views' onChange={clickHandler} placeholder='Views' value={video.Views} />
            <button  onClick={handleSubmit} >{editableVideo ? "Edit Video" : "Add Video"}</button>
        </form>
    )
}

export default AddVideo 