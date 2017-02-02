'use strict';

import React from 'react';

import CategoryList from './CategoryList';
import BlogList from './BlogList';
import BlogLink from './BlogLink';
import BlogEntry from './BlogEntry';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        // Populate a default category list on initial page load
        this.state = {
            articles: this.props.articles,
            selectedCategoryId: this.props.defaultCategoryId,
        }
    }

    _onCategorySelected(categoryId) {
        this.setState({
            selectedCategoryId: categoryId,
        });
    }

    render() {
        let selectedCategoryArticles = this.state.articles.filter((article) => {
            return article.categoryId === this.state.selectedCategoryId;
        }, this);

        return(
            <div>
                <div className="row">
                    <div className="col s12 m4 l2">
                        <CategoryList categories={this.props.categories}
                            onCategorySelected={this._onCategorySelected.bind(this)} />
                    </div>
                    <div className="col s12 m8 l10">
                        <BlogList articles={selectedCategoryArticles} />
                        <BlogEntry />
                    </div>
                </div>
            </div>
        );
    }
}