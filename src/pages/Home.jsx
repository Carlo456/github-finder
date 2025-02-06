import React from 'react'

import UsersResults from '../components/users/UsersResults'

const Home = () => {
  console.log(import.meta.env.VITE_GITHUB_URL)
  console.log(import.meta.env.VITE_GITHUB_TOKEN)
  return (
    <>
        <h1 className='text-6xl'>Welcome</h1>
        <UsersResults/>
    </>
  )
}

export default Home