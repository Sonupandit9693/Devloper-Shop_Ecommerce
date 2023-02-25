import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill} from "react-icons/bs";
import { MdAccountCircle} from "react-icons/md";

const Navbar = ({Cart , addToCart, removeFromCart, clearCart, subTotal}) => {
  const toggleCart = ()=>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }

  }
  const ref  = useRef()
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md sticky top-0 bg-white z-10">
      <div className="logo">
        <Link href={"/"}>  
            <Image
              className="mx-2 my-2"
              width={100}
              height={10}
              src="/NYIKAA.png"
              alt=""
            />
        </Link>
      </div>
      <div className="nav ">
        <ul className="flex items-center space-x-2 font-bold md:text-xl py-3 ">
          <Link href={"/hoodies"}>
          <li className="mr-6">Hoodies</li>
          </Link>
          <Link href={"/tshirts"}>
          <li className="mr-6">Tshirt</li>{" "}
          </Link>
          <Link href={"/sticker"}>
          <li className="mr-6">Stiker</li>{" "}
          </Link>
          <Link href={"/mugs"}>
          <li className="mr-6">Mugs</li>{" "}
          </Link>
        </ul>
      </div>
      <div  className="cursor-pointer cart absolute right-0 top-4  mx-5 flex">
        <Link href={'/login'}><MdAccountCircle className="text-xl md:text-3xl mx-2"/></Link> 
        <AiOutlineShoppingCart onClick={toggleCart} className="text-xl md:text-3xl" />
      </div>

      <div ref={ref} className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 py-10 px-8  transform transition-transform ${Object.keys(Cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'} `}>
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500">
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold ">
        {Object.keys(Cart).length == 0 && <div className="my-4 font-semibold ">Your Cart is empty!</div>}
        {Object.keys(Cart).map((k)=>{return <li key={k} >
          <div className="item flex my-5 " >
            <div className="w-2/3 font-semibold">{Cart[k].name} </div>
            <div className="w-1/3 flex items-center justify-center font-semibold text-lg"><AiOutlineMinusCircle onClick={()=>{removeFromCart(k, 1, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].variant )}}
             className="cursor-pointer text-pink-500"/> <span className="mx-2 text-sm">{Cart[k].qty}</span> <AiOutlinePlusCircle
             onClick={()=>{addToCart(k, 1, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].variant )}} className="cursor-pointer text-pink-500"/></div>
            </div>
          </li>})}
    
          
        </ol>
        <div className="font-bold my-2 ">Subtotal: ₹{subTotal}</div>
        <div className="flex">
        <Link href={'/checkout'}><button className="flex  mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
        <BsFillBagCheckFill className="m-1"/>Checkout</button></Link>
        <button onClick={clearCart} className="flex  mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
        Clear Cart</button>
      </div>

      </div>


    </div>
  )
};

export default Navbar;
