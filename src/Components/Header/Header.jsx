import React from 'react';
import './Header.css'; 
 
function Header() { 
    return(
     <div className='headercontainer'>    

        <div className='headername'>
            <p className='name'>Adetutu Oluwasanmi</p>
        </div>

        <div className='headericons'>
            <a href='https://github.com/adetutudeborah' target='_blank' className='socialicon'><i class="fa-brands fa-github"></i></a>
            <a href='https://twitter.com/adetutuoluwa2' target='_blank' className='socialicon'><i className="fa-brands fa-twitter"></i></a>
            <a href='https://www.linkedin.com/in/adetutu-oluwasanmi/' target='_blank' className='socialicon'><i class="fa-brands fa-linkedin"></i></a>
            <a href='https://adetutu.hashnode.dev/' target='_blank' className='socialicon'><i class="fa-brands fa-hashnode"></i></a>
        </div>
        
    </div>    
    )
}

export default Header;