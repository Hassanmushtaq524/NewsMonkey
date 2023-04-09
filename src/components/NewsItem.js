import React from 'react'

const NewsItem = (props) => {
  let { title, description, author, date, imageUrl, newsUrl, source } = props;
  return (
    <div className="card" style={{ height: '600px' }}>
      <img className="card-img-top" src={imageUrl} alt={""}/>
      <div className="card-body" >
        <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '50%', }}>{source}</span></h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {(author) ? author : "Unknown"} on {date.substring(0, date.indexOf('T'))}</small></p>
        <a href={newsUrl} className="btn btn-sm btn-dark my-1">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem;

