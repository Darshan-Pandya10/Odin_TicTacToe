const board = document.querySelector('.board');
const cells = Array.from(document.querySelectorAll('.cell'));
let userPointer
let AIPointer
let Pointer
const x_class = 'x';
const circle_class = 'circle';
const messageBox = document.querySelector('.messagebox');
const gameMessage = document.querySelector('.gamemessage');
const showTern = document.querySelector('.showtern');
const restart = document.querySelector('.restart');
const winningCombinationArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const x_button = document.querySelector('.x-button');
const circle_button = document.querySelector('.circle-button');
const cellPositions = [0,1,2,3,4,5,6,7,8];

function versusAI(){

    restart.addEventListener('click',versusAI)


   restart.addEventListener('click' , () => {
    restart.classList.remove('showRestartButton')
    cells.forEach(cell => {
        cell.classList.remove(x_class);
        cell.classList.remove(circle_class);
        showTern.innerText = '';
        gameMessage.innerText = '';
    })
   }) ;

   x_button.addEventListener('click',userSelectX,{once:true});
   circle_button.addEventListener('click',userSelectO,{once:true});


   function userSelectX(){
    userPointer = x_class;
    AIPointer = circle_class;
   }

   function userSelectO(){
    userPointer = circle_class;
    AIPointer = x_class;
   }

   cells.forEach(cell => {
    cell.addEventListener('click', () => {
        console.log('clicked')
        cell.classList.add(userPointer);
    },{once:true});
   })
}































//     if(winnerCheck(whosTurn)){
//         cells.forEach(cell => {
//             cell.removeEventListener('click', clickEvent,{once:true});
//             })
//     messageBox.classList.add('showResult');
//     gameMessage.innerText = `${whosTurn} is a Winner!`;
//     }
//     else if(isDraw()){
//         cells.forEach(cell => {
//             cell.removeEventListener('click', clickEvent,{once:true});
//             })
//         gameMessage.innerText = 'Game is Draw.';
//     }

//     messageBox.classList.add('showResult');
//     restart.classList.add('showRestartButton');


// }}


// // common code
// function isDraw(){
//     return  [...cells].every(cell => {

//     return cell.classList.contains(x_class) || cell.classList.contains(circle_class);
// })
// }

// // function to check the winner
// function winnerCheck(whosTurn){
//     return winningCombinationArray.some(combination => {
//         return combination.every(index => {
//            return cells[index].classList.contains(whosTurn);
//         })
//     })}



versusAI()
