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
                    <a href={`/blogEntry/${this.props.data.id}`} className="secondary-content"><i class="material-icons">send</i></a>
                </div>
            </li>
        );
    }
}