'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Blog from './components/Blog';

const app = document.getElementById('app');

const categories = [
    {
        id: 1,
        title: 'React',
    },
    {
        id: 2,
        title: 'CSS',
    },
    {
        id: 3,
        title: 'DevOps',
    },
    {
        id: 4,
        title: 'Node.js',
    },
    {
        id: 5,
        title: 'Databases',
    }
];

const articles = [
   {
       id: 1,
       categoryId: 2,
       heading: 'Using CSS Flexbox To Create Even Content Blocks',
   },
   {
       id: 2,
       categoryId: 5,
       heading: 'Installing MongoDB On Your Virtual Private Server',
   },
   {
       id: 3,
       categoryId: 4,
       heading: 'Creating A Node.js App Architecture With Express Generator',
   },
   {
       id: 4,
       categoryId: 4,
       heading: 'Configuring NPM Start Commands for Application States',
   },
   {
       id: 5,
       categoryId: 1,
       heading: 'Setting Up Webpack For Your React App',
   },
   {
       id: 6,
       categoryId: 3,
       heading: 'Setting Up A Node Server On Digital Ocean',
   },
   {
       id: 7,
       categoryId: 3,
       heading: 'Useful Commands To Use While Managing Your Ubuntu Server',
   },
   {
       id: 8,
       categoryId: 5,
       heading: 'Installing MySQL On Your Virtual Private Server',
   },
   {
       id: 9,
       categoryId: 1,
       heading: 'Using React Router',
   },
   {
       id: 10,
       categoryId: 2,
       heading: 'Using Absolute Positioning To Place Icons Over Content',
   },
   {
       id: 11,
       categoryId: 5,
       heading: 'Initializing And Using Sequelize With Your Node App',
   }
];

ReactDOM.render(
    <Blog defaultCategoryId={1} categories={categories} articles={articles} />,
app);