export default function compare(card1, card2) {

    if (card1.value > card2.value){
        return "p1"
    }else if(card2.value > card1.value){
        return "p2"
    }else {
        return "war"
    }

}

