import { useState } from "react";

export default function MyCheckedBox(){
    const [liked,setLiked] = useState(true);

    function handleChange(e){
        console.log(e.target, "hello")
        setLiked(e.target.checked);
    }

    return(
        <div style={{border: "2px solid black"}}>
            <label>
                <input type="checkbox" checked={liked} onChange={handleChange} />
                <p>I Like This</p>
            </label>
            <p> You {liked ? "likes" : "don't like"} this.</p>
        </div>
    )
}