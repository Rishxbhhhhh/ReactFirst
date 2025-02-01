import { useState } from "react";


export default function Changer(){

    const [text,setText] = useState("Hello");


    function handleChange(e){
        setText(e.target.value);
    }

    return (
        <div style={{margin :'20px', padding:"10px", border:"2px solid black"}}>
            <input value={text} onChange={handleChange} placeholder="Enter"/>
            <p>You typed: {text}</p>
            <button onClick={()=>setText("hello")} >reset</button>
        </div>
    )
}