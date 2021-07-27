import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [" ", " "," "," "," "," "," "," "," "],
      playerTurn: "X"
      // player: "X",
      // player2: "O",
      // value: null
    }
  }

// handleGamePlay = (index) => {
// let {squares} = this.state
// this.setState({squares: squares}) 

// let {player1} = this.state
// this.setState({player1: player1}) 
// squares[index] = player1

// let {player2} = this.state
// this.setState({player2: player2}) 
// squares[index] = player2


// if (!squares[index]){
//   squares[index] = player1
//   player1 === "X" ? player2 = "O" : player1 = "X"
//   this.setState({squares: "X", player: player})

// }


//this.state = { player:1 , winner: false}
//return this.state.player === 1 ? 2 : 1;

// }


handleClick = (index) => {
  // this.props.handleGamePlay(this.props.index)
  let playerTurn = this.state.playerTurn
  let squares = this.state.squares

  squares[index] = playerTurn;
let win =  [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
for (let i =0; i < win.length; i++){
  let winCombo = win[i]
  let p1 = winCombo[0] 
  let p2 = winCombo[1] 
  let p3 = winCombo[2]
  if(square[p1] == p2 && p2 == p3 && p3 == p1){
    alert(`Winner! player ${playerTurn}`)
  } 

}

  playerTurn = (playerTurn == "X") ? "O" : "X";
  this.setState ({
    playerTurn: playerTurn,
    squares: squares

  })
}

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div id="gameboard">
        {/* {this.state.squares.map((value, index) => {
          return <Square value={value}
           key={index} 
           index={index}
           handleGamePlay={this.handleGamePlay}
           />
        } )} */}

        {this.state.squares.map((square, index) => {
          return (<div onClick={() => this.handleClick(index)}  className="square">{square}</div>)})}
        </div>
      </>
      )
        }
      }
export default App
