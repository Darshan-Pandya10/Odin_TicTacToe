const board = document.querySelector('.board');
const cells = Array.from(document.querySelectorAll('.cell'));
const x_class = 'x';
const circle_class = 'circle';
const messageBox = document.querySelector('.messagebox');
const gameMessage = document.querySelector('.gamemessage');
const restart = document.querySelector('.restart');
const winningCombinationArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let currentClass


restart.addEventListener('click',versusPlayer)


function versusPlayer(){

    function startGame(){
        cells.forEach(cell => {
            cell.addEventListener('click', clickEvent,{once:true});
            cell.classList.remove(x_class);
            cell.classList.remove(circle_class);
        });
        gameMessage.innerText = '';
        }
        startGame()

function clickEvent(e){
    const cell = e.target;
    let whosTurn = currentClass ? x_class : circle_class;
    cell.classList.add(whosTurn);
    swapterns();

    function gameEnd(draw){

        if(draw){
            gameMessage.innerText = 'Game is Draw.';
    
        }
        else {
            messageBox.classList.add('showResult');
            gameMessage.innerText = `${whosTurn} is a Winner!`;
        }
        messageBox.classList.add('showResult');
    }
    if(winnerCheck(whosTurn)){
       gameEnd(false)
    }
    else if(isDraw()){
        gameEnd(true)
    }

}}


// common code
function isDraw(){
    return  [...cells].every(cell => {

    return cell.classList.contains(x_class) || cell.classList.contains(circle_class);
})
}


function swapterns(){
    currentClass = !currentClass;
    }


// function to check the winner
function winnerCheck(whosTurn){

    return winningCombinationArray.some(combination => {
        return combination.every(index => {
           return cells[index].classList.contains(whosTurn);
        })
    })}

function forDraw(){
    return cells.every(cell => {
    return cell.classList.contains(x_class) || cell.classList.contains(circle_class)
   })
}


versusPlayer()
