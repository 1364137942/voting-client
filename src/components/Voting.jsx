/**
 * Created by ali on 16-11-25.
 */
import React, {Component} from 'react';

class Voting extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    getPair(){
        return this.props.pair || [];
    }

    render(){
        return(
            <div className="voting">
                {this.getPair().map((entry) => {
                    return (
                        <button key={entry}>
                            <h1>{entry}</h1>
                        </button>
                    )
                })}
            </div>
        )
    }
}

module.exports =  Voting;