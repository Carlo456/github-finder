import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const UserItem = ({user: { login, avatar_url }}) => {
  return (
    <div className='card shadow-md compact side bg-base-300'>
        <div className='flex-row items-center space-x-4 card-body'>
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt='Profile picture...'/>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='card-title'>{login}</h2>
                <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>
                    Visit profile
                </Link>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem