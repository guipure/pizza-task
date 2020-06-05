import React from 'react'
import Menu from './components/Menu/Menu'
import ItemList from './components/ItemList/ItemList';
import Context from './context'


function App() {
  const [cart, setCart] = React.useState([])
  const [currency, setCurrency] = React.useState('€')

  function toggleCurrency() {
    setCurrency(
      currency === '€' ? '$' : '€'
    )
  }

  return (
    <Context.Provider value={{ cart, setCart, currency, toggleCurrency }}>
      <div className="wrapper">
        <Menu />
        <ItemList />
      </div>
    </Context.Provider>
  );
}

export default App;
