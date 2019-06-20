import React from "react";
import foodGenerator from "./foodGenerator";
import Snake from "./snake";
class GameContainer extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            foodLocation : foodGenerator(),
            snakeDots : [[0, 0], [1, 0],[2, 0]],
            direction : 'RIGHT'
        };
        this.onDirection =  this.onDirection.bind(this);
        this.snakeMovement = this.snakeMovement.bind(this);
    }

    componentDidMount(){
        setInterval(this.snakeMovement, 100);
        document.onkeydown = this.onDirection;
        
    }

    onDirection = (event) =>{
        event = event ||window.event;
        switch(event.keyCode)
        {
            case 37:
                    this.setState({direction : 'LEFT'});
                    console.log("LEFT")
                    break;
            case 38:
                    this.setState({direction : 'UP'});
                    console.log("UP");
                    break;
            case 39:
                    this.setState({direction : 'RIGHT'});
                    console.log("RIGHT");
                    break;
            case 40:
                    this.setState({direction : 'DOWN'});
                    console.log("DOWN")
                    break;
        }

    }

    snakeMovement()
    {
        let co_ordinates = [...this.state.snakeDots];
        let snakeHead = co_ordinates[co_ordinates.length - 1];
        switch(this.state.direction)
        {
            case 'RIGHT':
                    snakeHead = [snakeHead[0] + 1, snakeHead[1]];
                    break;
            case 'LEFT':
                    snakeHead = [snakeHead[0] - 1, snakeHead[1]];
                    break;
            case 'DOWN':
                    snakeHead = [snakeHead[0], snakeHead[1] + 1];
                    break;
            case 'UP':
                    snakeHead = [snakeHead[0], snakeHead[1] - 1];
                    break;
        }
        co_ordinates.push(snakeHead);
        co_ordinates.shift();
        this.setState({snakeDots : co_ordinates})
    }
    render()
    {
        return(
            <div>
            <span id="span-1">
                <img src="./resources/images/logo.png" id="logo"/>
                <p className="YOUR-SCORE">YOUR SCORE</p>
                <div className="gameContainer">
                    <Snake snakeDots={this.state.snakeDots} />
                    <div className="food" style = {{ top:this.state.foodLocation[0]*20+"px",  left:this.state.foodLocation[1]*20+"px"}} ></div>
                </div>
            </span>
            <span id="span-2">

            </span>
            </div>
        );
    }
    
}

export default GameContainer;