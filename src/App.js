import React from 'react'
import './App.css';
import store from "./Redux/customizedStore";
import * as actions from "./Redux/actions";
function App() {
  const [users, setUsers] = React.useState([])
  React.useEffect(() => {
   
    alert('started')
    store.dispatch(actions.getUsers());
    // console.log(store.getState())
    
  }, [])
  return (
    <div className="App-header">
      
    </div>
  );
}

export default App;
