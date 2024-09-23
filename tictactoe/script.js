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

function createPlayerOne (name) {
    const marker = "X";
    return { name , marker};
}

function createPlayerTwo (name) {
    const marker = "O";
    return { name, marker};
}

function playRound(playerOne, playerTwo) {
    if (targetBlock = "") {
        targetBlock = playerOne.marker;
    }
    if (targetBlock = "") {
        targetBlock = playerTwo.marker;
    }
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
    blockArray.forEach((blockDiv) => {
        blockDiv.addEventListener("click", function(e) {
            console.log(e.target.id)
            e.target.id = player.marker //id to var name
        })
    })
})();

const game = (function () {
    let gameOver = false;
    const playerOneName = "Xavier";
    const playerTwoName = "Olive";
    const playerOne = createPlayerOne(playerOneName);
    const playerTwo = createPlayerTwo(playerTwoName);
    while (gameOver = false) {
        playRound(playerOne, playerTwo)
        gameOverCheck();
    }
})();