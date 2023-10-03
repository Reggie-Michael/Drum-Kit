let drumSet = document.querySelectorAll('button.drum');

for (let i = 0; i < drumSet.length; i++) {
     drumSet[i].addEventListener('click', handleClick);
}

function handleClick(handler) {
     handler = this.innerHTML;
     setSound(handler);
     clickEffect(this);
}

function setSound(soundVar){
     switch(soundVar) {
          case "w":
          addAudio('../sounds/snare.mp3');
          break ;
          case "a":
          addAudio('../sounds/crash.mp3');
          break ;
          case "s":
          addAudio('../sounds/tom-1.mp3');
          break ;
          case "d":
          addAudio('../sounds/tom-2.mp3');
          break ;
          case "j":
          addAudio('../sounds/tom-3.mp3');
          break ;
          case "k":
          addAudio('../sounds/tom-4.mp3');
          break ;
          case "l":
          addAudio('../sounds/kick-bass.mp3');
          break ;
          case "e":
          addAudio('../sounds/extra_2.mp3');
          break ;

          default: console.log(soundVar);
          
     }
}

// The event () in this function stores the event that triggered the function 
document.addEventListener('keydown', function(event){
     let keyClass = "." + event.key;
     let keyElement = document.querySelector(keyClass);
     setSound(keyElement.innerHTML);
     clickEffect(keyElement);
})

// click effect function 
function clickEffect(theClicked){
     theClicked.classList.add("pressed");
     setTimeout(function(){
          theClicked.classList.remove("pressed");
     }, 100)
}

// add audio function 
const addAudio = (audioVar) => {
     // audioVar = audioVar.toString();
     var audio = new Audio(audioVar);
     audio.play();
}



































// Calculator HOF 

// const add = (num1, num2) => {
//      return num1 + num2;
// }

// const multiply = (num1, num2) => {
//      return num1 * num2;
// }

// const subtract = (num1, num2) => {
//      return num1 - num2;
// }

// const divide = (num1, num2) => {
//      return num1 / num2;
// }

// const calculator = (num1, num2, operator) => {
//      // operator = operator.toLowerCase();
//      if(operator == "/"){
//           operator = divide;
//      }else if(operator == "+"){
//           operator = add;
//      }else if(operator == "-" || operator == "minus"){
//           operator = subtract;
//      }else if(operator == "*"){
//           operator = multiply;
//      }else {
//           operator = null;

//      }

//      return operator(num1, num2);
// }

// ;
// console.log(calculator(4, 5, 'minus'));


// var me = "MINUS"
// console.log(me.toLowerCase())