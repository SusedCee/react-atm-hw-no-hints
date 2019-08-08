import React, { Component } from 'react';
import App from '../App';


class Account extends Component {
  constructor (props) {
    super()
    this.state = {
      balance: 0,
      className: "balance"
    }
  }

//deposit money by converting the string into a number
handleDeposit = (e) => {
  this.setState({
    balance: this.state.balance + parseInt(this.refs.textInput.value)
  })
}

//withdraw money if it is less or equal to the money in account.
handleWithdraw = async (e) => {
  if(this.state.balance >= parseInt(this.refs.textInput.value)){
    await this.setState({
       balance: this.state.balance - parseInt(this.refs.textInput.value)
    })
  }  else {
      alert('There are not enough funds in your account');
    }
    await this.checkZero()
  }

checkZero = () => {
    if(this.state.balance == 0){
      this.setState({
      className: "zero"
      })
    }
  }

  render() {
    return (
      <div className ="account">
        <h2>{this.props.accountName}</h2>
        <div className={this.state.className}>${this.state.balance}</div>
        <input type="text" ref="textInput" placeholder="enter an amount" />
        <input type="button" onClick={this.handleDeposit} value="Deposit" />
        <input type="button" onClick={this.handleWithdraw} value="Withdraw" />
      </div>
    )}

}


export default Account;
