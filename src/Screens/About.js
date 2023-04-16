import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './about.css'
export function About() {
    return (
        <div id='about'>
            <div className="grid">
                <div className='ingrid'>
                    <div className="g-col-6">
                        <h1>About Us</h1>
                        <p>EcoSavvy is developed by a team of 5 members pursuing undergraduate in computer science and engineering at Birla Institute of Applied Sciences. It is created with the motive to promote an innovative approach towards sustainability and sustainable development. We aim to:
                            <ol>
                                
                                <li>Create awareness regarding sustainability and sustainable development methods.</li>
                                <li>Promote an enhanced rate of application of theoritical solutions to improve the condition of environment.</li>
                                <li>Provide a platform to educate users about the possible research and advancements
                                    in the field of sustainable technologies.</li>
                                <li>Encourage users to buy environment friendly and sustainable products by redirecting
                                    them to the respective product websites.</li>
                                <li>Calculate the carbon footprint based on metrics derived from your daily lifestyle habits.</li>
                            </ol>
                        </p>
                    </div>
                    <div className="g-col-6"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1583.6669095201187!2d79.55434014805883!3d29.35645515673876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a099dbdc0befa7%3A0xa08407c1dac1f3ac!2sBirla%20Institute%20of%20Applied%20Sciences%2C%20Bhimtal-263136%20(Uttarakhand)!5e0!3m2!1sen!2sin!4v1681580326265!5m2!1sen!2sin" width="500" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>
                    </div>
                </div>
            </div>
            <div className="container">
                <h3>Reach out to us!</h3>
                <div className='bottom'>
                    <div><a href="#" style={{ display: 'inline-block' }}><FaFacebook></FaFacebook></a></div>
                    <div><a href="#" style={{ display: 'inline-block' }}><FaInstagram /></a></div>
                    <div><a href="#" style={{ display: 'inline-block' }}><FaTwitter></FaTwitter></a></div>
                    <div><a href="#" style={{ display: 'inline-block' }}><FaLinkedin></FaLinkedin></a></div>
                    <div><a href="#" style={{ display: 'inline-block' }}><FaMailBulk></FaMailBulk></a></div>
                </div>
            </div>
        </div>
    )
}

