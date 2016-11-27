/**
 * Created by ali on 16-11-26.
 */
import React from 'react';
import shallowCompare from 'react/lib/shallowCompare'
class Winner extends React.Component{
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
    render() {
        return <div className="winner">
                Winner is {this.props.winner}!
            </div>;
    }
}

module.exports = Winner;


