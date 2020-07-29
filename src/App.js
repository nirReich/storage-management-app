import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from './Componants/SignIn'
import SingUp from './Componants/SingUp'
import LogIn from './Componants/LogIn';
import Manager from './Componants/Manager'

function App() {

  const [workers, setWorkers] = useState([{ workerNum: '12345', workerName: 'nir reich', forkLift: false, entries: 0 }]);
  

  const countEntries=(index)=>{
   debugger
    workers[index].entries = (workers[index].entries)+1;
    setWorkers(workers);
  }

  const addWorkerToList=(worker)=>{
    let flag = true;
    for (let index = 0; index < workers.length; index++) { //tried to check workers num but didnt work.
      if (workers[index].workerNum === worker.workerNum) {
        flag=false
      }
    }
    if (flag) {
      setWorkers([...workers,{...worker}])
    }
    else{
      alert('error!')
    }

  }

  



//-------------------------------------------------------------
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path={'/'} component={() => { return <SignIn /> }} />
          <Route exact path={'/singup'} component={() => { return <SingUp addWorkerToList={addWorkerToList} /> }} />
          <Route exact path={'/login'} component={() => { return <LogIn countEntries={countEntries}  workers={workers} /> }} />
          <Route exact path={'/manager'} component={() => { return <Manager workers={workers}/>}}/>




        </Switch>
      </Router>

    </div>
  );
}

export default App;
