import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='h-screen bg-quiz bg-cover flex items-center justify-center'>
        <div className='flex flex-col items-center gap-5'>
        <h1 className='font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>Quiz</h1>
        <Link to='/quiz'><button className='font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 rounded-full hover:scale-105 ease-in-out duration-100 '>Let's Start</button></Link>
        </div>
        
    </div>
  )
}

export default Main;