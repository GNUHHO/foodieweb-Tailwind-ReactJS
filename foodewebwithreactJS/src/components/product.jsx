// src/components/product.jsx
import ProductIMG1 from '../assets/ProductIMG1.jpg';
import ProductIMG2 from '../assets/ProductIMG2.jpg';
import ProductIMG3 from '../assets/ProductIMG3.jpg';
import ProductIMG4 from '../assets/ProductIMG4.jpg';

function Product() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto">
            <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col gap-4">
                <img src={ProductIMG1} className="w-full h-40 object-cover rounded-xl"/>
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-lg">Spicy Ramen</h2>
                        <span className="text-orange-500 font-bold">$14.50</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Delicious Japanese noodles</p>
                    <button className="bg-orange-500 text-white font-bold py-2 rounded-xl w-full mt-4 hover:bg-orange-600 transition">
                        Add to cart
                    </button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col gap-4">
                <img src={ProductIMG2} className="w-full h-40 object-cover rounded-xl"/>
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-lg">Salad</h2>
                        <span className="text-orange-500 font-bold">$11.00</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Fresh healthy greens</p>
                    <button className="bg-orange-500 text-white font-bold py-2 rounded-xl w-full mt-4 hover:bg-orange-600 transition">
                        Add to cart
                    </button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col gap-4">
                <img src={ProductIMG3} className="w-full h-40 object-cover rounded-xl"/>
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-lg">Pancakes</h2>
                        <span className="text-orange-500 font-bold">$9.50</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Sweet breakfast treat</p>
                    <button className="bg-orange-500 text-white font-bold py-2 rounded-xl w-full mt-4 hover:bg-orange-600 transition">
                        Add to cart
                    </button>
                </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col gap-4">
                <img src={ProductIMG4} className="w-full h-40 object-cover rounded-xl"/>
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-lg">Pizza</h2>
                        <span className="text-orange-500 font-bold">$13.00</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Classic cheese pizza</p>
                    <button className="bg-orange-500 text-white font-bold py-2 rounded-xl w-full mt-4 hover:bg-orange-600 transition">
                        Add to cart
                    </button>
                </div>
            </div>
    </div>
    );
}
export default Product;