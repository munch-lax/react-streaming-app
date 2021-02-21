import react from 'react'
import {Router,Route} from 'react-router-dom'
import NavBar from './NavBar'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamLIst'
import StreamShow from './streams/StreamShow'
import history from '../history'

class App extends react.Component{

    

    render(){
        return (
            <div>
                
                <Router history={history}>
                    <div>
                    <NavBar/>
                        <Route path="/"  exact component={StreamList}/>
                        <Route path="/create" exact component={StreamCreate}/>
                        <Route path="/Edit/:id" exact component={StreamEdit}/>
                        <Route path="/Show/:id" exact component={StreamShow}/>
                        <Route path="/Delete/:id" exact component={StreamDelete}/>






                    </div>
                </Router>
                
            </div>
        )
    }
}

export default App