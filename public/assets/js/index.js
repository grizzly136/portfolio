const cards=document.querySelectorAll(".hob .card");
cards.forEach( (card,i)=>{

    if(i==1){
    card.addEventListener("mouseenter",e=>{


      card.querySelectorAll("*").forEach(ele=>{
       
            ele.style.transform="translateZ(70px)"
       
          
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
    }else{
        card.querySelector("*").at
    }
    });

    
