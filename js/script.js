//Creiamo un array di oggetti
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
//creaimo i collegamenti per i bottoni
   
 
    const btnUp = document.querySelector("#up");
    const btnDown = document.querySelector("#down");
    var  idInterval;
//con un ciclo for each ci estrapoliamo i dati

 imgList.forEach((element)=>{
    //creiamo i collegamenti per ogni variabile necessaria
    
    let cont = document.getElementById("items-container");
    let miniCont = document.getElementById("mini-container");

//Creiamo gli elementi necessari in cui appenderemo i nostri elementi

    let div = document.createElement("div");
    let title = document.createElement("h2");
    let subtitle = document.createElement("p");
    let img = document.createElement("img");
    let miniDiv = document.createElement("div");
    let miniImg = document.createElement("img");

    //Impostiamo una width ed una height

    div.style.width = '1000px';
    div.style.height = '500px';

    miniDiv.style.width = "150px";
    miniDiv.style.height = "100px";

    //Aggiungiamo la classe item  e img al div che inizialmente risuterà invisibile perchè in display none a causa di item
    div.classList.add("item");
    div.classList.add("img");
   
    //inseriamo in innerHTML i dati etrapolati nella lista oggetti

    title.innerHTML = (element.title);
    subtitle.innerHTML = (element.text);

    //con .src possiamo inserire nel DOM tramite il suo path l'immagine

    img.src = (element.image);
    miniImg.src =(element.image);
   
    //Utilizziamo append per inserire i nostri elementi nel dom
    miniCont.append(miniDiv);
    miniDiv.append(miniImg);
    div.append(img,title,subtitle);
    cont.append(div);
 })

//andiamo a dichiarare la variabile divArray dentro img

 const divArray = document.getElementsByClassName("img");

//Grazie a questo classList.add possiamo fare si che il primo elemento divArray diventi visibile

 divArray[0].classList.add("active");
 
 let activeItem = 0 ; 
 
 //Andiamo a creare l'evento click che ci permetterà di cambiare le nostre immagini
 
 btnDown.addEventListener("click",
    function(){

       idInterval = setInterval(() => {
            if(activeItem === divArray.length - 1){
            
                divArray[activeItem].classList.remove("active");
                
                divArray[activeItem].classList.remove("animation");
              
                activeItem = 0 ; 
    
                
                divArray[activeItem].classList.add("active");
                
                divArray[activeItem].classList.add("animation");
                
            }
            else {

                //ogni volta che clicchiamo al div precendente viene tolta la classe active
               
    
                divArray[activeItem].classList.remove("active");
                
                divArray[activeItem].classList.remove("animation");
    
                //Di conseguenza il numero dell'elemento in lista aumenta passando da 0 ad 1 e cosi via .
    
                activeItem++;
    
                //Cosi il div successivo gli viene aggiunta la classe active in modo che l'immagine possa apparire
    
                divArray[activeItem].classList.add("active");
                
                divArray[activeItem].classList.add("animation");
            }
            
        }, 3000);
        //Poniamo la condizione che se la constante activeItem è minore della lunghezza della lista divArray
        //questo evento permette di scorrere in avanti
        
    
       
       
        
    }
)

//Questo evento permette di andare indietro con le immagini
btnUp.addEventListener("click",
    function(){
        clearInterval(idInterval);}
        
)


 
   
   
    
   
   
    
  
   
   
  
  
  

