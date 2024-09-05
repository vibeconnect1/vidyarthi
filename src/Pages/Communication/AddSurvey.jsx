import React, { useState } from "react";
import Header from "../Form/Header";
import InstituteDetails from "../School management/InstituteDetails";
const AddSurvey = () => {
  const [surveyData, setSurveyData] = useState({
    title: "",
    date: "",
    description: "",
    questions: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSurveyData({ ...surveyData, [name]: value });
  };

  const addQuestion = () => {
    setSurveyData({
      ...surveyData,
      questions: [...surveyData.questions, { type: "short-answer", text: "" }],
    });
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = surveyData.questions.map((question, qIndex) =>
      qIndex === index ? { ...question, text: value } : question
    );
    setSurveyData({ ...surveyData, questions: newQuestions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(surveyData);
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <InstituteDetails />
        <div className="flex flex-col overflow-hidden w-full">
          <div className="flex justify-between mx-5 my-5">
            <p className="text-xl font-bold text-gray-600">Create Survey</p>
          </div>
          <div className="md:mx-5 my-3 rounded-md bg-white py-8">
            <div className="grid md:grid-cols-2 item-start gap-5 px-5 w-full">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="title"
                  value={surveyData.title}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter survey title"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="date"
                  value={surveyData.date}
                  onChange={handleChange}
                  name=" Date"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="time"
                  name="Event Time"
                  className="border-b border-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col col-span-3">
                <label className="block text-gray-700 font-medium">
                  Description
                </label>
                <textarea
                  name="description"
                  value={surveyData.description}
                  onChange={handleChange}
                  className="border-b border-gray-500 focus:outline-none"
                  placeholder="Enter survey description"
                />
              </div>
              <div className="col-span-3">
                <h3 className="text-xl font-semibold">Questions</h3>
                {surveyData.questions.map((question, index) => (
                  <div key={index} className="flex flex-col col-span-3">
                    <input
                      type="text"
                      value={question.text}
                      onChange={(e) =>
                        handleQuestionChange(index, e.target.value)
                      }
                      className="border-b border-gray-500 focus:outline-none w-full"
                      placeholder="Enter your question"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addQuestion}
                  className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                >
                  Add Question
                </button>
              </div>
            </div>
            <div className="flex justify-center my-5">
              <button className="border border-gray-500 rounded-md px-4 p-1 flex gap-2 justify-center items-center">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSurvey;
