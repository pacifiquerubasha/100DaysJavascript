
/**
 * 
 * 1. Create one player array for each team
 * 
 */

// const team1 = {
//     name:"Bayern Munich",
//     gk:"Nuer",
//     fieldPlayers:["Sadio", "Mane", "Kimmich", "Frederich", "Some", "One", "Else", "And", "Another", "Player"],
//     substitutes : ["Thiago", "Coutinho", "Perisich"]
// }

// const team2 = {
//     name:"Real Madrid",
//     gk:"Courtois",
//     fieldPlayers:["Benzema", "Vini", "Jr", "Modrich", "Some", "One", "Else", "And", "Another", "Player"],
//     substitutes: ["Rudiger", "Asensio", "Rodrigo"]
// }




// const players1 = [team1.gk, ...team1.fieldPlayers];
// const players2 = [team2.gk, team2.fieldPlayers];

// const allPlayers = [...players1, ...players2];

// const players1Final = [players1, ...team1.substitutes]
// const players2Final = [players2, team2.substitutes]


const game = {
    team1:"Bayern Munchen",
    team2:"Real Madrid",
    players:[

        ["Sadio", "Mane", "Kimmich", "Frederich", "Lewandowski", "Gnarbi", "Hummels", "And", "Another", "Player"],
        ["Benzema", "Vini", "Jr", "Modrich", "Some", "One", "Else", "And", "Another", "Player"],
    ],

    score:'4:0',
    scored:['Lewandowski', 'Gnarbi', 'Lewandowski', 'Hummels' ],
    date:"Nov 9th, 2037",
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    },

};


//PLAYERS FROM THE GAME
const players1 = [...game.players[0]]
const players2 = [...game.players[1]];

//TEAM 1 PLAYERS
const [gk1, ...fieldPlayers1] = players1;
const team1Subtitutes = ["Munir", "DaPlayer", "DaKeeper"]


//TEAM 2 PLAYERS
const [gk2, ...fieldPlayers2] = players2;
const team2Subtitutes = ["Rudiger", "Asensio", "Rodrigo"]


//LIST OF ALL STARTER PLAYERS
const allPlayers = [...players1, ...players2];


//FINAL LIST OF PLAYERS
const player1Final = [...players1, ...team1Subtitutes];
const player2Final = [...players2, ...team2Subtitutes];

const allPlayersFinal = [...player1Final, ...player2Final]

const {team1Odd, draw, team2Odd} = game.odds;


const printGoals = (...players)=>{

    for(const player of players){
        if(game.scored.includes(player)){
            let goals = 0;
            for(let score of game.scored){
                score === player && goals++;
            }

            console.log(player, goals)
        }

    }

    console.log(`Total players passed: ${players.length}`)
}

printGoals(...allPlayersFinal)

const team1Winning = (game.odds.team1 < game.odds.team2) && "Bayern Munich"
const team2Winning = !team1Winning && "Real Madrid"

console.log("TEAM1 WINNING", team1Winning)
console.log("TEAM2 WINNING", team2Winning)