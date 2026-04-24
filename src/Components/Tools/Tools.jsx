import ToolsCard from "./ToolsCard";
import Cart from "./Cart";
import { use } from "react";

const Tools = ({ dataPromise, selectedCard, setSelectedCart, cartTabActive, setCartTabActive}) => {
  const cardDatas = use(dataPromise);
  console.log(selectedCard);

  return (
    <div id="tools-section" className="max-w-7xl mx-auto py-28 space-y-10">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="flex justify-center">
          <div
            role="tablist"
            className="tabs tabs-box rounded-full bg-base-100 shadow-sm"
          >
            <a
              role="tab"
              className={`tab ${!cartTabActive ? "tab-active bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} rounded-full font-bold`}
              onClick={() => {
                setCartTabActive(false);
              }}
            >
              Products
            </a>
            <a
              role="tab"
              className={`tab ${cartTabActive ? "tab-active bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} rounded-full font-bold`}
              onClick={() => {
                setCartTabActive(true);
              }}
            >
              Cart ({selectedCard.length})
            </a>
          </div>
        </div>
      </div>

      {!cartTabActive ? (
        <div className="grid grid-cols-3 gap-10">
          {cardDatas.map((data) => (
            <ToolsCard
              key={data.id}
              data={data}
              selectedCard={selectedCard}
              setSelectedCart={setSelectedCart}
            />
          ))}
        </div>
      ) : (
        <Cart
          selectedCard={selectedCard}
          setSelectedCart={setSelectedCart}
        ></Cart>
      )}
    </div>
  );
};

export default Tools;
