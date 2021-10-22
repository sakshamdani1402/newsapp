import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        category:"general"
    }
    static propTypes ={
        category:PropTypes.string
    }
    capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true
        }
    }
    async componentDidMount() {
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles,
            loading:false});

    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="text-center my-5">Top { this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                    {this.state.loading && <Spinner/>}
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 35) : ""} 
                                    description={element.description ? element.description.slice(0, 45) : ""}
                                    imageUrl={element.urlToImage?element.urlToImage:"https://www.lyon-ortho-clinic.com/files/cto_layout/img/placeholder/book.jpg"} 
                                    url={element.url} 
                                    author={element.author?element.author:"Unknown"} 
                                    time={element.publishedAt} 
                                    source={element.source.name}/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default News
