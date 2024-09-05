import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { RiNotificationLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Notification from "../../ConfigurationFile/Notification";

function Header() {
  const [addModal, setAddModal] = useState(false);
  return ( 
      <div className="w-full flex flex-col overflow-hidden">
        <div className="w-screen flex items-center justify-between h-16 px-4 bg-white shadow-2xl border-b-4 border-gray">
          <div className="flex gap-6 items-center space-x-4">
            <IoBookOutline size={40} />
            <input
              type="search"
              placeholder="Search"
              className="custom-bg rounded-2xl px-2 py-2 bg-gray-700 text-white placeholder-gray-400 w-72"
            />
          </div>
          <div className="flex items-center space-x-4 mx-5">
            < button className="cursor-pointer" onClick={() => setAddModal(true)}><RiNotificationLine size={22}/></button>
            <Link to={`/student/student-dashboard`} className="cursor-pointer"><CgProfile size={22}/></Link>
          </div>
        </div>
        {addModal && <Notification onclose={() => setAddModal(false)} />}
      </div>
  );
}

export default Header;
