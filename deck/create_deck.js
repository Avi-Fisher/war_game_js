import cards from "./create_card.js";

export default function create_deck() {
    let deck = []

    let rank = ["J", "Q", "K", "A"]
    let suite = ["S", "H", "C", "D"]

    let count = 0

    for (let i = 2; i < 15; i++) {

        for (let j = 0; j < 4; j++) {

            if (i <= 10) {
                deck.push(cards(i, suite[j]))
            } else {
                deck.push(cards(rank[count], suite[j]))
            }
        }
            if (i > 10){
            count ++  
        }        
        }
        
        
    return deck
    }
    








