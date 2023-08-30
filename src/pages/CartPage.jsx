import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_IMG_CDN } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch()
  const items = useSelector((store) => store.cart.items);
  const totalAmount = useSelector((store) => store.cart.total);
  console.log(items);

  return (
    <div className="bg-gray-200 py-10 min-h-screen relative">
      {
        (items.length === 0 ? 
          (<EmptyCart />) : (
            <div className="max-w-7xl px-4 mx-auto ">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Your Cart</h1>

          <button className="flex gap-2 items-center text-orange-500" onClick={() => dispatch(clearCart())}>
            <span className="text-sm font-bold">REMOVE ALL</span>
            <span>
              <FontAwesomeIcon icon={faXmark} color="#f97316" />
            </span>
          </button>
        </div>

        <div className="my-6">
          <div className="flex flex-wrap-reverse gap-6 ">
            <div className="flex-grow basis-8/12 bg-white">
              <div className="lg:p-6 p-4">
                <h1 className="font-bold">Enter delivery address</h1>

                <form className=" my-4">
                  <textarea
                    placeholder="It's just for UI"
                    name=""
                    id=""
                    rows="5"
                    className="w-full border-2 px-2"
                  ></textarea>

                  <button
                    type="submit"
                    className=" px-4 py-2 text-sm font-bold bg-orange-500 text-white"
                  >
                    ADD
                  </button>
                </form>
              </div>
            </div>

            <div className="flex-grow shrink-0 basis-3/12 bg-white self-end">
              <table className="mb-4 w-full table-auto">
                <thead>
                  <tr>
                    <th className=" text-start pt-4 px-3">
                      <span className="text-sm">ITEMS</span>
                    </th>
                    <th className=" text-start"></th>
                    <th className=" text-start"></th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item) => (
                    <CartItem item={item} key={item?.id} />
                  ))}
                  <tr>
                    <td className="px-3">
                      <span className="text-sm">Total</span>
                    </td>
                    <td></td>
                    <td>
                      <span className="text-sm font-bold">₹ {totalAmount / 100}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

          ))
      }
      
    </div>
  );
};

export default CartPage;
