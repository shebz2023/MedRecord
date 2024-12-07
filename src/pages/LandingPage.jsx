import React from "react";
import { Navbar } from "../components/Navbar";
import dr from "../assets/dr.png";
import backdr from "../assets/backdr.png";
import {
  ArrowRight,
  CalendarDots,
  Pencil,
  ChatCircleDots,
} from "@phosphor-icons/react";
import ChatBot from "../components/chatBot";

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <header className="flex justify-between items-center p-6 bg-white shadow-md h-24">
        <div className="text-2xl  tracking-wide font-bold text-blue-600">
          MedRecord{" "}
        </div>
        <Navbar />
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white text-base font-josefin border border-blue-700 rounded-lg shadow-xl hover:bg-blue-700">
            Sign in
          </button>
          <button className="px-4 py-2 border border-blue-600 text-black text-base font-josefin  rounded-lg shadow-xl hover:bg-blue-600">
            Sign up
          </button>
        </div>
      </header>
      <main className="relative flex flex-col items-center justify-center p-6">
        <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-6 bg-white shadow-md rounded-lg">
          <div className="md:w-1/2 p-6">
            <h1 className="flex flex-col text-5xl mb-4">
              <span className="text-blue-500 font-bold">We care</span>
              <span className="text-black font-bold">about your health</span>
            </h1>
            <p className="text-neutral-400 leading-5 font-josefin mb-6">
              Good health is the state of mental, physical and social well being
              and it does not just mean absence of diseases.
            </p>
            <button className="flex items-center px-6 py-2 font-josefin text-sm bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Book an appointment <ArrowRight size={32} />
            </button>
          </div>
          <ChatBot />
          <div className="md:w-1/2 p-6 relative">
            <div className="absolute z-20 bg-white rounded-xl p-3 w-fit flex border-2 border-neutral-200 shadow-md">
              <CalendarDots color="blue" size={28} />
              <span className="text-neutral-600 font-josefin font-bold">
                book an appointment
              </span>
            </div>

            <div className="absolute mt-[40%] z-20 bg-slate-100 rounded-xl p-3 w-fit flex border border-neutral-200 shadow-md">
              <Pencil color="blue" size={26} />
              <span className="text-neutral-600 font-josefin font-bold">
                well managed records{" "}
              </span>
            </div>
            <div className="relative">
              <img
                src={backdr}
                className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
              />
              <img
                src={dr}
                alt="Doctors"
                className="relative w-full h-auto rounded-lg z-10"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center justify-center p-6 bg-white shadow-inner">
        <p className="text-gray-600 mb-2">
          Become a member of our hospital community?{" "}
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Sign up
          </a>
        </p>
      </footer>
    </div>
  );
};
