import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cart-slice';
import { removeFromCart } from "../../redux/slices/cart-slice";

export default function ProductTile({ product }) {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);

    console.log(cart)

    function handleAddToCart(){
        dispatch(addToCart(product))
    }
    function handleRemoveFromCart(){
        console.log("removed");
        dispatch(removeFromCart(product.id))
    }

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart}
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-3 ">
           {
            cart.some(item => item.id === product.id) ? 'Remove from cart' : 'Add to cart'
           }
          </button>
        </div>
      </div>
    </div>
  );
}
