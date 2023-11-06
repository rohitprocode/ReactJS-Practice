import { useState } from 'react';
import './AddVideo.css'

function AddVideo(){
    const [video,setVideo] = useState({
        Channel: 'rohitech',
        time: '6 months ago',
        verifiedData: false
    })
    function clickHandler(e){
        e.stopPropagation();
        console.log(e.target.value , e.target.name);
        setVideo({...video,
        [e.target.name] : e.target.value})
        console.log(video)
    }
    return(
        <form>
            <input type="text" name="title" onChange={clickHandler} placeholder='Title' />
            <input type="text" name='views' onChange={clickHandler} placeholder='Views'/>
            <button>Add Video</button>
        </form>
    )
}


export default AddVideo 