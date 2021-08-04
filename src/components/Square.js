import React, { Component } from 'react'

class Square extends Component{



handleClick = () => {
  // this.props.handleGamePlay(this.props.index)
  let playerTurn = this.state.playerTurn
  let squares = this.state.squares
}



  render(){
    return(
      <>
        <div className="square" onClick= {this.handleClick}>
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square


{/* <button
className="square"
onClick={() => this.setState({value: 'X'})}
>
{this.state.value}
</button> */}