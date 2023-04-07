import React from 'react';
import './Skills.css'; 

function Skills() { 
    return(
     <div className='skillscontainer'> 

         <h2 className='skillsheader'>Skills</h2>

        <div className='skillssection row'>
             
                <div class="col-4 text-center mb-5">
                    <span className='skillicon'><i class="fa-brands fa-html5"></i></span>
                    <h3 class="skill">HTML</h3>
                </div>

                <div class="col-4 text-center mb-5">  
                    <span className='skillicon'><i class="fa-brands fa-css3-alt"></i></span>
                    <h3 class="skill">CSS</h3>
                </div>

                <div class="col-4 text-center mb-5">  
                    <span className='skillicon'><i class="fa-brands fa-bootstrap"></i></span>
                    <h3 class="skill">BootStrap</h3>
                </div>

                <div class="col-4 text-center mb-5">  
                    <span className='skillicon'><i class="fa-brands fa-js"></i></span>
                    <h3 class="skill">JavaScript</h3>
                </div>

                <div class="col-4 text-center mb-5">  
                    <span className='skillicon'><i class="fa-brands fa-react"></i></span>
                    <h3 class="skill">React</h3>
                </div>

                <div class="col-4 text-center mb-5">  
                    <span className='skillicon'><i class="fa-brands fa-github"></i></span>
                    <h3 class="skill">GitHub</h3>
                </div>

        </div>

    </div>    
    ) 
}

export default Skills;