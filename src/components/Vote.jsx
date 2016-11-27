/**
 * Created by ali on 16-11-26.
 */
/**
 * Created by ali on 16-11-25.
 */
import React from 'react';
import shallowCompare from 'react/lib/shallowCompare'
export default React.createClass({
    
    getPair: function() {
        return this.props.pair || [];
    },
    isDisabled: function() {
        return !!this.props.hasVoted;
    },
    hasVotedFor: function (entry) {
        return this.props.haseVoted === entry;
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        // pure render
        return shallowCompare(this, nextProps, nextState);
    },
    render: function() {
        return <div className="voting">

            {this.renderComponent()}
        </div>;
    },

    renderComponent: function(){
        let itemArr = [];
        this.getPair().map((entry) => {
            itemArr.push(
                <button key={entry}
                        disabled={this.isDisabled()}
                        onClick={() => this.props.vote(entry)}
                >
                    <h1>{entry}</h1>
                    {this.hasVotedFor(entry) ? <div className="label">Voted</div> : null }
                </button>
            );
        });
        return itemArr;
    }
});
