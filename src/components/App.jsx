/**
 * Created by ali on 16-11-26.
 */
import React from 'react';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

class App extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render(){
        return(
            React.cloneElement(this.props.children, {pair: pair})
        );
    }
}

module.exports = App;
