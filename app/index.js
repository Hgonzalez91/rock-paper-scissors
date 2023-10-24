function startGame() {
    const gameOptions = ['rock', 'paper', 'scissors'];
    const option = Math.round(Math.random() * 2);


    const userOptions = prompt('Chosse an option: ROCK - PAPER - SCISSORS').toLowerCase();
    const computerOption = gameOptions[option];

    if (userOptions === computerOption) {
        console.log('Tie')
    } else if (userOptions === 'rock') {
        if (computerOption === 'scissors') {
            console.log('La piedra le gana a la tijera');
            console.log('User Wins');
        } else {
            console.log('El papel le gana a la piedra');
            console.log('Computer Wins');
        }
    } else if (userOptions === 'paper') {
        if (computerOption === 'rock') {
            console.log('El papel le gana a la piedra');
            console.log('User Wins');
        } else {
            console.log('La tijera le gana al papel');
            console.log('computer Wins');
        }
    } else if (userOptions === 'scissors') {
        if (computerOption === 'paper') {
            console.log('La tijera le gana al papel');
            console.log('User Wins');
        } else {
            console.log('La piedra le gana a la tijera');
            console.log('Computer Wins');
        }
    }
}