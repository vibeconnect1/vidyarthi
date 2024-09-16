import React from "react";
import { FaQrcode } from "react-icons/fa";
import qrCode from '/QrCode.png'
import ModalWrapper from "./ModalWrapper";
const ServiceQrCodeModal = ({ onClose}) => {
  
  return (
    <ModalWrapper onclose={onClose}>
      <div className="mx-4 flex flex-col justify-between items-center gap-10">
        <img
          src={qrCode}
          alt="qr"
          width={200}
          className="border shadow-xl rounded-md"
        />
        <button
          className="px-4 w-full border-2 border-black rounded-md flex justify-center items-center gap-2 py-1"
        >
          <FaQrcode />
          Print QR Code
        </button>
      </div>
    </ModalWrapper>
  );
};

export default ServiceQrCodeModal