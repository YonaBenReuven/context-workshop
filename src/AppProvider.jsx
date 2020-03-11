import React, { Component } from 'react';

// import createContext;
// call and asign it to a constant and export;
// implement Context.Provider and asign a value;
// wrap the provider around this.props.children;

class AppProvider extends Component {
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

    toggleLanguage = () => {
        const language = this.state.language === "English" ? "Hebrew" : "English";
        this.setState({ language });
    }

    render() {
        return null;
    }
}

export default AppProvider;