let max = 400;
let section = document.querySelector("section");

function sparkels() {
    for (i = 0; i < max; i++){
         span = document.createElement("span");

         let posX = Math.random() * window.innerWidth - 32;
         let posY = Math.random() * window.innerHeight - 32;
         let width = Math.random() * 30; 
         let height = Math.random() * 10;
         let delay = Math.random() * 5;

        span.style.left = posX + "px";
        span.style.top = posY + "px";
        span.style.width = width + "px";
        span.style.height = height + "px";
        span.style.animationDelay = delay + "s"; 

        console.log(span);
        section.append(span);
    }
}

sparkels();