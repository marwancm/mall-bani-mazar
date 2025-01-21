import React from "react";
import { useParams, Link } from "react-router-dom";
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
  },
  {
    id: 2,
    name: "مطعم الطعم المميز",
    image: food1,
    description: "أشهى المأكولات.",
    details: "تفاصيل إضافية عن المطعم...",
  },
  {
    id: 3,
    name: "مكتبة المستقبل",
    image: maktaba1,
    description: "كتب رائعة لكل الأعمار.",
    details: "تفاصيل إضافية عن المكتبة...",
  },
];

const ShopDetails = () => {
  const { id } = useParams(); // الحصول على معرف المحل من الرابط
  const shop = shops.find((shop) => shop.id === parseInt(id)); // البحث عن المحل

  if (!shop) {
    return <p className="text-center text-red-500">المحل غير موجود.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="border rounded-lg shadow-md overflow-hidden bg-white">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">{shop.name}</h1>
          <p className="text-gray-700 mb-4">{shop.details}</p>
        </div>
      </div>

      {/* الكارد الإضافي */}
      <div
        className="border rounded-lg shadow-md overflow-hidden bg-gray-100 mt-6 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold">عودة إلى قائمة المحلات</h2>
          <p className="text-gray-600">
            اضغط هنا لرؤية جميع المحلات في بني مزار.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
