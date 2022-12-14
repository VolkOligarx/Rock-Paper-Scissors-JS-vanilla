function battle() {
    remove(app);
    switcher = 0;
    clearInterval(gameStatusInterval);
    const gameBlock = document.createElement('div');
    const paper = document.createElement('img');
    const rock = document.createElement('img');
    const scissors = document.createElement('img');

    gameBlock.classList.add('gameBlock');
    paper.classList.add('paper');
    rock.classList.add('rock');
    scissors.classList.add('scissors');

    paper.setAttribute('src', './img/paper.gif');
    rock.setAttribute('src', './img/rock.gif');
    scissors.setAttribute('src', './img/scissors.gif');

    yourTurn = `play?token=${window.application.keys.login.token}&id=${window.application.keys.gameId}`;

    paper.addEventListener('click', (event) => {
        event.preventDefault();
        yourTurn = yourTurn + `&move=paper`;
        requestForInfo(yourTurn);
    });
    rock.addEventListener('click', (event) => {
        event.preventDefault();
        yourTurn = yourTurn + `&move=rock`;
        requestForInfo(yourTurn);
    });
    scissors.addEventListener('click', (event) => {
        event.preventDefault();
        yourTurn = yourTurn + `&move=scissors`;
        requestForInfo(yourTurn);
    });

    gameBlock.appendChild(rock);
    gameBlock.appendChild(paper);
    gameBlock.appendChild(scissors);
    app.appendChild(gameBlock);
}