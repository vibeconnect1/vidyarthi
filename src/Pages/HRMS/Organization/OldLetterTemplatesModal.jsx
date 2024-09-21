import React, { useState } from "react";
import ModalWrapper from "../../Modal/ModalWrapper";

const OldLetterTemplatesModal = ({ onClose }) => {
  return (
    <ModalWrapper onclose={onClose}>
      <div className="flex flex-col gap-4 z-10 w-96">
        <h1 className="font-semibold text-center text-xl">Preview Template</h1>
        <div className="border-t border-gray-400 py-5">
            <p>monthly_ctc_structure</p>
            <p>first_name</p>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default OldLetterTemplatesModal