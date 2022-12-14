function win() {
    remove(app);

    const winImg = document.createElement('img');
    const lobbyButton = document.createElement('button');
    const replayButton = document.createElement('button');
    const smallBlock = document.createElement('div');
    const hugeBlock = document.createElement('div');

    lobbyButton.textContent = 'Перейти в лобби';
    replayButton.textContent = 'Играть еще!';

    lobbyButton.classList.add('startButton', 'choiceButton');
    replayButton.classList.add('startButton', 'choiceButton');

    winImg.setAttribute('src','./img/win.gif');

    winImg.classList.add('waitingForEnemyTurn');

    smallBlock.style.display = 'flex';
    lobbyButton.style.marginLeft = '25vw';    replayButton.style.marginRight = '25vw';
    hugeBlock.style.display = 'flex';
    hugeBlock.style.gap = '15px';
    hugeBlock.style.flexDirection = 'column';
    hugeBlock.style.alignItems = 'center';

    lobbyButton.addEventListener('click', () => {
        playerList();
        playButton();
    });
    replayButton.addEventListener('click', () => {
        startData = `start?token=${window.application.keys.login.token}`;
        requestForGame(startData);
        waitingForGame();
    });

    smallBlock.appendChild(lobbyButton);
    smallBlock.appendChild(replayButton);
    hugeBlock.appendChild(winImg);
    hugeBlock.appendChild(smallBlock);
    app.appendChild(hugeBlock);
}