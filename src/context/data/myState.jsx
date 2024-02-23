import React from 'react';
import MyContext from './myContext';

function myState(props) {

  const state = {
    name: "yogesh sathe",
    age : 25
  }

  const color = "red";
  return (
    <MyContext.Provider value={{state,color}}>{props.children}</MyContext.Provider>
  )
}

export default myState