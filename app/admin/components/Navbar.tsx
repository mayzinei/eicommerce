// components/admin/AdminLayout.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Navbar</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">Link 1</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Link 2</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Link 3</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Link 4</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Link 5</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Link 6</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Link 7</a>
          <a href="#" className="text-gray-800 hover:text-gray-600">Link 8</a>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
