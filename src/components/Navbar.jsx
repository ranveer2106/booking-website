import React from 'react'


export default function Navbar() {
  return (
    <>
        <div className='flex justify-evenly '>
            <div>Logo</div>
            <div>
                <a href="/">Home</a>
                <a href="/">Explore</a>
                <a href="/">Contact Us</a>
            </div>
            <div>
                <input type="text" placeholder='enter your query'/>
                <button type="button">Search</button>
            </div>
            <div>
                <a href="/">Log In</a>
                <a href="/">Sign up</a>
            </div>
            <div>
                <a href="/">Cart</a>
            </div>
        </div>
      </>
  )
}
