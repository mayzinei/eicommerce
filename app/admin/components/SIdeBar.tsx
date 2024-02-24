import React from 'react'

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 w-64 flex-shrink-0">
        <div className="h-full flex flex-col">
          {/* Sidebar logo */}
          <div className="bg-gray-900 py-4 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Sidebar Logo</span>
          </div>
          {/* Sidebar links */}
          <div className="flex-grow">
            <ul className="mt-6">
              <li>
                <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700">Orders</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700">Products</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700">Customers</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Sidebar