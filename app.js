import { GameBoard } from "./src/GameBoard.js";
import { Snake } from "./src/Snake.js";
import { Food } from "./src/Food.js";

const boardSize = 20;

const gameBoard = new GameBoard( boardSize );
const snake = new Snake( boardSize );
let food = new Food(boardSize, snake.getCoordinates());

const intervalId = setInterval(() => {

    const newHead = snake.calculateNewHead(boardSize);

    const snakeCoordinates = snake.getCoordinates();
    const foodCoordinates = food.y + '-' + food.x

    if (snakeCoordinates.includes(newHead) ) {
        gameBoard.gameOver();
        clearInterval(intervalId);
    } else {
        snake.unshift(newHead);
    }

    if (snakeCoordinates == snakeCoordinates[0]) {
    } else if (foodCoordinates == snakeCoordinates[0]) {
        //genereerime uue toidu
        food = new Food(boardSize, snakeCoordinates);
    } else {
        //eemaldame ussi lõpust lüli
        snake.pop();
    }
    gameBoard.draw(snake.getCoordinates(), food);
}, 500);

