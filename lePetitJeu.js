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

let gamePlay ;let globalScore ;let roundScore ; let player;

document.getElementById("roll").addEventListener('click',function(){
  if (gamePlay){
    let dice = Math.floor(Math.random()*6)+1;
  
//Afficher le resultat
let diceDOM= document.querySelector('dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-'+ dice + '.png'

//Ajout du score à roundScore si le dé ne tombe pas sur 1
if (dice !==1){
  roundScore+=dice;

  document.getElementById('')

document.querySelector('#current-'+ player).textContent = roundScore;
}else{
  nextPlayer();
}
}
});



//reinitialisation de la partie
document.getElementById("new").addEventListener('click',restart);

function restart(){
roundScore = [0,0];
globalScore =  0;
player = 0;
gamePlay = true;
console.log("le score est remis à 0")
}





//A chaque tour, le joueur a son round initialisé à 0
