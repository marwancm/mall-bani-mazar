import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 101, name: "فستان", image: "https://picsum.photos/400?random=1", description: "فستان أنيق عالي الجودة." },
  { id: 102, name: "بدلة", image: "https://picsum.photos/400?random=2", description: "بدلة رسمية مناسبة لجميع المناسبات." },
  { id: 103, name: "قميص", image: "https://picsum.photos/400?random=3", description: "قميص عصري بأفضل الأسعار." },
  { id: 201, name: "بيتزا", image: "https://picsum.photos/400?random=4", description: "بيتزا إيطالية لذيذة." },
  { id: 202, name: "برجر", image: "https://picsum.photos/400?random=5", description: "برجر مشوي بنكهة مميزة." },
  { id: 203, name: "كباب", image: "https://picsum.photos/400?random=6", description: "كباب شرقي شهي." },
  { id: 301, name: "رواية", image: "https://picsum.photos/400?random=7", description: "رواية مشوقة بأحداث مثيرة." },
  { id: 302, name: "أقلام", image: "https://picsum.photos/400?random=8", description: "مجموعة أقلام حبر بألوان متنوعة." },
  { id: 303, name: "كراس", image: "https://picsum.photos/400?random=9", description: "كراس ذو جودة عالية للكتابة والرسم." },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500">المنتج غير موجود.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="border rounded-lg shadow-md bg-white overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <button onClick={() => window.history.back()} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
            العودة للخلف
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
