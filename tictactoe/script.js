const myGlobal = (function () {
    const gameOver = false;
    const targetBlock = "";
    // const playerOneName = "Xavier";
    // const playerTwoName = "Olive";
    const playerOneName = "";
    const playerTwoName = "";
    const playerOne = createPlayerOne(playerOneName);
    const playerTwo = createPlayerTwo(playerTwoName);
    const winner = "";
    return { gameOver, targetBlock, playerOne, playerTwo, winner };
})();

const gameboard = (function () {
    const blocktl = "";
    const blocktc = "";
    const blocktr = "";
    const blockcl = "";
    const blockc = "";
    const blockcr = "";
    const blockbl = "";
    const blockbc = "";
    const blockbr = "";
    const blocks = [blocktl, blocktc, blocktr, blockcl, blockc, blockcr, blockbl, blockbc, blockbr]
    return { blocktl, blocktc, blocktr, blockcl, blockc, blockcr, blockbl, blockbc, blockbr, blocks };
})();

function createPlayerOne(name) {
    const marker = "X";
    return { name, marker };
}

function createPlayerTwo(name) {
    const marker = "O";
    return { name, marker };
}

function playRound(playerNum) {
    gameboard[myGlobal.targetBlock] = playerNum.marker;
}

function gameOverCheck() {
    const currentBoard = Object.values(gameboard);

    if (gameboard.blocktl != "" && gameboard.blocktl == gameboard.blocktc && gameboard.blocktl == gameboard.blocktr) {
        myGlobal.gameOver = true;
        winningLetter = gameboard.blocktl;
        myGlobal.winner = Object.entries(myGlobal).find(([playerNum, playerValue]) => playerValue.marker == winningLetter); // [myGlobal.key, key's value]
    }
    else if (gameboard.blockcl != "" && gameboard.blockcl == gameboard.blockc && gameboard.blockcl == gameboard.blockcr) {
        myGlobal.gameOver = true;
        winningLetter = gameboard.blockcl;
        myGlobal.winner = Object.entries(myGlobal).find(([playerNum, playerValue]) => playerValue.marker == winningLetter);
    }
    else if (gameboard.blockbl != "" && gameboard.blockbl == gameboard.blockbc && gameboard.blockbl == gameboard.blockbr) {
        myGlobal.gameOver = true;
        winningLetter = gameboard.blockbl;
        myGlobal.winner = Object.entries(myGlobal).find(([playerNum, playerValue]) => playerValue.marker == winningLetter);
    }
    else if (gameboard.blocktl != "" && gameboard.blocktl == gameboard.blockcl && gameboard.blocktl == gameboard.blockbl) {
        myGlobal.gameOver = true;
        winningLetter = gameboard.blocktl;
        myGlobal.winner = Object.entries(myGlobal).find(([playerNum, playerValue]) => playerValue.marker == winningLetter);
    }
    else if (gameboard.blocktc != "" && gameboard.blocktc == gameboard.blockc && gameboard.blocktc == gameboard.blockbc) {
        myGlobal.gameOver = true;
        winningLetter = gameboard.blocktc;
        myGlobal.winner = Object.entries(myGlobal).find(([playerNum, playerValue]) => playerValue.marker == winningLetter);
    }
    else if (gameboard.blocktr != "" && gameboard.blocktr == gameboard.blockcr && gameboard.blocktr == gameboard.blockbr) {
        myGlobal.gameOver = true;
        winningLetter = gameboard.blocktr;
        myGlobal.winner = Object.entries(myGlobal).find(([playerNum, playerValue]) => playerValue.marker == winningLetter);
    }
    else if (gameboard.blocktl != "" && gameboard.blocktl == gameboard.blockc && gameboard.blocktl == gameboard.blockbr) {
        myGlobal.gameOver = true;
        winningLetter = gameboard.blocktl;
        myGlobal.winner = Object.entries(myGlobal).find(([playerNum, playerValue]) => playerValue.marker == winningLetter);
    }
    else if (gameboard.blockbl != "" && gameboard.blockbl == gameboard.blockc && gameboard.blockbl == gameboard.blocktr) {
        myGlobal.gameOver = true;
        winningLetter = gameboard.blockbl;
        myGlobal.winner = Object.entries(myGlobal).find(([playerNum, playerValue]) => playerValue.marker == winningLetter);
    }
    else if (currentBoard.some(value => !value) == false) {
        myGlobal.gameOver = true;
    }
}

const displayBoard = (function () {
    const boardContainer = document.querySelector(".boardContainer");
    gameboard.blocks.forEach((block, blockIndex) => {
        const blockDiv = document.createElement("div");
        blockDiv.classList.add("blockDiv");
        blockDiv.setAttribute("id", Object.keys(gameboard)[blockIndex]);
        boardContainer.appendChild(blockDiv);
    })
    const blockArray = document.querySelectorAll(".blockDiv");
    let playerTurn = 0;
    blockArray.forEach((blockDiv) => {
        blockDiv.addEventListener("click", function (e) {
            myGlobal.targetBlock = e.target.id;
            if (gameboard[myGlobal.targetBlock] == "" && myGlobal.gameOver == false) {
                if (playerTurn % 2 == 0) {
                    playRound(myGlobal.playerOne);
                    e.target.textContent = myGlobal.playerOne.marker;
                    playerTurn += 1;
                }
                else {
                    playRound(myGlobal.playerTwo);
                    e.target.textContent = myGlobal.playerTwo.marker;
                    playerTurn += 1;
                }
            }
        })
    })
})();

function playGame() {
    if (myGlobal.gameOver == false) {
        gameOverCheck();
        setTimeout(playGame, 100)
    }
    else {
        const winnerMessageContainer = document.querySelector(".winnerMessageContainer");
        const winnerMessage = document.createElement("div");
        winnerMessage.classList.add("winnerMessage");
        if (myGlobal.winner == "") {
            winnerMessage.textContent = "It is a draw!";
        }
        else {
            winnerMessage.textContent = "The winner is " + myGlobal.winner[1].name + "!";
        }
        winnerMessageContainer.appendChild(winnerMessage);
    }
};

const playerNamesInput = (function () {
    const nameInputOne = document.querySelector("#player_one_name");
    const inputFormOne = document.querySelector("#player_one_form");
    const nameInputTwo = document.querySelector("#player_two_name");
    const inputFormTwo = document.querySelector("#player_two_form");
    const boardContainer = document.querySelector(".boardContainer");
    inputFormOne.addEventListener("submit", function (e) {
        e.preventDefault();
        myGlobal.playerOne.name = nameInputOne.value;
        inputFormOne.style.display = "none";
        inputFormTwo.style.display = "flex"
    })
    inputFormTwo.addEventListener("submit", function (e) {
        e.preventDefault();
        myGlobal.playerTwo.name = nameInputTwo.value;
        inputFormTwo.style.display = "none";
        boardContainer.style.display = "grid";
    })
})();

const startResetBtn = (function () {
    const start = document.querySelector("#start");
    const inputFormOne = document.querySelector("#player_one_form");
    start.addEventListener("click", () => {
        playGame();
        inputFormOne.style.display = "flex";
        start.remove();
        const reset = document.createElement("button");
        reset.setAttribute("id", "reset");
        reset.textContent = "Reset"
        const body = document.querySelector("body");
        body.appendChild(reset);
        reset.addEventListener("click", () => {
            gameboard.blocktl = "";
            gameboard.blocktc = "";
            gameboard.blocktr = "";
            gameboard.blockcl = "";
            gameboard.blockc = "";
            gameboard.blockcr = "";
            gameboard.blockbl = "";
            gameboard.blockbc = "";
            gameboard.blockbr = "";
            const winnerMessageContainer = document.querySelector(".winnerMessageContainer");
            winnerMessageContainer.innerHTML = "";
            const blockArray = document.querySelectorAll(".blockDiv");
            blockArray.forEach((blockDiv) => {
                blockDiv.textContent = "";
            })
            if (myGlobal.gameOver == true) {
                myGlobal.gameOver = false;
                playGame();
            }
        })
    })
})();

// could add a btn to reset names