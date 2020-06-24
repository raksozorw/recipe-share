import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import  StreamEdit  from "./streams/StreamEdit";
import  StreamList  from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamCreate2 from './streams/StreamCreate2'
import  StreamDelete  from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from './Header';
import Footer from './Footer'
import Home from './Home'
import ScrollToTop from './ScrollToTop';

import history from '../history'
import '../app.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
        <div className="">
         
            <Router history={history}>
                <ScrollToTop/>
                <Header />
                <div className="everything">
                <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/recipes" exact component={StreamList}/>
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/editphoto/:id" exact component={StreamCreate2} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/:id" exact component={StreamShow} />
                        </Switch>
                    </div>
                    <Footer/>
            </Router>
        </div>
    )
};


export default App;

