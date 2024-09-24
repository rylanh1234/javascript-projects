const myGlobal = (function () {
    const gameOver = false;
    const targetBlock = "";
    const playerOneName = "Xavier";
    const playerTwoName = "Olive";
    const playerOne = createPlayerOne(playerOneName);
    const playerTwo = createPlayerTwo(playerTwoName);
    return { gameOver, targetBlock, playerOne, playerTwo };
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
    if (blocktl != "" && blocktl == blocktc && blocktl == blocktr) {
        gameOver = true;
    }
    else if (blockcl != "" && blockcl == blockc && blockcl == blockcr) {
        gameOver = true;
    }
    else if (blockbl != "" && blockbl == blockbc && blockbl == blockbr) {
        gameOver = true;
    }
    else if (blocktl != "" && blocktl == blockcl && blocktl == blockbl) {
        gameOver = true;
    }
    else if (blocktc != "" && blocktc == blockc && blocktc == blockbc) {
        gameOver = true;
    }
    else if (blocktr != "" && blocktr == blockcr && blocktr == blockbr) {
        gameOver = true;
    }
    else if (blocktl != "" && blocktl == blockc && blocktl == blockbr) {
        gameOver = true;
    }
    else if (blockbl != "" && blockbl == blockc && blockbl == blocktr) {
        gameOver = true;
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
            if (gameboard[myGlobal.targetBlock] == "") {
                if (playerTurn % 2 == 0) {
                    playRound(myGlobal.playerOne);
                    playerTurn += 1;
                }
                else {
                    playRound(myGlobal.playerTwo);
                    playerTurn += 1;
                }
            }
        })
    })
})();

const playGame = (function () {
    // while (myGlobal.gameOver == false) {
    gameOverCheck();
    // }
})();