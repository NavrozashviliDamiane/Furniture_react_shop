import React from 'react';
import Header from './components/Header';
import Preview from './components/Preview';
import Content from './pages/Home';
import Comms from './components/Communication';
import Footer from './components/Footer';
import Product from './pages/Product'
import { DataProvider } from './data/DataProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Room from './components/Room/Room';


const queryClient = new QueryClient();



function App() {
  return (
   
    <QueryClientProvider client={queryClient}>
    <DataProvider>
    <Router>
  
      <Switch>
    <div className="wrapper">

      <Header />

      <Route path="/" exact>
        <Preview />
        <Content /> 
        <Comms />
      </Route>

      <Route path="/otherPage/:productId" component={Product} />
      <Route path="/room" component={Room} />

      <Footer />
    </div>
    </Switch>
  
    </Router>
    </DataProvider>
    </QueryClientProvider>
   
  );
}

export default App;


