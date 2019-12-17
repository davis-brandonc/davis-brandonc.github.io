var davis = {
  /* [INITIALIZE] */
  grid: [], // play grid
  total : 14, // total number of Davis Family Picture pairs to match
  init: function () {
    // init() : start the game

    // (1) ARRAY OF AVAILABLE Davis Family Pictures
    davis.grid = [];
    for (var i=1; i<=davis.total; i++) {
      davis.grid.push(i);
      davis.grid.push(i);
    }

    // (2) RANDOMLY SHUFFLE THE Davis Family Pictures
    // Credits : https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
    var currentIndex = davis.grid.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = davis.grid[currentIndex];
      davis.grid[currentIndex] = davis.grid[randomIndex];
      davis.grid[randomIndex] = temporaryValue;
    }

    // (3) RESET THE SCORES
    davis.remain = davis.total;
    davis.moves = 0;
    davis.incorrect = 0;
    davis.first = null;
    davis.second = null;
    if (davis.timer != null) {
      clearTimeout(davis.timer);
      davis.timer = null;
    }

    // (4) DRAW HTML GRID
    var container = document.getElementById("davis-play"),
        card = null;
    container.innerHTML = "";
    for (var i=0; i<davis.grid.length; i++) {
      card = document.createElement("div");
      card.innerHTML = "<img src='back 300.jpg'/>";
      card.classList.add("davis-card");
      card.setAttribute("id", "davis-card-" + i);
      card.dataset.idx = i;
      card.addEventListener("click", davis.play);
      container.appendChild(card);
    }

    // (X) CHEAT - SEE THE SHUFFLED CARDS
    // console.log(davis.grid);
  },

  /* [PLAY] */
  remain : 0, // number of pairs remaining
  moves : 0, // total number of moves
  incorrect : 0, // total number of mismatches
  first : null, // first opened card
  second : null, // second opened card

  // After showing 2 wrong cards, there will be a short delay before flipping back
  show : 1000, // time to show wrong cards, in micro seconds
  timer : null, // timer to flip back
  play : function () {
  // play() : when a card is selected

    // (1) CHECKS - "SAFETY LOCK"
    // Will proceed only when not showing wrong cards
    // Will proceed only if selected card is different
    if (davis.second === null) { if (this.dataset.idx != davis.first) {
      // (2) "SAVE" THE SELECTED CARD
      if (davis.first === null) { davis.first = this.dataset.idx; }
      else { davis.second = this.dataset.idx; }

      // (3) FLIP OPEN & SHOW Davis Family Pictures
      this.classList.add("open");
      this.innerHTML = "<img src='davis-" + davis.grid[this.dataset.idx] + ".jpg'/>";

      // (4) MATCH CARDS WHEN 2 ARE SELECTED + UPDATE STATS
      davis.moves++;
      if (davis.first!==null && davis.second!==null) {
        if (davis.grid[davis.first] == davis.grid[davis.second]) {
          // (4A) MATCHED
          davis.update(true);
          davis.remain--;

          // (4B) WIN - ALL MATCHED
          if (davis.remain==0) {
            alert("CONGRATULATIONS YOU MATCHED THEM ALL!" + "\n" + "Total number of the Davis family pictures turned over to win: " + davis.moves + "\n" + "Total failed guesses: " + davis.incorrect + "\n" + "YOU HAVE A GENIUS' MEMORY - 59 OR LESS" + "\n" + "YOU HAVE A BETTER THAN AVERAGE MEMORY  - 60-79" + "\n" + "YOU HAVE AN AVERAGE MEMORY  - 80-99" + "\n" + "MEMORY EXCERSIZES SHOULD BE IN YOUR FUTURE  - 100-119" + "\n" + "IT IS A GOOD THING YOU REMEMBERED TO GET OUT OF BED THIS MORNING  - 120 or MORE");
          }
        } else {
          // (4C) MISMATCH
          davis.timer = setTimeout(davis.update, davis.show);
          davis.incorrect++;
        }
      }
    }}
  },

  update : function (ok) {
  // update() : flip the cards back and hide?
  // PARAM ok : true for cards matched, false (or undefined) for mismatch

    // (5) FIRST CARD
    var card = document.getElementById("davis-card-" + davis.first);
    card.classList.remove("open");
    if (ok) {
      card.classList.add("ok");
    } else {
      card.innerHTML = "<img src='back 300.jpg'/>";
      card.addEventListener("click", davis.play);
    }

    // (6) SECOND CARD
    card = document.getElementById("davis-card-" + davis.second);
    card.classList.remove("open");
    if (ok) {
      card.classList.add("ok");
    } else {
      card.innerHTML = "<img src='back 300.jpg'/>";
      card.addEventListener("click", davis.play);
    }

    // (7) RESET SELECTIONS
    davis.first = null;
    davis.second = null;
    davis.timer = null;
  }
};

/* [START ON WINDOW LOAD] */
window.addEventListener("load", davis.init);