import React from 'react';
import './Hero.css';  
 
function Hero() { 
    return( 
     <div className='herocontainer'>  
 
         <div className='heroheader'>
            <h1 className='herointro'>Nice to meet you! <br /> I’m <span className='heroname'>Adetutu Oluwasanmi</span></h1>
            <p className='herodescription'> 
            I'm a front-end developer who is passionate about building and improving web applications. 
            I am always looking for ways to improve front-end design and the user experience. 
            I'm excited to work with a great team to create high-quality sotware solutions using my coding and problem-solving skills.</p>
         </div>

         <div>
            <a href="" target='_blank' className='myresume'>My resume</a>
         </div>
         
    </div>    
    )
}

export default Hero;