import React from "react";
import ModalWrapper from "../Pages/Modal/ModalWrapper";
import { FiBell } from "react-icons/fi";

const Notification = ({ onclose }) => {
  const notifications = [
    {
      id: 1,
      message:
        "Your subscription plan is about to end, contact customer care to renew",
      time: "8 hrs",
    },
    {
      id: 2,
      message:
        "Your subscription plan is about to end, contact customer care to renew",
      time: "8 hrs",
    },
    {
      id: 3,
      message:
        "Your subscription plan is about to end, contact customer care to renew",
      time: "8 hrs",
    },
    {
      id: 4,
      message:
        "Your subscription plan is about to end, contact customer care to renew",
      time: "8 hrs",
    },
  ];
  return (
    <ModalWrapper onclose={onclose}>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Notification</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center space-x-4  border-t border-gray-200 py-4 my-2"
            >
              <div className="flex-shrink-0">
              <FiBell size={22} className=" text-gray-400" />
            </div>

              <div className="flex-1">
                <p className="text-sm text-gray-800">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Notification;
