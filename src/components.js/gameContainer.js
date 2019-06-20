import React from "react";
import foodGenerator from "./foodGenerator";
import Snake from "./snake";
class GameContainer extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            foodLocation : foodGenerator(),
            snakeDots : [[0, 0], [1, 0]],
            direction : 'RIGHT'
        };
    }

    componentDidMount(){
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
                    console.log("DOWN");
                    break;
        }

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