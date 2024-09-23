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
    return { blocktl, blocktc, blocktr, blockcl, blockc, blockcr, blockbl, blockbc, blockbr};
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