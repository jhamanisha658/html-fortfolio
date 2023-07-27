noOfTimesButtonAppear=document.querySelectorAll(".drum").length;


//Check button that is being clicked

for(var i=0;i<noOfTimesButtonAppear;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML= this.innerHTML;
    SomethingPressed(buttonInnerHTML); //function for sound
    animeEffect(buttonInnerHTML);      //for animation(shadow) 
    
});

}


//If pressed by Keyboard
document.addEventListener("keypress",function(event){
    SomethingPressed(event.key);   //for sound
    animeEffect(event.key)         //for animation(shadow)
})


//Actually works when someone clicks or pressed the key for sound 
function SomethingPressed(key){

    switch(key){
        case"w":
            var audio=new Audio("sounds/crash.mp3")
            audio.play();
        break;

        case"a":
            var audio=new Audio("sounds/kick-bass.mp3")
            audio.play();
        break;

        case"s":
            var audio=new Audio("sounds/snare.mp3")
            audio.play();
        break;

        case"d":
            var audio=new Audio("sounds/tom-1.mp3")
            audio.play();
        break;

        case"j":
            var audio=new Audio("sounds/tom-2.mp3")
            audio.play();
        break;

        case"k":
            var audio=new Audio("sounds/tom-3.mp3")
            audio.play();
        break;

        case"l":
            var audio=new Audio("sounds/tom-4.mp3")
            audio.play();
        break;

    }
}

// for creating animation effect when button is clicked or pressed

function animeEffect(value){
    var activeButton=document.querySelector("."+value)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}