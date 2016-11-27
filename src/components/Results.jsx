/**
 * Created by ali on 16-11-27.
 */

import React from 'react';
import shallowCompare from 'react/lib/shallowCompare';

class Results extends React.Component{
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
            <div>Hello from resussss</div>
        )
    }
}
module.exports = Results;