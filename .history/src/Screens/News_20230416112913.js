import axios from 'axios';
import { useEffect, useState } from 'react';
import './News.css';
export function News() {

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getNewsData() {
    setLoading(true);
    const resp = await axios.get("https://newsapi.org/v2/everything?q=sustainable development&apiKey=dbecf8f4544f452892e5ec3b3f26b8cc");
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
                <a target="_blank" href={newsData.url} rel='noreferrer'>
                <div id='news-content'>
                  <h2 id='news-title'>{newsData.title.slice(0, 60)+"..."}</h2>
                  <p id='news-para'>{newsData.description.slice(0, 200)+'...'}</p>
                </div>
                </a>
                <a target="_blank" href={newsData.url} rel='noreferrer'>
                  <img id='news-img' src={newsData.urlToImage} width="200px" alt='newsimage'/>
                </a>
          </div>
          )}

        </div>
        }
      </div>
    </div>
  );
}
