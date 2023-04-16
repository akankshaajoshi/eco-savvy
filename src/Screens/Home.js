import './Home.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function Home() {
    let solar = "Solar energy is radiant light and heat from the Sun that is harnessed using a range of technologies such as solar power to generate electricity, solar thermal energy (including solar water heating), and solar architecture. It is an essential source of renewable energy, and its technologies are broadly characterized as either passive solar or active solar depending on how they capture and distribute solar energy or convert it into solar power. Active solar techniques include the use of photovoltaic systems, concentrated solar power, and solar water heating to harness the energy. Passive solar techniques include orienting a building to the Sun, selecting materials with favorable thermal mass or light-dispersing properties, and designing spaces that naturally circulate air."
    let hydro = "Hydropower , also known as water power, is the use of falling or fast-running water to produce electricity or to power machines. This is achieved by converting the gravitational potential or kinetic energy of a water source to produce power. Hydropower is a method of sustainable energy production. Hydropower is now used principally for hydroelectric power generation, and is also applied as one half of an energy storage system known as pumped-storage hydroelectricity.";
    let wind = "Wind power is the use of wind energy to generate useful work. Historically, wind power was used by sails, windmills and windpumps, but today it is mostly used to generate electricity. This article deals mostly with wind power for electricity generation. Today, wind power is almost completely generated with wind turbines, generally grouped into wind farms and connected to the electrical grid. In 2021, wind supplied over 1800 TWh of electricity, which was over 6% of world electricity and about 2% of world energy. With about 100 GW added during 2021, mostly in China and the United States, global installed wind power capacity exceeded 800 GW. To help meet the Paris Agreement goals to limit climate change, analysts say it should expand much faster - by over 1% of electricity generation per year.";
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getNewsData() {
        setLoading(true);
        const resp = await axios.get("https://newsapi.org/v2/everything?q=sustainable development&apiKey=22e7c582a80146a09ca0537125a6608f");
        setNewsData(resp.data.articles);
        setLoading(false);
    }

    useEffect(() => {
        getNewsData();
    }, []);
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
                        <br />
                        <a href='https://en.wikipedia.org/wiki/Solar_energy' className="button">Read More</a>

                        <a className="button" href='https://www.amazon.in/Solar-Panels/b?ie=UTF8&node=3639338031'>Buy Here</a>
                        <br />
                        <img src='https://github.com/akankshaajoshi/EcoSavvy/blob/master/Resources/solar%20energy.jpg?raw=true' className='im' alt='solar energy' />
                    </div>
                    <div id='res-2' className='resource'>
                        <h1>Hydro Energy</h1>
                        <p>
                            {hydro.slice(0, 400) + "..."}
                        </p>
                        <br />
                        <a className="button" href='https://en.wikipedia.org/wiki/Hydropower#:~:text=Hydropower%20(from%20Ancient%20Greek%20%E1%BD%91%CE%B4%CF%81%CE%BF,water%20source%20to%20produce%20power.'>Read More</a>

                        <a className="button" href='https://www.energy.gov/energysaver/articles/energy-101-video-hydroelectric-power'>Know More</a>
                        <br />
                        <img src='https://github.com/akankshaajoshi/EcoSavvy/blob/master/Resources/hydro%20energy.jpg?raw=true' className='im' alt='hydro energy' />
                    </div>
                    <div id='res-3' className='resource'>
                        <h1>Wind Energy</h1>
                        <p>
                            {wind.slice(0, 400) + "..."}
                        </p>
                        <br />
                        <a className="button" href='https://en.wikipedia.org/wiki/Wind_power'>Read More</a>

                        <a className="button" href='https://dir.indiamart.com/impcat/wind-turbine.html'>Buy Here</a>
                        <br />
                        <img src='https://github.com/akankshaajoshi/EcoSavvy/blob/master/src/Resources/wind%20power.jpg?raw=true' className='im' alt='wind energy' />
                    </div>
                </div>

                <h1>News</h1>
                <div id='news-section'>
                    {newsData.slice(0, 5).map((newsData, index) =>
                        <div key={index} id='vert-newsbox'>
                            <a target="_blank" href={newsData.url}>
                                <div id='vert-news-content'>
                                    <h2 id='vert-news-title'>{newsData.title}</h2>
                                    {/* <p id='vert-news-para'>{newsData.description}</p> */}
                                </div>
                            </a>
                            <a target="_blank" href={newsData.url}>
                                <img id='vert-news-img' src={newsData.urlToImage} width="200px" />
                            </a>
                        </div>
                        
                    )}
                   
                </div>
                <a href='test' className='button' id="read-more">Read More</a>
            </div>
            <div id='footer'>
                Copyright@EcoSavvy2023
            </div>
        </div>
    )
}