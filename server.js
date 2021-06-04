const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/templates/index.html'))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/templates/about.html'))
})
app.get('/ajax', (req, res) => {
  res.sendFile(path.join(__dirname, '/templates/ajax.html'))
})

app.get('/api/poolSolidBalls', (req, res) => {
  const solidBalls = [
    {
      ball: "1",
      color: 'Yellow',
      faction: "Solid"
    },
    {
      ball: "2",
      color: 'Blue',
      faction: "Solid"
    },
    {
      ball: "3",
      color: 'Red',
      faction: "Solid"
    },
    {
      ball: "4",
      color: 'Purple',
      faction: "Solid"
    },
    {
      ball: "5",
      color: 'Orange',
      faction: "Solid"
    },
    {
      ball: "6",
      color: 'Green',
      faction: "Solid"
    },
    {
      ball: "7",
      color: 'Magenta',
      faction: "Solid"
    },
  ]
  res.json(solidBalls)
})
app.get('/api/poolStripeBalls', (req, res) => {
  const solidBalls = [
    {
      ball: "9",
      color: 'Yellow',
      faction: "Stripe"
    },
    {
      ball: "10",
      color: 'Blue',
      faction: "Stripe"
    },
    {
      ball: "11",
      color: 'Red',
      faction: "Stripe"
    },
    {
      ball: "12",
      color: 'Purple',
      faction: "Stripe"
    },
    {
      ball: "13",
      color: 'Orange',
      faction: "Stripe"
    },
    {
      ball: "14",
      color: 'Green',
      faction: "Stripe"
    },
    {
      ball: "15",
      color: 'Magenta',
      faction: "Stripe"
    },
  ]
  res.json(solidBalls)
})

app.listen(port, () => {
  console.log(`Pool app listenting at http://localhost:${port}`)
})
