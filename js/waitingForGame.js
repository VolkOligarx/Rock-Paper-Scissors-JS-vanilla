function waitingForGame() {
    remove(app);

    switcher = 1;

    const waitingPic = document.createElement('img');
    const waitingText = document.createElement('h4');

    waitingPic.setAttribute('src', './img/waitingForEnemy.gif');
    waitingText.textContent = 'Ожидание соперника...';
    waitingText.classList.add('waitingText', 'login');

    app.appendChild(waitingPic);
    app.appendChild(waitingText);
    gameStatusInterval = setInterval(() => {
        gameStatus = `game-status?token=${window.application.keys.login.token}&id=${window.application.keys.gameId}`;
        requestForInfo(gameStatus);
    }, 500);
}