const squares = () => {
    const newSquares = Array(8)
    for (let i=0;i<8;i++){
    newSquares[i] = Array(8).fill(i);
    }
    return newSquares
}

const columns = ["a","b","c","d","e","f","g","h"]

const board = () => squares().map((_,i,cols)=>{
    const row = 8-i
    return cols[i].map((_,j)=>columns[j]+row)
}).flat().reduce((obj,val) => ({...obj, [val]:null}),{})

module.exports = board