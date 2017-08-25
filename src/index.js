import fs  from 'fs'
import express from 'express'
import bodyParser from 'body-parser'
import controller from './controllers'

const tokenObj = JSON.parse(fs.readFileSync('./token.json', 'utf8'))
const LINE_Access_Token = tokenObj.line.Channel_Access_Token

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const port = (process.env.PORT || 3000)
app.listen(port, () => {
  console.log('Node is running on port ' + port)
})

app.post('/webhook', (req, res, next) => {
  res.status(200).end()
  controller.line(LINE_Access_Token, req.body)
})
