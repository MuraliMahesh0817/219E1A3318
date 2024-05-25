import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllProductsPage from './components/AllProductsPage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllProductsPage} />
        <Route path="/product/:productId" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default App;
