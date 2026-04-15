import CardFeature from "./CardFeature";

const ToolsCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="card w-96 h-full bg-base-100 shadow-lg rounded-xl">
        <div className="card-body space-y-4 bg-[#F9FAFC]">
          <div>
            <div className={`badge badge-soft ${data.tagType === "best seller"
              ? "badge-warning"
              : data.tagType === "popular"
                ? "badge-primary"
                : "badge-success"} absolute top-3 right-2`}>
              {data.tag}
            </div>
          </div>
          <div>
            <img src={data.icon} alt={`Card-${data.id}`} />
          </div>
          <div className="space-x-4">
            <h2 className="text-2xl font-bold text-[#101727]">{data.name}</h2>
            <p className="text-[#627382]">{data.description}</p>
          </div>
          <div>
            <p className="text-[#627382]">
              <span className="text-2xl text-[#101727] font-bold">{`$${data.price}`}</span>
              /{data.period === "monthy" ? "Mo" : "One-Time"}
            </p>
          </div>
          <ul className="flex flex-col gap-2 text-xs">
            {data.features.map((feature, index) => (
              <CardFeature key={index} feature={feature}></CardFeature>
            ))}
          </ul>
          <div>
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block text-white rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;
