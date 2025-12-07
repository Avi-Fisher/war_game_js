const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suites = ["H", "C", "D", "S"];

function create_card(rank, suite) {
  const specialCards = [11, 12, 13, 14];
  viewRank = rank;

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



