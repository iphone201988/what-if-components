import React from "react";

const PlanComparisonTable = () => {
  return (
    <div className="chatbox-container !h-auto">
      <div className="overflow-x-auto ">
        <table className="min-w-full table-auto border-collapse border max-md:min-w-[900px]">
          <thead>
            <tr>
              <th className=" p-4 text-[#B026FF] text-left">Features</th>
              <th className=" p-4  text-center text-[#1DE2FD]">Free</th>
              <th className=" p-4  text-center text-[#1DE2FD]">Basic</th>
              <th className=" p-4  text-center text-[#1DE2FD]">Premium</th>
              <th className=" p-4  text-center text-[#1DE2FD]">Ultimate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#1DE2FD] p-4 font-medium text-[#1DE2FD]">
                Access to Life Simulations
              </td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
            </tr>
            <tr>
              <td className="border border-[#1DE2FD] p-4 font-medium text-[#1DE2FD]">
                Save Points
              </td>
              <td className="border border-[#1DE2FD] p-4 text-center">❌</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
            </tr>
            <tr>
              <td className="border border-[#1DE2FD] p-4 font-medium text-[#1DE2FD]">
                Highlight Reel Download
              </td>
              <td className="border border-[#1DE2FD] p-4 text-center">❌</td>
              <td className="border border-[#1DE2FD] p-4 text-center">❌</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
            </tr>
            <tr>
              <td className="border border-[#1DE2FD] p-4 font-medium text-[#1DE2FD]">
                Alt-Me Memory Evolution
              </td>
              <td className="border border-[#1DE2FD] p-4 text-center">❌</td>
              <td className="border border-[#1DE2FD] p-4 text-center">❌</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
            </tr>
            <tr>
              <td className="border border-[#1DE2FD] p-4 font-medium text-[#1DE2FD]">
                Chat with Alter Ai
              </td>
              <td className="border border-[#1DE2FD] p-4 text-center">❌</td>
              <td className="border border-[#1DE2FD] p-4 text-center">❌</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
            </tr>
            <tr>
              <td className="border border-[#1DE2FD] p-4 font-medium text-[#1DE2FD]">
                Replay from Major Choices
              </td>
              <td className="border border-[#1DE2FD] p-4 text-center">❌</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
              <td className="border border-[#1DE2FD] p-4 text-center">✅</td>
            </tr>
            <tr>
              <td className="border border-[#1DE2FD] border-b-0 p-4 font-medium text-[#1DE2FD]">
                Lorem Ipsum is simply dummy text
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center">
                ❌
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center">
                ❌
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center">
                ✅
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center">
                ✅
              </td>
            </tr>
            <tr className="bg-[#000]">
              <td className="border border-[#1DE2FD] border-b-0 p-4 font-semibold text-[#B026FF]">
                Price (Monthly)
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center text-white">
                $0
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center text-white">
                $5.99 / month
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center text-white">
                $14.99 / month
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center text-white">
                $24.99 / month
              </td>
            </tr>
            <tr className="bg-[#000]">
              <td className="border border-[#1DE2FD] border-b-0 p-4 font-semibold text-[#1DE2FD]">
                UPGRADE PLAN
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center text-[#B026FF] cursor-pointer font-semibold">
                Buy Now
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center text-[#B026FF] cursor-pointer font-semibold">
                Buy Now
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center text-[#B026FF] cursor-pointer font-semibold">
                Buy Now
              </td>
              <td className="border border-[#1DE2FD] border-b-0 p-4 text-center text-[#B026FF] cursor-pointer font-semibold">
                Buy Now
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlanComparisonTable;
