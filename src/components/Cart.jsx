import React from "react";
import { Fade } from "react-reveal";
import formatCurrency from "./Utli";

function Cart(props) {
  const { cartitem, addremove } = props;
  const itempuece = cartitem.reduce((a, c) => a + c.price * c.qty, 0);
  const totalprice = itempuece;

  return (
    <>
    
      <div className="boxcart p-5">
        {cartitem.length === 0 ? (
          <div className="text-center bg-white text-red-500 text-[25px]  rounded-xl">
            سبد خرید خالی است.
          </div>
        ) : (
          <div className="text-center bg-white text-[25px]  rounded-xl">
            شما {cartitem.length} محصول در سبد خرید دارید.
          </div>
        )}

        <ul className="mt-5 ">
          {cartitem.map((item) => (
            <Fade left>
            <li className=" flex rounded-2xl justify-between h-[121px] shadow-inner  bg-red-100 m-3">
              <img
                className="object-fit rounded-2xl	w-[150px] h-[120px] p-2"
                src={item.image}
                alt="df"
              />
              <p>{item.titel}</p>
              <div className="flex flex-col content-end grid  justify-items-center">
                <samp className="bg-green-400 text-center mb-3 rounded-2xl w-[50px] p-1">
                  {item.qty}خرید
                </samp>
                <button
                  className=" bg-pink-500 mb-5 rounded-md mx-1 text-[20px] w-[50px]"
                  onClick={() => addremove(item)}
                >
                  حذف
                </button>
              </div>
            </li>
            </Fade>
          ))}
        </ul>

        <h1 className="text-center">مجموع قیمت {formatCurrency(totalprice)}</h1>
      </div>
      
    </>
  );
}

export default Cart;
