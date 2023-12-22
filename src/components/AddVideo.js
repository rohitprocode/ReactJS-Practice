import { useEffect, useState } from 'react';
import './AddVideo.css'

const initialState = {
    Channel: 'rohitech',
    time: '6 months ago',
    verifiedData: true,
    title: '',
    Views: ''
}

function AddVideo({ addVideo,editableVideo }) {
    const [video, setVideo] = useState(initialState)
    function clickHandler(e) {
        // e.stopPropagation();
        // console.log(e.target.value, e.target.name);
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
        // console.log(video)
    }
    function handleSubmit(e) {
        e.preventDefault();
        addVideo(video)
        setVideo(initialState)
        // console.log(video)
    }

    useEffect(()=>{
        if(editableVideo){
        setVideo(editableVideo)
        }
    },[editableVideo])

    return (
        <form>
            <input type="text" name="title" onChange={clickHandler} placeholder='Title' value={video.title} />
            <input type="text" name='Views' onChange={clickHandler} placeholder='Views' value={video.Views} />
            <button onClick={handleSubmit} >Add Video</button>
        </form>
    )
}

export default AddVideo 