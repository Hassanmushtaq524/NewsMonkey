import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  document.title = props.category.charAt(0).toUpperCase() + props.category.slice(1);

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(100);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  }


  const fetchMoreData = async () => {
   
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setPage(page + 1);
    console.log(articles.length);
    console.log(totalResults);
  }

  

  return (
    <>

      <h2 className="text-center" style={{margin: "100px auto 40px auto"}} > NewsMonkey - Top Headlines - {props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row" style={{ width: '90%', margin: 'auto' }}>
            {articles.map((element) => {
              return <div className="my-3 col-md-4" key={element.url}>
                <NewsItem title={(element.title.length > 45) ? element.title.slice(0, 45) + "..." : element.title} description={(element.description) ? element.description.slice(0, 200) + "..." : ""} author={element.author} date={element.publishedAt} imageUrl={(element.urlToImage) ? element.urlToImage : "./alt.jpg"} newsUrl={element.url} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: "us",
  pageSize: 9,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}



export default News

