import React,{useEffect,useState} from "react";
import {AnimateOnChange} from "react-animation";
export default function Para(){
   
    const words = [
       "I'm Gulshan Mathur",
        "a programmer",
        "and a Web Developer"
    ];
    const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
         setCurrent(0);
          } else {
           setCurrent(current + 1);
          }
     }, 2000);
    //  below return arrow function not fill the memory of stack insted of it erase the current
    // pop up setInterval and repeat at that place again and again  
    return () => {                  
      clearInterval(interval);
    };
  });
    return (
      <div className="para" >
         
          <AnimateOnChange
           animationOut="custom-animation-out 500ms ease-out forwards"
           animationIn="custom-animation-in 500ms ease-out forwards"
           durationOut="500" 
   
        >
        <h1 style={{padding:20,fontFamily: 'Libre Baskerville, serif'}}>
          {words[current]} 
          </h1>
         </AnimateOnChange>
         </div>
    );
}