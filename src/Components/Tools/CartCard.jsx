import { toast } from "react-toastify";

const CartCard = ({cartCard, selectedCard ,setSelectedCart}) => {
    const handleRemove=()=>{
       const updatedCart= selectedCard.filter(card=>card.id !== cartCard.id);
        setSelectedCart([...updatedCart]);
        toast.error(`${cartCard.name} is removed from cart.`);
    }

  return (
    <div>
      <div className="p-5 flex justify-between items-center bg-[#F9FAFC] rounded-2xl">
        <div className="flex gap-4 justify-center items-center">
          <div className="w-10 h-10 border border-[#F2F2F2] p-2 rounded-full bg-white">
            <img src={cartCard.icon} alt={`Cart-${cartCard.id}`} />
          </div>
          <div className="space-y-2">
            <h4 className="text-[20px] text-[#101727] font-semibold">
              {cartCard.name}
            </h4>
            <p className="text-[#627382] font-medium">{cartCard.price}$</p>
          </div>
        </div>
        <p className="font-bold text-[#FF3980] cursor-pointer" onClick={()=>handleRemove()}>Remove</p>
      </div>
    </div>
  );
};

export default CartCard;
