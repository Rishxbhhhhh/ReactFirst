
import { useState } from "react";

export default function ClickCounter() {

    var [count, setCount] = useState(0);

    function handleClick() {
        // The difference between passing an updater and passing the next state directly
        // setCount((count) => (count + 1));     //Functional update
        // setCount(count + 1);                  //putting new value directly
        setCount(count + 1);
        // setCount((count) => (count + 1));
        // setCount(count + 1);

        console.log(count,"couhn");
    }
    // function UseCount(){
    //     console.log(count+1*10);
    // }

    // UseCount();

    return (
        <div style={{ marginTop: '20px', padding: "10px", border: "2px solid black" }}>
            <button onClick={() => {
                handleClick()
                handleClick()
                handleClick()     
            }}>you click me {count} times</button>
            <p>{count}</p>
        </div>
    );
}