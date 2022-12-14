function enemyTurn() {
    remove(app);
    switcher = 1;

    const waitingEnemyTurnImg = document.createElement('img');
    const waitingEnemyTurnText = document.createElement('h4');

    waitingEnemyTurnImg.classList.add('waitingForEnemyTurn');
    waitingEnemyTurnText.classList.add('waitingText');

    waitingEnemyTurnImg.setAttribute('src', './img/waitingForEnemyTurn.gif');

    waitingEnemyTurnText.textContent = 'Ожидание хода соперника...';

    app.appendChild(waitingEnemyTurnImg);
    app.appendChild(waitingEnemyTurnText);

    gameStatusInterval = setInterval(() => {
        gameStatus = `game-status?token=${window.application.keys.login.token}&id=${window.application.keys.gameId}`;
        requestForInfo(gameStatus);
    }, 500);
}