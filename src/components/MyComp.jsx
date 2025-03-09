import React, {useEffect,useState} from "react";

const MyComponent = ()=> {

    const [count,setCount] = useState(0);
    
    useEffect (() => {
        console.log ("My Component is mounting...");

        return function (){
            console.log ("unmounting .....");
        }

    },[]);

    useEffect (()=> {
        console.log ("count got updated", count);

        return function (){
            console.log ("returning count", count);
        }

        
    },[count]);

    return (
        <div>
            <p> count is : {count} </p>
            <button onClick = {()=> setCount(count+1)}> update </button>
        </div>
    )
}

export default MyComponent;