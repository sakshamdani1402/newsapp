import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, []);
    const updateNews = async () => {
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/in.json`;
        fetch(url).then(response => response.json())
            .then(data => setArticles(data.articles));
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }



    return (
        <div>
            <div className="container">
                <h1 className="text-center my-3 headline">Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 35) : ""}
                                description={element.description ? element.description.slice(0, 45) : ""}
                                imageUrl={element.urlToImage ? element.urlToImage : "https://www.lyon-ortho-clinic.com/files/cto_layout/img/placeholder/book.jpg"}
                                url={element.url}
                                author={element.author ? element.author : "Unknown"}
                                time={element.publishedAt}
                                source={element.source.name} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )

}

News.defaultProps = {
    category: "general"
}
News.propTypes = {
    category: PropTypes.string
}
export default News
