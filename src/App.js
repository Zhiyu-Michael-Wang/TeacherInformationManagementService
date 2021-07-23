import React from 'react'
import UserList from './components/UserList'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PDF from './components/PDF'
import Title from './components/Title'


class App extends React.Component{

  render(){
    return(
      
        
        <Router>
          <div className="App" id="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={PDF} />
              <Route path="/detail/:name" component={PDF} />

            </Switch>
            
          </div>
        </Router>

    )
  }

}

const Home = () => (
  <div>
    <Title />
    <UserList />
  </div>
)



export default App