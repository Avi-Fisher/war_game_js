function create_card(rank, suite) {
  const specialCards = [11, 12, 13, 14];
  viewRank = String(rank);

  if (specialCards.includes(rank)) {
    switch (rank) {
      case 11:
        viewRank = "J";
        break;
      case 12:
        viewRank = "Q";
        break;
      case 13:
        viewRank = "K";
        break;
      case 14:
        viewRank = "A";
        break;
    }
  }
  return { rank: viewRank, suite: suite, value: rank };
}

function create_deck() {
  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const suites = ["H", "C", "D", "S"];
  const myDeck = [];

  suites.forEach((suite) => {
    ranks.forEach((rank) => {
      myDeck.push(create_card(rank, suite));
    });
  });
  return myDeck;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(deck) {
  var i = 0;
  while (i < 11) {
    var idx1 = getRandomInt(deck.length);
    var idx2 = getRandomInt(deck.length);
    if (idx1 != idx2) {
      var temp = deck[idx1];
      deck[idx1] = deck[idx2];
      deck[idx2] = temp;
    
      
    }
    i++;
  }
  return deck;
}

function compare_cards(p1, p2) {
    if (p1.value > p2.value){
        return "p1"
    } else if (p1.value < p2.value) {
        return "p2"
    } else {
        return "WAR"
    }

}



