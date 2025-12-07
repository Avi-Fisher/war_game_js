import check_win from "./game_logic/check_win.js";
import create_game from "./game_logic/game_init.js";
import play_round from "./game_logic/play_round.js";

function full_game() {

    console.log("Welcome To War Game");
    console.log("=========== W  A  R =============");

    let players = create_game()

    let running = true


    while (running) {
        
        running = play_round(players.player, players.ai)
    }
    check_win(players.player, players.ai)    
}



full_game()










