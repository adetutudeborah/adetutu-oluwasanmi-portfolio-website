import React from 'react';
import './Hero.css';  
 
function Hero() { 
    return( 
     <div className='herocontainer'>  
 
         <div className='heroheader'>
            <h1 className='herointro'>Nice to meet you! <br /> I’m <span className='heroname'>Adetutu Oluwasanmi</span></h1>
            <p className='herodescription'> 
            I'm a front-end developer passionate about building and improving web applications. 
            I'm adept at reproducing a pixel-perfect implementation of a front-end design and am constantly looking for ways to enhance user experience. 
            I'm excited to work with a great team to create high-quality software solutions using my coding and problem-solving skills.</p>
         </div>

         <div>
            <a href="https://drive.google.com/file/d/13MPhCxHv7zN-JXguhE4f3hu-U6XCtN4-/view?usp=sharing" target='_blank' className='myresume'>My resume</a>
         </div>
         
    </div>    
    )
}

export default Hero;