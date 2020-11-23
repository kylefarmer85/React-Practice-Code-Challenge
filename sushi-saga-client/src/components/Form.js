import React, { Component } from 'react';


class Form extends Component {
  constructor(){
    super()
    this.state = {
      value: 0
    }
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMoney(e.target[0].value)
    this.setState({
      value: 0
    })
  }

  render() {
    return (
      <div className="form-div">
      <form className='form' onSubmit={this.handleSubmit}>
        <label>Add Money!</label>
        <input type="number" value={this.state.value} onChange={this.onChange} />
        <input type="submit"/>
      </form>
    </div>
    );
  }
}

export default Form;











