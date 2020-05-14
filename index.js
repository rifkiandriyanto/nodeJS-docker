const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({ msg: 'Hello from Docker!' })
})

app.listen(8081, () => {
  console.log('App Listen on 8081 port')
})
