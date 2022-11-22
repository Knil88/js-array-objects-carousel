// creiamo la lista in cui immetteremo le nostre immagini
let imgList = new Array();
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");

imgList[0] = new Image();
imgList[0].src = 'img/01.webp';

imgList[1] = new Image();
imgList[1].src = 'img/02.webp';

imgList[2] = new Image();
imgList[2].src = 'img/03.webp';

imgList[3] = new Image();
imgList[3].src = 'img/04.webp';

imgList[4] = new Image();
imgList[4].src = 'img/05.webp';



//Creiamo il ciclo 

for(let i=0 ; i < imgList.length; i++){
    
    let cont = document.getElementById("items-container");
    let div = document.createElement("div");
    
    //Settiamo le dimensioni delle immagini

    div.style.width = '1000px';
    div.style.height = '500px';

    //Appendiamo dentro il div la lista immagini

    div.append(imgList[i]);

    //Appendiamo dentro il item-container(ovvero la variabile cont) il div

    cont.append(div);

    //Aggiungiamo la classe img ed item che darà diplay none ai contenitori
    div.classList.add("img");
    div.classList.add("item");

   console.log(imgList[i]);

}


//Creiamo la costante divArray prendendo agganciandola ad img


const divArray = document.getElementsByClassName("img");

//Settiamo la costante in modo che il primo elemento presente nell'array abbia calsse active che corrisponde a display block

divArray[0].classList.add("active");

//Creiamo la variante activeItem e gli diciamo che ha valore 0

let activeItem = 0 ; 

// Creiamo evento bottone  btnDown

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