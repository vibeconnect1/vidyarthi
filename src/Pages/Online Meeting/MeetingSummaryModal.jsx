import React from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import ModalWrapper from '../Modal/ModalWrapper';

const MeetingSummaryModal = ({ onclose }) => {
    return (
        <ModalWrapper onclose={onclose}>
            <div className="flex flex-col justify-center w-96">
                <h2 className="flex gap-4 items-center justify-center font-medium text-xl my-2 border-b border-gray-300 pb-2">
                    Summary 
                </h2>
                <div className="space-y-4">
                    <p className="flex gap-2 items-center">
                        <span className="font-bold">Meeting Title:</span>
                        <span>Mathematics Review</span>
                    </p>
                    <div className="flex gap-6 items-center">
                        <div className="flex gap-2 items-center">
                            <FaCalendarAlt className="text-gray-600" />
                            <span>2024-09-03</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaClock className="text-gray-600" />
                            <span>10:00 AM - 11:00 AM</span>
                        </div>
                    </div>
                    <p className="mt-2 text-gray-700 border border-gray-300 p-4 rounded-md">
                        This session will cover a comprehensive review of key mathematical concepts including algebra, calculus, and geometry. It’s designed to help students strengthen their understanding ahead of the upcoming exams.
                    </p>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default MeetingSummaryModal