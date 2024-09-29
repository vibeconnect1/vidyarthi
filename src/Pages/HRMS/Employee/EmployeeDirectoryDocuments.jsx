import React, { useState } from "react";
import EmployeeDirectorySetting from "./EmployeeDirectorySetting";
import EditEmployeeDirectoryPage from "./EditEmployeeDirectoryPage";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { RiFileCopy2Line, RiPagesLine } from "react-icons/ri";
import { ImInfo } from "react-icons/im";
import { FaDownload, FaRegIdCard, FaUpload } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import { BiNotepad } from "react-icons/bi";
import NoImg from "/NoImg.jpg";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FiFileText } from "react-icons/fi";
function EmployeeDirectoryDocuments() {
  const [employeeDocuments, setEmployeeDocuments] = useState(true);
  const [employeeDocumentsModal, setEmployeeDocumentsModal] = useState(false);
  const [employeeLetters, setEmployeeLetters] = useState(true);
  const [employeeLettersModal, setEmployeeLettersModal] = useState(false);

  const limitCharacters = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };
  return (
    <div className=" w-full">
      <EditEmployeeDirectoryPage />
      <div className="flex flex-col w-full overflow-hidden">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <EmployeeDirectorySetting />
          </div>
          <div className="col-span-3">
            <div className=" bg-white rounded-md mx-5 py-5 px-5">
              <h1 className="text-lg font-medium border-b border-gray-500 py-5">
                Documents
              </h1>
              <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <RiFileCopy2Line size={20} />
                  Employee Documents
                </h2>
                <div>
                  <button
                    onClick={() => setEmployeeDocuments(!employeeDocuments)}
                  >
                    <IoIosArrowDown
                      className={`transition-transform ${
                        employeeDocuments ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
              <div>
                {employeeDocuments && (
                  <div>
                    <div className="grid grid-cols-4 gap-5 w-full mt-8">
                      <div className="bg-blue-100 text-black text-center rounded-lg p-5 flex flex-col items-center">
                        <div className="w-full flex justify-end">
                          <div title="Please upload your highest qualification certificate">
                            <ImInfo size={15} />
                          </div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mt-4">
                          <TbCertificate size={25} className="text-blue-500" />
                        </div>
                        <h2 className="text-xl font-medium text-gray-500 mt-4">
                          Academic Certificates
                        </h2>
                        <p className="text-sm text-gray-700 mt-2">Updated On</p>
                        <button
                          onClick={() =>
                            setEmployeeDocumentsModal(!employeeDocumentsModal)
                          }
                          className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg"
                        >
                          <BsEye size={20} className="text-blue-500" />
                        </button>
                      </div>
                      <div className="bg-yellow-100 text-black text-center rounded-lg p-5 flex flex-col items-center">
                        <div className="w-full flex justify-end">
                          <div title="Please upload your highest qualification certificate">
                            <ImInfo size={15} />
                          </div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mt-4">
                          <FaRegIdCard size={25} className="text-blue-500" />
                        </div>
                        <h2 className="text-xl font-medium text-gray-500 mt-4">
                          Driving license
                        </h2>
                        <p className="text-sm text-gray-700 mt-2">Updated On</p>

                        <button
                          className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg"
                          onClick={() =>
                            setEmployeeDocumentsModal(!employeeDocumentsModal)
                          }
                        >
                          <BsEye size={20} className="text-blue-500" />
                        </button>
                      </div>
                      <div className="bg-pink-100 text-black text-center rounded-lg p-5 flex flex-col items-center">
                        <div className="w-full flex justify-end">
                          <div title="Please upload your highest qualification certificate">
                            <ImInfo size={15} />
                          </div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mt-4">
                          <BiNotepad size={25} className="text-blue-500" />
                        </div>
                        <h2 className="text-xl font-medium text-gray-500 mt-4">
                          Identity proof
                        </h2>
                        <p className="text-sm text-gray-700 mt-2">Updated On</p>

                        <button
                          className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg"
                          onClick={() =>
                            setEmployeeDocumentsModal(!employeeDocumentsModal)
                          }
                        >
                          <BsEye size={20} className="text-blue-500" />
                        </button>
                      </div>
                      <div className="bg-orange-100 text-black text-center rounded-lg p-5 flex flex-col items-center">
                        <div className="w-full flex justify-end">
                          <div title="Please upload your highest qualification certificate">
                            <ImInfo size={15} />
                          </div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mt-4">
                          <RiPagesLine size={25} className="text-blue-500" />
                        </div>
                        <h2 className="text-xl font-medium text-gray-500 mt-4">
                          Academic Certificates
                        </h2>
                        <p className="text-sm text-gray-700 mt-2">Updated On</p>

                        <button
                          className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg"
                          onClick={() =>
                            setEmployeeDocumentsModal(!employeeDocumentsModal)
                          }
                        >
                          <BsEye size={20} className="text-blue-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-between bg-white py-3  border-b border-gray-500">
                <h2 className="text-base flex items-center font-medium text-gray-400 gap-2">
                  <RiFileCopy2Line size={20} />
                  Employee Letters
                </h2>
                <div>
                  <button onClick={() => setEmployeeLetters(!employeeLetters)}>
                    <IoIosArrowDown
                      className={`transition-transform ${
                        employeeLetters ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
              <div>
                {employeeLetters && (
                  <div>
                    <div className="grid grid-cols-4 gap-5 w-full mt-8">
                      <div className="bg-blue-100 text-black text-center rounded-lg p-5 flex flex-col items-center">
                        <div className="w-full flex justify-end">
                          <div title="Please upload your highest qualification certificate">
                            <ImInfo size={15} />
                          </div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mt-4">
                          <SlEnvolopeLetter
                            size={25}
                            className="text-blue-500"
                          />
                        </div>
                        <h2 className="text-xl font-medium text-gray-500 mt-4">
                          {limitCharacters(
                            "Appraisal Letter (Appraisal Letter)",
                            15
                          )}
                        </h2>
                        <p className="text-sm text-gray-700 mt-2">
                          Updated On: 13-01-2023
                        </p>
                        <div className="flex gap-2">
                          <button
                            className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg"
                            onClick={() =>
                                setEmployeeLettersModal(!employeeLettersModal)
                            }
                          >
                            <BsEye size={20} className="text-blue-500" />
                          </button>
                          <button className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg">
                            <FaDownload size={20} className="text-blue-500"/>
                          </button>
                        </div>
                      </div>
                      <div className="bg-yellow-100 text-black text-center rounded-lg p-5 flex flex-col items-center">
                        <div className="w-full flex justify-end">
                          <div title="Please upload your highest qualification certificate">
                            <ImInfo size={15} />
                          </div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mt-4">
                          <FiFileText size={25} className="text-blue-500" />
                        </div>
                        <h2 className="text-xl font-medium text-gray-500 mt-4">
                          {limitCharacters(
                            "Offer Letter Format (Offer Letter Format)",
                            15
                          )}
                        </h2>
                        <p className="text-sm mt-2 text-gray-700">
                          Updated On: 13-01-2023
                        </p>
                        <div className="flex gap-2">
                          <button
                            className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg"
                            onClick={() =>
                              setEmployeeDocumentsModal(!employeeDocumentsModal)
                            }
                          >
                            <BsEye size={20} className="text-blue-500" />
                          </button>
                          <button className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg">
                            <FaDownload size={20} className="text-blue-500"/>
                          </button>
                        </div>
                      </div>
                      <div className="bg-blue-100 text-black text-center rounded-lg p-5 flex flex-col items-center">
                        <div className="w-full flex justify-end">
                          <div title="Please upload your highest qualification certificate">
                            <ImInfo size={15} />
                          </div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mt-4">
                          <SlEnvolopeLetter
                            size={25}
                            className="text-blue-500"
                          />
                        </div>
                        <h2 className="text-xl font-medium text-gray-500 mt-4">
                          {limitCharacters(
                            "Appraisal Letter (Appraisal Letter)",
                            15
                          )}
                        </h2>
                        <p className="text-sm text-gray-700 mt-2">
                          Updated On: 13-01-2023
                        </p>
                        <div className="flex gap-2">
                          <button
                            className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg"
                            onClick={() =>
                              setEmployeeDocumentsModal(!employeeDocumentsModal)
                            }
                          >
                            <BsEye size={20} className="text-blue-500" />
                          </button>
                          <button className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg">
                            <FaDownload size={20} className="text-blue-500"/>
                          </button>
                        </div>
                      </div>
                      <div className="bg-yellow-100 text-black text-center rounded-lg p-5 flex flex-col items-center">
                        <div className="w-full flex justify-end">
                          <div title="Please upload your highest qualification certificate">
                            <ImInfo size={15} />
                          </div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center mt-4">
                          <FiFileText size={25} className="text-blue-500" />
                        </div>
                        <h2 className="text-xl font-medium text-gray-500 mt-4">
                          {limitCharacters(
                            "Offer Letter Format (Offer Letter Format)",
                            15
                          )}
                        </h2>
                        <p className="text-sm mt-2 text-gray-700">
                          Updated On: 13-01-2023
                        </p>
                        <div className="flex gap-2">
                          <button
                            className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg"
                            onClick={() =>
                              setEmployeeDocumentsModal(!employeeDocumentsModal)
                            }
                          >
                            <BsEye size={20} className="text-blue-500" />
                          </button>
                          <button className="bg-white px-3 py-1 mt-4 flex items-center justify-center rounded-lg">
                            <FaDownload size={20} className="text-blue-500"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {employeeDocumentsModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() =>
                  setEmployeeDocumentsModal(!employeeDocumentsModal)
                }
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                All Uploads
              </h2>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img src={NoImg} className="w-60 h-40" />
              <h2>No documents found</h2>
            </div>
            <div className="mt-5 mx-5">
              <label
                htmlFor="file-upload"
                className="border border-dashed border-gray-500 p-4  h-24 w-full rounded-lg  flex items-center flex-col justify-center cursor-pointer"
              >
                <p>Please upload your required documents</p>
              </label>
              <input type="file" className="hidden" id="file-upload" />
              <p>
                Accepted Formats are .txt, .pdf, .jpg, .png, .xls,.xlsx,
                .doc,.docx, .ods, .edoc, .fdf, .dot, .ppt, .ppg, .html, .zip,
                .rar
              </p>
            </div>
            <div className="flex justify-center gap-2 mb-5">
              <button
                onClick={() =>
                  setEmployeeDocumentsModal(!employeeDocumentsModal)
                }
                className="mt-4 border border-gray-500 text-black py-2 px-4 rounded-md  flex items-center gap-2"
              >
                Cancel
              </button>
              <button className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 flex items-center gap-2">
                <FaUpload size={20} /> Upload
              </button>
            </div>
          </div>
        </div>
      )}
      {employeeLettersModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-2/4 max-h-screen overflow-y-auto">
            <div className="bg-pink-100 py-5 relative">
              <button
                className="absolute right-2 top-2"
                onClick={() =>
                    setEmployeeLettersModal(!employeeLettersModal)
                }
              >
                <IoMdClose size={20} />
              </button>
              <h2 className="text-xl font-medium text-center text-gray-800">
                All Uploads
              </h2>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img src={NoImg} className="w-60 h-40" />
              <h2>No documents found</h2>
            </div>
            <div>Pdf</div>
            <div className="flex justify-center gap-2 mb-5">
              <button
                onClick={() =>
                    setEmployeeLettersModal(!employeeLettersModal)
                }
                className="mt-4 border border-gray-500 text-black py-2 px-4 rounded-md  flex items-center gap-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeDirectoryDocuments;
