import React from 'react';
import './App.css';
import List from './List';
import ListOfList from './ListOfList';
import AddTask from './AddTask';
import Popup from "reactjs-popup";

class App extends React.Component {

  render() {
    let data = [
      "asnacsc",
      "aksnas",
      "jfkdnfvskd",
      "wewnjasa",
      "injk jkadsnca",
      "opnaksnaknqwnasasn ans a ",
      "asnacsc",
      "aksnas",
      "jfkdnfvskd",
      "wewnjasa",
      "injk jkadsnca",
      "opnaksnaknqwnasasn ans a ",
      "asnacsc",
      "aksnas",
      "jfkdnfvskd",
      "wewnjasa",
      "injk jkadsnca",
      "opnaksnaknqwnasasn ans a ",
      "asnacsc",
      "aksnas",
      "jfkdnfvskd",
      "wewnjasa",
      "injk jkadsnca",
      "opnaksnaknqwnasasn ans a ",
      "asnacsc",
      "aksnas",
      "jfkdnfvskd",
      "wewnjasa",
      "injk jkadsnca",
      "opnaksnaknqwnasasn ans a ",
    ];
    let datewisedata = [
      {
        "heading": "2020-07-11",
        "list": [
          "opnaksnaknwnasasn ans a ",
          "asnacsc",
          "aksnas",
          "jfkdnfvskd",
          "wewnjasa",
          "injk jkadsnca",
          "opnaksnaknqwnasasn ans a ",
        ],
      },
      {
        "heading": "2020-07-10",
        "list": [
          "opnaksnaknqwnasasn ans a ",
          "asnacsc",
          "aksnas",
          "jfkdnfvskd",
          "wewnjasa",
          "injk jkadsnca",
          "opnaksnaknqwnasasn ans a ",
        ],
      },
      {
        "heading": "2020-07-09",
        "list": [
          "opnaksnaknqwnasasn ans a ",
          "asnacsc",
          "aksnas",
          "jfkdnfvskd",
          "wewnjasa",
          "injk jkadsnca",
          "opnaksnaknqwnasasn ans a ",
        ],
      },
    ]
    return (
      <div className="App">
        <div id="left">
          <Popup trigger={<button>Add Task</button>} >
            <AddTask />
          </Popup>
          <List data={data} heading="TODO" scrollable parentModify={this.modify}/>
        </div>
        <div id="right">
          <ListOfList data={datewisedata} scrollable />
        </div>
        <div id="ddd">unmodified</div>
      </div>
    );
  }

  modify() {
    var element = document.getElementById("ddd");
    element.innerHTML = Math.random();
  }

}



function dateFormat(date) {
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = date.getFullYear();
  let ret = mm + '/' + dd + '/' + yyyy;
  return ret;
}

export default App;
