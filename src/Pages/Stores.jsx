import React from "react";
import { Link } from "react-router-dom";
import azyaa1 from "/src/assets/azyaa1.jpg";
import food1 from "/src/assets/food1.jpg";
import maktaba1 from "/src/assets/maktaba1.jpg";

const shops = [
  { id: 1, name: "محل الأزياء", image: azyaa1, description: "أفضل الملابس والأزياء.", details: "تفاصيل إضافية عن محل الأزياء..." },
  { id: 2, name: "مطعم الطعم المميز", image: food1, description: "أشهى المأكولات.", details: "تفاصيل إضافية عن المطعم..." },
  { id: 3, name: "مكتبة المستقبل", image: maktaba1, description: "كتب رائعة لكل الأعمار.", details: "تفاصيل إضافية عن المكتبة..." },
];


const ShopList = () => {
  return (
<>
      <section>
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
      </main>
      </section>
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {shops.map((shop) => (
        <div
          key={shop.id}
          className="border rounded-lg shadow-md overflow-hidden bg-white"
        >
          <img
            src={shop.image}
            alt={shop.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{shop.name}</h2>
            <p className="text-gray-600">{shop.description}</p>
            <Link
              to={`/shop/${shop.id}`}
              className="text-blue-500 underline mt-2 block"
            >
              عرض التفاصيل
            </Link>
          </div>
        </div>
      ))}
    </div>
</>
  );
};

export default ShopList;
