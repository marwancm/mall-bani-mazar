import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import founder1 from "../assets/founder1.jpg";
import founder2 from "../assets/founder2.jpg";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* قسم فكرة المشروع */}
      <section className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">من نحن؟</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          مول بني مزار هو منصة تفاعلية تجمع كل المحلات التجارية في مدينة بني مزار في مكان واحد. 
          سواء كنت عاوز تشتري ملابس، تاكل في مطعم، أو حتى تشتري كتب، هنا هتلاقي كل حاجة في مكان واحد. 
          المنصة دي بتوفرلك تجربة سهلة وسريعة علشان توصل لأي محل في المدينة وتشوف تفاصيله وخصوماته.
        </p>
      </section>

      {/* كروت المؤسسين */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-blue-700 text-center mb-6">المؤسسون</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {/* مروان حجازي */}
          <div className="bg-white shadow-xl rounded-lg p-6 w-64 text-center border border-gray-200">
            <img src={founder1} alt="المؤسس الأول" className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500" />
            <h4 className="text-xl font-semibold mt-3 text-gray-900">مروان حجازي</h4>
            <p className="text-gray-600 font-medium">المؤسس التقني (CTO)</p>
            <p className="text-gray-500 mt-2">Front-end Developer</p>
            <p className="text-gray-700 mt-3 font-semibold">📞 01030011543</p>
            <div className="flex justify-center gap-4 mt-3">
              <a href="#" className="text-blue-700 text-xl"><FaFacebook /></a>
              <a href="#" className="text-blue-700 text-xl"><FaLinkedin /></a>
              <a href="#" className="text-blue-700 text-xl"><FaTwitter /></a>
            </div>
          </div>

          {/* حمدي عثمان */}
          <div className="bg-white shadow-xl rounded-lg p-6 w-64 text-center border border-gray-200">
            <img src={founder2} alt="المؤسس الثاني" className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500" />
            <h4 className="text-xl font-semibold mt-3 text-gray-900">حمدي عثمان</h4>
            <p className="text-gray-600 font-medium">المؤسس والرئيس التنفيذي</p>
            <p className="text-gray-500 mt-2">Marketing & Growth</p>
            <p className="text-gray-700 mt-3 font-semibold">📞 01110042364</p>
            <div className="flex justify-center gap-4 mt-3">
              <a href="#" className="text-blue-700 text-xl"><FaFacebook /></a>
              <a href="#" className="text-blue-700 text-xl"><FaLinkedin /></a>
              <a href="#" className="text-blue-700 text-xl"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </section>

      {/* قسم التواصل */}
      <section className="mb-12 text-center">
        <h3 className="text-3xl font-semibold text-blue-700 mb-4">تواصل معنا</h3>
        <p className="text-lg text-gray-700 mb-4">لو عندك أي استفسارات، ما تترددش تواصل معانا.</p>
        <a href="mailto:contact@ourplatform.com" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition">
          📩 contact@ourplatform.com
        </a>
      </section>
    </div>
  );
};

export default About;