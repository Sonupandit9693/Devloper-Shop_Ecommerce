import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill} from "react-icons/bs";
import Link from "next/link";

const Checkout = ({Cart , addToCart, removeFromCart, clearCart, subTotal}) => {
  return (
    <div className="container px-2 sm:m-auto">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl ">1. Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className=" mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            type="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              phone
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="City" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="City"
              name="City"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-4">
            <label htmlFor="picode" className="leading-7 text-sm text-gray-600">
              pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>

      <h2 className="font-semibold text-xl ">2. Review Cart Items & Pay</h2>
      <div className=" sideCart  bg-pink-100 p-6 m-2 "> 
       
        <ol className="list-decimal font-semibold ">
        {Object.keys(Cart).length == 0 && <div className="my-4 font-semibold ">Your Cart is empty!</div>}
        {Object.keys(Cart).map((k)=>{return <li key={k} >
          <div className="item flex my-5 " >
            <div className=" font-semibold">{Cart[k].name} </div>
            <div className="w-1/3 flex items-center justify-center font-semibold text-lg"><AiOutlineMinusCircle onClick={()=>{removeFromCart(k, 1, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].variant )}}
             className="cursor-pointer text-pink-500"/> <span className="mx-2 text-sm">{Cart[k].qty}</span> <AiOutlinePlusCircle
             onClick={()=>{addToCart(k, 1, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].variant )}} className="cursor-pointer text-pink-500"/></div>
            </div>
          </li>})}
            <span className="font-bold">Subtotal: ₹{subTotal}</span>
          
        </ol>
      </div>
      <div className="mx-4">
          <Link href={'/checkout'}><button class="flex  mr-2 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
        <BsFillBagCheckFill className="m-1"/>Pay ₹{subTotal}  </button></Link>
          </div>
    </div>
  );
};

export default Checkout;
