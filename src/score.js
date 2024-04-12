class Score {

    score = 0;

    constructor () {
        this.update();
        this.updateHighScore();
    }

    increment () {
        this.score++;
    }

    update () {

        const scoreDiv = document.getElementById('score');
        scoreDiv.innerText = this.score;
    }

    updateHighScore () {
        const highScoreDiv = document.getElementById('high-score');
        highScoreDiv.innerText = this.highScore;

    }

}

export { Score }