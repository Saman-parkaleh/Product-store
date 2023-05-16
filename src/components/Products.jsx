import React from "react";
import formatCurrency from "./Utli"
import HeadShake from 'react-reveal/HeadShake';


function Products(props) {
   
  return (
    <>
    
      <div className="h-[71vh] shadow-2xl boxproduct  bg-red-100">
        <ul className=" m-[5px]  grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 gap-10  ">
         {
           props.item.map((item)=>
           <HeadShake cascade>
          <li  key={item.id} className='  bg-sky-100 shadow-xl '>
           <div className="flex justify-center content-center grid">
             <img className=" h-[200px] xl:h-[300px] p-2"  src={item.image} alt="img" />
             <p>{item.title}</p>
             <div className="border flex justify-between p-2">
               <button className="bg-sky-600 "onClick={()=>props.addproduct(item)}>افزودن به سبد خرید</button>
               <p>{ formatCurrency (item.price)}</p>
             </div>
           </div>
         </li>
         </HeadShake>
           )


         }
        </ul>
      </div>
      
    </>
  );
}

export default Products;
