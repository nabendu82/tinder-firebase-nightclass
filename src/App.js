import './App.css';
import Header from './components/Header';
import {  Route, Switch } from 'react-router-dom';
import TinderCards from './components/TinderCards';

function App() {
  return (
    <div className="app">
      <Header />
        <Switch>
          <Route path="/chat">Chat Page</Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
