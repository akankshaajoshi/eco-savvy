import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <header className="App-header">
        {loading ? "Loading..." : <Container>
          {newsData.map((newsData, index) =>
            <Row className="d-flex justify-content-center">
              <Col xs={12} className="h-25 d-inline-block" key={index}>
                <a target="_blank" href={newsData.url}>
                  <Card class='w-25'>
                    <Card.Title>  {newsData.title}</Card.Title>
                    <Card.Img src={newsData.urlToImage} />
                    <Card.Body>
                      <Card.Text>
                        {newsData.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            </Row>
          )}

        </Container>
        }
      </header>
    </div>
  );
}
