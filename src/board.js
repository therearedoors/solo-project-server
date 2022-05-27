const squares = () => {
    const newSquares = Array(8)
    for (let i=0;i<8;i++){
    newSquares[i] = Array(8).fill(i);
    }
    return newSquares
}

const columns = ["a","b","c","d","e","f","g","h"]

const initWhite = ['b8','d8','f8','h8','a7','c7','e7','g7','b6','d6','f6','h6']
const initBlack = ['a3','c3','e3','g3','b2','d2','f2','h2','a1','c1','e1','g1']

const board = () => {
    const newBoard = squares().map((_,i,cols)=>{
    const row = 8-i
    return cols[i].map((_,j)=>columns[j]+row)
    }).flat().reduce((obj,val) => ({...obj, [val]:null}),{})
    initWhite.forEach(position => {newBoard[position] = 0})
    initBlack.forEach(position => {newBoard[position] = 2})
    return newBoard
}

module.exports = board