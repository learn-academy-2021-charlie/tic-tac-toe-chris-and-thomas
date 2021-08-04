import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      playerTurn: "X",
      count: 9
      
    }
  }

  handleClick = (index) => {
    let playerTurn = this.state.playerTurn
    let squares = this.state.squares

if(squares[index] !== ""){
  return
}

    this.setState({ count: this.state.count - 1 })
    squares[index] = playerTurn;
    let win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < win.length; i++) {
      let winCombo = win[i]
      let p1 = winCombo[0]
      let p2 = winCombo[1]
      let p3 = winCombo[2]
      if (squares[p1] !== "" && squares[p1] === squares[p2] && squares[p2] === squares[p3] && squares[p3] === squares[p1]) {
        alert(`Winner! player ${playerTurn}`)
        return this.refreshPage()
      } else if (this.state.count === 1) {
        alert('You suck, out of tries!')
        return this.refreshPage()
      }

    }

    // if (playerTurn === true && squares[index] !== '⭕️') {
    //   squares[index] = '❌'
    //   this.setState({
    //     squares: squares,
    //     playerTurn: false
    //   })
    // } else if (playerTurn === false && squares[index] !== '❌') {
    //   squares[index] = '⭕️'
    //   this.setState({
    //     squares: squares,
    //     playerTurn: true
    //   })
    // }

    playerTurn = (playerTurn === "X") ? "O" : "X";
    this.setState({
      playerTurn: playerTurn,
      squares: squares
    })
  }
  refreshPage = () => {
    window.location.reload();
  }

  render() {
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <p id="counter">Count: {this.state.count}</p>
        <p>{this.state.playerTurn ? "player 1" : "player2"}</p>
        {/* <button>💣</button> */}
        <div id="gameboard">

          {this.state.squares.map((square, index) => {
            return (<div onClick={() => this.handleClick(index)} className="square">{square}</div>)
          })}
        </div>
        <button onClick={this.refreshPage}>Click to restart</button>


        <button>Marker Selector</button>

      </>
    )
  }
}
export default App
