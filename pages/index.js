import React from 'react';
import axios from 'axios';
import Layout from '../components/layout';

const API_KEY = '2bdc18ea3e9b4fd690b1e1a98c3630a8';

export default class extends React.Component {
  static async getInitialProps() {
    return axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      .then(res => ({
        data: res.data,
      }));
  }

  render() {
    return (
      <Layout>
        <div className="uk-container">
          <div className="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="masonry: true">
            {this.props.data.articles.map(article => (
              <div>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <img
                      src={article.urlToImage || '//placehold.it/500x250?text=No Image'}
                      alt=""
                    />
                  </div>
                  <div className="uk-card-body">
                    <h5 className="uk-card-title">{article.title}</h5>
                    <p>{article.content}</p>
                    <a className="uk-button uk-button-default" href={article.url} target="_blank">
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}
