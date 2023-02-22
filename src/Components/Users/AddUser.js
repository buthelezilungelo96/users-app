// import React, { useState } from 'react';
import React from "react"
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <div>
        <form onSubmit={AddUserHandler}>
          <label htmlFor='username'>Email</label>
          <input type='text' id='username' />
          <label htmlFor='Age'>Age (Years)</label>
          <input type='text' id='number' />
          <Button buttonName='Add User' />
          {/* <Button buttonName='Add User' onClick={setUserName} /> */}
        </form>
      </div>
    </Card>
  );
};

export default AddUser;
