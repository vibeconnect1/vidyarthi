import React, { useEffect, useState } from "react";
import InstituteDetails from "../School management/InstituteDetails";
import Header from "../Form/Header";
const PermitPendingApprovalDetails = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full flex mx-3 mb-10 flex-col overflow-hidden">
          <h2 className="text-center text-xl font-bold p-2 bg-white rounded-md text-black mx-12 my-3">
            Penging Approval Details
          </h2>
          <div className="bg-white mx-12 rounded-md my-2">
            <div className="p-8 flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-y-5 gap-x-10">
                <div className="grid grid-cols-2 gap-2 items-center w-full">
                  <p className="font-semibold ">Permit Type :</p>
                  <p></p>
                </div>
                <div className="grid grid-cols-2 gap-2 items-center w-full">
                  <p className="font-semibold ">Status :</p>
                  <p>Upcoming</p>
                </div>
                <div className="grid grid-cols-2 items-center w-full">
                  <p className="font-semibold ">REF NO. :</p>
                  <p>78</p>
                </div>
                <div className="grid grid-cols-2 items-center w-full">
                  <p className="font-semibold ">Site Name :</p>
                  <p></p>
                </div>
                <div className="grid grid-cols-2 items-center w-full">
                  <p className="font-semibold ">Level :</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PermitPendingApprovalDetails;
