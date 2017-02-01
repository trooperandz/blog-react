'use strict';

import React from 'react';

export default class CategoryList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul className="nav-list">
                {this.props.categories.map((category) => {
                    return (
                        <li key={category.id}
                            onClick={this.props.onCategorySelected.bind(null, category.id)}>
                            {category.title}
                        </li>
                    );
                }, this)}
            </ul>
        );
    }
}