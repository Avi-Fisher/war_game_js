import create_player from "./create_player.js";
import input_cli from "../unitls/input.js";
import create_deck from "../deck/create_deck.js";
import shuffle from "../deck/shuffle.js";


export default function create_game() {

    console.log("Input your name: ");

    let player = create_player(input_cli())
    let ai = create_player()


    let new_dack = create_deck()
    shuffle(new_dack)
    

    player.hand = new_dack.slice(0, 26)
    ai.hand = new_dack.slice(26,)

    return {
        player: player,
        ai: ai
    }
}
