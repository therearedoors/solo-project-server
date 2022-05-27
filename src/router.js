const express = require('express')
const gameRouter = express.Router()
const {
    getAllGames,
    createGame,
    readGame,
    updateGame,
    deleteGame
} = require('./controllers')

gameRouter.get('/', getAllGames)
gameRouter.post('/:gameRoute', createGame)
gameRouter.get('/:gameRoute', readGame)
gameRouter.patch('/:gameRoute', updateGame)
gameRouter.delete('/:gameRoute', deleteGame)

module.exports = gameRouter