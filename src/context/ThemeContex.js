import React, { createContext, useState, useContext, useReducer } from "react";

export const ThemeContext = createContext({});

export const useTheme = () => {
        useContext(ThemeContext);
    }

export const useThemeUpdate = () => {
        useContext(ThemeContext);
    }

const INITIAL_STATE = {
    score: 0,
    setScore: () => {},
    title: '',
    setTitle: () => {},
    todoList: [],
    setToDoList: () => {},
}

export const ACTION_TYPES = {
    INCREMENT_SCORE : 'INCREMENT_SCORE',
    DECREMENT_SCORE : 'DECREMENT_SCORE',
    ADD_TODO : 'ADD_TODO',
    ADD_TITLE : 'ADD_TITLE'
}

const newTodo = (title) => {
    return {id: Date.now(), title: title, complete: false }
}

const reducer = (state, action) => {
    const {type, payload} = action;

    switch(type){

        case ACTION_TYPES.INCREMENT_SCORE : 
            return {...state, score: payload}

        case ACTION_TYPES.DECREMENT_SCORE : 
            return {...state, score: payload}
        
        case ACTION_TYPES.ADD_TODO : 
            return [...state, newTodo(payload)]
        
        default :
            return state
    }

}

export const ThemeProvider = ({children}) => {

    const [darkTheme, setDarkTheme] = useState(false);
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


    // const increment = () => {
    //     setScore(previouScore => previouScore + 1);
    // }
    // const decrement = () => {
    //     setScore(previouScore => previouScore - 1);
    // }

    const toggleTheme = () => {
        setDarkTheme((previusDarkTheme) => !previusDarkTheme);
    }

    const value = {darkTheme, setDarkTheme, toggleTheme, dispatch, state}

    return(
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}






























// import React, {useState, createContext} from "react";


// export const ThemeContext = createContext({});

// export const ThemeProvider = ({children}) => {

//     const [darkTheme, setDarkTheme] = useState(false);

//     const toggleTheme = () => {
//         setDarkTheme(previousDarkTheme => !previousDarkTheme);
//     }

//     const value = {darkTheme, toggleTheme, setDarkTheme };

//     return(
//         <ThemeContext.Provider value={value}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

