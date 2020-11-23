import React, { Component } from 'react';

const Form = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addMoney(e.target[0].value)
    e.target.reset()
  }

  return (
    <div className="form-div">
      <form className='form' onSubmit={handleSubmit}>
        <label>Add Money!</label>
        <input type="number" />
        <input type="submit"/>
      </form>
    </div>
  )
}


export default Form;
