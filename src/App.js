import React, {Component} from 'react';
import { fetchData } from './apiCalls.js'
import './App.css';

class App extends Component {

  state = {
    data: []
  }

componentDidMount = async () => { 
 let data = await fetchData()
 this.setState({"data": data})
}

render = () => {
  console.log(this.state.data)
  return (
    <div className="App">
      HERE IS MY APP
    </div>
  );
}
}


export default App;
