import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";


// const Tshirts = ({products})=>{
//   return(
//     <div></div>
//   )
// }

const Tshirts = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).map((item)=>{
     return<div  key={products[item]._id} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-2">           
              <div className="block relative h-50 rounded overflow-hidden ">
              
               <Link passHref={true} href={`/product/${products[item].slug}`}> 
               <img
                  alt="ecommerce"
                  className="m-auto  h-[20vh]  md:h-[30vh] block "
                  src={products[item].img}
                /></Link>
              </div>
              <div className="mt-6  text-center md:text-left">
                <h3 className="text-gray-500 text-xs69 tracking-widest title-font mb-1">
                  T-shirt
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                {products[item].title}
                </h2>
                <p className="mt-1">₹{products[item].price}</p>
                <div className="mt-1">
                 {products[item].size.includes('S') && <span className="border border-gray-600 px-1 mx-1">S,</span>} 
                 {products[item].size.includes('M') && <span className="border border-gray-600 px-1 mx-1> M,</span>} 
                 {products[item].size.includes('L') && <span className="border border-gray-600 px-1 mx-1>L,</span>}
                 {products[item].size.includes('XL') && <span className="border border-gray-600 px-1 mx-1>XL,</span>} 
                 {products[item].size.includes('XXL') && <span className="border border-gray-600 px-1 mx-1>XXL</span>} 
                </div>
                <div className="mt-1">S,
                  M,
                  L,
                  XL,
                  XXL
                </div>
              </div>
            </div>})}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({category:'tshirt'})
  let tshirts = {}
  for(let item of products){
    if(item.title in tshirts){
        if(! tshirts[item.title].color.includes(item.color) && item.availabelQty > 0){
            tshirts[item.title].color.push(item.color);
        }
        if(! tshirts[item.title].size.includes(item.size) && item.availabelQty > 0){
            tshirts[item.size].size.push(item.size);
        }

      }
    else{
        tshirts[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availabelQty > 0){
            tshirts[item.title].color =[item.color]
            tshirts[item.title].size = [item.size]
        }
    }
  }
 
  return {
    
    props: {products: JSON.parse(JSON.stringify(tshirts))}, // will be passed to the page component as props
    
  }
}

export default Tshirts;
