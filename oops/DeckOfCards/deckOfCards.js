/******************************************************************************
 *  Compilation:  csc.exe /t:exe /out: tsc binary.ts
 *  Execution:    node deckOfCards.js
 *  
 *  Purpose:      Shuffle the cards using Random method and then distribute 9 Cards to 4 Players 
 *                and print the cards received by the 4 Players using 2D Array
 *                
 *               
 *
 *  @author  Aniket Nikam
 *  @version 8.10.0
 *  @since   24-06-2019
 *
 ******************************************************************************/

var suit = ["Clubs", "Diamonds", "Hearts", "Spades"]
var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
var rand = 0
var twoD = []

/*Deck of 52 cards is generated using below method*/
function generateDeck() {

    var deck = new Array()
    for (var i = 0; i < suit.length; i++) {

        for (var j = 0; j < rank.length; j++) {

            var cards = suit[i] + " " + rank[j] + " "

            deck.push(cards)
        }
    }
    return deck
}

/* random 9 cards selected and distributed amongst four players and created a twoD array*/
selectRandom9()
function selectRandom9() {

    /*Getting deck of 52 cards created in previous method to perform operations*/
    var deck = generateDeck()

    /*creating four players as per requirement*/
    for (var j = 1; j <= 4; j++) {

        var player = new Array()
        console.log("player " + j + " will get ----------------->")
        console.log()
        for (i = 1; i <= 9; i++) {

            /*Randomly generating a card 9 times from the deck of 52 cards*/
            rand = deck[Math.floor(Math.random() * deck.length)];

            /* Getting the index of randomly generated card from the deck array*/
            var index = deck.indexOf(rand)
            //console.log(i+". "+rand)

            /*Adding 9 cards to the player array*/
            player.push(rand)

            /*Removing the card from the deck array with its index*/
            deck.splice(index, 1)

        }
        /*Pushing player array to twoD array so that all the four players will be added in the twoD array*/

        twoD.push(player);
        console.log(" " + player)  //to get the horizontal output displayed player array
        console.log()

    }
    console.log("Deck containing remaining 16 cards: ")
    console.log(deck)
    //console.log("Two D array containing cards for all players is: ")
    //console.log(twoD)
    return twoD
}


module.exports={
    generateDeck,selectRandom9
}