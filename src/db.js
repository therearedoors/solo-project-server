const board = require("./board")

const state = {}

const interface = {
getAll: () => Object.keys(state),
create: route => {state[route] = board()},
read: route => state[route],
updateBoard: (route,gameState) => {
    state[route] = gameState
    return state[route]
},
updateSquare: (route,pieceData,square) => {
    state[route][square] = pieceData
    return state[route]},
delete: route => {delete state[route]}
}

module.exports = interface