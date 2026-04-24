import { toast } from "react-toastify";
import CartCard from "./CartCard";
import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = ({ selectedCard, setSelectedCart }) => {
  let totalCartPrice = 0;
  selectedCard.map((item) => (totalCartPrice += item.price));
  return (
    <div className="bg-[#F2F2F2] rounded-2xl p-10 max-w-7xl mx-auto space-y-6 shadow-xl">
      <h3 className="text-[#101727] text-2xl font-bold">Your Cart</h3>
      <div className="space-y-4 ">
        {selectedCard.length === 0 ? (
          <div className="flex flex-col justify-center items-center space-y-4">
            <MdOutlineShoppingCart className="h-20 w-20 text-gray-300"></MdOutlineShoppingCart>
            <h3 className="text-[#101727] text-xl font-bold">
              Your cart is empty.
            </h3>
          </div>
        ) : (
          selectedCard.map((cartCard) => (
            <CartCard
              key={cartCard.id}
              cartCard={cartCard}
              selectedCard={selectedCard}
              setSelectedCart={setSelectedCart}
            ></CartCard>
          ))
        )}
      </div>
      <div className="flex justify-between">
        <p className="text-[#627382]">Total:</p>
        <p className="text-[#101727] text-2xl font-bold">${totalCartPrice}</p>
      </div>
      <button
        onClick={() => {
          if (selectedCard.length === 0) {
            toast.error(`Cart is empty! Add items to checkout.`, {
              theme: "colored",
            });
          } else {
            setSelectedCart([]);
            toast.success("Successfully checkedout!", { theme: "colored" });
          }
        }}
        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block text-white rounded-full"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
