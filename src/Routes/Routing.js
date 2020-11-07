import React from 'react';
import {Switch,Route} from'react-router-dom';
import Home from '../components/Home';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Routing = () => {
    return (
        <>
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/resume" component={Resume}/>
               <Route exact path="/projects" component={Projects}/>
               <Route exact path="/contact" component={Contact}/>
            </Switch> 
        </>
    )
}

export default Routing
