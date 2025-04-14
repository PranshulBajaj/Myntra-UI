function getCompChoice(){
  let random= Math.ceil(Math.random()*3);
  if(random===1){
    return 'Bat';
  }
  else if(random===2){
    return 'Ball';
  }
  else{
    return 'Stump';
  }
}
let score={
  win:0,
  lost:0,
  tie:0,
};
function getResult(userChoice,compChoice){
  if(userChoice==='Bat'&&compChoice=='Ball'){
    score.win++;
    return ('You won.');
  }
  else if(userChoice==='Ball'&&compChoice=='Bat'){
    score.lost++;
    return ('Computer won.');
  }
  else if(userChoice==='Bat'&&compChoice=='Stump'){
    score.lost++;
    return ('Computer won.');
  }
  else if(userChoice==='Ball'&&compChoice=='Stump'){
    score.win++;
    return ('You won.');
  }
  else if(userChoice==='Stump'&&compChoice=='Bat'){
    score.win++;
    return ('You won.');
  }
  else if(userChoice==='Stump'&&compChoice=='Ball'){
    score.lost++;
    return ('Computer won.');
  }
  else{
    score.tie++;
    return (`It's a Tie.`);
  }
}
function showResult(userChoice){
  let compChoice = getCompChoice();
  alert(`Your choice is ${userChoice}. Computer choice is ${compChoice}. 
  ${getResult(userChoice,compChoice)}
  Win : ${score.win} , Lost : ${score.lost} , Tie : ${score['tie']}`);
}