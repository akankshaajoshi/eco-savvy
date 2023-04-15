<<<<<<< Updated upstream
import './Home.css';

    return (
        <div className="home">
            <div className='blur'>
                <div id='home-content'>
                    <div >
                        <p id='intro'>
                            EcoSavvy is a sustainable development-based information and product website that promotes renewable energy sources, such as solar, wind, and hydroelectric power. With the current scenario of global energy and resource management, sustainable development is essential for the efficient utilization and management of resources.
                        </p>
                        <div id="about-left"><NavLink to="/About" className="button">About Us</NavLink> </div></div>
                    <img src='https://github.com/akankshaajoshi/EcoSavvy/blob/master/src/Resources/logo1.png?raw=true' className='logo2' />
                </div>

                <div id='resource-section'>
                    <div id='res-1' className='resource'>
                        <h1>Solar Energy</h1>
                        <p>
                            {solar.slice(0, 400) + "..."}
                        </p>
                        <br/>
                        <a href='https://en.wikipedia.org/wiki/Solar_energy' className="button">Read More</a>

                        <a className="button" href='https://www.amazon.in/Solar-Panels/b?ie=UTF8&node=3639338031'>Buy Here</a>
                        <br/>
                        <img src='https://github.com/akankshaajoshi/EcoSavvy/blob/master/Resources/solar%20energy.jpg?raw=true' className='im' alt='solar energy' />
                    </div>
                    <div id='res-2' className='resource'>
                        <h1>Hydro Energy</h1>
                        <p>
                            {hydro.slice(0, 400) + "..."}
                        </p>
                        <br/>
                        <a className="button" href='https://en.wikipedia.org/wiki/Hydropower#:~:text=Hydropower%20(from%20Ancient%20Greek%20%E1%BD%91%CE%B4%CF%81%CE%BF,water%20source%20to%20produce%20power.'>Read More</a>

                        <a className="button" href='https://www.energy.gov/energysaver/articles/energy-101-video-hydroelectric-power'>Know More</a>
                        <br/>
                        <img src='https://github.com/akankshaajoshi/EcoSavvy/blob/master/Resources/hydro%20energy.jpg?raw=true' className='im' alt='hydro energy' />
                    </div>
                    <div id='res-3' className='resource'>
                        <h1>Wind Energy</h1>
                        <p>
                            {wind.slice(0, 400) + "..."}
                        </p>
                        <br/>
                        <a className="button" href='https://en.wikipedia.org/wiki/Wind_power'>Read More</a>

                        <a className="button" href='https://dir.indiamart.com/impcat/wind-turbine.html'>Buy Here</a>
                        <br/>
                        <img src='src\Resources\wind power.jpg' className='im' alt='wind energy' />
                    </div>
                </div>

                <h1>News</h1>
                {/* <div id='news'>
                    <div class='news-item'>
                        <img src='fsa' />
                        lorem ipsum
                    </div>
                    <div class='news-item'>
                        <img src='saf' />
                        lorem ipsum
                    </div>
                    <div class='news-item'>
                        <img src='ca' />
                        lorem ipsum
                    </div>
                </div> */}
            </div>
            <div id='footer'>
                Copyright@EcoSavvy2023
            </div>
        </div>
    )
}