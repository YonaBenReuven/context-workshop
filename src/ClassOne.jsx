import React, { Component } from 'react';

// implement Context.Consumer;
// display theme (in the right language) and make the text color match;

class ClassOne extends Component {
    render() {
        return (
            <div className={`dark-theme-clr`}>dark</div>
        );
    }
}

export default ClassOne;