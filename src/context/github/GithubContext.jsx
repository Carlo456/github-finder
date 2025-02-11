import { createContext, useState } from "react";

export const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    //helper functions
    const fetchUsers = async () => {
        try {
            const response = await fetch(`${GITHUB_URL}/users`,
                {
                    headers: {
                        Authorization: `token ${GITHUB_TOKEN}`
                    }
                });
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error("Something happened while making your request...", error)
        }
    }
    return <GithubContext.Provider value={{
        users,
        loading,
        fetchUsers
    }}>
        { children }
    </GithubContext.Provider>
}
