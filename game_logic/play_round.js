import compare from "../deck/compare_cards.js";


export default function play_round(player, ai) {
    
    
    try {
        let winner = compare(player.hand[0], ai.hand[0])

        console.log("The Player('p1') Card Is:", player.hand[0]);
        console.log("The Ai('p2') Card Is:", ai.hand[0]);
        console.log("The Winner Is ", winner );
        

        switch (winner) {

            case "p1":
                winner = player
                break
            case "P2":
                winner = ai
                break
            case "war":
                winner = {won_pile:[]}    
                break
        } 
            winner.won_pile.push([player.hand.shift(), ai.hand.shift()])

        return true
    }catch{
        return false
    }
    
}        
    



