import React from 'react';
import BlogLink from './BlogLink';

export default class BlogList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="collection with-header">
                {
                    this.props.articles.map((obj, index) => {
                        return(
                            <BlogLink key={index} data={obj} />
                        );
                    })
                }
            </div>
        );
    }
}