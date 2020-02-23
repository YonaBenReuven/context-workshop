import React, { Component } from 'react';

import ClassOne from './ClassOne';
import ClassTwo from './ClassTwo';
import Func from './Func';

import './App.css';

// import createContext;
// asign it to a constant and export;
// implement Context.Provider and asign a value;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark",
            language: "English"
        }
    }

    toggleTheme = () => {
        const theme = this.state.theme === "dark" ? "light" : "dark";
        this.setState({ theme });
    }

    toggleTLanguage = () => {
        const language = this.state.language === "English" ? "Hebrew" : "English";
        this.setState({ language });
    }

    render() {
        return (
            <div className={`App ${this.state.theme}-theme-bg`}>
                <ClassOne />
                <ClassTwo />
                <Func />
            </div>
        );
    }
}

export default App;