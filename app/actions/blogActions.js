'use strict';

import dispatcher from '../dispatcher';

module.exports = {
    addBlogEntry: (blog) => {
        dispatcher.dispatch({
            blog,
            type: 'blog:addBlogEntry',
        });
    },

    deleteBlogEntry: (blog) => {
        dispatcher.dipatch({
            blog,
            type: 'blog:deleteBlogEntry',
        });
    }
}