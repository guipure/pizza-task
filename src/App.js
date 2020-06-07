import React from 'react'
import Menu from './components/Menu/Menu'
import ItemList from './components/ItemList/ItemList';
import Context from './context'


function App() {
  const [cart, setCart] = React.useState([])

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
