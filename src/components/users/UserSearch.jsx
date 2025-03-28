import React, { useState, useContext } from 'react'
import { GithubContext } from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const UserSearch = () => {

    const [text, setText] = useState('');
    const { users, searchUsers, emptyUsersArray } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);

    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if(text === ''){
            setAlert('Please enter something...', 'error')
        } else {
            searchUsers(text);
            setText('');
        }
    }

    const handleClear = () => {
        emptyUsersArray();
        setText('');
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input 
                            type="text"
                            value={text}
                            onChange={handleChange} 
                            className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                            placeholder='Search...'
                        />
                        <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
                    </div>
                </div>
            </form>
        </div>
        { users.length > 0 && (
            <div>
                <button className="btn btn-ghost btn-lg" onClick={handleClear}>Clear</button>
            </div>
        )}   
    </div>
  )
}

export default UserSearch