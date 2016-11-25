/**
 * Created by ali on 16-11-24.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
    <Voting pair={pair} />,
    document.getElementById('app')
);