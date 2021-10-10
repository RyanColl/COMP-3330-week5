import React from 'react'
import './App.css';
import store from "./Redux/customizedStore";
import * as actions from "./Redux/actions";
function App() {
  const [users, setUsers] = React.useState([])
  const [errMsg, setErrMsg] = React.useState('')
  React.useEffect(() => {
    fetch('/api/users')
    .then(res => res.json())
    .then(data => {
      store.dispatch(actions.getUsers(data))
      console.log(data, ' ', store.getState())
    })
    .catch(err => setErrMsg(err))
  }, [])
  return (
    <div className="App-header">
        {/* {users !== [] && users.map(user => {
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', margin: 15}}>
            <span style={{color: 'white'}}>{user.first_name}</span>
            <span style={{color: 'white'}}>{user.last_name}</span>
            <span style={{color: 'white'}}>{user.profession}</span>
            <span style={{color: 'white'}}>Has a Degree: {user.hasDegree}</span>
          </div>
        })} */}
    </div>
  );
}

export default App;
