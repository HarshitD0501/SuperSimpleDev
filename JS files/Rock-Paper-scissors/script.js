let score = JSON.parse(localStorage.getItem('score'));

    if (!score) {
      score = {
        wins: 0,
        loss: 0,
        tie: 0
      };
    }

    document.body.addEventListener('keydown',(event)=>{
      if(event.key==='r'){
        playerMove('rock');
      }else if(event.key==='p'){
        playerMove('paper');
      }else if (event.key==='s'){
        playerMove('scissors');
      }
    })

    update();

    let result = '';
    let computer = '';

    function playerMove(move) {
      computerMove();
      if (move === 'rock') {
        if (computer === 'rock') result = 'Tie';
        else if (computer === 'paper') result = 'You Lose';
        else result = 'You Win';
      }

      if (move === 'paper') {
        if (computer === 'rock') result = 'You Win';
        else if (computer === 'paper') result = 'Tie';
        else result = 'You Lose';
      }

      if (move === 'scissors') {
        if (computer === 'rock') result = 'You Lose';
        else if (computer === 'paper') result = 'You Win';
        else result = 'Tie';
      }

      if (result === 'You Win') {
        score.wins++;
      } else if (result === 'You Lose') {
        score.loss++;
      } else {
        score.tie++;
      }

      localStorage.setItem('score', JSON.stringify(score));
      update();
      document.querySelector('.js-result').innerHTML=result;
      document.querySelector('.js-move').innerHTML=`You 
    <img class="rock" src="https://supersimple.dev/projects/rock-paper-scissors/images/${move}-emoji.png" alt="" >
    <img class="rock" src="https://supersimple.dev/projects/rock-paper-scissors/images/${computer}-emoji.png" alt="">
    Computer`;
    }
    

    function update() {
      document.querySelector('.js-para').innerHTML =
        `Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.tie}`;
    }

    function computerMove() {
      const randomNum = Math.random();

      if (randomNum < 1 / 3) {
        computer = 'rock';
      } else if (randomNum < 2 / 3) {
        computer = 'paper';
      } else {
        computer = 'scissors';
      }
    }
