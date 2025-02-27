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
    cover: "https://picsum.photos/800/300?random=10",
    description: "أفضل الملابس والأزياء.",
    address: "شارع النصر، بني مزار",
    owner: { name: "أحمد علي", contact: "01012345678", image: "https://picsum.photos/100?random=11" },
    products: [
      { id: 101, name: "فستان", image: "https://picsum.photos/400?random=1" },
      { id: 102, name: "بدلة", image: "https://picsum.photos/400?random=2" },
      { id: 103, name: "قميص", image: "https://picsum.photos/400?random=3" },
    ],
  },
  {
    id: 2,
    name: "مطعم الطعم المميز",
    image: food1,
    cover: "https://picsum.photos/800/300?random=20",
    description: "أشهى المأكولات.",
    address: "شارع الجمهورية، بني مزار",
    owner: { name: "محمد حسن", contact: "01198765432", image: "https://picsum.photos/100?random=22" },
    products: [
      { id: 201, name: "بيتزا", image: "https://picsum.photos/400?random=4" },
      { id: 202, name: "برجر", image: "https://picsum.photos/400?random=5" },
      { id: 203, name: "كباب", image: "https://picsum.photos/400?random=6" },
    ],
  },
  {
    id: 3,
    name: "مكتبة الأمل",
    image: maktaba1,
    cover: "https://picsum.photos/800/300?random=30",
    description: "جميع أنواع الكتب والأدوات المكتبية.",
    address: "شارع الحرية، بني مزار",
    owner: { name: "سعيد عبد الله", contact: "01234567890", image: "https://picsum.photos/100?random=33" },
    products: [
      { id: 301, name: "رواية", image: "https://picsum.photos/400?random=7" },
      { id: 302, name: "أقلام", image: "https://picsum.photos/400?random=8" },
      { id: 303, name: "كراس", image: "https://picsum.photos/400?random=9" },
    ],
  },
];

const ShopDetails = () => {
  const { id } = useParams();
  const shop = shops.find((shop) => shop.id === parseInt(id));

  if (!shop) {
    return <p className="text-center text-red-500">المحل غير موجود.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* غلاف المحل */}
      <div className="relative w-full h-64 bg-gray-200">
        <img src={shop.cover} alt="غلاف المحل" className="w-full h-full object-cover rounded-lg shadow-md" />
      </div>

      {/* معلومات المحل */}
      <div className="border rounded-lg shadow-md bg-white mt-4 p-6">
        <div className="flex items-center space-x-4">
          <img src={shop.owner.image} alt="صاحب المحل" className="w-24 h-24 rounded-full border-2 border-gray-300" />
          <div>
            <h1 className="text-3xl font-bold">{shop.name}</h1>
            <p className="text-gray-700">{shop.description}</p>
            <p className="text-gray-600">📍 {shop.address}</p>
            <p className="text-lg font-semibold text-gray-800">👤 {shop.owner.name}</p>
            <p className="text-lg text-blue-600 font-semibold">📞 {shop.owner.contact}</p>
          </div>
        </div>
      </div>

      {/* قائمة المنتجات */}
      <h2 className="text-2xl font-bold mt-6 mb-4">🛒 المنتجات المتوفرة:</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {shop.products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-md bg-gray-100 hover:shadow-lg transition"
          >
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
            <div className="p-2 text-center">
              <h3 className="text-lg font-bold">{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>

      {/* زر العودة */}
      <div
        className="border rounded-lg shadow-md bg-gray-100 mt-6 cursor-pointer p-4 text-center"
        onClick={() => (window.location.href = "/")}
      >
        <h2 className="text-lg font-bold">🔙 عودة إلى قائمة المحلات</h2>
      </div>
    </div>
  );
};

export default ShopDetails;
