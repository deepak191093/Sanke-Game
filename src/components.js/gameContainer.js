import React from "react";
import foodGenerator from "./foodGenerator";
import Snake from "./snake";

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodLocation: foodGenerator(),
      snakeDots: [[0, 0], [1, 0], [2, 0]],
      direction: "RIGHT",
      count : {RIGHT: 0, LEFT : 0 , UP: 0 , DOWN :0},
      score: 0,
      userName: null
    };
    this.onDirection = this.onDirection.bind(this);
    this.snakeMovement = this.snakeMovement.bind(this);
    this.boundry = this.boundry.bind(this);
    this.onGameOver = this.onGameOver.bind(this);
    this.hitItself = this.hitItself.bind(this);
    this.eatFood = this.eatFood.bind(this);
  }
  //---------------------------Life-Cycles-Method----------------------------------//
  componentWillMount() {
    let user =  localStorage.getItem("userNameEmail");
    this.setState({ userName: user }  );
    console.log("game continer user==" + user);
  }
  componentDidMount() {
    setInterval(this.snakeMovement, 100);
    document.onkeydown = this.onDirection;
  }

  componentDidUpdate() {
    this.hitItself();
    this.boundry();
    this.eatFood();
    

  }
  //---------------------------Life-Cycles-Method----------------------------------//

  //---------------------------General-Methods------------------------------------//
  onDirection = event => {
    event = event || window.event;
    switch (event.keyCode) {
      case 37:
        if (this.state.direction !== "RIGHT")
          this.setState((prevState)=> ({ direction: "LEFT", count : {LEFT : prevState.count.LEFT +1} }));
        break;
      case 38:
        if (this.state.direction !== "DOWN") 
        this.setState((prevState)=> ({ direction: "UP", count : {UP: prevState.count.UP +1} }));
        break;
      case 39:
        if (this.state.direction !== "LEFT")
          this.setState((prevState)=>({ direction: "RIGHT",count : {RIGHT: prevState.count.RIGHT +1} } ) );
        break;
      case 40:
        if (this.state.direction !== "UP")
         this.setState((prevState)=>({ direction: "DOWN",count : {DOWN: prevState.count.DOWN +1} } ));
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

  boundry() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 25 || head[1] >= 25 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  onGameOver() {
    // alert("Game Over");
    this.setState({
      snakeDots: [[0, 0], [1, 0], [2, 0]],
      direction: "RIGHT",
      score : 0
    });
  }

  hitItself() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.onGameOver();
      }
    });
  }

  eatFood() {
    let food = this.state.foodLocation;
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let newSnake = [...this.state.snakeDots];
    if (head[0] == food[0] && head[1] == food[1]) {
      this.setState({ foodLocation: foodGenerator() });
      newSnake.unshift([]);
      this.setState({ snakeDots: newSnake, score: ++this.state.score });
    }
  }
  //---------------------------General-Methods------------------------------------//

  //---------------------------Render-Methods------------------------------------//
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img className = "logo"src="./resources/images/logo.png" />
            <p className="YOUR-SCORE" style={{textAlign:"center"}}>YOUR SCORE {this.state.score}</p>
            <div className="gameContainer">
              <Snake snakeDots={this.state.snakeDots} />
              <div
                className="food"
                style={{
                  left: `${this.state.foodLocation[0] * 20}px`,
                  top: `${this.state.foodLocation[1] * 20}px`
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <span className="userName">
            <img className="avatar" src="./resources/images/avatar.png" />
            <span>{this.state.userName}</span>
            </span>
            <p>YOUR RECENT SCORE</p>
            <p>1. 1288550</p>
            <p>2. 1288550</p>
            <p>3. 1288550</p>
            <p>4. 1288550</p>
            <p>5. 1288550</p>
          </div>
                
        </div>
      </div>
    );
  }
}

export default GameContainer;
