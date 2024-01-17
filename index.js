document.addEventListener("keydown", function (event){
   makeSound(event.key);
   addAnimation(event.key);
})

for(var i=0; i<=document.querySelectorAll("button").length; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
})}

function makeSound (noise){switch (noise) {
        case "w":
            var b1 = new Audio('./sounds/crash.mp3');
            b1.play();
            break;
            case "a":
            var b2 = new Audio('./sounds/kick-bass.mp3');
            b2.play();
            break;
            case "s":
            var b3 = new Audio('./sounds/snare.mp3');
            b3.play();
            break;
            case "d":
            var b4 = new Audio('./sounds/tom-1.mp3');
            b4.play();
            break;
            case "j":
            var b5 = new Audio('./sounds/tom-2.mp3');
            b5.play();
            break;
            case "k":
            var b6 = new Audio('./sounds/tom-3.mp3');
            b6.play();
            break;
            case "l":
            var b7 = new Audio('./sounds/tom-4.mp3');
            b7.play();
            break;
    
        default:
            break;
    }}

    function addAnimation(press){
        console.log("."+ press);
    document.querySelector("." + press).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("." + press).classList.remove("pressed");
    }, 100);
    }

    