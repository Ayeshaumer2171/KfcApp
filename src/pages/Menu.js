import React, { useState } from 'react'
import Products from '../components/Products'
    import CartButtons from '../components/CartButtons'
    import Header from '../components/Header'
    import Pagination  from '../components/Pagination'
     import CartOffCanvas from '../components/CartOffCanvas'
     import { items } from "../Data/ProductsData";
     import { toast } from 'react-toastify';
     import 'react-toastify/dist/ReactToastify.css';

 export default function Menu() {

  const [cartCounter,setCartCounter]=useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCatId, setSelectedCatid] = useState(null);
  const [products, setProducts] = useState(items);

     //pagination
 const page1=()=>{
  setProducts( items.filter( i => i.id <=12 ) )
 }

 const page2=()=>{
  setProducts( items.filter( i => i.id >=12 && i.id<=35 ) )
 }

 const page3=()=>{
  setProducts( items.filter( i => i.id >=35 && i.id<=59 ) )
 }


  const onCatSelection = (catId) => {
    // console.log(catId);
    setSelectedCatid(catId);
    if (catId === null) {
      setProducts(items);
    } else {
      const filteredItems = items.filter((p) => p.categoryId === catId);
      setProducts(filteredItems);
    }
  };

  const increment=(item)=>{
    setCartCounter(cartCounter+1);  
    setCartItems([...cartItems, item]);

    toast.success('Item added to cart');

  }

   const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };


  return (
    <div className='container mb-5'>
      <Header cartCounter={cartCounter} />
      <CartOffCanvas cartItems={cartItems} removeItem={removeItem} />

      <CartButtons  onCatSelection={onCatSelection} selectedCatId={selectedCatId}/>
      <Products increment={increment} items={products}/>
      <Pagination  page1={page1} page2={page2} page3={page3}/>
    </div>
  )
}
