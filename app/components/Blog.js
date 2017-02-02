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
            selectedArticleId: 1,
        }
    }

    _onCategorySelected(categoryId) {
        this.setState({
            selectedCategoryId: categoryId,
        });
    }

    _onArticleSelected(articleId) {
        console.log('articleId selected: ' + articleId);
        this.setState({
            selectedArticleId: articleId,
        })
    }

    render() {
        let selectedCategoryArticles = this.state.articles.filter((article) => {
            return article.categoryId === this.state.selectedCategoryId;
        }, this);

        let selectedArticle = this.state.articles.filter((article) => {
            console.log('selectedArticle loop: ', article);
            return article.id === this.state.selectedArticleId;
        }, this);

        return(
            <div>
                <div className="row">
                    <div className="col s12 m4 l2">
                        <CategoryList categories={this.props.categories}
                            onCategorySelected={this._onCategorySelected.bind(this)} />
                    </div>
                    <div className="col s12 m8 l10">
                        <BlogList articles={selectedCategoryArticles}
                            onArticleSelected={this._onArticleSelected.bind(this)} />
                        <BlogEntry article={selectedArticle} />
                    </div>
                </div>
            </div>
        );
    }
}