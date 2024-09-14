import React, { useEffect, useRef, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import {
  BsEye,
  BsFileEarmarkEasel,
  BsFileEarmarkSpreadsheet,
  BsFilePpt,
  BsFileText,
  BsFileWord,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FaRegImage } from "react-icons/fa";
import profile1 from "/profile1.jpg";
import profile2 from "/profile2.jpg";
import profile3 from "/profile3.jpg";
import profile4 from "/profile4.jpg";
import profile5 from "/profile5.jpg";
import profile6 from "/profile6.jpg";
import { IoAddCircleOutline, IoClose } from "react-icons/io5";
import { ImImage } from "react-icons/im";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

function ProjectFiles() {
  const [fileAction, setFileAction] = useState(null);
  const dropdownRefs = useRef([]);
  const [file, setFile] = useState(false);
  const fileInputRef = useRef(null);
  const [editFileModal, setEditFileModal] = useState(false);
  const [detailsFileModal, setDetailsFileModal] = useState(false);
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const FileEditModal = () => {
    setEditFileModal(true);
  };

  const FileDetailsModal = () => {
    setDetailsFileModal(true);
  };

  const closeModal = () => {
    setEditFileModal(false);
    setDetailsFileModal(false);
  };
  const handleFileActionDropDown = (index) => {
    setFileAction(fileAction === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRefs.current.every((ref) => ref && !ref.contains(event.target))
    ) {
      setFileAction(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const files = [
    {
      id: 1,
      name: "Admin-Dashboard-Design.xlsx",
      icon: <BsFileEarmarkSpreadsheet size={20} className="text-violet-600" />,
      iconBgColor: "bg-violet-200",
      fileSize: "2.3MB",
      modified: "27 Sept, 2021",
      uploadedBy: profile1,
      options: (
        <div className="flex gap-2">
          <MdOutlineFileDownload
            size={20}
            className="text-blue-500 cursor-pointer"
          />
          <CiLink size={20} className="text-gray-500 cursor-pointer" />
        </div>
      ),
    },
    {
      id: 2,
      name: "Admin-Dashboard-Design.jpeg",
      icon: <FaRegImage size={22} className="text-blue-400" />,
      iconBgColor: "bg-blue-200",
      fileSize: "10MB",
      modified: "29 Sept, 2021",
      uploadedBy: profile2,
      options: (
        <div className="flex gap-2">
          <MdOutlineFileDownload
            size={20}
            className="text-blue-500 cursor-pointer"
          />
          <CiLink size={20} className="text-gray-500 cursor-pointer" />
        </div>
      ),
    },
    {
      id: 3,
      name: "Geeks UI Description.doc",
      icon: <BsFileWord size={20} className="text-green-600" />,
      iconBgColor: "bg-green-200",
      fileSize: "45MB",
      modified: "01 Oct, 2021",
      uploadedBy: profile3,
      options: (
        <div className="flex gap-2">
          <MdOutlineFileDownload
            size={20}
            className="text-blue-500 cursor-pointer"
          />
          <CiLink size={20} className="text-gray-500 cursor-pointer" />
        </div>
      ),
    },
    {
      id: 4,
      name: "Geeks-UI-Marketing-Process.ppt",
      icon: <BsFilePpt size={20} className="text-red-600" />,
      iconBgColor: "bg-red-200",
      fileSize: "122MB",
      modified: "04 Oct, 2021",
      uploadedBy: profile4,
      options: (
        <div className="flex gap-2">
          <MdOutlineFileDownload
            size={20}
            className="text-blue-500 cursor-pointer"
          />
          <CiLink size={20} className="text-gray-500 cursor-pointer" />
        </div>
      ),
    },
    {
      id: 5,
      name: "Geeks-UI-Marketing-Process.txt",
      icon: <BsFileText size={20} className="text-yellow-600" />,
      iconBgColor: "bg-yellow-200",
      fileSize: "43.5MB",
      modified: "06 Oct, 2021",
      uploadedBy: profile5,
      options: (
        <div className="flex gap-2">
          <MdOutlineFileDownload
            size={20}
            className="text-blue-500 cursor-pointer"
          />
          <CiLink size={20} className="text-gray-500 cursor-pointer" />
        </div>
      ),
    },
    {
      id: 6,
      name: "Geeks-UI-promo-trailer-template.mov",
      icon: <BsFileEarmarkEasel size={20} className="text-teal-600" />,
      iconBgColor: "bg-teal-200",
      fileSize: "115MB",
      modified: "08 Oct, 2021",
      uploadedBy: profile6,
      options: (
        <div className="flex gap-2">
          <MdOutlineFileDownload
            size={20}
            className="text-blue-500 cursor-pointer"
          />
          <CiLink size={20} className="text-gray-500 cursor-pointer" />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 mx-5 mb-5 bg-white rounded-md py-5">
        <div className="shadow-custom-all-sides rounded-md">
          <div className="flex justify-between mx-5 py-2">
            <h2 className="text-lg font-semibold text-slate-800">File</h2>
            <div>
              <button
                to=""
                className={` font-semibold border-2 border-gray-300 px-4  flex gap-2 items-center rounded-md ${"hover:bg-gray-200 rounded-full p-1"}`}
                onClick={() => setFile(!file)}
              >
                <IoAddCircleOutline size={20} /> Add
              </button>
              {file && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-5 rounded-lg shadow-lg w-1/2 relative max-h-[calc(100vh-40px)] overflow-y-auto">
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                      onClick={() => setFile(!file)}
                    >
                      <IoClose size={24} />
                    </button>
                    <div className="mx-5 my-5">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Add File
                      </h2>
                      <div className="">
                        <div>
                          <input
                            id="file-name"
                            type="text"
                            placeholder="Enter file name"
                            className="border-b border-gray-500 focus:outline-none w-full"
                          />
                        </div>
                        <div>
                        </div>
                        <div className="mb-3">
                          <h2 className="text-base font-semibold text-gray-600 my-2">
                            Choose File
                          </h2>
                          <div
                            className="flex justify-center border border-gray-400 rounded-md p-5 items-center w-20 cursor-pointer"
                            onClick={handleClick}
                          >
                            <ImImage size={20} />
                          </div>
                          <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files[0];
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-black text-white rounded-md w-full"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-gray-300 my-5"></div>
          <div className="mx-5 mb-5">
            <input
              type="search"
              placeholder="Search Filename"
              className="border p-2 w-full border-gray-300 rounded-lg hover:border-violet-600"
            />
          </div>
          <div className="p-4 overflow-x-auto mx-5">
            <table className="min-w-full w-full bg-white border-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    File Size
                  </th>
                  <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Modified
                  </th>
                  <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Uploaded By
                  </th>
                  <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Options
                  </th>
                  <th className="px-6 py-3 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {files.map((data) => (
                  <tr className="hover:bg-gray-100" key={data.id}>
                    <td className="px-6 py-3 border-t border-gray-200 flex items-center space-x-3 text-gray-500">
                      <div
                        className={`h-12 w-12 flex items-center justify-center rounded-md ${data.iconBgColor}`}
                      >
                        {data.icon}
                      </div>
                      <div to="" className="font-semibold text-gray-700">
                        {data.name}
                      </div>
                    </td>
                    <td className="px-6 py-3 border-t border-gray-200 text-gray-500">
                      {data.fileSize}
                    </td>
                    <td className="px-6 py-3 border-t border-gray-200 text-gray-500">
                      {data.modified}
                    </td>
                    <td className="px-6 py-3 border-t border-gray-200 text-gray-500">
                      <img
                        src={data.uploadedBy}
                        alt="Uploaded"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-6 py-3 border-t border-gray-200 text-gray-500">
                      {data.options}
                    </td>
                    <td className="px-6 py-4 border-t border-gray-200 text-gray-500 whitespace-nowrap">
                      <button
                        className="relative"
                        onClick={() => handleFileActionDropDown(data.id)}
                        ref={(el) => (dropdownRefs.current[data.id] = el)}
                      >
                        <BsThreeDotsVertical />
                        {fileAction === data.id && (
                          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20 text-start">
                            <button
                              className="block px-4 py-1 text-gray-800 hover:bg-gray-100 w-full"
                              onClick={FileEditModal}
                            >
                              <div className="flex gap-2">
                                <BiEdit size={15} className="mt-1" />
                                Edit
                              </div>
                            </button>
                            <button
                              className="block px-4 py-1 text-gray-800 hover:bg-gray-100 w-full"
                              onClick={FileDetailsModal}
                            >
                              <div className="flex gap-2">
                                <BsEye className="mt-1" size={15} /> View
                              </div>
                            </button>
                            <button
                              type="submit"
                              className="block px-4 py-1 text-gray-800 hover:bg-gray-100 w-full"
                            >
                              <div className="flex gap-2">
                                <RiDeleteBin6Line className="mt-1" size={15} />
                                Delete
                              </div>
                            </button>
                          </div>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {editFileModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-1/2 relative  max-h-[calc(100vh-40px)] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <IoClose size={24} />
            </button>
            <div className="grid grid-cols-1 my-2">
              <div className="mx-5 my-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Edit File
                </h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                  <div>
                    <label
                      htmlFor="file-name"
                      className="text-base font-semibold text-gray-600 my-2"
                    >
                      File Name
                    </label>
                    <input
                      id="file-name"
                      type="text"
                      placeholder="Enter file name"
                      className="border-2 p-2 border-gray-300 rounded-lg w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="file-size"
                      className="text-base font-semibold text-gray-600 my-2"
                    >
                      File Size (MB)
                    </label>
                    <input
                      id="file-size"
                      type="number"
                      placeholder="Enter file size in MB"
                      className="border-2 p-2 border-gray-300 rounded-lg w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="modified-date"
                      className="text-base font-semibold text-gray-600 my-2"
                    >
                      Modified Date
                    </label>
                    <input
                      id="modified-date"
                      type="date"
                      className="border-2 p-2 border-gray-300 rounded-lg w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="uploaded-by"
                      className="text-base font-semibold text-gray-600 my-2"
                    >
                      Uploaded By
                    </label>
                    <input
                      id="uploaded-by"
                      type="text"
                      placeholder="Enter name of uploader"
                      className="border-2 p-2 border-gray-300 rounded-lg w-full"
                    />
                  </div>
                  <div className="mb-3">
                    <h2 className="text-base font-semibold text-gray-600 my-2">
                      File Logo
                    </h2>
                    <div
                      className="flex justify-center border-2 border-gray-400 rounded-md p-5 items-center w-20 cursor-pointer"
                      onClick={handleClick}
                    >
                      <ImImage size={20} />
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0];
                      }}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-md w-full"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {detailsFileModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center ">
          <div className="bg-white p-5 mx-10 rounded-lg shadow-lg lg:w-2/6 sm:w-3/5 w-full relative max-h-[calc(100vh-40px)] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <IoClose size={24} />
            </button>
            <div className="mx-5 my-5">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                File Details
              </h2>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Upload By
                  </h3>
                  <div className="flex gap-3">
                    <img
                      src={profile1}
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <h2 className="text-gray-600">Riya Gupta</h2>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    File Name
                  </h3>
                  <p className="text-gray-600">
                    <div className="flex items-center mb-2">
                      <BsFileWord size={20} className="text-green-600 mr-2" />
                      <h3 className="text-gray-600">
                        Geeks UI Description.doc
                      </h3>
                    </div>
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    File Size: 1.5 MB
                  </h3>
                  <p className="text-gray-600">1.5 MB</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Modified
                  </h3>
                  <p className="text-gray-600">27 Sept, 2021</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Options
                  </h3>
                  <div className="flex gap-2">
                    <MdOutlineFileDownload
                      size={20}
                      className="text-blue-500 cursor-pointer"
                    />
                    <CiLink
                      size={20}
                      className="text-gray-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectFiles