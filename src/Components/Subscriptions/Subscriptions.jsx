import EnterpriseSubscription from "./EnterpriseSubscription";
import ProSubscription from "./ProSubscription";
import StarterSubscription from "./StarterSubscription";

const Subscriptions = () => {
  return (
    <div className="max-w-7xl mx-auto py-32 space-y-10">
      <div className="space-y-4">
        <h3 className="text-5xl font-extrabold text-[#101727] text-center">
          Simple, Transparent Pricing
        </h3>
        <p className="text-[#627382] text-center">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid xl:grid-cols-3 gap-8">
          <StarterSubscription></StarterSubscription>
          <ProSubscription></ProSubscription>
          <EnterpriseSubscription></EnterpriseSubscription>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
