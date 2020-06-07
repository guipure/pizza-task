import React, { useEffect } from 'react'
import Menu from './components/Menu/Menu'
import ItemList from './components/ItemList/ItemList';
import Context from './context'


function App() {
  const savedCart = JSON.parse(localStorage.getItem('cart'))
  const [cart, setCart] = React.useState(savedCart ? savedCart : [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  })

  return (
    <Context.Provider value={{ cart, setCart }}>
      <div className="wrapper">
        <Menu />
        <ItemList />
      </div>
      <div id="modal-root" />
    </Context.Provider>
  );
}

export default App;
