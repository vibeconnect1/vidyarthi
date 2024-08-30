import React from "react";
import InstituteDetails from "./InstituteDetails";
import institute from "/institute.webp";

function InstitutionHome() {
  return (
    <section className="flex">
      <InstituteDetails />
      <div className="w-full flex flex-col overflow-hidden">
        <div className="container mx-auto p-6">
          <header className="flex items-center justify-between py-6 border-b">
            <div className="flex items-center space-x-6">
              <img
                src={institute}
                alt="School Logo"
                className="w-24 h-24 rounded-full border-4 border-indigo-500"
              />
              <div>
                <h1 className="text-4xl font-bold text-indigo-700">
                  School Name
                </h1>
                <p className="text-gray-700">1234 Main St, Anytown, USA</p>
                <p className="text-gray-600">
                  Email: info@school.com | Phone: (123) 456-7890
                </p>
              </div>
            </div>
          </header>

          <section className="my-10">
            <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
              About Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our school has a rich history of academic excellence and a
              commitment to holistic education. We strive to foster a
              nurturing environment where students can thrive both
              academically and personally. Our dedicated faculty and staff
              are committed to providing high-quality education and
              extracurricular opportunities that help students develop their
              full potential. Join us in our journey of shaping the leaders
              of tomorrow.
            </p>
          </section>
          <footer className="py-6 mt-10 border-t">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600">
                  &copy; {new Date().getFullYear()} School Name. All rights
                  reserved.
                </p>
              </div>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="text-gray-500 hover:text-indigo-700">
                  Facebook
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-700">
                  Twitter
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-700">
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
