import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Header from './Header';
import Question1 from './question1';
import Question2 from './question2';
import Question3 from './question3';
import Question5 from './question5';
import Todo from './todolist';

  function App() {
    return(
      <HashRouter>
        <Header/>
        <Route exact path="/question1" component={Question1}/>
        <Route exact path="/question2" component={Question2}/>
        <Route exact path="/question3" component={Question3}/>
        <Route exact path="/question5" component={Question5}/>
        <Route extact path="/todo" component={Todo}/>
     </HashRouter>
    )
   
}

export default App;
