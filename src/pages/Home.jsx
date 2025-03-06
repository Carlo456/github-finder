import React from 'react'

import UsersResults from '../components/users/UsersResults'
import UserSearch from '../components/users/UserSearch'

const Home = () => {
  return (
    <>
        <h1 className='text-6xl pt-10 pb-10'>Welcome</h1>
        <UserSearch/>
        <UsersResults/>
    </>
  )
}

export default Home