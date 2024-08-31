import React from "react";
import InstituteDetails from "./InstituteDetails";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

function GeneralRules() {
  return (
    <section className="flex">
      <div className="bg-white mb-10">
        <InstituteDetails />
      </div>
      <div className="flex flex-col overflow-hidden w-full">
        <div className="container mx-auto p-6 lg:p-12">
          <h2 className="text-center text-2xl font-medium p-2 py-6 bg-white rounded-md text-gray-600">
            General Rules
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <section className="mb-8">
              <div className="text-xl mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <p className="text-xl font-bold text-gray-600">Rules</p>
                  <Link
                    to={`/school-management/academic/add-general-rules`}
                    className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center text-gray-800 text-base"
                  >
                    <IoAddCircleOutline size={20} /> Add
                  </Link>
                </div>
              </div>
              <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-4">
                <li>
                  Students are expected to arrive at school on time and be prepared for their classes. Punctuality and readiness for class are essential for academic success.
                </li>
                <li>
                  The school calendar must be used to keep track of assignments, tests, and important events. Students should regularly check the calendar and ensure all deadlines are met.
                </li>
                <li>
                  Communication with teachers regarding academic performance or behavioral issues should be conducted through the school calendar or during designated meeting times.
                </li>
                <li>
                  Students must adhere to the school's dress code and maintain cleanliness in their appearance. Compliance with uniform regulations is mandatory.
                </li>
                <li>
                  As English is the primary language of instruction, students are encouraged to practice English regularly to improve their language skills.
                </li>
                <li>
                  Mobile phones should not be brought to school. In case of emergencies, students should use the school’s landline.
                </li>
                <li>
                  Any electronic devices brought to school will be confiscated and a fine of Rs. 2000/- will be imposed. Confiscated items will be returned at the end of the academic year.
                </li>
                <li>
                  Students are encouraged to balance their time between academics, co-curricular activities, and sports to ensure overall development.
                </li>
                <li>
                  Students should respect the school and its staff. Negative comments about the school or teachers should be avoided to maintain a positive learning environment.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeneralRules;
