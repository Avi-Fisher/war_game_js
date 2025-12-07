export default function shuffle(deck){

    for (let i = 0; i < 1000; i++){
        
        let random1 = Math.floor(Math.random() * 52)
        let random2 = Math.floor(Math.random() * 52)

        if (deck[random1] !== deck[random2]){

            let temp = deck[random1]
            deck[random1] = deck[random2]
            deck[random2] = temp
        }
    }
    
    
    return deck
}




