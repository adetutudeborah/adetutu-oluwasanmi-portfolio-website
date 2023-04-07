import React from 'react';
import './Hero.css'; 
 
function Hero() { 
    return(
     <div className='herocontainer'>  

         <div className='heroheader'>
            <h1 className='herointro'>Nice to meet you! <br /> I’m <span className='heroname'>Adetutu Oluwasanmi</span></h1>
            <p className='herodescription'> I'm a front-end developer who is passionate about building and improving web applications</p>
         </div>

         <div>
            <a href="https://drive.google.com/file/d/1aVnOInwvvaX6NcImkzYhlzRSg094gZqY/view?usp=sharing" target='_blank' className='myresume'>My resume</a>
         </div>
    </div>    
    )
}

export default Hero;