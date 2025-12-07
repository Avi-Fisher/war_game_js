export default function cards(rank, suite) {

    let value_card 

    if (typeof rank == "number")
        value_card = rank 
         
    else {
        switch (rank) {
            case "J":
                 value_card = 11
                 break
            case "Q":
                 value_card = 12
                 break
            case "K":
                 value_card = 13
                 break
            case "A":
                 value_card = 14
                 break
        }
    }
    
    let card = {

        rank: rank,
        suite: suite,
        value: value_card
    }
    return card
}



