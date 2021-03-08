import React from 'react';
import Sidebar from  './components/Sidebar';
import NavBar from './components/NavBar';
import {  Redirect, Route, Switch ,useLocation  } from 'react-router-dom';
import About from './components/About';
import Resumen from './components/Resumen';
import Proyectos from './components/Proyectos';

import { AnimatePresence } from 'framer-motion'
function App() {
const location =  useLocation();
  return (
    
    <div className="app">
        <div className="container app__container">
          <div className="row app__row">
            <div className="col-lg-3">

              <Sidebar />

            </div>
            <div className="col-lg-9 app__main-content">
              {/* navbar */}
              <NavBar />
              <AnimatePresence exitBeforeEnter>
                <Switch location= { location } key = { location.key}>
                  <Route exact path="/">
                    <About />
                  </Route>
                  <Route path="/resumen">
                    <Resumen />
                  </Route>
                  <Route path="/proyectos" component={Proyectos} />
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;
