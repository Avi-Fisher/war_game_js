import create_player from "./create_player.js";
import input_cli from "../unitls/input.js";


function create_game() {

    console.log("Input your name: ");
    let player = create_player(input_cli)

    let ai = create_player()


    let new_dack = dack

    player.hand = new_dack.slice(0, 26)
    ai.hand = new_dack.slice(26,)


    return { player, ai }
}
