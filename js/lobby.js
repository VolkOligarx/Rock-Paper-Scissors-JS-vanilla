function playerList() {
    remove(app)

    let loginBlock = document.createElement('div');
    let winsBlock = document.createElement('div');
    let losesBlock = document.createElement('div');
    const bigBlock = document.createElement('div');

    const playersData = `player-list?token=${window.application.keys.login.token}`;

    loginBlock.classList.add('loginBlock');
    winsBlock.classList.add('winsBlock');
    losesBlock.classList.add('losesBlock');

    bigBlock.style.display = 'flex';
    bigBlock.style.gap = '4px';
    bigBlock.style.border = '0.5px solid rgb(240, 179, 66)';
    bigBlock.style.borderRadius = '10px';
    bigBlock.style.marginBottom = '40px';
    bigBlock.style.padding = '1px';

    bigBlock.appendChild(loginBlock);
    bigBlock.appendChild(winsBlock);
    bigBlock.appendChild(losesBlock);
    app.appendChild(bigBlock);

    lobbyInterval = setInterval(() => {
        requestForInfo(playersData);

        remove(loginBlock);
        remove(winsBlock);
        remove(losesBlock);

            let loginsArray = [];
            let winsArray = [];
            let losesArray = [];

            window.application.keys.playerList.list.forEach(element => {
                loginsArray.push(element.login);
                winsArray.push(element.wins);
                losesArray.push(element.loses);
            });
            loginsArray.forEach(element => {
                let test = document.createElement('h4');
                test.textContent = 'Login: '+ element;
                test.classList.add('login');
                loginBlock.appendChild(test);
            });

            winsArray.forEach(element => {
                let test = document.createElement('h4');
                test.textContent = 'wins: '+ element;
                test.classList.add('wins');
                winsBlock.appendChild(test);
            });

            losesArray.forEach(element => {
                let test = document.createElement('h4');
                test.textContent = 'loses: '+ element;
                test.classList.add('loses');
                losesBlock.appendChild(test);
            });
    }, 1000)
}

function playButton() {
    const startButton = document.createElement('button');
    startButton.classList.add('button', 'startButton');
    startButton.style.fontSize = '40px';
    startButton.textContent = 'Играть!';
    app.appendChild(startButton);

    startButton.addEventListener('click', () => {
        startData = `start?token=${window.application.keys.login.token}`
        requestForGame(startData)
        waitingForGame()
        clearInterval(lobbyInterval)
    });
};