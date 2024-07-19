import React from 'react'
import pic1 from '../assets/pic1.webp'

const Home = () => {
  return (
    <center>
      <h1 style={{margin:'30px'}}>Welcome to Blogs Application</h1>

      <img src={pic1} alt="..." style={{height:'400px', width:'700px'}}/>
    </center>
  )
}

export default Home
