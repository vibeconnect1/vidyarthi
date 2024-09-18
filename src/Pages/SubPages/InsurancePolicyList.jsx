import React from "react";
import policy from "/policy.png";
import { Link } from "react-router-dom";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";

const InsurancePolicyList = () => {
  return (
    <section>
        <Header/>
      <div className="flex">
        <InstituteDetails/>
        <div className="flex flex-col overflow-hidden w-full">
          <div className="bg-white rounded-lg md:mx-10 md:p-8 flex flex-col mb-5 gap-5 my-5">
            <div className="shadow-custom-all-sides m-3 p-2 py-4 rounded-md">
              <div className="flex md:flex-row flex-col items-center justify-around">
                <img src={policy} alt="" width={"20%"} className="w-40" />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg text-center md:text-left my-2">
                    ReAssure 2.0 Bronze + Direct
                  </p>
                  <p className="text-sm text-green-400">5% Direct Discount*</p>
                  <div className="grid md:grid-cols-2 text-sm gap-2">
                    <p className="bg-green-400 rounded-full p-1 text-center text-white">
                      No room rent limit
                    </p>
                    <p className="bg-green-400 rounded-full p-1 text-center text-white">
                      7.5 lakh No Claim Bonus
                    </p>
                    <p className="bg-green-400 rounded-full p-1 text-center px-2 text-white">
                      Unlimited Restoration of cover
                    </p>
                    <p className="text-sm text-center">View all features</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-2">
                  <p>
                    Cover Amount <span className="font-medium"> ₹5 Lakh</span>
                  </p>
                  <p>
                    Cashless Hospital <b>41</b>{" "}
                  </p>
                  <Link
                    to={"/school-management/insurance-policy-details"}
                    className="bg-review text-white p-1 text-center bg-green-500 rounded-md"
                  >
                    ₹629/monthly
                  </Link>
                  <p>₹6755/annually</p>
                </div>
              </div>
              <div className="flex justify-center gap-2 items-center mt-2">
                <input type="radio" name="compare" id="compare" />
                <label htmlFor="compare" className="text-sm">
                  Add to Compare
                </label>
              </div>
            </div>
            <div className="shadow-custom-all-sides m-3 p-2 py-4 rounded-md">
              <div className="flex md:flex-row flex-col items-center justify-around">
                <img src={policy} alt="" width={"20%"} className="w-40" />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg text-center md:text-left my-2">
                    ReAssure 2.0 Bronze + Direct
                  </p>
                  <p className="text-sm text-green-400">5% Direct Discount*</p>
                  <div className="grid md:grid-cols-2 text-sm gap-2">
                    <p className="bg-green-400 rounded-full p-1 text-center text-white">
                      No room rent limit
                    </p>
                    <p className="bg-green-400 rounded-full p-1 text-center text-white">
                      7.5 lakh No Claim Bonus
                    </p>
                    <p className="bg-green-400 rounded-full p-1 text-center px-2 text-white">
                      Unlimited Restoration of cover
                    </p>
                    <p className="text-sm text-center">View all features</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-2">
                  <p>
                    Cover Amount <span className="font-medium"> ₹5 Lakh</span>
                  </p>
                  <p>
                    Cashless Hospital <b>41</b>{" "}
                  </p>
                  <Link
                    to={"/school-management/insurance-policy-details"}
                    className="bg-review text-white bg-green-500 p-1 text-center rounded-md"
                  >
                    ₹629/monthly
                  </Link>
                  <p>₹6755/annually</p>
                </div>
              </div>
              <div className="flex justify-center gap-2 items-center mt-2">
                <input type="radio" name="compare" id="compare" />
                <label htmlFor="compare" className="text-sm">
                  Add to Compare
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsurancePolicyList;
