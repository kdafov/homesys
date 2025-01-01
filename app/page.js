'use client'

import { useState } from "react";
import Food from "./Food";
import Coffee from "./Coffee";
import Drinks from "./Drinks";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("menu");

  const renderPage = () => {
    switch (currentPage) {
      case "food":
        return <Food goBack={() => setCurrentPage("menu")} />;
      case "coffee":
        return <Coffee goBack={() => setCurrentPage("menu")} />;
      case "drinks":
        return <Drinks goBack={() => setCurrentPage("menu")} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-12">
              Menu
            </h1>
            <div className="space-y-8">
              <div
                onClick={() => setCurrentPage("food")}
                className="group flex w-72 h-40 items-center justify-center rounded-lg bg-cover bg-center shadow-md hover:shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                style={{ backgroundImage: "url('/FoodBG.jpg')" }}
              >
                <p className="text-3xl font-semibold text-white group-hover:opacity-90 bg-black bg-opacity-50 px-6 py-2 rounded-md">
                  Food
                </p>
              </div>
              <div
                onClick={() => setCurrentPage("coffee")}
                className="group flex w-72 h-40 items-center justify-center rounded-lg bg-cover bg-center shadow-md hover:shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                style={{ backgroundImage: "url('/CoffeeBG.jpg')" }}
              >
                <p className="text-3xl font-semibold text-white group-hover:opacity-90 bg-black bg-opacity-50 px-6 py-2 rounded-md">
                  Coffee
                </p>
              </div>
              <div
                onClick={() => setCurrentPage("drinks")}
                className="group flex w-72 h-40 items-center justify-center rounded-lg bg-cover bg-center shadow-md hover:shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                style={{ backgroundImage: "url('/CoctailsBG.jpg')" }}
              >
                <p className="text-3xl font-semibold text-white group-hover:opacity-90 bg-black bg-opacity-50 px-6 py-2 rounded-md">
                  Drinks
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return <div>{renderPage()}</div>;
}
