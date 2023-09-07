import { useEffect, useState } from "react";
import Axios from 'axios';
const FetchApi=()=>{
    const[fact,setFact]=useState("");
    useEffect(()=>{
        newFact();
    },[])
    const newFact=()=>{
        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setFact(res.data.fact)
        })
    }
    return(
        <div>
        <button onClick={newFact}>New Fact(fetch Data)</button>
        <h3>{fact}</h3>
        </div>
    )
}
export default FetchApi;