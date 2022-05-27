const express = require('express')
const gameRouter = express.Router()
const {
    getAllGames,
    createGame,
    readGame,
    updateGameSquare,
    updateGameBoard,
    deleteGame
} = require('./controllers')

gameRouter.get('/', getAllGames)
gameRouter.post('/:gameRoute', createGame)
gameRouter.get('/:gameRoute', readGame)
gameRouter.patch('/:gameRoute', updateGameSquare)
gameRouter.put('/:gameRoute', updateGameBoard)
gameRouter.delete('/:gameRoute', deleteGame)

module.exports = gameRouter