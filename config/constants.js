const
  API_SERVER_PATH = 'http://www.example.com/',
  path = require('path'),
  express = require('express')
module.exports = {
  API_ENDPOINT : {
    login: API_SERVER_PATH+'login'
  },
  ERROR_MSSAGES: {
    _404 : 'Page not found'
  },
  DB_CONFIG: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sample'
  },
  PAGE_LIST: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Form',
      link: '/docs/form'
    },
    {
      title: 'Docs',
      link: '/docs'
    }
  ],
}