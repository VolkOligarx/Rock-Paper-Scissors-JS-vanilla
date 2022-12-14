function requestForGame(attachment) {
    fetch(backURL + attachment)
    .then(data => data.json())
    .then(data => {
        if (data['player-status'].status === 'lobby') {
        window.application.keys.playerStatus = '';
        window.application.keys.playerStatus = data;
        console.log(data['player-status'].status);
        playerList();
        playButton();
        }
        else if (data['player-status'].status === 'game') {
        window.application.keys.playerStatus = '';
        window.application.keys.playerStatus = data;
        console.log(data['player-status'].status);
        window.application.keys.gameId = '';
        window.application.keys.gameId = data['player-status'].game.id;
        console.log(window.application.keys.gameId);
        gameStatus = `game-status?token=${window.application.keys.login.token}&id=${window.application.keys.gameId}`;
        requestForInfo(gameStatus);
            }
        }
    )
}

function requestForInfo(attachment) {
    fetch(backURL + attachment)
    .then(data => data.json())
    .then(data => {
        if (data.token) {
            window.application.keys.login = '';
            window.application.keys.login = data
            playerStatus = `player-status?token=${window.application.keys.login.token}`;
            requestForGame(playerStatus);
        }
        else if (data.list) {
            window.application.keys.playerList = '';
            window.application.keys.playerList = data;
        }
        else if (data['game-status']) {
            if (data['game-status'].status === 'waiting-for-start') {
                if (switcher === 0) {
                    waitingForGame();
                }
                else if (switcher === 1) {
                    console.log('waiting');
                }
            }
            else if (data['game-status'].status === 'waiting-for-your-move') {
                battle();
            }
            else if (data['game-status'].status === 'waiting-for-enemy-move') {
                if (switcher === 0) {
                    enemyTurn();  
                }
                else if (switcher === 1) {
                    console.log('waiting-your-enemy');
                }
            }
            else if (data['game-status'].status === 'win') {
                console.log('win');
                win();
            }
            else if (data['game-status'].status === 'lose') {
                console.log('lose');
                lose();
                }
            }
        }
    )
}