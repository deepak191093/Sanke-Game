import React from "react";

class Snake extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                {
                    this.props.snakeDots.map((dot, i=0)=>{
                    return (<div className={i%2==0 ?"snake-dots-1" : "snake-dots-2"} style={{left: `${dot[0]*20}px`, top: `${dot[1]*20}px` }} key={i++} />)
                    })
                }
            </div>
        );
    }
}

export default Snake;