import React from 'react'
import { useEffect, useState } from 'react';

//components
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const UsersResults = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetchUsers();
        console.log(users)
    },[])

    //helper functions
    const fetchUsers = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`,
                {
                    headers: {
                        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
                    }
                });
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error("Something happened while making your request...", error)
        }
    } 


    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )    
    } else {
        return (
            <Spinner/>
        )
    }
    
}

export default UsersResults