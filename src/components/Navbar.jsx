import React from 'react'


export default function Navbar() {
  return (
    <>
        <div className='d-flex justify-content-evenly '>
            <div>Logo</div>
            <div>
                <a href="/">Home</a>
                <a href="/">Explore</a>
                <a href="/">Tv Shows</a> 
                {/* <button type="button" class="btn btn-primary">Primary</button> */}

            </div>
            <div>
                <input type="text" placeholder='enter your query'/>
                <button type="button">Search</button>
            </div>
            <div>
                <a href="/">Log In</a>
                <a href="/">Sign up</a>
            </div>

        </div>
      </>
  )
}
