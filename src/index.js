import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Title from './Components/Title';
import Form from './Components/Form';
import Confirmation from './Components/Confirmation';
import './tailwind.output.css';

const App = () => (
  <BrowserRouter>
    <Title />
    <Switch>
      <Route exact path="/" component={Form} />
      <Route path="/confirmation" component={Confirmation} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.querySelector('#root'));

