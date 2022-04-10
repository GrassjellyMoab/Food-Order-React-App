import React from 'react';
import Header from './components/Header+Cart/Header/Header';
import Food from './components/FoodPortion/Food/Food';
  
  
  function App() {
  return (
    <React.Fragment>
      {/* Header for App */}
      <Header></Header>
      {/* Food Items */}
      <Food></Food>
    </React.Fragment>
  );
}

export default App;
