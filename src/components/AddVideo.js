import './AddVideo.css'

function AddVideo(){

    function clickHandler(e){
        e.stopPropagation();
        console.log(e.target.value , e.target.name);
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