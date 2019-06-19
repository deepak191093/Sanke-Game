import React from "react";
import foodGenerator from "./foodGenerator";
class GameContainer extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            foodLocation : foodGenerator(),
        };
    }

    render()
    {
        return(
            <div className="gameContainer">
                <div className="snake-dots-1" style={{top:"40px", left:"100px"}}></div>
                <div className="snake-dots-2" style={{top:"20px", left:"100px"}}></div>
                <div className="food" style = {{ top:this.state.foodLocation[0]*20+"px",  left:this.state.foodLocation[1]*20+"px"}} ></div>
            </div>
        );
    }
    
}

export default GameContainer;