'use strict';

import React from 'react';

import CategoryList from './CategoryList';
import BlogList from './BlogList';
import BlogLink from './BlogLink';
import BlogEntry from './BlogEntry';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategoryArticles: this.getCategoryArticles(this.props.defaultCategoryId),
        }
    }

    getCategoryArticles(categoryId) {
        return this.props.articles.filter((article) => {
            return article.categoryId === categoryId;
        });
    }

    _onCategorySelected(categoryId) {
        this.setState({
            selectedCategoryArticles: this.getCategoryArticles(categoryId)
        });
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col s12 m4 l2">
                        <CategoryList categories={this.props.categories}
                            onCategorySelected={this._onCategorySelected.bind(this)} />
                    </div>
                    <div className="col s12 m8 l10">
                        <BlogList articles={this.state.selectedCategoryArticles} />
                        <BlogEntry />
                    </div>
                </div>
            </div>
        );
    }
}