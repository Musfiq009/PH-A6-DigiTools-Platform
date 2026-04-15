import { use } from "react";
import ToolsCard from "./ToolsCard";

const Tools = ({ dataPromise }) => {
  const cardDatas = use(dataPromise);
  console.log(cardDatas);
  return (
    <div className="max-w-7xl mx-auto py-28 space-y-10">
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
              className="tab tab-active rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold"
            >
              Products
            </a>
            <a role="tab" className="tab rounded-full font-bold">
              Cart (0)
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {
          cardDatas.map((data)=>{
            return <ToolsCard key={data.id} data={data}></ToolsCard>
          })
        }
        </div>
    </div>
  );
};

export default Tools;
