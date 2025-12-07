export default function check_win(player,ai){

    if (player.won_pile.length > ai.won_pile.length){
        console.log("Player Win!!!!!!!!!!!!!");
    }else if (player.won_pile.length < ai.won_pile.length){
        console.log("The Computer Win !!!!!!! You Loser");
    }else{
        console.log("No One Win ");
    }
}




