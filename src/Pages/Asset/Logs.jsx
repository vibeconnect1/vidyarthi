import React from "react";

const Logs = () => {
  return (
    <div className="flex flex-col justify-center items-center p-2">
      <div className="w-full my-2">
        <div>
            <div className="my-4 flex flex-col bg-gray-100  p-2 rounded-md gap-2">
              <div className=" items-center">
                <p className="font-medium">Question :</p>
                <p>Diesel Tank Level</p>
              </div>
              <div className="flex gap-4 items-center bg-green-100 p-2 rounded-md">
                <p className="font-medium">Answer :</p>
                <p>1</p>
              </div>
              <div className="flex gap-4 items-center  p-2 rounded-md">
                <p className="font-medium">Comments :</p>
                <p>3</p>
              </div>
              <div className="flex justify-between">
              <div className="flex gap-4 items-center  p-2 rounded-md">
                <p className="font-medium">Performed by :</p>
                <p>Kunal Sah</p>
              </div>
              <h2>9/2/2024, 10:46:13 AM</h2>
              </div>
            </div>
        </div>
        <div>
            <div className="my-4 flex flex-col bg-gray-100  p-2 rounded-md gap-2">
              <div className=" items-center">
                <p className="font-medium">Question :</p>
                <p>Air Filter Condition</p>
              </div>
              <div className="flex gap-4 items-center bg-green-100 p-2 rounded-md">
                <p className="font-medium">Answer :</p>
                <p>2</p>
              </div>
              <div className="flex gap-4 items-center  p-2 rounded-md">
                <p className="font-medium">Comments :</p>
                <p>No Comment</p>
              </div>
              <div className="flex justify-between">
              <div className="flex gap-4 items-center  p-2 rounded-md">
                <p className="font-medium">Performed by :</p>
                <p>Vijay Singh</p>
              </div>
              <h2>10/5/2024, 12:36:53 AM</h2>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Logs