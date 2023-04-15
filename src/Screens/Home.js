import './Home.css';

export function Home() {
    return (
        <div className="home">
            <div id='blur'>
                <div id='home-content'>
                <div >
                    <p id='intro'>
                    EcoSavvy is a sustainable development-based information and product website that promotes renewable energy sources, such as solar, wind, and hydroelectric power. With the current scenario of global energy and resource management, sustainable development is essential for the efficient utilization and management of resources.
                    </p>
                    <div id="about-left"><a href="test" id="about-button">About Us</a> </div></div>
                    <img src='https://github.com/akankshaajoshi/EcoSavvy/blob/master/src/Resources/logo1.png?raw=true' className='logo2' />
                </div>
                
                <div id='resorce-section'>
                    <div id='res-1' className='resource'>
                        <h1>Solar Energy</h1>
                        <p>
                            lorem ispum
                        </p>
                        <a href='test'>Read More</a>
                        <a href='test'>Buy Here</a>
                        <img src='' />
                    </div>
                    <div id='res-2' className='resource'>
                        <h1>Hydro Energy</h1>
                        <p>
                            lorem ispum
                            <a href='test'>Read More</a>
                        </p>
                        <a href='test'>Buy Here</a>
                        <img src='' />
                    </div>
                    <div id='res-3' className='resource'>
                        <h1>Wind Energy</h1>
                        <p>
                            lorem ispum
                            <a href='test'>Read More</a>
                        </p>
                        <a href='test'>Buy Here</a>
                        <img src='' />
                    </div>
                </div>

                <h1>News</h1>
                <div id='news'>
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
                </div>
            </div>
            <div id='footer'>
                Copyright@EcoSavvy2023
            </div>
        </div>
    )
}