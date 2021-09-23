import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

/** Here all are the section of public/customer */
import Tasks_list from './pages/Tasks_list'


class App extends Component{
    state = {
        common : {
            PUBLIC_URL : ''
        }
        
    }
    render(){
        return (

            <Router>
                <div>
                    <Switch>

                        <Route exact path='/' component={Tasks_list} />
                        
                    </Switch>
                </div>
            </Router>
        )

    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
    