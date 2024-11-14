import {useState} from "react";
import image from './images/bg3.jpg'
import "./Lottery.css";
import {genTicket,sum} from "./helper";
export default function Lottery(){
    let [ticket,setTicket]=useState(genTicket(3));
    let isWinning=sum(ticket)===15;

    let buyTicket=()=>{
setTicket(genTicket(3));
    }

    const background={
        width: '100vw',          // Full viewport width
        height: '100vh',         // Full viewport height
        backgroundSize: 'cover', // Makes the image cover the div fully
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents tiling
    
        backgroundImage:`url(${image})`
    }
    return(
        <div
style={background}
        >
            <h1>Lottery Game!</h1>
            <div className="ticket">
           <span>{ticket[0]}</span>
           <span>{ticket[1]}</span>
           <span>{ticket[2]}</span>
            </div>
           <br></br>
            <button onClick={buyTicket}>Buy new Ticket </button>
            <h3>{isWinning && "congratulations, you are winning"}</h3>
        </div>
    )
}