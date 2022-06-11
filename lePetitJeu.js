/*Règles :
Le jeu comprend 2 joueurs sur un seul et même écran.
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le
résultat d’un lancer est ajouté au ROUND.
Lors de son tour, le joueur peut décider à tout moment de:
- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l’autre joueur.
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.*/

let gamePlay ;let globalScore ;let roundScore ; let player;var dice

restart();


//fonction pour le lancer de dé (roll dice)
document.getElementById("roll").addEventListener('click',function(){
  if (gamePlay){
    dice = Math.floor(Math.random()*6)+1;
  
//Afficher le resultat
let diceDOM= document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'face-'+ dice + '.png';

//Ajout du score à roundScore si le dé ne tombe pas sur 1
if (dice !==1){
  roundScore+=dice;

  

document.querySelector('#roundScore-'+ player).textContent = roundScore;
}else{
  nextPlayer();
}
}
});


//ajout d'un évènement sur le click du bouton 'HOLD'
document.getElementById('hold').addEventListener('click',function(){
  if(gamePlay){
    globalScore[player]+=roundScore;//le roundScore du joueur actif s'ajoute au globalScore
  
  document.querySelector('#score-'+player).textContent = globalScore[player];

if (globalScore[player]>= 100){

document.querySelector('#player-'+ player).textContent = 'Bravo ! Vous avez gagné !';
document.querySelector('.dice').style.display ='none';
document.querySelector('#player-'+player+'.side-').classList.add('winner')
document.querySelector('#player-'+player + '.side-').classList.remove('active');
gamePlay=false;
}else{
  nextPlayer();
}
}
}
);

function nextPlayer(){
  player ===0 ? player = 1: player =0; roundScore =0;

  document.getElementsById('roundScore-1').textContent = "0";
  document.getElementsById('roundScore-2').textContent = "0";

  document.querySelector('.side-left').classList.toggle('active');
  document.querySelector('.side-right').classList.toggle('active');
  document.querySelector('.side-left').classList.remove('active');
  document.querySelector('.side-right').classList.add('active');
  
  document.querySelector('.dice').style.display= 'none';
}
//reinitialisation de la partie
document.getElementById("new").addEventListener('click',restart);

function restart(){
roundScore = [0,0];
globalScore =  0;
player = 0;
gamePlay = true;
console.log("le score est remis à 0")

document.querySelector('.dice').style.display ='none';

document.getElementById('score-1').textContent = '0';
document.getElementById('score-2').textContent = '0';

document.getElementById('roundScore-1').textContent = "0";
document.getElementById('roundScore-2').textContent = "0";

document.querySelector('.side-left').classList.remove('winner')
document.querySelector('.side-right').classList.remove('winner')
document.querySelector('.side-left').classList.remove('active')
document.querySelector('.side-right').classList.remove('active')
document.querySelector('.side-left').classList.add('active');
}

document.querySelector('#roundScore-'+ player).textContent = dice;
document.querySelector('#roundScore-'+ player).innerHTML = '<span>'+ dice+ '</span>';
let x = document.querySelector('#score-1').textContent;







//A chaque tour, le joueur a son round initialisé à 0
