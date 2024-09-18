import React, { useEffect, useState } from "react";
import { FaEllipsisV, FaDownload } from "react-icons/fa";

import ModalWrapper from "../Modal/ModalWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";

const initialFolders = [
  {
    name: "TCS B Unit",
    files: ["IMG_1754.JPG", "Strategy_copy.xlsx"],
    subfolders: [
      {
        name: "FM Matrix Manual",
        files: [],
        subfolders: [],
      },
      {
        name: "Important Document",
        files: [],
        subfolders: [],
      },
      {
        name: "Mittu",
        files: [],
        subfolders: [],
      },
    ],
  },
  {
    name: "Mittu",
    files: ["IMG_1754.JPG", "Strategy_copy.xlsx"],
    subfolders: [
      {
        name: "FM Matrix Manual",
        files: [],
        subfolders: [],
      },
      {
        name: "Important Document",
        files: [],
        subfolders: [],
      },
      {
        name: "Mittu",
        files: [],
        subfolders: [],
      },
    ],
  },
  {
    name: "Panda",
    files: ["IMG_1754.JPG", "Strategy_copy.xlsx"],
    subfolders: [
      {
        name: "FM Matrix Manual",
        files: [],
        subfolders: [],
      },
      {
        name: "Important Document",
        files: [],
        subfolders: [],
      },
      {
        name: "Mittu",
        files: [],
        subfolders: [],
      },
    ],
  },
];
const f = [["IMG_1754.JPG"]];

const DocumentPro = () => {
  const [assignedTo, setAssignedTo] = useState([]);

  const [folders, setFolders] = useState(initialFolders);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [path, setPath] = useState([
    { name: "Root", subfolders: initialFolders, files: f },
  ]);
  const [newFolderName, setNewFolderName] = useState("");
  const [newFileName, setNewFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [folderName, setFolderName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [share, setshare] = useState(false);
  const [uploadType, setUploadType] = useState("folder");
  const [showFolderDeleteOptions, setShowFolderDeleteOptions] = useState(null);
  const [showFileDeleteOptions, setShowFileDeleteOptions] = useState(null);
  const [viewSize, setViewSize] = useState("small");
  const [view, setview] = useState(false);
  const openFolder = (folder) => {
    setPath([...path, folder]);
    setCurrentFolder(folder);
    setShowFolderDeleteOptions(null);
    setShowFileDeleteOptions(null);
  };

  const navigateTo = (index) => {
    const newPath = path.slice(0, index + 1);
    setPath(newPath);
    setCurrentFolder(newPath.length > 0 ? newPath[newPath.length - 1] : null);
    setShowFolderDeleteOptions(null);
    setShowFileDeleteOptions(null);
  };

  const addFolder = (folderName) => {
    const newFolder = { name: folderName, files: [], subfolders: [] };
    if (currentFolder) {
      setCurrentFolder({
        ...currentFolder,
        subfolders: [...currentFolder.subfolders, newFolder],
      });
    } else {
      setFolders([...folders, newFolder]);
    }
    setNewFolderName("");
    setShowForm(false);
  };

  const addFile = (fileName) => {
    if (currentFolder) {
      setCurrentFolder({
        ...currentFolder,
        files: [...currentFolder.files, fileName],
      });
    } else {
      const updatedFolders = [
        ...folders,
        { name: fileName, files: [], subfolders: [] },
      ];
      setFolders(updatedFolders);
    }
    setNewFileName("");
    setShowForm(false);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      if (currentFolder) {
        setCurrentFolder({
          ...currentFolder,
          files: [...currentFolder.files, selectedFile.name],
        });
      } else {
        setFolders([
          ...folders,
          { name: selectedFile.name, files: [], subfolders: [] },
        ]);
      }
      setSelectedFile(null);
      setShowUploadForm(false);
    } else if (uploadType === "folder" && folderName) {
      addFolder(folderName);
      setShowUploadForm(false);
    }
  };

  const handleUploadTypeChange = (e) => {
    setUploadType(e.target.value);
  };

  const deleteFile = (fileName) => {
    if (currentFolder) {
      setCurrentFolder({
        ...currentFolder,
        files: currentFolder.files.filter((file) => file !== fileName),
      });
    } else {
      setFolders(folders.filter((folder) => folder.name !== fileName));
    }
    setShowFileDeleteOptions(null);
  };

  const deleteFolder = (folderName) => {
    if (currentFolder) {
      setCurrentFolder({
        ...currentFolder,
        subfolders: currentFolder.subfolders.filter(
          (folder) => folder.name !== folderName
        ),
      });
    } else {
      setFolders(folders.filter((folder) => folder.name !== folderName));
    }
    setShowFolderDeleteOptions(null);
  };

  const toggleFolderDeleteOptions = (index) => {
    setShowFolderDeleteOptions(
      showFolderDeleteOptions === index ? null : index
    );
  };

  const toggleFileDeleteOptions = (index) => {
    setShowFileDeleteOptions(showFileDeleteOptions === index ? null : index);
  };

  const handleViewSizeChange = (e) => {
    setViewSize(e.target.value);
  };
  const handleview = (e) => {
    setview(!view);
  };

  const getFolderStyle = () => {
    switch (viewSize) {
      case "small":
        return { fontSize: "2rem" };
      case "medium":
        return { fontSize: "4rem" };
      case "large":
        return { fontSize: "6rem" };
      default:
        return { fontSize: "4rem" };
    }
  };

  const getFileStyle = () => {
    switch (viewSize) {
      case "small":
        return { fontSize: "2rem" };
      case "medium":
        return { fontSize: "4rem" };
      case "large":
        return { fontSize: "6rem" };
      default:
        return { fontSize: "4rem" };
    }
  };

  return (
    <div className="mx-10 my-5">
      <div className="p-4 w-full bg-white rounded-md px-5">
        <div className="flex justify-between items-center mb-4">
          <div>
            {path.length > 0 && (
              <nav className="breadcrumb">
                <ul className="flex items-center space-x-2">
                  {path.map((folder, index) => (
                    <li key={index} className="flex items-center">
                      <button
                        onClick={() => navigateTo(index)}
                        className="text-black font-medium hover:underline"
                      >
                        {folder.name}
                      </button>
                      {index < path.length - 1 && (
                        <span className="mx-2">/</span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
          <div className="flex items-center">
            {/* <select value={viewSize} onChange={handleViewSizeChange} className='p-2 border border-gray-300 rounded'>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select> */}
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <select
            value={viewSize}
            onChange={handleViewSizeChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <button
            onClick={() => setShowForm(true)}
            className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-semibold py-2 px-4 rounded transition-all duration-300"
          >
            New
          </button>
          <button
            onClick={() => setShowUploadForm(true)}
            className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-semibold py-2 px-4 rounded transition-all duration-300"
          >
            Upload Document
          </button>
          <button
            onClick={handleview}
            className="text-white bg-black hover:bg-white hover:text-black border-2 border-black font-semibold py-2 px-4 rounded transition-all duration-300"
          >
            View
          </button>
        </div>
        <h3 className="text-lg font-semibold mb-2">Folders</h3>
        {!view && (
          <div className="grid grid-cols-6 gap-4 mb-8">
            {(currentFolder ? currentFolder.subfolders : folders).map(
              (folder, index) => (
                <div key={index} className="border p-4 rounded shadow">
                  <FaEllipsisV
                    onClick={() => toggleFolderDeleteOptions(index)}
                    className="cursor-pointer"
                  />
                  <div className="relative">
                    {showFolderDeleteOptions === index && (
                      <div className="absolute w-48 bg-white border rounded shadow-lg">
                        <button
                          onClick={() => deleteFolder(folder.name)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => setshare(true)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Share
                        </button>
                      </div>
                    )}
                  </div>
                  <div
                    className="flex flex-col items-center cursor-pointer font-medium text-sm text-yellow-400"
                    onClick={() => openFolder(folder)}
                  >
                    <FontAwesomeIcon
                      icon={faFolder}
                      style={{ fontSize: getFolderStyle().fontSize }}
                    />
                    <p className="text-black">{folder.name}</p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
        {view && (
          <div className="grid grid-cols-1 gap-4 mb-8">
            {(currentFolder ? currentFolder.subfolders : folders).map(
              (folder, index) => (
                <div key={index} className="border p-4 rounded shadow">
                  <div className="relative">
                    {showFolderDeleteOptions === index && (
                      <div className="absolute w-48 bg-white border rounded shadow-lg">
                        <button
                          onClick={() => deleteFolder(folder.name)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => setshare(true)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Share
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <div
                      className="flex  items-center cursor-pointer font-medium"
                      onClick={() => openFolder(folder)}
                    >
                      <FontAwesomeIcon
                        icon={faFolder}
                        style={{ fontSize: getFolderStyle().fontSize }}
                      />
                      &nbsp;{folder.name}
                    </div>
                    <div className="relative">
                      <FaEllipsisV
                        onClick={() => toggleFolderDeleteOptions(index)}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {currentFolder && !view && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Files</h3>
            <div className="grid grid-cols-6 gap-4">
              {currentFolder.files.map((file, index) => (
                <div key={index} className="border p-4 rounded  mb-5">
                  <FaEllipsisV
                    onClick={() => toggleFileDeleteOptions(index)}
                    className="cursor-pointer"
                  />
                  {showFileDeleteOptions === index && (
                    <div className="absolute w-48 bg-white border rounded shadow-lg">
                      <button
                        onClick={() => deleteFile(file)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => deleteFile(file)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Share
                      </button>
                    </div>
                  )}
                  <div className="flex flex-col items-center">
                    <FontAwesomeIcon
                      icon={faFile}
                      style={{
                        color: "black",
                        fontSize: getFileStyle().fontSize,
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-2 justify-end relative">
                    File
                    <FaDownload className="mr-2 cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentFolder && view && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Files</h3>
            <div className="grid grid-cols-1 gap-4">
              {currentFolder.files.map((file, index) => (
                <div key={index} className="border p-4 rounded shadow mb-5">
                  {showFileDeleteOptions === index && (
                    <div className="absolute right-0 w-48 bg-white border rounded shadow-lg z-20">
                      <button
                        onClick={() => deleteFile(file)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => deleteFile(file)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Share
                      </button>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <div className="flex  items-center text-yellow-400">
                      <FontAwesomeIcon
                        icon={faFile}
                        style={{ fontSize: getFileStyle().fontSize }}
                      />
                      &nbsp;File
                    </div>
                    <div className="flex gap-2 items-center relative">
                      <FaDownload className="mr-2 cursor-pointer" />
                      <FaEllipsisV
                        onClick={() => toggleFileDeleteOptions(index)}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {share && (
          <ModalWrapper onclose={() => setshare(false)}>
            <div className="flex flex-col justify-center mt-4 p-4 border rounded shadow">
              <h3 className="font-bold mb-4">Select User</h3>
              <div className="mb-4">
                <select
                  value={formData.assigned_to}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-64 rounded-sm"
                >
                  <option value="">Select User</option>
                  {assignedTo.map((assign) => (
                    <option key={assign.id} value={assign.id}>
                      {assign.firstname} {assign.lastname}
                    </option>
                  ))}
                </select>
                <br />
              </div>
              <div className="mb-4">
                {" "}
                <button className="bg-green-500 text-white p-2 rounded mr-2">
                  Create link
                </button>
              </div>
              <button
                onClick={() => setshare(false)}
                className="bg-red-500 text-white p-2 rounded mt-4"
              >
                Close
              </button>
            </div>
          </ModalWrapper>
        )}
        {showForm && (
          <ModalWrapper onclose={() => setShowForm(false)}>
            <div className="flex flex-col justify-center mt-4 p-4 border rounded shadow">
              <h3 className="font-bold mb-4">Add Folder/File</h3>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Folder Name"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
                <button
                  onClick={() => addFolder(newFolderName)}
                  className="bg-green-500 text-white p-2 rounded mr-2 my-4"
                >
                  Add Folder
                </button>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="File Name"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
                <button
                  onClick={() => addFile(newFileName)}
                  className="bg-green-500 text-white p-2 rounded my-4"
                >
                  Add File
                </button>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="bg-red-500 text-white p-2 rounded mt-4"
              >
                Close
              </button>
            </div>
          </ModalWrapper>
        )}
        {showUploadForm && (
          <ModalWrapper onclose={() => setShowUploadForm(false)}>
            <div className="flex flex-col justify-center mt-4 mb-4 p-4 border rounded shadow">
              <h3 className="font-bold mb-4">Upload Document</h3>
              <div className="my-4">
                <label className="mr-2">
                  <input
                    type="radio"
                    value="folder"
                    checked={uploadType === "folder"}
                    onChange={handleUploadTypeChange}
                  />
                  &nbsp;Folder
                </label>
                <label className="mr-2">
                  <input
                    type="radio"
                    value="file"
                    checked={uploadType === "file"}
                    onChange={handleUploadTypeChange}
                  />
                  &nbsp;File
                </label>
              </div>
              {uploadType === "folder" && (
                <div className="my-4">
                  <input
                    type="text"
                    placeholder="Folder Name"
                    value={folderName}
                    onChange={(e) => setFolderName(e.target.value)}
                    className="border-b border-gray-500 focus:outline-none w-full"
                  />
                  <div className="mt-3">
                    <input type="file" />
                  </div>
                </div>
              )}
              {uploadType === "file" && (
                <div className="my-4">
                  <input type="file" onChange={handleFileChange} />
                </div>
              )}
              <div className="my-4">
                <input
                  type="text"
                  placeholder="Description"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-4">
                <input
                  type="date"
                  placeholder="Date"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <div className="my-4">
                <input
                  type="text"
                  placeholder="Units"
                  className="border-b border-gray-500 focus:outline-none w-full"
                />
              </div>
              <button
                onClick={handleFileUpload}
                className="bg-green-500 text-white p-2 rounded"
              >
                Upload
              </button>
              <button
                onClick={() => setShowUploadForm(false)}
                className="bg-red-500 text-white p-2 rounded mt-4"
              >
                Close
              </button>
            </div>
          </ModalWrapper>
        )}
      </div>
    </div>
  );
};

export default DocumentPro;
