for(var i=0 ; i < document.querySelectorAll(".drum").length ; i++ ){

    document.querySelectorAll("Button")[i].addEventListener("click",function(){
       
        var keyInnerHTML = this.innerHTML;

        makeSound(keyInnerHTML);
        buttonAnim(keyInnerHTML);
       
    });
}

document.addEventListener("keydown",function(event){

    makeSound(event.key);  //event contains a property key which tells us which key got pressed
    buttonAnim(event.key);
})

function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
           break;
        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
           break;
        case "s":
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
           break;
        case "d":
            var tom3 = new Audio("sounds/tom-4.mp3");
            tom3.play();
           break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
           break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
           break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
           break;

        default:
            break;
       }
}

function buttonAnim(currentKey){

    var b = document.querySelector("."+currentKey);
    b.classList.add("pressed");

    setTimeout(function(){
        b.classList.remove("pressed");
    },100);
}

