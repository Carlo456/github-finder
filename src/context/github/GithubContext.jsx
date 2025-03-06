import { createContext, useState, useReducer } from "react";
import githubReducer from "./GithubReducer";

export const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    //const [users, setUsers] = useState([]);
    //const [loading, setLoading] = useState(true);

    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    //helper function
    const searchUsers = async (text) => {

        const params = new URLSearchParams({
            q: text
        });

        setLoading();
        try {
            const response = await fetch(`${GITHUB_URL}/search/users?${params}`,
                {
                    headers: {
                        Authorization: `token ${GITHUB_TOKEN}`
                    }
                });
            const { items } = await response.json();
            
            dispatch({
                type: 'GET_USERS',
                payload: items
            });

        } catch (error) {
            console.error("Something happened while making your request...", error)
        }
    }
    const emptyUsersArray = () => {
        dispatch({
            type: 'EMPTY_USERS_ARRAY',
            payload: []
        })
    }
    //helper context functions
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    });

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        emptyUsersArray
    }}>
        { children }
    </GithubContext.Provider>
}
