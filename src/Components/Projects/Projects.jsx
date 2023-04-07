import React from 'react';
import './Projects.css';  
import images from "../../assets/images";

function Projects() { 
    return(
     <div className='projectscontainer'>    

           <h2 className='projectheader'>Projects</h2>

            <div className='projectlist row'>

                    <div className='project col-6 mb-5'>
                            <img src={images.designo} alt="designo-image" className='projectimg'/>
                            <h3 className='projecttitle mt-4'>Designo website</h3>
                            <div className='toolsused mt-3'>
                                <span className='tool'>Html</span>
                                <span className='tool'>Css</span>
                                <span className='tool'>Leaflet Js</span>
                                <span className='tool'>React</span>
                            </div>

                            <div className='viewproject mt-3'>
                                <a href='https://designo-adetutudeborah.vercel.app/' target='_blank' className='view'>View Project</a>
                                <a href='https://github.com/adetutudeborah/designo' target='_blank' className='view'>View Code</a>
                            </div>
                    </div>

                    <div className='project col-6 mb-5'>
                            <img src={images.joblisting} alt="job-listings-image" className='projectimg'/>
                            <h3 className='projecttitle mt-4'>Job Listings with Filtering</h3>
                            <div className='toolsused mt-3'>
                                <span className='tool'>Html</span>
                                <span className='tool'>Css</span>
                                <span className='tool'>JavaScript</span>
                                <span className='tool'>React</span>
                            </div>

                            <div className='viewproject mt-3'>
                                <a href='https://job-listings-page-bf8t.vercel.app/' target='_blank' className='view'>View Project</a>
                                <a href='https://github.com/adetutudeborah/job-listings-page' target='_blank' className='view'>View Code</a>
                            </div>
                    </div>

                    <div className='project col-6 mb-5'>
                            <img src={images.roots} alt="roots-image" className='projectimg'/>
                            <h3 className='projecttitle mt-4'>Roots</h3>
                            <div className='toolsused mt-3'>
                                <span className='tool'>Html</span>
                                <span className='tool'>Css</span>
                                <span className='tool'>React</span>
                                <span className='tool'>Firebase</span>
                            </div>

                            <div className='viewproject mt-3'>
                                <a href='https://roots-landing-page.vercel.app/' target='_blank' className='view'>View Project</a>
                                <a href='https://github.com/ADA-Software-Engineering-Program/Roots-landing-page' target='_blank' className='view'>View Code</a>
                            </div>
                    </div>

                    <div className='project col-6 mb-5'>
                            <img src={images.weatherapp} alt="weather-app-image" className='projectimg'/>
                            <h3 className='projecttitle mt-4'>Weather App</h3>
                            <div className='toolsused mt-3'>
                                <span className='tool'>Html</span>
                                <span className='tool'>Css</span>
                                <span className='tool'>JavaScript</span>
                                <span className='tool'>Weather API</span>
                            </div>

                            <div className='viewproject mt-3'>
                                <a href='https://weather-app-adetutudeborah.vercel.app/' target='_blank' className='view'>View Project</a>
                                <a href='https://github.com/adetutudeborah/weather-app' target='_blank' className='view'>View Code</a>
                            </div>
                    </div>

                    <div className='project col-6 mb-5'>
                            <img src={images.spefind} alt="spefind-image" className='projectimg'/>
                            <h3 className='projecttitle mt-4'>Spefind</h3>
                            <div className='toolsused mt-3'>
                                <span className='tool'>Html</span>
                                <span className='tool'>Css</span>
                                <span className='tool'>React</span>
                            </div>

                            <div className='viewproject mt-3'>
                                <a href='https://spefind.vercel.app/' target='_blank' className='view'>View Project</a>
                                <a href='https://github.com/ADA-Software-Engineering-Program/spefind' target='_blank' className='view'>View Code</a>
                            </div>
                    </div>
                    
                    
            </div>
    </div>    
    ) 
}

export default Projects;