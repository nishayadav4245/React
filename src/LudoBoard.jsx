import {useState} from "react";

export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
 let [arr,SetArr]=useState(["no moves"]);

    let updateBlue=()=>{
    
      
    //     setMoves((prevMoves)=>{
    //         return {...prevMoves,blue:prevMoves.blue+1}
    // });
   
    SetArr((prevArr)=>{return  [...prevArr,"blue moves"]});
    console.log(arr);
    };
    let updateYellow=()=>{
    
        console.log(`moves.blue =${moves.yellow}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow:prevMoves.yellow+1}
    });
};
    
    let updateGreen=()=>{
    
        console.log(`moves.blue =${moves.green}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green+1}
    });
    

};
let updateRed=()=>{
    
    console.log(`moves.red =${moves.red}`);
    setMoves((prevMoves)=>{
        return {...prevMoves,red:prevMoves.red+1}
});


};
    return (
        <div>
            <p>game begins</p>
            <p>{arr}</p>
            <div className="board"> 
        <p>Blue Moves={moves.blue}</p>
        <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
        <p>yellow Moves={moves.yellow}</p>
        <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>
        <p> green Moves={moves.green}</p>
        <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
        <p>red Moves={moves.red}</p>
        <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}