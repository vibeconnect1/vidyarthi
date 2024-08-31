import React from "react";
import InstituteDetails from "./InstituteDetails";
import institute from "/institute.webp";
import { BiSolidEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

function InstitutionHome() {
  return (
    <section className="flex">
      <div className="bg-white mb-10">
        <InstituteDetails />
      </div>
      <div className="flex flex-col overflow-hidden w-full">
        <div className="container mx-auto p-6 lg:p-12">
          <header className="flex items-center lg:justify-between py-6 lg:py-8 border-b bg-white shadow-md rounded-lg">
            <div className="flex items-center space-x-6 mx-5">
              <img
                src={institute}
                alt="School Logo"
                className="w-32 h-32 rounded-full border-4 border-gray-500"
              />
              <div>
                <h1 className="text-2xl font-extrabold text-gray-700">
                  Greenwood High School
                </h1>
                <p className="text-gray-700 text-lg mt-2">
                  1234 Main St, Anytown, USA
                </p>
                <p className="text-gray-600 mt-1">
                  Email:{" "}
                  <a
                    href="mailto:info@school.com"
                    className="text-gray-600 hover:underline"
                  >
                    info@school.com
                  </a>{" "}
                  | Phone:{" "}
                  <a
                    href="tel:(123)456-7890"
                    className="text-indigo-600 hover:underline"
                  >
                    (123) 456-7890
                  </a>
                </p>
              </div>
            </div>
          </header>
          <div className="mt-10 mb-3 flex justify-end">
            <Link to={`/school-management/school-add-Institution-home`} className="bg-white rounded-md px-4 p-1 flex gap-2 justify-center items-center"><IoAddCircleOutline size={20} /> Add</Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <section className="mb-8">
              <div className="text-2xl font-bold mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <h2> About Us</h2>
                  <BiSolidEdit size={20} />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our school has a rich history of academic excellence and a
                commitment to holistic education. We strive to foster a
                nurturing environment where students can thrive both
                academically and personally. Our dedicated faculty and staff are
                committed to providing high-quality education and
                extracurricular opportunities that help students develop their
                full potential. Join us in our journey of shaping the leaders of
                tomorrow.
              </p>
            </section>

            <section className="mb-8">
              <div className="text-2xl font-bold mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <h2> Vision</h2>
                  <BiSolidEdit size={20} />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to create an innovative and inclusive learning
                environment where students are empowered to reach their highest
                potential. We aim to foster a culture of excellence, creativity,
                and compassion that prepares our students to be global citizens
                and leaders of the future.
              </p>
            </section>
            <section className="mb-8">
              <div className="text-2xl font-bold mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <h2> Mission</h2>
                  <BiSolidEdit size={20} />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to deliver a comprehensive and challenging
                curriculum that promotes intellectual curiosity and personal
                growth. We are dedicated to providing a supportive and engaging
                educational experience that inspires students to achieve
                academic success and develop lifelong skills.
              </p>
            </section>
            <section className="mb-8">
              <div className="text-2xl font-bold mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <h2>Our Aim</h2>
                  <BiSolidEdit size={20} />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our aim is to cultivate a dynamic and supportive educational
                environment that nurtures the individual talents and interests
                of each student. We strive to offer a diverse range of
                opportunities that encourage students to excel academically,
                socially, and personally.
              </p>
            </section>

            <section className="mb-8">
              <div className="text-2xl font-bold mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <h2> Our Philosophy</h2>
                  <BiSolidEdit size={20} />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our philosophy centers on the belief that every student has the
                potential to succeed and make a positive impact. We are
                committed to creating a respectful and inclusive community where
                students are encouraged to think critically, act ethically, and
                embrace their unique strengths.
              </p>
            </section>
          </div>

          <footer className="py-6 mt-10 bg-white shadow-md rounded-lg border-t">
            <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-12">
              <p className="text-gray-600">School Name. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 lg:mt-0">
                {/* Social Media Icons */}
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 transition duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 transition duration-300"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 transition duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default InstitutionHome;
