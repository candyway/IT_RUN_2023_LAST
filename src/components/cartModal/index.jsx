import { useDispatch, useSelector } from 'react-redux';
import { MinusItemInCart, PlusItemInCart, deleteItemInCart } from '../../redux/cart/cartSlice';

const CartModal = ({ setCartModal }) => {
  const { itemInCart } = useSelector(state => state.cart);
  const dispatch = useDispatch()

  const deleteFromCart = (id) => {
    dispatch(deleteItemInCart(id))
  }

  const PlusItem = (id) => {
    dispatch(PlusItemInCart(id))
  }

  const MinusItem = (id) => {
    dispatch(MinusItemInCart(id))
  }


  const totalCost = itemInCart.reduce(
    (total, item) => total + parseFloat(item.price.replace(/\s/g, '') * item.quantity),
    0
  );

  

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative w-5/6 h-4/6 bg-white rounded-lg p-6">
        <button
          onClick={() => setCartModal(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">Cart</h2>
        {itemInCart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
            <div className='overflow-y-auto h-4/5'>
          <ul>
            {itemInCart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4 mx-auto bg-gray-100 p-2 rounded-lg w-11/12 z-40 ">
                <img src={item.img} alt={item.title} className="w-10 h-10 rounded-full" />
                <div className="ml-4 w-8/12 flex justify-between">
                  <p className="text-gray-800 font-semibold">{item.title}</p>
                  <div className='flex gap-2'>
                  <p className="text-gray-800 font-semibold mr-10">{item.price} KGS</p>
                  <button onClick={() => MinusItem(item.id)}npm className='bg-black text-[#FFD700] hover:bg-[#FFD700] hover:text-black active:bg-yellow w-6 h-6 rounded-full'>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => PlusItem(item.id)} className='bg-black text-[#FFD700] hover:bg-[#FFD700] hover:text-black active:bg-yellow w-6 h-6 rounded-full'>+</button>
                  </div>
                </div>
                <button
                  onClick={() => deleteFromCart(item.id)}
                  className="text-[#FFD700] hover:text-black active:text-[#FFD700] hover:bg-[#FFD700] rounded-full bg-black p-2 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 4.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </ul>
          </div>
        )}
        <div>
        <hr className="mb-1" />
        <p className="text-gray-800 mt-4 bottom-2">Total Cost: {totalCost} KGS</p>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
