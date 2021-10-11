import React from 'react'
import './App.css';
import store from "./Redux/customizedStore";
import * as actions from "./Redux/actions";

function App() {
  const [users, setUsers] = React.useState([])
  const [errMsg, setErrMsg] = React.useState('')
  const fetchUsers = () => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        store.dispatch(actions.getUsers(data))
      })
      .catch(err => setErrMsg(err))
  }
  React.useEffect(() => {
    fetchUsers()
  }, [])
  React.useEffect(() => {
    store.subscribe(() => {
      setUsers(store.getState())
    })
  })
  const deleteUser = (id) => {
      fetch(`/api/users/${id}`, {
        method: 'DELETE'
      })
      let newUsers = users.filter(user => user._id !== id)
      store.dispatch(actions.getUsers(newUsers))
  }
  return (
    <div className="App-header"> 
        <h2 style={{color: 'white'}}>To use patch, put or post, use <a href='https://www.postman.com/'>Postman</a></h2>
        <h3 style={{color: 'white'}}>Users being presented are from database. Deleting a user will remove it from the database.</h3>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'}}>
          {users !== [] && users.map(user => {
            {console.log(user.hasDegree)}
            return (<div style={{width: 300, height: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', padding: 15}}>
              <p style={{color: 'white', margin: 0, padding: 0}}>{user._id}</p>
              <p style={{color: 'white', margin: 0, padding: 0}}>{user.first_name}</p>
              <p style={{color: 'white', margin: 0, padding: 0}}>{user.last_name}</p>
              <p style={{color: 'white', margin: 0, padding: 0}}>{user.profession}</p>
              <p style={{color: 'white', margin: 0, padding: 0}}>Has a Degree: {`${user.hasDegree}`}</p>
              <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}} className='links'>
                  <button onClick={() => {deleteUser(user._id)}} style={{backgroundColor: 'rgba(0, 0, 0, 0)', color: 'white'}}>delete</button>
              </div>
            </div>)
          })}
        </div>
    </div>
  );
}

export default App;
