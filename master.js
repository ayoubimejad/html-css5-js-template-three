// start js code ``
let targetdate= new Date("2023 12 30 23:59:59").getTime();
let allLinks = document.querySelectorAll(".header a");
let skillsFrequence = Array.from(document.querySelectorAll(".skills div.frequence"));
let statsSpan = document.querySelectorAll(".stats span.number");
let Stats = document.querySelector(".stats");
 let myInterval;
 // access for stats section

 
 

allLinks.forEach((ele) => {

  ele.addEventListener("click", (e) => {

    if(document.querySelector(`.${e.target.dataset.section}`) !== null){
       document.querySelector(`.${e.target.dataset.section}`).scrollIntoView({

      behavior : "smooth",

    });
    }else{
      return false;
    }
    
  });
})

 setInterval(function () {
  let DateNow= new Date().getTime();
  let timDeff= targetdate-DateNow;
   let days= Math.floor(timDeff/(1000*60*60*24));
   let albaky1= timDeff%(1000*60*60*24);

   // for days
   days<10 ? document.querySelector(".days").innerHTML= `0${days}` : document.querySelector(".days").innerHTML= days;

   let hours= Math.floor(albaky1/(1000*60*60));
   let albaky2= albaky1%(1000*60*60);
   
   // for hours
   hours<10 ? document.querySelector(".hours").innerHTML= `0${hours}` : document.querySelector(".hours").innerHTML= hours;
   
   let minutes= Math.floor(albaky2/(1000*60));
   let albaky3= albaky2%(1000*60);
   
   // for minutes
   minutes<10 ? document.querySelector(".minutes").innerHTML= `0${minutes}` : document.querySelector(".minutes").innerHTML= minutes;
   
   let seconds= Math.floor(albaky3/1000);
   // for seconds
   seconds<10 ? document.querySelector(".seconds").innerHTML= `0${seconds}` : document.querySelector(".seconds").innerHTML= seconds;
   

 },1000);

 
window.onscroll = (e) =>{
  let skillsHeight= document.querySelector(".skills").offsetHeight;
  let skillssetop= document.querySelector(".skills").offsetTop;
  let windowHeight= window.innerHeight;
  let htmlElementHeight= document.documentElement.scrollHeight;
  
  if(Math.floor((window.scrollY + windowHeight)) >= (skillssetop + (windowHeight/2))){

    skillsFrequence.forEach((ele) => {
      
      ele.classList.add("animating");
    });
  }else{

    skillsFrequence.forEach((ele) => {

      ele.classList.remove("animating");
    });
  }
        
}
let val=false;

//let myInterval;
window.addEventListener("scroll" , (e) =>{

    
    if(Math.floor((window.scrollY + window.innerHeight)) >= (Stats.offsetTop + (window.innerHeight/2))){
      //console.log("is rechead")

      closures();
    }
    
});

 //helloAyoub();
function helloAyoub() {
      let one= false;
      return () => {

        if(!one){

           one =true;
           statsSpan.forEach((ele) => {

            let  myInterval = setInterval(() => {
    
                 ele.innerHTML++;
    
                if( +ele.innerHTML === parseInt(ele.dataset.number) ){
    
                  clearInterval(myInterval);
                }
            },-190);
          
     });
     
        } 
        
      }
       
  }
  
  const closures = helloAyoub();

// edabit probleme
  

console.log();