import React from 'react'
import anime_spinner from '../../assets/anime_spinner.gif';

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
        <img width={200} className='text-center mx-auto' src={anime_spinner} alt='Loading users...'/>
    </div>
  )
}

export default Spinner