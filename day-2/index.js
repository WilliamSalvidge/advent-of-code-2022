const fs = require('fs').promises;

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const WIN = 6;
const LOSS = 0;
const DRAW = 3;

const scores = (game) => {
    switch (game[0]) {
        case 'A':
            switch (game[1]) {
                case 'X':
                    return ROCK + DRAW;
                case 'Y':
                    return PAPER + WIN;
                case 'Z':
                    return SCISSORS + LOSS;
            }
        case 'B':
            switch (game[1]) {
                case 'X':
                    return ROCK + LOSS;
                case 'Y':
                    return PAPER + DRAW;
                case 'Z':
                    return SCISSORS + WIN;
            }
        case 'C':
            switch (game[1]) {
                case 'X':
                    return ROCK + WIN;
                case 'Y':
                    return PAPER + LOSS;
                case 'Z':
                    return SCISSORS + DRAW;
            }
        default:
            return 0;
    }
}

const scoresTwo = (game) => {
    switch (game[0]) {
        case 'A':
            switch (game[1]) {
                case 'X':
                    return SCISSORS + LOSS;
                case 'Y':
                    return ROCK + DRAW;
                case 'Z':
                    return PAPER + WIN;
            }
        case 'B':
            switch (game[1]) {
                case 'X':
                    return ROCK + LOSS;
                case 'Y':
                    return PAPER + DRAW;
                case 'Z':
                    return SCISSORS + WIN;
            }
        case 'C':
            switch (game[1]) {
                case 'X':
                    return PAPER + LOSS;
                case 'Y':
                    return SCISSORS + DRAW;
                case 'Z':
                    return ROCK + WIN;
            }
        default:
            return 0;
    }
}

async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const splitData = data.split('\n')
        const resultsOne = splitData
                            .map(x => x.split(' '))
                            .map(game => scores(game))
                            .reduce((acc, cur) => acc + cur, 0);
        console.log(resultsOne); 

        const resultsTwo = splitData
                            .map(x => x.split(' '))
                            .map(game => scoresTwo(game))
                            .reduce((acc, cur) => acc + cur, 0);
        console.log(resultsTwo);                             
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

readFile('data.txt');

