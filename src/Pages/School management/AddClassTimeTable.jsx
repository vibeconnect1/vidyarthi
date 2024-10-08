import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddClassTimeTable = () => {
  const [page, setPage] = useState("Monday");
  const [form, setForm] = useState({
    studentClass: "",
    division: "",
    timetable: [
      {
        subject: "",
        teacher: "",
        startTime: "",
        endTime: "",
        period: "",
      },
    ],
  });

  const classOptions = ["Class 1", "Class 2", "Class 3"];
  const divisionOptions = ["A", "B", "C"];
  const subjectOptions = ["Math", "Science", "English"];
  const teacherOptions = ["Mr. Smith", "Ms. Johnson", "Mrs. Brown"];
  const periodOptions = [
    "Breakfast",
    "Assembly",
    "1st Period",
    "2st Period",
    "3st Period",
    "Snack",
    "4st Period",
    "5st Period",
    "Lunch",
    "6st Period",
    "7st Period",
  ];

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const timetable = [...form.timetable];
    timetable[index] = { ...timetable[index], [name]: value };
    setForm({ ...form, timetable });
  };

  const handleClassChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addTimetableRow = () => {
    setForm({
      ...form,
      timetable: [
        ...form.timetable,
        {
          subject: "",
          teacher: "",
          startTime: "",
          endTime: "",
          period: "",
        },
      ],
    });
  };

  const removeTimetableRow = (index) => {
    const timetable = [...form.timetable];
    timetable.splice(index, 1);
    setForm({ ...form, timetable });
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <h1 className="text-2xl font-bold mb-4">Create Timetable</h1>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
              <div className="flex flex-col">
                <select
                  id="studentClass"
                  name="studentClass"
                  value={form.studentClass}
                  onChange={handleClassChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Class</option>
                  {classOptions.map((cls, idx) => (
                    <option key={idx} value={cls}>
                      {cls}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <select
                  id="division"
                  name="division"
                  value={form.division}
                  onChange={handleClassChange}
                  className="border-b border-gray-500 focus:outline-none"
                >
                  <option value="">Select Division</option>
                  {divisionOptions.map((div, idx) => (
                    <option key={idx} value={div}>
                      {div}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex w-full flex-col overflow-hidden my-5 px-5">
              <div className="flex w-full md:flex-row flex-col space-x-4  border-b border-gray-400 ">
                <h2
                  className={`p-2 ${
                    page === "Monday"
                      ? "text-blue-500 font-medium  shadow-custom-all-sides"
                      : "text-black"
                  } rounded-t-md  cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                  onClick={() => setPage("Monday")}
                >
                  Monday
                </h2>
                <h2
                  className={`p-2 ${
                    page === "Tuesday"
                      ? "text-blue-500 font-medium  shadow-custom-all-sides"
                      : "text-black"
                  } rounded-t-md  cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                  onClick={() => setPage("Tuesday")}
                >
                  Tuesday
                </h2>
                <h2
                  className={`p-2 ${
                    page === "Wednesday"
                      ? "text-blue-500 font-medium  shadow-custom-all-sides"
                      : "text-black"
                  }  rounded-t-md  rounded-sm cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                  onClick={() => setPage("Wednesday")}
                >
                  Wednesday
                </h2>
                <h2
                  className={`p-2 ${
                    page === "Thursday"
                      ? "text-blue-500 font-medium  shadow-custom-all-sides"
                      : "text-black"
                  }  rounded-t-md rounded-sm cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                  onClick={() => setPage("Thursday")}
                >
                  Thursday
                </h2>
                <h2
                  className={`p-2 ${
                    page === "Friday"
                      ? "text-blue-500 font-medium  shadow-custom-all-sides"
                      : "text-black"
                  }  rounded-t-md rounded-sm cursor-pointer text-center text-sm flex items-center justify-center transition-all duration-300`}
                  onClick={() => setPage("Friday")}
                >
                  Friday
                </h2>
              </div>
            </div>
            {page === "Monday" && (
              <div>
                {form.timetable.map((row, index) => (
                  <div key={index} className="my-3 rounded-md bg-white pt-5">
                    <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
                      <div className="flex flex-col">
                        <select
                          id={`period-${index}`}
                          name="period"
                          value={row.period}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Period</option>
                          {periodOptions.map((period, idx) => (
                            <option key={idx} value={period}>
                              {period}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <select
                          id={`subject-${index}`}
                          name="subject"
                          value={row.subject}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Subject</option>
                          {subjectOptions.map((sub, idx) => (
                            <option key={idx} value={sub}>
                              {sub}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <select
                          id={`teacher-${index}`}
                          name="teacher"
                          value={row.teacher}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Teacher</option>
                          {teacherOptions.map((teacher, idx) => (
                            <option key={idx} value={teacher}>
                              {teacher}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="time"
                          id={`startTime-${index}`}
                          name="startTime"
                          value={row.startTime}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="time"
                          id={`endTime-${index}`}
                          name="endTime"
                          value={row.endTime}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        />
                      </div>
                      <div className="col-span-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeTimetableRow(index)}
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mx-5 my-5">
                  <button
                    type="button"
                    onClick={addTimetableRow}
                    className="px-4 py-2 border border-gray-500 text-black rounded-lg"
                  >
                    Add Timetable Row
                  </button>
                </div>
              </div>
            )}
            {page === "Tuesday" && (
              <div>
                {form.timetable.map((row, index) => (
                  <div key={index} className="my-3 rounded-md bg-white pt-5">
                    <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
                      <div className="flex flex-col">
                        <select
                          id={`period-${index}`}
                          name="period"
                          value={row.period}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Period</option>
                          {periodOptions.map((period, idx) => (
                            <option key={idx} value={period}>
                              {period}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <select
                          id={`subject-${index}`}
                          name="subject"
                          value={row.subject}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Subject</option>
                          {subjectOptions.map((sub, idx) => (
                            <option key={idx} value={sub}>
                              {sub}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <select
                          id={`teacher-${index}`}
                          name="teacher"
                          value={row.teacher}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Teacher</option>
                          {teacherOptions.map((teacher, idx) => (
                            <option key={idx} value={teacher}>
                              {teacher}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="time"
                          id={`startTime-${index}`}
                          name="startTime"
                          value={row.startTime}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="time"
                          id={`endTime-${index}`}
                          name="endTime"
                          value={row.endTime}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        />
                      </div>
                      <div className="col-span-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeTimetableRow(index)}
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mx-5 my-5">
                  <button
                    type="button"
                    onClick={addTimetableRow}
                    className="px-4 py-2 border border-gray-500 text-black rounded-lg"
                  >
                    Add Timetable Row
                  </button>
                </div>
              </div>
            )}
            {page === "Wednesday" && (
              <div>
                {form.timetable.map((row, index) => (
                  <div key={index} className="my-3 rounded-md bg-white pt-5">
                    <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
                      <div className="flex flex-col">
                        <select
                          id={`period-${index}`}
                          name="period"
                          value={row.period}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Period</option>
                          {periodOptions.map((period, idx) => (
                            <option key={idx} value={period}>
                              {period}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <select
                          id={`subject-${index}`}
                          name="subject"
                          value={row.subject}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Subject</option>
                          {subjectOptions.map((sub, idx) => (
                            <option key={idx} value={sub}>
                              {sub}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <select
                          id={`teacher-${index}`}
                          name="teacher"
                          value={row.teacher}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Teacher</option>
                          {teacherOptions.map((teacher, idx) => (
                            <option key={idx} value={teacher}>
                              {teacher}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="time"
                          id={`startTime-${index}`}
                          name="startTime"
                          value={row.startTime}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="time"
                          id={`endTime-${index}`}
                          name="endTime"
                          value={row.endTime}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        />
                      </div>
                      <div className="col-span-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeTimetableRow(index)}
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mx-5 my-5">
                  <button
                    type="button"
                    onClick={addTimetableRow}
                    className="px-4 py-2 border border-gray-500 text-black rounded-lg"
                  >
                    Add Timetable Row
                  </button>
                </div>
              </div>
            )}
            {page === "Thursday" && (
              <div>
                {form.timetable.map((row, index) => (
                  <div key={index} className="my-3 rounded-md bg-white pt-5">
                    <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
                      <div className="flex flex-col">
                        <select
                          id={`period-${index}`}
                          name="period"
                          value={row.period}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Period</option>
                          {periodOptions.map((period, idx) => (
                            <option key={idx} value={period}>
                              {period}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <select
                          id={`subject-${index}`}
                          name="subject"
                          value={row.subject}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Subject</option>
                          {subjectOptions.map((sub, idx) => (
                            <option key={idx} value={sub}>
                              {sub}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <select
                          id={`teacher-${index}`}
                          name="teacher"
                          value={row.teacher}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Teacher</option>
                          {teacherOptions.map((teacher, idx) => (
                            <option key={idx} value={teacher}>
                              {teacher}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="time"
                          id={`startTime-${index}`}
                          name="startTime"
                          value={row.startTime}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="time"
                          id={`endTime-${index}`}
                          name="endTime"
                          value={row.endTime}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        />
                      </div>
                      <div className="col-span-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeTimetableRow(index)}
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mx-5 my-5">
                  <button
                    type="button"
                    onClick={addTimetableRow}
                    className="px-4 py-2 border border-gray-500 text-black rounded-lg"
                  >
                    Add Timetable Row
                  </button>
                </div>
              </div>
            )}
            {page === "Friday" && (
              <div>
                {form.timetable.map((row, index) => (
                  <div key={index} className="my-3 rounded-md bg-white pt-5">
                    <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
                      <div className="flex flex-col">
                        <select
                          id={`period-${index}`}
                          name="period"
                          value={row.period}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Period</option>
                          {periodOptions.map((period, idx) => (
                            <option key={idx} value={period}>
                              {period}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <select
                          id={`subject-${index}`}
                          name="subject"
                          value={row.subject}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Subject</option>
                          {subjectOptions.map((sub, idx) => (
                            <option key={idx} value={sub}>
                              {sub}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <select
                          id={`teacher-${index}`}
                          name="teacher"
                          value={row.teacher}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        >
                          <option value="">Select Teacher</option>
                          {teacherOptions.map((teacher, idx) => (
                            <option key={idx} value={teacher}>
                              {teacher}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="time"
                          id={`startTime-${index}`}
                          name="startTime"
                          value={row.startTime}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="time"
                          id={`endTime-${index}`}
                          name="endTime"
                          value={row.endTime}
                          onChange={(e) => handleInputChange(e, index)}
                          className="border-b border-gray-500 focus:outline-none"
                        />
                      </div>
                      <div className="col-span-2 flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeTimetableRow(index)}
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mx-5 my-5">
                  <button
                    type="button"
                    onClick={addTimetableRow}
                    className="px-4 py-2 border border-gray-500 text-black rounded-lg"
                  >
                    Add Timetable Row
                  </button>
                </div>
              </div>
            )}
            <div className="border border-gray-500 my-3 mx-5"></div>
            <div className="mb-3 flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 border border-gray-500 text-black rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClassTimeTable;
