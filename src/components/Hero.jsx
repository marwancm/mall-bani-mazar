import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white p-8 shadow-md text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">ماركت مصر</h1>
        <p className="mt-8 mb-8 text-xl leading-relaxed">
          ماركت مصر هو منصة تفاعلية تجمع بين المحلات التجارية المختلفة في مصر. تتيح لك المنصة استكشاف محلات متنوعة من أزياء، مطاعم، مكتبات وغيرها، مع تقديم تفاصيل وخصائص كل محل بشكل تفاعلي. تسعى المنصة إلى توفير تجربة مستخدم فريدة وسهلة للوصول إلى مختلف الأماكن في المدينة.
        </p>
        <div className="flex items-center bg-white rounded-md overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="ابحث عن متجر أو فئة..."
            className="w-full p-4 text-gray-700 focus:outline-none"
          />
          <button className="bg-gray-800 text-white px-6 py-4 transition duration-300 ease-in-out hover:bg-red-700">
            بحث
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
