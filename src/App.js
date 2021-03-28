import './App.css';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom'

import Cartão from './pages/Cartão'
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/produtos/cartão' component={Cartão}/>       
        </Switch>
      </div>
    </Router>
  );
}

export default App;
