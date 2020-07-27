import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import RecipeEdit from "./recipes/RecipeEdit";
import RecipeList from "./recipes/RecipeList";
import RecipeCreate from "./recipes/RecipeCreate";
import RecipeCreate2 from "./recipes/RecipeCreate2";
import RecipeDelete from "./recipes/RecipeDelete";
import RecipeShow from "./recipes/RecipeShow";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";

import history from "../history";
import "../app.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className=''>
      <Router history={history}>
        <ScrollToTop />
        <Header />
        <div className='everything'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/recipes' exact component={RecipeList} />
            <Route path='/recipes/new' exact component={RecipeCreate} />
            <Route
              path='/recipes/editphoto/:id'
              exact
              component={RecipeCreate2}
            />
            <Route path='/recipes/edit/:id' exact component={RecipeEdit} />
            <Route path='/recipes/delete/:id' exact component={RecipeDelete} />
            <Route path='/recipes/:id' exact component={RecipeShow} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
