import React from 'react';
import './Footer.css'; 

function Footer() { 
    return(
     <div className='footercontainer'>    
 
            <div className='footerheadername'>
                <p className='footername'>adetutuOluwasanmi</p>
            </div>

            <div className='footericons'>
                <a href='mailto:oluwasanmiadetutu@gmail.com' target='_blank' className='socialicon'><i class="fa-solid fa-envelope"></i></a>
                <a href='https://github.com/adetutudeborah' target='_blank' className='socialicon'><i class="fa-brands fa-github"></i></a>
                <a href='https://twitter.com/adetutuoluwa2' target='_blank' className='socialicon'><i className="fa-brands fa-twitter"></i></a>
                <a href='https://www.linkedin.com/in/adetutu-oluwasanmi/' target='_blank' className='socialicon'><i class="fa-brands fa-linkedin"></i></a>
                <a href='https://adetutu.hashnode.dev/' target='_blank' className='socialicon'><i class="fa-brands fa-hashnode"></i></a>
            </div>

    </div>    
    )
}

export default Footer; 