import React from 'react'
import { useContext } from 'react';

//contexts
import { GithubContext } from '../../context/github/GithubContext';


//components
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const UsersResults = () => {
    const { users, loading } = useContext(GithubContext);
    
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