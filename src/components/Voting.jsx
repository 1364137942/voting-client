/**
 * Created by ali on 16-11-25.
 */
import React from 'react';
import Vote from './Vote';
import Winner from './Winner';
import shallowCompare from 'react/lib/shallowCompare'
class Voting extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    shouldComponentUpdate(nextProps, nextState) {
        // pure render
        return shallowCompare(this, nextProps, nextState);
    }
    render(){
        return (
            <div>
                {this.renderComponent()}
            </div>
        )
    }

    renderComponent(){
        return this.props.winner ?
            <Winner ref="winner" winner={this.props.winner}/> :
            <Vote {...this.props}/>
    }
}

module.exports = Voting;