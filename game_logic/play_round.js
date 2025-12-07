export default function play_round(player, ai) {

    let winner = compare(player.hand[0], ai.hand[0])

    switch (winner) {

        case "p1":
            winner = player
        case "P2":
            winner = ai
        case "war":
            winner = []    
    }

        winner.won_pile.push([player.hand.shift(), ai.hand.shift()])

}        
    



