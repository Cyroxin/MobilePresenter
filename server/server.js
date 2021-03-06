const express = require('express')
var cors = require('cors')

const { port } = require('./server.config');

const posts = require('./endpoints/posts')
const tags = require('./endpoints/tags')
const media = require('./endpoints/media')
const login = require('./endpoints/login')
const postsTags = require('./endpoints/postsTags')

const app = express()
app.use(cors())

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false, limit: '200mb' }));
app.use(bodyParser.json({limit: '200mb'}));

app.use('/api/posts', posts)
app.use('/api/tags', tags)
app.use('/api/media', media)
app.use('/api/login', login)
app.use('/api/postsTags', postsTags)

app.get('/', async (req, res) => {
  res.send('hello world!')
})

app.listen(port, () => {
    console.log(`Server listening on localhost:${port}`)
  })

