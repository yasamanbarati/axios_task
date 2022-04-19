import React, { Fragment, useState, useEffect } from 'react';
import {Routes ,Route} from 'react-router-dom';
import api from './api/Contacts';
import './App.css';
import PersonList from './component/PersonList';
import PersonInput from './component/PersonInput';
import UserList_get from './component/UserList_get';
import UserInput from './component/UserInput_post';


function App() {

  return (
    <Fragment>
      <PersonInput />
      <PersonList />
      <UserList_get />
      <UserInput />
    </Fragment>
  );
}

export default App;
