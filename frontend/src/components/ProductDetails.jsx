import React, { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 101,
    name: "فستان",
    images: [
      "https://picsum.photos/600?random=1",
      "https://picsum.photos/600?random=11",
      "https://picsum.photos/600?random=21",
      "https://picsum.photos/600?random=31"
    ],
    description: "فستان أنيق عالي الجودة.",
    price: 450,
    shop: {
      id: 1,
      name: "محل الأزياء",
      owner: "أحمد علي",
      address: "شارع النصر، بني مزار",
      phone: "01012345678",
      shopImage: "https://picsum.photos/100?random=30"
    }
  },
  {
    id: 102,
    name: "بدلة",
    images: [
      "https://picsum.photos/600?random=2",
      "https://picsum.photos/600?random=12",
      "https://picsum.photos/600?random=22",
      "https://picsum.photos/600?random=32"
    ],
    description: "بدلة رسمية مناسبة لجميع المناسبات.",
    price: 850,
    shop: {
      id: 1,
      name: "محل الأزياء",
      owner: "أحمد علي",
      address: "شارع النصر، بني مزار",
      phone: "01012345678",
      shopImage: "https://picsum.photos/100?random=30"
    }
  },
  {
    id: 103,
    name: "قميص",
    images: [
      "https://picsum.photos/600?random=3",
      "https://picsum.photos/600?random=13",
      "https://picsum.photos/600?random=23",
      "https://picsum.photos/600?random=33"
    ],
    description: "قميص عصري بأفضل الأسعار.",
    price: 250,
    shop: {
      id: 1,
      name: "محل الأزياء",
      owner: "أحمد علي",
      address: "شارع النصر، بني مزار",
      phone: "01012345678",
      shopImage: "https://picsum.photos/100?random=30"
    }
  },
  {
    id: 201,
    name: "بيتزا",
    images: [
      "https://picsum.photos/600?random=4",
      "https://picsum.photos/600?random=14",
      "https://picsum.photos/600?random=24",
      "https://picsum.photos/600?random=34"
    ],
    description: "بيتزا إيطالية لذيذة.",
    price: 95,
    shop: {
      id: 2,
      name: "مطعم إيطالي",
      owner: "سامي حسن",
      address: "شارع الطاعم، القاهرة",
      phone: "01098765432",
      shopImage: "https://picsum.photos/100?random=33"
    }
  },
  {
    id: 202,
    name: "برجر",
    images: [
      "https://picsum.photos/600?random=5",
      "https://picsum.photos/600?random=15",
      "https://picsum.photos/600?random=25",
      "https://picsum.photos/600?random=35"
    ],
    description: "برجر مشوي بنكهة مميزة.",
    price: 70,
    shop: {
      id: 2,
      name: "مطعم إيطالي",
      owner: "سامي حسن",
      address: "شارع الطاعم، القاهرة",
      phone: "01098765432",
      shopImage: "https://picsum.photos/100?random=33"
    }
  },
  {
    id: 203,
    name: "كباب",
    images: [
      "https://picsum.photos/600?random=6",
      "https://picsum.photos/600?random=16",
      "https://picsum.photos/600?random=26",
      "https://picsum.photos/600?random=36"
    ],
    description: "كباب شرقي شهي.",
    price: 110,
    shop: {
      id: 3,
      name: "مطعم الشرق",
      owner: "أمينة عبد الله",
      address: "شارع الجامعة، المنصورة",
      phone: "01011223344",
      shopImage: "https://picsum.photos/100?random=34"
    }
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.images[0]);

  if (!product) {
    return <p className="text-center text-red-500">المنتج غير موجود.</p>;
  }

  const relatedByShop = products.filter(
    (p) => p.shop.id === product.shop.id && p.id !== product.id
  );
  const relatedOthers = products.filter(
    (p) => p.shop.id !== product.shop.id
  ).slice(0, 3);

  return (
    <div className="container mx-auto p-6">
      {/* الصور أعلى الصفحة */}
      <div className="mb-10">
        <img src={mainImage} alt={product.name} className="w-full max-h-[500px] object-contain rounded-lg shadow-lg mb-4" />
        <div className="flex gap-3 overflow-x-auto justify-center">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setMainImage(img)}
              className={`w-24 h-24 object-cover rounded-md cursor-pointer border-2 ${
                mainImage === img ? "border-blue-600" : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* تفاصيل المنتج */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-green-600 font-semibold text-lg mb-4">السعر: {product.price} جنيه</p>

          {/* بيانات المحل */}
          <div className="mt-6 border-t pt-4">
            <div className="flex items-center gap-4 mb-3">
              <img src={product.shop.shopImage} alt="المحل" className="w-16 h-16 rounded-full border" />
              <div>
                <h3 className="text-xl font-semibold">{product.shop.name}</h3>
                <p className="text-sm text-gray-600">بواسطة: {product.shop.owner}</p>
              </div>
            </div>
            <p className="text-gray-600">📍 {product.shop.address}</p>
            <p className="text-blue-600 font-semibold">📞 {product.shop.phone}</p>
          </div>
        </div>
      </div>

      {/* منتجات من نفس البائع */}
      {relatedByShop.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-right">منتجات أخرى من نفس البائع</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedByShop.map((item) => (
              <div key={item.id} className="border rounded shadow-sm p-3">
                <img src={item.images[0]} className="h-40 w-full object-cover rounded" />
                <h3 className="mt-2 font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.price} جنيه</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
