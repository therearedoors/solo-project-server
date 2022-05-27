const db = require('./db')

function getAllGames (req, res) {
    const games = db.getAll()
    if (games.length !== 0){
        res.status(200)
        res.json({games: games})
    }
    else {
        res.status(204)
        res.json({games: games})
    }
}

function createGame (req, res) {
    const route = req.params.gameRoute
    if (db.read(route)) {
        res.status(400)
        res.json({error: 'game route already exists'})
        return
    }
    db.create(route)
    res.status(201)
    res.json({gameState: db.read(route)})
    return
}

function readGame(req,res){
    const read = db.read(req.params.gameRoute)
    if (read) {
        res.status(200)
        res.json({gameState: read})
    }
    else {
        res.status(400)
        res.json({error: "game not found"})
    }
}

function updateGameBoard(req,res){
    console.log(req.params.gameRoute,req.body)
    const update = db.updateBoard(req.params.gameRoute,req.body.gameState)
    console.log(update)
    if (update) {
        res.status(200)
        res.json({gameState: update})
    }
    else {
        res.status(400)
        res.json({error: "no game state returned"})
    }
}


function updateGameSquare(req,res){
    const update = db.updateSquare(req.params.gameRoute,req.body.pieceData,req.body.square)
    if (update) {
        res.status(200)
        res.json({gameState: update})
    }
    else {
        res.status(400)
        res.json({error: "no game state returned"})
    }
}


function deleteGame(req,res){
        try {
        db.delete(req.params.gameRoute)
        }
        catch(err) {
            res.status(400)
            res.json({error: err.message})
            return
        }
        res.status(200)
        res.json({gameQuit: true})
        }


module.exports = {
    getAllGames,
    createGame,
    readGame,
    updateGameSquare,
    updateGameBoard,
    deleteGame
}