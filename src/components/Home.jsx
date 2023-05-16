import React, { useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import data from "../data.json";
import Cart from "./Cart";
import { useEffect } from "react";

const savelocal = () => {
  const data = localStorage.getItem("cartitem");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
function Home() {
  const [item, setItem] = useState(data.products);
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [cartitem, setCartitem] = useState(savelocal());

  const sortproduct = (event) => {
    setSort(event.target.value);
    if (sort === "asc") {
      setItem(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setItem(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };
  const brandfilter = (e) => {
    if (e.target.value === "") {
      setBrand(e.target.value);
      setItem(data.products);
    } else {
      setBrand(e.target.value);
      setItem(
        data.products.filter(
          (produc) => produc.availableBrand.indexOf(e.target.value) >= 0
        )
      );
    }
  };
  const addproduct = (product) => {
    const exist = cartitem.find((element) => element.id === product.id);
    if (exist) {
      setCartitem(
        cartitem.map((element) =>
          element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element
        )
      );
    } else {
      setCartitem([...cartitem, { ...product, qty: 1 }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartitem", JSON.stringify(cartitem));
  }, [cartitem]);

  const addremove = (product) => {
    const exist = cartitem.find((element) => element.id === product.id);
    if (exist.qty === 1) {
      setCartitem(cartitem.filter((element) => element.id !== product.id));
    } else {
      setCartitem(
        cartitem.map((element) =>
          element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element
        )
      );
    }
  };
  return (
    <>
      <div className="  box">
        <div>
          <header className="bg-sky-800 p-2 text-white">فروشگاه محصولات</header>
        </div>
        <div>
          <div className="grid grid-cols-3 ">
            <div className="col-span-2">
              <Filter
                brand={brand}
                brandfilter={brandfilter}
                item={item}
                sortproduct={sortproduct}
              />
              <Products item={item} addproduct={addproduct} />
            </div>
            <div className="col-span-1">
              <Cart cartitem={cartitem} addremove={addremove} />
            </div>
          </div>
        </div>
        <div>
          <footer className=" bg-sky-800 p-2  text-white text-center text-[19px]">
            فروشگاه دیجی کوله
          </footer>
        </div>
      </div>
    </>
  );
}
export default Home;
