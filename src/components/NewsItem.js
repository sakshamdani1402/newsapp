import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, url, author, time, source } = this.props;
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 start-70 translate-middle badge  bg-success">
                        {source}
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        <br />
                        <br />
                        <p>By {author} on {new Date(time).toGMTString()}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
