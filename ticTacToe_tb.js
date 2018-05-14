class TicTacToe {
  constructor(board) {
    this.board = board
  }

  addTokenToBoard(token, location) {
    //location row/col
    const row = location[0]
    const col = location[1]
    this.board[row][col] = token
  }

  printBoard() {
    let board = this.board
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        const cell = board[row][col]
        process.stdout.write(cell)
        if (col <= 1) {
          process.stdout.write('|')

        }
        if (col === 2) process.stdout.write('\n')
      }
    }
  }
}


const board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]

const newBoard = new TicTacToe(board)

console.log('newboard', typeof newBoard)

newBoard.addTokenToBoard('X', [0, 1])

newBoard.printBoard()

// for (let k = 0; k < 5; k++) {
//   process.stdout.write('k')
// }
