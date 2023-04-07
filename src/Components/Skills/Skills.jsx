import React from 'react';
import './Skills.css'; 

function Skills() { 
    return(
     <div className='skillscontainer'> 
 
         <h2 className='skillsheader'>Skills</h2>

        <div className='skillssection row'>
             
                <div class="language col-4 text-center mb-5">
                    <span className='languageicon'><i class="fa-brands fa-html5"></i></span>
                    <h3 class="languagename">HTML</h3>
                </div>

                <div class="language col-4 text-center mb-5">  
                    <span className='languageicon'><i class="fa-brands fa-css3-alt"></i></span>
                    <h3 class="languagename">CSS</h3>
                </div>

                <div class="language col-4 text-center mb-5">  
                    <span className='languageicon'><i class="fa-brands fa-bootstrap"></i></span>
                    <h3 class="languagename">BootStrap</h3>
                </div>

                <div class="language col-4 text-center mb-5">  
                    <span className='languageicon'><i class="fa-brands fa-js"></i></span>
                    <h3 class="languagename">JavaScript</h3>
                </div>

                <div class="language col-4 text-center mb-5">  
                    <span className='languageicon'><i class="fa-brands fa-react"></i></span>
                    <h3 class="languagename">React</h3>
                </div>

                <div class="language col-4 text-center mb-5">  
                    <span className='languageicon'><i class="fa-brands fa-github"></i></span>
                    <h3 class="languagename">GitHub</h3>
                </div>

        </div>

    </div>    
    ) 
}

export default Skills;