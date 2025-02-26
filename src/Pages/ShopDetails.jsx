import React from "react";
import { useParams } from "react-router-dom";
import azyaa1 from "/src/assets/azyaa1.jpg";
import food1 from "/src/assets/food1.jpg";
import maktaba1 from "/src/assets/maktaba1.jpg";

const shops = [
  {
    id: 1,
    name: "محل الأزياء",
    image: azyaa1,
    description: "أفضل الملابس والأزياء.",
    details: "تفاصيل إضافية عن محل الأزياء...",
    products: ["فساتين", "بدل", "قمصان", "أحذية"],
    sellerInfo: "صاحب المحل: أحمد علي",
    contact: "رقم الهاتف: 01012345678"
  },
  {
    id: 2,
    name: "مطعم الطعم المميز",
    image: food1,
    description: "أشهى المأكولات.",
    details: "تفاصيل إضافية عن المطعم...",
    products: ["بيتزا", "برجر", "كباب", "مشروبات"] ,
    sellerInfo: "صاحب المطعم: محمد حسن",
    contact: "رقم الهاتف: 01198765432"
  },
  {
    id: 3,
    name: "مكتبة المستقبل",
    image: maktaba1,
    description: "كتب رائعة لكل الأعمار.",
    details: "تفاصيل إضافية عن المكتبة...",
    products: ["روايات", "كتب تعليمية", "مجلات", "أدوات مكتبية"],
    sellerInfo: "صاحب المكتبة: محمود عبد الله",
    contact: "رقم الهاتف: 01234567890"
  }
];

const ShopDetails = () => {
  const { id } = useParams();
  const shop = shops.find((shop) => shop.id === parseInt(id));

  if (!shop) {
    return <p className="text-center text-red-500">المحل غير موجود.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="border rounded-lg shadow-md overflow-hidden bg-white">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{shop.name}</h1>
          <p className="text-gray-700 mb-4">{shop.details}</p>
          <h2 className="text-xl font-semibold mb-2">المنتجات المتوفرة:</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {shop.products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
          <p className="text-lg font-semibold text-gray-800">{shop.sellerInfo}</p>
          <p className="text-lg text-blue-600 font-semibold mb-4">{shop.contact}</p>
        </div>
      </div>
      <div
        className="border rounded-lg shadow-md overflow-hidden bg-gray-100 mt-6 cursor-pointer p-4 text-center"
        onClick={() => (window.location.href = "/")}
      >
        <h2 className="text-lg font-bold">عودة إلى قائمة المحلات</h2>
        <p className="text-gray-600">اضغط هنا لرؤية جميع المحلات في بني مزار.</p>
      </div>
    </div>
  );
};

export default ShopDetails;
