import React from 'react';
import './Contact.css'; 

function Contact() { 
    return(
     <div className='contactcontainer'>    
     
                <div className="row">

                    <div className="contactinnercontainer col-lg-6">

                        <h2 className='contacttext mb-4'>Contact</h2> 
                        <p className='contactsubtext'> 
                            I would love to hear about your project and how I could help. 
                            Please fill in the form, and I’ll get back to you as soon as possible.
                        </p>
                        
                    </div>
 
                    {/* Contact Form */}

                     <div className="contactformcontainer col-lg-6">

                     <div className="contactform">
                            <form>
                                <div className="formgroup mt-3 mb-3">
                                    <div className="inputcontainer"> 
                                        <input
                                            className="inputbox"
                                            type="text"
                                            id="nameInput"
                                            placeholder="Name" 
                                            name="Full name"
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="formgroup mt-3 mb-3">
                                    <div className="inputcontainer"> 
                                        <input
                                            className="inputbox"
                                            type="email"
                                            id="emailInput"
                                            placeholder="Email" 
                                            name="Email"
                                            required 
                                        />
                                    </div>
                                </div> 

                            <div className="formgroup">
                                <textarea 
                                    className="mt-3 textarea" 
                                    rows="6" 
                                    placeholder="Message" 
                                    name="Message" 
                                    required> 
                                </textarea>
                            </div>
                    
                            <div className='mt-4 contactbutton'>
                                <button className='contactbtn'>Send message</button>
                            </div>
                        </form>
                </div>
                        
                    </div>
            
                </div>
    </div>    
    )
}

export default Contact;