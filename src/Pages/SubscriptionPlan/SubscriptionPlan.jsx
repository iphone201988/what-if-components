import React from "react";
import Header from "../../Components/Header/Header";
import PlanComparisonTable from "./components/PlanComparisonTable";

const SubscriptionPlan = () => {
  return (
    <div className="min-h-[100vh] bg-[linear-gradient(150deg,#1C002C,#002B31)] py-[60px] max-lg:py-[40px] relative">
      <Header />
      <div className="my-container mt-[50px]">
        <h2 className="text-white text-center text-[52px] font-medium max-lg:text-[36px] max-md:text-[24px]">
          Subscription Plan
        </h2>
      </div>
      <PlanComparisonTable />
    </div>
  );
};

export default SubscriptionPlan;
