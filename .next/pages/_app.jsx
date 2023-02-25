import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import { useState, useEffect } from 'react'

//: AppProps

export default function App({ Component, pageProps } ) {
  const [Cart, setCart] = useState({})
  const [subTotal, setsubTotal] = useState(0)

  useEffect(() => {
    try {
      if(localStorage.getItem("Cart")){
        setCart(JSON.parse(localStorage.getItem("Cart")))
        saveCart(JSON.parse(localStorage.getItem("Cart")))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])
  

  const saveCart = (myCart) => {
    localStorage.setItem("Cart",JSON.stringify(myCart))
    let subt = 0
    let keys = Object.keys(myCart)
    for(let i =0; i < keys.length; i++){
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setsubTotal(subt)
  }

  const addToCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = Cart;
    if(itemCode in Cart){
      newCart[itemCode].qty = Cart[itemCode].qty + qty;
    }
    else{
      newCart[itemCode] = {qty: 1, price, name, size, variant};
    }
    setCart(newCart);
    saveCart(newCart)
  }

  const clearCart = ()=>{
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = JSON.parse(JSON.stringify(Cart));
    if(itemCode in Cart){
      newCart[itemCode].qty = Cart[itemCode].qty - qty;
    }
    if(newCart[itemCode]["qty"] <= 0){
      delete newCart[itemCode]
    }
    setCart(newCart);
    saveCart(newCart)
  }

  return<>
  <Navbar key={subTotal} Cart ={Cart} addToCart ={addToCart} removeFromCart= {removeFromCart} clearCart = {clearCart} subTotal ={subTotal}/>
  <Component Cart ={Cart} addToCart ={addToCart} removeFromCart= {removeFromCart} clearCart = {clearCart} subTotal ={subTotal} {...pageProps} />
  <Footer/>
  </>
}
