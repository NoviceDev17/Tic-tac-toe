const winningCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function Factory(){
    function decideWhoPlays(i){
        if (i===0||i===2||i===4||i===6||i===8){
            return true //means player1
        }else{
            return false //player2
        }
    }
    function makeMove(turn,array){
        const player=turn?"player1":"player2";
        const choice=window.prompt(`${player} turn,pick a square:`);
        array[choice]=turn;
    }
    function checkForWin(turn,array){
        for(let i=0;i<winningCombos.length;i++){
            const combo=winningCombos[i];
            if(array[combo[0]]===turn&&array[combo[1]]===turn&&array[combo[2]]===turn){
                return true;
            }
        }
        return false;
    }
    function endGame(win,winner){
       if (win===true){
            alert(`${winner} wins!`)
       }else {alert(`draw`)}
       let playAgain=window.prompt("Want to play again?(yes/no)");
       if(playAgain==="yes"){
        PlayGame();
       }   
    }
    return{decideWhoPlays,makeMove,checkForWin,endGame}
}
const PlayGame=function(){
    const functions=Factory();
    let array=[null,null,null,null,null,null,null,null,null];
    let winner=null;
    let win=false;
    for(let i=0;i<9;i++){
        const turn=functions.decideWhoPlays(i);
        const player=turn?"player1":"player2";
        functions.makeMove(turn,array);
        if(functions.checkForWin(turn,array)===true){
            win=true;
            winner=player;
            break;5
        }
    }
    functions.endGame(win,winner);
};
PlayGame();