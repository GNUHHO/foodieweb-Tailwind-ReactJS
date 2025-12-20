// src/App.jsx
import Navbar from './components/navbar'; // Gọi Navbar vào
import Banner from './components/banner'; // Gọi Banner vào
import CategoryList from './components/categorylist'; // Gọi CategoryList vào
import DailySpecial from './components/dailyspecial'; // Gọi DailySpecial vào
import Product from './components/product'; // Gọi Product vào
import Footer from './components/footer'; // Gọi Footer vào

function App() {
  return (
    // Cái nền xám bao quanh toàn bộ trang web bat buoc phải có
    // chi chay duoc trong mot goi
    <div className="bg-gray-100 max-h-screen pb-20">
      <Navbar/> 
      <Banner/>
      <CategoryList/>
      <DailySpecial/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default App