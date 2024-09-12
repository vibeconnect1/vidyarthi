import React from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { Link } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";

const SupplierDetails = () => {
  return (
    <section>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="w-full mx-3 mb-5 flex flex-col overflow-hidden">
          <h2 className="text-center text-xl font-bold p-2 bg-white my-3 mx-12 rounded-md text-black">
            Supplier Details
          </h2>
          <div className="flex flex-col my-5 p-4 gap-4 rounded-md bg-white mx-12">
            <div className="flex sm:flex-row flex-col gap-5 justify-between">
              <div className="flex items-center gap-2"></div>
              <div className="flex md:flex-row flex-col gap-2">
                <Link
                  to={`/school-management/edit-supplier`}
                  className="flex gap-2 items-center justify-center border-2 border-black px-4 p-1 rounded-full hover:bg-black hover:text-white transition-all duration-500"
                >
                  <BiEditAlt />
                  Edit Details
                </Link>
              </div>
            </div>

            <div>
              <h2 className="border-b text-xl border-black font-semibold mx-5">
                Company Details
              </h2>
              <div className="my-5 md:px-10 text-sm items-center font-medium grid gap-4 md:grid-cols-2">
                <div className="grid grid-cols-2">
                  <p>Company Name : </p>
                  <p className="text-sm font-normal">AlphaTech</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Vendor Name : </p>
                  <p className="text-sm font-normal">John Doe</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Primary Phone : </p>
                  <p className="text-sm font-normal">123-456-7890</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Secondary Phone : </p>
                  <p className="text-sm font-normal">098-765-4321</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Primary Email : </p>
                  <p className="text-sm font-normal">john.doe@alphatech.com</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Secondary Email : </p>
                  <p className="text-sm font-normal">support@alphatech.com</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>PAN : </p>
                  <p className="text-sm font-normal">ABCD12345X</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Supplier Type : </p>
                  <p className="text-sm font-normal">Wholesale</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Category : </p>
                  <p className="text-sm font-normal">Electronics</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Website : </p>
                  <p className="text-sm font-normal">www.alphatech.com</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>GST Number : </p>
                  <p className="text-sm font-normal">GST98765432</p>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <p>Status : </p>
                  <p className="bg-green-400 px-4 w-fit text-white rounded-full">
                    Active
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="border-b text-xl border-black font-semibold mx-5">
                Supplier Location Details
              </h2>
              <div className="my-5 md:px-10 items-center font-medium grid gap-5 md:grid-cols-3 text-sm">
                <div className="grid items-center md:col-span-3">
                  <p>Address : </p>
                  <p className="text-sm font-normal">1234 Main St, Suite 100</p>
                </div>

                <div className="grid grid-cols-2">
                  <p>District : </p>
                  <p className="text-sm font-normal">Central</p>
                </div>
                <div className="grid grid-cols-2">
                  <p>City :</p>
                  <p className="text-sm font-normal">New York</p>
                </div>
                <div className="grid grid-cols-2">
                  <p>State : </p>
                  <p className="text-sm font-normal">New York</p>
                </div>
                <div className="grid grid-cols-2">
                  <p>Pin code : </p>
                  <p className="text-sm font-normal">10001</p>
                </div>
                <div className="grid grid-cols-2">
                  <p>Country : </p>
                  <p className="text-sm font-normal">USA</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="border-b text-xl border-black font-semibold mx-5">
                Supplier Bank Details
              </h2>
              <div className="my-5 md:px-10 items-center font-medium grid gap-5 md:grid-cols-3 text-sm">
                <div className="grid grid-cols-2 items-center">
                  <p>Account Name : </p>
                  <p className="text-sm font-normal">AlphaTech Corp</p>
                </div>

                <div className="grid grid-cols-2">
                  <p>Account Number : </p>
                  <p className="text-sm font-normal">12345678901234</p>
                </div>
                <div className="grid grid-cols-2">
                  <p>Bank & Branch Name :</p>
                  <p className="text-sm font-normal">Bank of America, NY</p>
                </div>
                <div className="grid grid-cols-2">
                  <p>IFSC :</p>
                  <p className="text-sm font-normal">BOFA0NY1234</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="border-b text-xl border-black font-semibold mx-5">
                Additional Info
              </h2>
              <div className="flex flex-col my-2 gap-2 mx-5">
                <p className="font-medium">Notes : </p>
                <div className="bg-gray-400 p-1 text-white rounded-md">
                  No additional information available.
                </div>
              </div>
            </div>

            <div>
              <h2 className="border-b text-xl border-black font-semibold mx-5">
                Attachments
              </h2>
              <div className="flex justify-between gap-2 w-full mx-5">
                <div className="bg-gray-100 p-1 rounded-md my-2 px-2 w-96">
                  No attachments available.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplierDetails;
