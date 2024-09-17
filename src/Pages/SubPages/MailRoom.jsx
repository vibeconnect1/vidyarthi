import React, { useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";
import DeliveryVendor from "./DeliveryVendor";
import Inbound from "./Inbound";
import OutBound from "./OutBound";
const MailRoom = () => {
  const [page, setPage] = useState("deliveryVendor");
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails/>
        <div className=" w-full flex flex-col overflow-hidden">
          <div className="flex justify-center my-5">
            <div className="flex flex-row gap-10  font-semibold p-2 text-sm rounded-full bg-gray-400">
              <h2
                className={`p-1 ${
                  page === "deliveryVendor" && "bg-white text-blue-500"
                } rounded-full px-4 cursor-pointer`}
                onClick={() => setPage("deliveryVendor")}
              >
                Delivery Vendor
              </h2>
              <h2
                className={`p-1 ${
                  page === "inBound" && "bg-white text-blue-500"
                } rounded-full px-4 cursor-pointer`}
                onClick={() => setPage("inBound")}
              >
                Inbound
              </h2>
              <h2
                className={`p-1 ${
                  page === "outBound" && "bg-white text-blue-500"
                } rounded-full px-4 cursor-pointer`}
                onClick={() => setPage("outBound")}
              >
                Outbound
              </h2>
            </div>
          </div>
          {page === "deliveryVendor" && <div><DeliveryVendor/></div>}
          {page === "inBound" && <div><Inbound/></div>}
          {page === "outBound" && <div><OutBound/></div>}
        </div>
      </div>
    </section>
  );
};

export default MailRoom;
