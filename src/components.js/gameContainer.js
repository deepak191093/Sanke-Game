import React from "react";
import foodGenerator from "./foodGenerator";
import Snake from "./snake";
class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodLocation: foodGenerator(),
      snakeDots: [[0, 0], [1, 0], [2, 0],[3, 0], [4, 0]],
      direction: "RIGHT"
    };
    this.onDirection = this.onDirection.bind(this);
    this.snakeMovement = this.snakeMovement.bind(this);
    this.boundry = this.boundry.bind(this);
    this.onGameOver = this.onGameOver.bind(this);
    this.hitItself = this.hitItself.bind(this);
    this.eatFood = this.eatFood.bind(this);
  }

  componentDidMount() {
    setInterval(this.snakeMovement, 200);
    document.onkeydown = this.onDirection;
  }

  
  componentDidUpdate()
  {
    this.hitItself();
    this.boundry();
    
  }
  onDirection = event => {
    event = event || window.event;
    switch (event.keyCode) {
      case 37:
        this.setState({ direction: "LEFT" });
        console.log("LEFT");
        break;
      case 38:
        this.setState({ direction: "UP" });
        console.log("UP");
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        console.log("RIGHT");
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        console.log("DOWN");
        break;
    }
  };

  snakeMovement() {
    let co_ordinates = [...this.state.snakeDots];
    let snakeHead = co_ordinates[co_ordinates.length - 1];
    switch (this.state.direction) {
      case "RIGHT":
        snakeHead = [snakeHead[0] + 1, snakeHead[1]];
        break;
      case "LEFT":
        snakeHead = [snakeHead[0] - 1, snakeHead[1]];
        break;
      case "DOWN":
        snakeHead = [snakeHead[0], snakeHead[1] + 1];
        break;
      case "UP":
        snakeHead = [snakeHead[0], snakeHead[1] - 1];
        break;
    }
    co_ordinates.push(snakeHead);
    co_ordinates.shift();
    this.setState({ snakeDots: co_ordinates });
  }

  boundry(){ 
    let head = this.state.snakeDots[this.state.snakeDots.length -1];
    if (head[0] >= 25 || head[1] >= 25 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  } 
  
  onGameOver()
  {
    alert("Game Over");
    this.setState({snakeDots: [[0, 0], [1, 0], [2, 0],[3,0],[4,0]],direction: "RIGHT"})
  }

  hitItself()
  {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length -1];
    snake.pop();
    snake.forEach((dot) => {
      if(head[0] == dot[0] && head[1] == dot[1])
      {
        this.onGameOver();
      }}) 
  }

  render() {
    return (
      <div>
        <span id="span-1">
          <img src="./resources/images/logo.png" id="logo" />
          <p className="YOUR-SCORE">YOUR SCORE</p>
          <div className="gameContainer">
            <Snake snakeDots={this.state.snakeDots} />
            <div
              className="food"
              style={{
                top: this.state.foodLocation[0] * 20 + "px",
                left: this.state.foodLocation[1] * 20 + "px"
              }}
            ></div>
          </div>
        </span>
        <span id="span-2"></span>
      </div>
    );
  }
}

export default GameContainer;
