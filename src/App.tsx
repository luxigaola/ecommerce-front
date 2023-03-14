import React from 'react';
import { Provider } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import Navigation from './components/core/Navigation';
import routes from './routes';
// import RouteList from './RouteList';
import store from './store';


function App() {
  const element = useRoutes(routes)
  return (
    
    <Provider store={store}>
        
        <Navigation></Navigation>
        {/* <RouteList></RouteList> */}
        {element}
    </Provider>
  );
}

export default App;
