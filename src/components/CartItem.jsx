import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addQuantity, removeQuantity } from '../utils/cartSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const handleAddQuantity = () => {
        dispatch(addQuantity(item));
    }

    const handleRemoveQuantity = () => {
        dispatch(removeQuantity(item));

    }
  return (
    <>
        <tr className="">
                <td className="py-2 px-3">
                  <span className='whitespace-nowrap text-sm'>{item?.name}</span>
                </td>

                <td className="flex justify-center py-2 px-3">
                 
                    <div className="flex justify-between items-center gap-2 text-orange-500 border px-2  border-gray-300 py-1">
                      <button className="text-sm" onClick={() => handleAddQuantity()}>
                        <FontAwesomeIcon icon={faPlus}  />
                      </button>
                      <span className='text-sm'>{item?.quantity}</span>
                      <button className='text-sm'>
                        <FontAwesomeIcon icon={faMinus} onClick={() => handleRemoveQuantity()} />
                      </button>
                    </div>
                 
                </td>
                <td className="py-2 px-3">
                  <span className='whitespace-nowrap text-sm'>₹ {(item?.price / 100) * item?.quantity} </span>
                </td>
                
              </tr>
    </>
  )
}

export default CartItem;