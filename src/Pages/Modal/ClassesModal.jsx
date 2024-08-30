import React from 'react'
import ModalWrapper from "../Modal/ModalWrapper"

const ClassesModal = ({ onclose} ) => {
    return (
        <ModalWrapper onclose={onclose}>
            <div className="flex flex-col justify-center">
                <h2 className="flex gap-4 items-center justify-center font-medium text-xl my-2">
                    Add Classes
                </h2>
                <div className="border-t border-black">
                    <div className='md:grid grid-cols-1 gap-2 my-3 '>
                        <input type='text'placeholder='Add Classes' className='border p-1 py-2 border-gray-500 rounded-md md:w-64'></input>
                    </div>
                </div>
                <div className="border-t border-black my-2"></div>
                <div className="flex justify-end">
                    <button className="p-1 px-4 py-2 border-2 rounded-md text-black font-medium ">
                        Submit 
                    </button>
                </div>
            </div>
        </ModalWrapper>
    );
};
export default ClassesModal