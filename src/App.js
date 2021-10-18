import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home>
            </Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
