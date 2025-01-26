//This is the class for the Deck that has 3 arrays.  Each deck will always have the same card suits and series of values.  
class Deck {
    constructor(suit, value, cards){

        this.cardSuits = ["Spades \u2660", "hearts \u2665", "diamonds \u2666", "clubs \u2663" ];
        this.value = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        this.deck = [];
    }
    describe(){
        console.log(this.cardSuits.forEach(element => {
            console.log(element);
    }));
    }
    //This method creates the deck
    createDeck(){
        for (let i=0; i < this.cardSuits.length; i++){
            for (let b=0; b < this.value.length; b++){
                let card = {
                    name: `${this.value[b]} of ${this.cardSuits[i]}`,
                    value: b + 1
                }
                this.deck.push(card);
                
            }
            
        }
    }
}
//This is the class of player used to create player objects
class Player {
    constructor (name, hand, score){
        this.name = ``;
        this.hand = [];
        this.score = 0;

    }

}
//This is the main game class
class War {
    constructor(){
        //These create objects of the classes outlined above
        this.warDeck = new Deck
        this.player1 = new Player
        this.player2 = new Player
    }
    //This is the main method that is used to run the rest of the game
    start(){

        this.warDeck.createDeck();
        this.shuffleDeck(this.warDeck.deck);
        this.player1.hand = this.warDeck.deck.slice(0, 26)
        this.player2.hand = this.warDeck.deck.slice(26,52)
        this.playHand();
        this.declareWinner();

         
    }
    //This is the method to shuffle the deck - this is a slightly modified variation of the Fisher-Yates shuffle algorithm.
    shuffleDeck(deck){
        for (let i = deck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = deck[i];
          deck[i] = deck[j];
          deck[j] = temp;
        }
      }

    //This is the function that plays the game.  Each iteration compares index value 0, increases the appropriate score, console.logs info, and then discards index 0
    playHand(){

        this.player1.name = `Player 1`
        this.player2.name = `Player 2`
        for(let i=25;i> -1;i--){
            if(this.player1.hand[0].value > this.player2.hand[0].value){
                this.player1.score += 1;
                console.log(`${this.player1.name} played a ${this.player1.hand[0].name}
                ${this.player2.name} played a ${this.player2.hand[0].name}
                    
                    PLAYER 1 WINS!
                    
                    ${this.player1.name} score: ${this.player1.score}
                    ${this.player2.name} score: ${this.player2.score}`);
                
                this.player1.hand.shift();
                this.player2.hand.shift();
            }else if (this.player2.hand[0].value > this.player1.hand[0].value){
                this.player2.score += 1;
                console.log(`${this.player1.name} played a ${this.player1.hand[0].name}
                    ${this.player2.name} played a ${this.player2.hand[0].name}
                    
                    PLAYER 2 WINS!
                    
                    ${this.player1.name} score: ${this.player1.score}
                    ${this.player2.name} score: ${this.player2.score}`);

                this.player1.hand.shift();
                this.player2.hand.shift();
            }else {
                console.log(`${this.player1.name} played a ${this.player1.hand[0].name}
                    ${this.player2.name} played a ${this.player2.hand[0].name}
                    
                    TIE - No winner!
                    
                    ${this.player1.name} score: ${this.player1.score}
                    ${this.player2.name} score: ${this.player2.score}`);
                this.player1.hand.shift();
                this.player2.hand.shift();
            }

        }
    }

    //This method is used to compare final scores and declare the winner
    declareWinner(){
        if(this.player1.score > this.player2.score){
            console.log(`${this.player1.name} is the WINNER!`);
        }else if (this.player2.score > this.player1.score){
            console.log(`${this.player2.name} is the WINNER!`);
        }else{
            console.log(`It's a tie game!`)
        }
    }
}
    


//Create the new object of class War and run the program with the .start() method
let newWar = new War
newWar.start();


//let player1 = new Player()
//let player2 = new Player()

//console.log("Spades \u2660" );
//console.log( '\u03A9' );
/*let myDeck = new Deck();
myDeck.createDeck();
console.log(myDeck.cardSuits)

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffleArray(myDeck.deck);
  console.log(myDeck.deck); */