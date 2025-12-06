
import { useState , useEffect } from "react";

const Center =() => {
    const [count , setCount] = useState(0) ; 

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(prevCount => prevCount +1) ; 
        },100) ; 

        return ()=>clearInterval(interval) ; 
    },[]); 
return(
    <div>
        <p>compeuter : {count}</p>
        <p>test</p>
    </div>
)
}


export default Center ; 