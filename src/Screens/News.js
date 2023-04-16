import axios from 'axios';
import { useEffect, useState } from 'react';
import './News.css';
export function News() {

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
    <div className="App">
      <div id="news-page">
        {loading ? "Loading..." : 
        <div id='newsSection'>
          {newsData.map((newsData, index) =>
            <div key={index} id='newsbox'>
                <a target="_blank" href={newsData.url}>
                <div id='news-content'>
                  <h2 id='news-title'>{newsData.title}</h2>
                  <p id='news-para'>{newsData.description}</p>
                </div>
                </a>
                <a target="_blank" href={newsData.url}>
                  <img id='news-img' src={newsData.urlToImage} width="200px"/>
                </a>
          </div>
          )}

        </div>
        }
      </div>
    </div>
  );
}
