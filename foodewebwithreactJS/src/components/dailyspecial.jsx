//src/components/dailyspecial.jsx
import DailySpecialIMG1 from '../assets/DailySpecialIMG1.jpg';
import DailySpecialIMG2 from '../assets/DailySpecialIMG2.jpg';
import DailySpecialIMG3 from '../assets/DailySpecialIMG3.jpg';

function DailySpecial() {
    return (
        <div className="container mx-auto px-4 mb-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-1 pr-4">
                <span className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2 block">Daily Special</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Lunch Combo Deals</h2>
                <p className="text-gray-500 mb-6 leading-relaxed">
                    Grab these amazing lunch combos starting at just <span className="text-gray-900 font-bold">$10</span>. 
                    Perfect for a midday refuel with your colleagues or friends.
                </p>
                <button className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-200 w-full md:w-auto">
                    View All Deals
                </button>
            </div>

            <div className="lg:col-span-2">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <div className="bg-white p-3 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer group">
                        <div className="relative mb-3">
                            <img src={DailySpecialIMG1} className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition duration-300"/>
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">-20%</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="font-bold text-gray-800 text-sm">Burger Combo</h3>
                                <p className="text-xs text-gray-400">Burger + Fries + Drink</p>
                            </div>
                            <span className="text-orange-500 font-bold text-sm">$12.00</span>
                        </div>
                    </div>

                    <div className="bg-white p-3 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer group">
                        <div className="relative mb-3">
                            <img src={DailySpecialIMG2} className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition duration-300"/>
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">-15%</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="font-bold text-gray-800 text-sm">Pizza Slice Set</h3>
                                <p className="text-xs text-gray-400">2 Slices + Soda</p>
                            </div>
                            <span className="text-orange-500 font-bold text-sm">$8.50</span>
                        </div>
                    </div>

                    <div className="bg-white p-3 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer group">
                        <div className="relative mb-3">
                            <img src={DailySpecialIMG3} className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition duration-300"/>
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">-10%</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="font-bold text-gray-800 text-sm">Sushi Platter</h3>
                                <p className="text-xs text-gray-400">8pc Roll + Miso Soup</p>
                            </div>
                            <span class="text-orange-500 font-bold text-sm">$16.00</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
    );
}
export default DailySpecial;
