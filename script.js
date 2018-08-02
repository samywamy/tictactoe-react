class Board extends React.Component {
    constructor(){
      super()
      this.handleClick = this.handleClick.bind(this);
    }

    state = {
      turn: true,
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    }


    handleClick = (event, rowIndex, colIndex) => {
        if (this.state.board[rowIndex][colIndex] === '') {
            if (this.state.turn) {  // (if turn true)
                this.state.board[rowIndex][colIndex] = 'x';
            } else {
                this.state.board[rowIndex][colIndex] = 'o';
            }

            this.state.turn = !this.state.turn; // (make turn false)
            this.setState({turn: this.state.turn, board: this.state.board});

        } else {
            alert('square taken');
        }
        console.log(rowIndex + ' ' + colIndex);
    }    

    render() {
        console.log("board", this.state.board);
        console.log(this.props.numberOfRows);
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            return (
                    <div className="square" onClick={((ev) => this.handleClick(ev, rowIndex, colIndex))} id={rowIndex*3 + colIndex}> {this.state.board[rowIndex][colIndex]} </div>
            );

          });
          return (
            <div className="row">
              {rows}
            </div>

          );

        });

        return (
          <div className="item">
            {board}
          </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div><h1>Tic tac toe</h1><Board numberOfRows="5" /></div>

        )
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
