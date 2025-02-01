import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ProductList from './components/products'
import Button from './components/alert'
import ChangeText from'./components/ChangeText'
import ClickCounter from'./components/ClickCounter'
import MyCheckedBox from './components/MyCheckedBox'
import PrintCount from './components/ClickCounter'


const dummyProductData = ["Product 1", "Product 2", "Product 3", "Product 4"];

function App() {
  const [count, setCount] = useState(0)
  
  return (
   <div>
    <h1>React JS concepts 2024</h1>
    
    {/* passing props to index.jsx component */}
    {/* <ProductList name="Rishabh" city="Noida" listOfProduct= {dummyProductData} /> */}
    <Button />
    <ClickCounter/>
    <ChangeText/>
    <MyCheckedBox/>
   </div>
  )
  
}

export default App
