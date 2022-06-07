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

let play ;let globalScore ;let roundScore ; let player;




//fonction pour creer l'evenement cliquer sur le bouton new game et reinitialiser une partie

$("#new").click(function() {
  confirm("Vous aller démarrer une nouvelle partie");

 if (confirm('Reinitialisation des points')){
  //action à faire pour la valeur true
  restart(global,round) 
console.log("reinitialisation")
}else{
  (confirm('La partie continue'))
  //action à faire pour la valeur false
console.log("La partie continue !");
}
}
);

function restart(scoreGlobal,scoreProvisoire){
scoreGlobal == 0;
scoreProvisoire== 0;
console.log("le score est remis à 0")
}

//Ajout du score à round si le dé ne tombe pas sur 1
if (dice !==1){
  roundScore+=dice;
}



//A chaque tour, le joueur a son round initialisé à 0
