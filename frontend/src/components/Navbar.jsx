import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoimg from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* الأزرار على اليسار */}
          <div className="hidden sm:flex space-x-4">
            <a href="/register" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              إنشاء محل
            </a>
            <a href="/login" className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800">
              تسجيل الدخول
            </a>
          </div>

          {/* قائمة الروابط على اليمين */}
          <div className="hidden sm:flex space-x-6">
            <a href="/about" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">من نحن</a>
            <a href="/Stores" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">المحلات</a>
            <a href="/" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">الرئيسية</a>
            {/* الشعار */}
            <a href="/" className="flex items-center">
              <img src={logoimg} alt="Logo" className="h-12 w-auto" />
            </a>
          </div>

          {/* زر القائمة في الموبايل */}
          <Disclosure.Button className="sm:hidden p-2 rounded-md text-white hover:bg-blue-600">
            <Bars3Icon className="h-6 w-6" />
          </Disclosure.Button>
        </div>
      </div>

      {/* القائمة الجانبية في الموبايل */}
      <Disclosure.Panel className="sm:hidden bg-blue-600">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/login" className="block bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-800">
            تسجيل الدخول
          </a>
          <a href="/register" className="block bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600">
            إنشاء محل
          </a>
          <a href="/contact" className="block text-white px-3 py-2 rounded-md hover:bg-blue-700">تواصل معنا</a>
          <a href="/about" className="block text-white px-3 py-2 rounded-md hover:bg-blue-700">عن</a>
          <a href="/shops" className="block text-white px-3 py-2 rounded-md hover:bg-blue-700">المحلات</a>
          <a href="/" className="block text-white px-3 py-2 rounded-md hover:bg-blue-700">الرئيسية</a>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
