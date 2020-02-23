import React, { Component } from 'react';

// implement static contextType;
// on click call toggleTheme;

class ClassTwo extends Component {
    render() {
        return (
            <button className={`dark-theme-button`}>Toggle Theme</button>
        );
    }
}

export default ClassTwo;