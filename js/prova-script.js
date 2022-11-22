const imgList = [ { image: 'img/01.webp',
 title: 'Marvel\'s Spiderman Miles Morale',
  text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
 },
  { image: 'img/02.webp', 
  title: 'Ratchet & Clank: Rift Apart', 
  text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
 },
  { image: 'img/03.webp',
  title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
 },
  { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
 },
  { image: 'img/05.webp',
   title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } ];

   
 
    const btnUp = document.querySelector("#up");
    const btnDown = document.querySelector("#down");

 imgList.forEach((element)=>{
    let cont = document.getElementById("items-container");
    let div = document.createElement("div");
    let title = document.createElement("h2");
    let subtitle = document.createElement("p");
    div.style.width = '1000px';
    div.style.height = '500px';
    let img = document.createElement("img");
    div.classList.add("item");
    
    div.append(img,title,subtitle);
    cont.append(div);


  
    div.classList.add("img");
   
    title.innerHTML = (element.title);
    subtitle.innerHTML = (element.text);
    img.src = (element.image);
    


 })
 const divArray = document.getElementsByClassName("img");
 divArray[0].classList.add("active");
 let activeItem = 0 ; 
 btnDown.addEventListener("click",
    function(){

        //Poniamo la condizione che se la constante activeItem è minore della lunghezza della lista divArray

        if(activeItem  < divArray.length - 1) {

            //ogni volta che clicchiamo al div precendente viene tolta la classe active


            divArray[activeItem].classList.remove("active");

            //Di conseguenza il numero dell'elemento in lista aumenta passando da 0 ad 1 e cosi via .

            activeItem++;

            //Cosi il div successivo gli viene aggiunta la classe active in modo che l'immagine possa apparire

            divArray[activeItem].classList.add("active");

        }
        else if(activeItem < 0){
            btnDown.classList.add("item");
            btnUp.classList.add("active");
            
            
            
        }
        
        
    }
)


btnUp.addEventListener("click",
    function(){
        if(activeItem > 0) {
            divArray[activeItem].classList.remove("active");
            activeItem--;
            divArray[activeItem].classList.add("active");
            

        }
        else if(activeItem == divArray.length + 1 ){
            btnUp.classList.add("item");
            btnDown.classList.add("active");
            

            
        }
        
        
    }
)


 
   
   
    
   
   
    
  
   
   
  
  
  

