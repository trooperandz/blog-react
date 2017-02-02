'use strict';

import React from 'react';

export default class BlogLink extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li className="collection-item dismissable">
                <div>
                    {this.props.data.heading}
                    <a onClick={this.props.onArticleSelected.bind(null, this.props.data.id)} className="secondary-content"><i class="material-icons">View</i></a>
                </div>
            </li>
        );
    }
}