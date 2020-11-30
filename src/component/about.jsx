import React,{useState,useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import img from "./images/gulshan_mathur.jpg"
import img1 from "./images/skills.png";
export default function About(props){
useEffect(()=>{
const para =document.querySelectorAll(".ist_para ");
window.onscroll = ()=>{
  let text = para[1];
  if (document.body.scrollTop >300 || document.documentElement.scrollTop > 300  )  {
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";
    
           splitText.forEach((item,index)=>{
            text.innerHTML+= "<span>" + item + "</span>";
           });
    
        let char =0
        let timer = setInterval(onTick,50);
        function onTick(){
         const span = text.querySelectorAll ("span")[char];
         span.classList.add("fade");
         char ++;
         if(char===splitText.length){
           complete();
           return;
         }
         function complete(){
         clearInterval(timer);
         timer =null;
        }
       };
    
       Aos.init();
    }else {
   
  }
}

let text= para[0]
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

       splitText.forEach((item,index)=>{
        text.innerHTML+= "<span>" + item + "</span>";
       });

    let char =0
    let timer = setInterval(onTick,50);
    function onTick(){
     const span = text.querySelectorAll ("span")[char];
     span.classList.add("fade");
     char ++;
     if(char===splitText.length){
       complete();
       return;
     }
     function complete(){
     clearInterval(timer);
     timer =null;
    }
   };
   Aos.init();



},[]);
return (
  <section className ="about">
  <div className= "ist_about_div" data-aos="fade-left">
  <img  className="" src={img}  alt="fireSpot" style={{height:300,width: 300,borderRadius: 15}} />
  </div>
  <div className= "nd_about_div" data-aos="fade-right" >
  <p className="ist_para">{props.string}</p>
  </div>
   <div className= "ist_skill_div" data-aos="flip-right">
       <img  src={img1}  alt="fireSpot" style={{height:270,width: 270,borderRadius: 500}} />
  </div>
         <div className= "nd_skill_div" data-aos="fade-left" >
          <p className="ist_para" >{props.string1}</p>
          </div>  

  </section>
);
}