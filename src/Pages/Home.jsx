import React from "react";
import ShopList from "../components/ShopList";
import Header from "../components/Header";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          محلات داخل بني مزار
        </h1>
        <ShopList />
      </main>
    </div>
  );
};

export default Home;
