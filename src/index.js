import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faHandsHelping, faCompass, faSeedling   } from '@fortawesome/free-solid-svg-icons';
import Title from './Components/Title';
import Form from './Components/Form';
import Container from './Components/Layout/Container';
import Confirmation from './Components/Confirmation';
import Features from './Components/Layout/Features';
import './tailwind.output.css';

const App = () => (
  <BrowserRouter>
    <Title />
    <Container>
      <h2 className="text-2xl font-bold text-custom-blue mb-2">Our Mission</h2>
      <p className="mx-auto w-1/2 text-center">
        For many people, especially those in low-income communities, 
        investing money can be a scary process
        While many solutions offer accessible trading, 
        several people are forced to navigate the opaque nature of investing alone.
      </p>
    </Container>
    <Container>
      <div className="flex flex-col md:flex-row w-1/2">
        <div className="flex flex-col items-start justify-center text-left w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-custom-orange">Our Product</h2>
          <p>
            At <span className="font-bold text-custom-blue">Plutus</span>, we are creating a platform to demystify investing
            and connect investors, experienced or not, to fund managers
            with expertise.
          </p>
        </div>
        <div className="flex w-64 h-64 ml-8 items-center justify-center shadow-lg rounded-full bg-custom-blue">
          <FontAwesomeIcon icon={faMoneyBillWave} size="7x" color="#ffffff" />
        </div>

      </div>
    </Container>
    <Container>
      <div className="flex flex-col md:flex-row mx-auto px-10">
      <Features 
        icon={faHandsHelping} 
        title="Get Expert Advice" 
        text="By connecting fund managers and investors, we can facilitate portfolio createion with various secrurities." />

      <Features 
        icon={faCompass} 
        title="Explore Other Portfolios" 
        text="You'll be able to access many portfolios of various fundmanagers to track their performance." />

      <Features 
        icon={faSeedling} 
        title="Comfortably Invest" 
        text="With experienced fund managers and knowledge at your fingertips, you can comfortably invest and let your money grow" />
    </div> 
      
    </Container>
    <Switch>
      <Route exact path="/" component={Form} />
      <Route path="/confirmation" component={Confirmation} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.querySelector('#root'));

