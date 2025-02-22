import React from "react";
import ShopList from "../components/ShopList";
import Header from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          محلات داخل بني مزار
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            "أزياء",
            "مطاعم",
            "مكتبات",
            "إلكترونيات",
            "مستلزمات منزلية",
          ].map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-600"
            >
              {category}
            </button>
          ))}
        </div>
        <ShopList />
      </main>
    </div>
  );
};

export default Home;
