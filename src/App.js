import React from 'react';
import './App.css';
import List from './List';

function App() {
  let data = [];
  return (
    <div className="App">
      <div id="left">
      Left
        <List addOption="true" data={data} heading="TODO"/>
      </div>
      <div id="right">
      Right
        <List addOption="false" data={data} heading={dateFormat(new Date())}/>
      </div>
    </div>
  );
}

function dateFormat(date) {
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = date.getFullYear();
  let ret = mm + '/' + dd + '/' + yyyy;
  return ret;
}

export default App;
