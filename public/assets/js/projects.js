const cards=document.querySelectorAll(".cardss .card3");
cards.forEach( card=>{
    
    card.addEventListener("mouseenter",e=>{


      card.querySelectorAll("*").forEach((ele,i)=>{
          if(i==0){
            ele.style.transform="translateZ(50px)"
            
          }else{
            ele.style.transform="translateZ(50px)"
          }
          
        }); 
    });
     card.addEventListener("mousemove",e=>{

        var X=(window.innerWidth/2 -e.pageX)/10;
        var Y=(window.innerHeight/2 -e.pageY)/10;
        card.style.transform="rotateX("+Y+"deg) rotateY("+X+"deg)"
     });
     card.addEventListener("mouseleave",e=>{
        card.style.transition="all 0.5s ease";

        card.style.transform="";
        card.querySelectorAll("*").forEach(ele=>{
            ele.style.transform=""
        }); 
     });
    });
