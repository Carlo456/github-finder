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
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    //helper function

    //fetch multiple users on query
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
    
    // Get single user
    const getUser = async ( login ) => {

        setLoading();
        try {
            const response = await fetch(`${GITHUB_URL}/users/${login}`,
                {
                    headers: {
                        Authorization: `token ${GITHUB_TOKEN}`
                    }
                });
            
            if(!response.ok) {              
                window.location = '/not_found';
            } else {
                const data = await response.json();
            
                dispatch({
                    type: 'GET_USER',
                    payload: data
                });
            }
            
        } catch (error) {
            console.error("Something happened while trying to get the user...", error)
        }
    }

    //Empty user array 
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
        user: state.user,
        loading: state.loading,
        searchUsers,
        getUser,
        emptyUsersArray
    }}>
        { children }
    </GithubContext.Provider>
}
