import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [" ", " "," "," "," "," "," "," "," "],
      player: "X",
      player2: "O",
      value: null
    }
  }

handleGamePlay = (index) => {
let {squares} = this.state
this.setState({squares: squares}) 

let {player1} = this.state
this.setState({player1: player1}) 
squares[index] = player1

let {player2} = this.state
this.setState({player2: player2}) 
squares[index] = player2


// if (!squares[index]){
//   squares[index] = player1
//   player1 === "X" ? player2 = "O" : player1 = "X"
//   this.setState({squares: "X", player: player})

// }


//this.state = { player:1 , winner: false}
//return this.state.player === 1 ? 2 : 1;

}

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div id="gameboard">
        {this.state.squares.map((value, index) => {
          return <Square value={value}
           key={index} 
           index={index}
           handleGamePlay={this.handleGamePlay}
           />
        } )}
    
        </div>
      </>
    )
  }
}
export default App
