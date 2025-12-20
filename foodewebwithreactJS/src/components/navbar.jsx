// src/components/Navbar.jsx

function Navbar() {
  return (
    // QUY TẮC SỐ 1: class -> className
    // QUY TẮC SỐ 2: Thẻ input,image phải có dấu đóng /> ở cuối //
    <nav className="bg-white sticky top-0 z-50 shadow-md mb-8">
        
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            
            <div className="flex items-center gap-2">
                <div className="bg-orange-100 p-2 rounded-lg">
                    <i className="fa-solid fa-burger text-orange-500 text-xl"></i>
                </div>
                <span className="text-xl font-bold">FoodieExpress</span>
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder="Search for dishes..." 
                    className="bg-gray-100 px-4 rounded-full py-2 md:block hidden w-80 focus:outline-none focus:ring-2 focus:ring-orange-500" 
                />
            </div>


            <div className="flex items-center gap-6 font-medium text-gray-600">
                <a href="#" className="hover:text-orange-500">Menu</a>
                <a href="#" className="hover:text-orange-500">Offers</a>
                
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                    Log In
                </button>
            </div>

        </div>
    </nav>
  );
}

export default Navbar;