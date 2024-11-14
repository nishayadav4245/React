import {useState} from "react";

export default function LikeButton() {
    let [isLiked,setisLiked]=useState(false);
    let [count,setCount]=useState(0);
  
    let toggleLike=()=>{
setisLiked(!isLiked);
setCount(count+1);

    };
 let   letStyle={color:"red"};
    return( 
        <div>
            <p>beats={count}</p>
        <p onClick={toggleLike}>
            {
                isLiked?<i className="fa-solid fa-heart" style={letStyle}></i>:  <i className="fa-regular fa-heart"></i>
            }
          
        </p>
        </div>
    );
};