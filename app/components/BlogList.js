import React from 'react';
import BlogLink from './BlogLink';

export default class BlogList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <ul className="collection with-header categories">
                {
                    this.props.articles.map((article, index) => {
                        return(
                            <BlogLink key={index} data={article} onArticleSelected={this.props.onArticleSelected} />
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}