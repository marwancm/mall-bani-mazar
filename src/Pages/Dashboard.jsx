import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">لوحة التحكم</h1>
      <p className="text-gray-600 text-lg mb-6">إدارة حسابك وإضافة محلاتك</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}
