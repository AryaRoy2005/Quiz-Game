// const questionObj = 
// {
//   category: 'Food & Drink',
//   id: 'qa-1',
//   correctAnswer: 'Three',
//   answers: ['Two', 'Three', 'Four', 'Five'],
//   question:"How many pieces of bun are in a Mcdonald's Big Mac?",
// };

const quesJSON = [

  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:"How many pieces of bun are in a Mcdonald's Big Mac?"
  },

  {
    correctAnswer: 'L. Frank Baum',
    options: ['Suzanne Collins','James Fenimore Cooper','L. Frank Baum','Donna Leon'],
    question:"Which author wrote 'The Wonderful Wizard of Oz'?"
  },

  {
    correctAnswer: 'Atlanta United',
    options: ['Atlanta United','Atlanta Impact','Atlanta Bulls','Atlanta Stars'],
    question:'Which of these is a soccer team based in Atlanta?'
  },


  {
    correctAnswer: 'A Nanny',
    options: ['A Sow','A Lioness','A Hen','A Nanny'],
    question: 'A female goat is known as what?'
  },

  {
    correctAnswer: 'P. L. Travers',
    options: ['J. R. R. Tolkien','P. L. Travers','Lewis Carroll','Enid Blyton'],
    question:"Which author wrote 'Mary Poppins'?"
  }

];


// const {correctAnswer, answers, question} = questionObj; 



const questionBlock = document.querySelector("#question"); 
const optionsBlock = document.querySelector("#options"); 
const scoreBlock = document.querySelector("#score"); 
const nextButton = document.querySelector("#next"); 
const nextBlock = document.querySelector("#btn"); 



function shuffle(arr) {
  let currentIndex = arr.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // let temp = arr[randomIndex]; 
    // arr[randomIndex] = arr[currentIndex]; 
    // arr[currentIndex] = temp;

    //Swap using array destructuring
    [arr[currentIndex],arr[randomIndex]]=[arr[randomIndex], arr[currentIndex]]; 
  }
}




let currQuestion = 0; 
let score = 0; 


nextButton.addEventListener('click', ()=>{
    nextQuestion(); 
}); 


shuffle(quesJSON); 

questionProcess(); 



function questionProcess(){

  const {correctAnswer, options, question} = quesJSON[currQuestion]; 

  //Set question
  questionBlock.textContent = question; 


  //Handle options
  shuffle(options); 

  optionsBlock.innerHTML="";


  for(let option of options){

    const e = document.createElement('button'); 
    e.textContent = option; 
    optionsBlock.append(e); 


    e.addEventListener('click', ()=>{

      if(option === correctAnswer){
        score++; 
      }else{
        score-=0.25; 
      }
      scoreBlock.innerHTML = `Score = ${score}`; 

      nextQuestion(); 

    }); 
  }

}


function nextQuestion(){
  currQuestion++; 
  if(currQuestion==quesJSON.length){
    questionBlock.textContent = "QUIZ COMPLETED"; 
    optionsBlock.innerHTML = ""; 
    scoreBlock.innerHTML = `Score = ${score}`; 
    nextBlock.innerHTML=""; 
    return; 
  }
  questionProcess(); 
}











