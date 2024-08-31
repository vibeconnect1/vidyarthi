import React from "react";
import InstituteDetails from "./InstituteDetails";
import { BiSolidEdit } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function SongAndPrayer() {
  return (
    <section className="flex">
      <div className="bg-white mb-10">
        <InstituteDetails />
      </div>
      <div className="flex flex-col overflow-hidden w-full">
        <div className="container mx-auto p-6 lg:p-12">
          <header className="text-center text-2xl font-medium p-2 py-6 bg-white rounded-md text-gray-600">
            Song And Prayer
          </header>
          <div className="mt-10 mb-3 flex justify-end">
            <Link to={`/school-management/school-add-song-and-prayer`} className="bg-white rounded-md px-4 p-1 flex gap-2 justify-center items-center"><IoAddCircleOutline size={20} /> Add</Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <section className="mb-8">
              <div className="text-xl font-bold mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <p className="text-xl font-bold mb-4 text-gray-600">
                    School Song
                  </p>
                  <button>
                    <BiSolidEdit size={20} />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <em>Lyrics of School Song:</em>
                <br />
                "We stand together, hand in hand,
                <br />
                With hearts so strong and true,
                <br />
                In this place we call our school,
                <br />
                We strive for all that’s new.
                <br />
                With knowledge as our guiding light,
                <br />
                We reach for stars above,
                <br />
                In unity we learn and grow,
                <br />
                Together in this love."
              </p>
            </section>

            <section className="mb-8">
              <div className="text-xl font-bold mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <p className="text-xl font-bold mb-4 text-gray-600">
                    School Prayer
                  </p>
                  <button>
                    <BiSolidEdit size={20} />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <em>School Prayer:</em>
                <br />
                "Oh Lord, bless our school today,
                <br />
                Guide us as we work and play.
                <br />
                Help us grow in truth and love,
                <br />
                With your blessings from above.
                <br />
                Teach us kindness, show us care,
                <br />
                In your light, we're always fair.
                <br />
                Let us learn and grow each day,
                <br />
                In your grace, we find our way."
              </p>
            </section>

            <section className="mb-8">
              <div className="text-xl font-bold mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <p className="text-xl font-bold mb-4 text-gray-600">Pledge</p>
                  <button>
                    <BiSolidEdit size={20} />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <em>Pledge:</em>
                <br />
                "India is my country. All Indians are my brothers and sisters.
                <br />
                I love my country and I am proud of its rich and varied
                heritage.
                <br />
                I shall always strive to be worthy of it.
                <br />
                I shall give my parents, teachers, and all elders respect
                <br />
                and treat everyone with courtesy.
                <br />
                To my country and my people, I pledge my devotion.
                <br />
                In their well-being and prosperity alone lies my happiness."
              </p>
            </section>

            <section className="mb-8">
              <div className="text-xl font-bold mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <p className="text-xl font-bold mb-4 text-gray-600">
                    National Anthem
                  </p>
                  <button>
                    <BiSolidEdit size={20} />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <em>National Anthem:</em>
                <br />
                "Jana Gana Mana Adhinayaka, Jaya He
                <br />
                Bharata Bhagya Vidhata
                <br />
                Punjab Sindh Gujarat Maratha
                <br />
                Dravida Utkala Banga
                <br />
                Vindhya Himachala Yamuna Ganga
                <br />
                Uchchala Jaladhi Taranga
                <br />
                Tava Shubha Name Jage
                <br />
                Tava Shubha Ashish Mage
                <br />
                Gahe Tava Jaya Gatha
                <br />
                Jana Gana Mangala Dayaka Jaya He
                <br />
                Bharata Bhagya Vidhata
                <br />
                Jaya He, Jaya He, Jaya He
                <br />
                Jaya Jaya Jaya, Jaya He"
              </p>
            </section>

            <section className="mb-8">
              <div className="text-xl font-bold mb-4 text-gray-600 border-b-2 border-gray-500 pb-2">
                <div className="flex justify-between">
                  <p className="text-xl font-bold mb-4 text-gray-600">
                    National Song
                  </p>
                  <button>
                    <BiSolidEdit size={20} />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <em>National Song:</em>
                <br />
                "Vande Mataram!
                <br />
                Sujalaam, suphalaam, malayaja shitalaam,
                <br />
                Shasyashyaamalaam, Maataram!
                <br />
                Vande Mataram!
                <br />
                Shubhrajyotsnaa pulakitaayaminim,
                <br />
                Phullakusumita drumadala shobhinim,
                <br />
                Suhaasinim sumadhura bhaashinim,
                <br />
                Sukhadam varadam, Maataram!
                <br />
                Vande Mataram!"
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SongAndPrayer;
