// import './App.css';
// import { useState } from 'react';
// // import Navbar from './components/Navbar/Navbar';
// // import Main from './components/Main/Main';
// import Navbar from './Navbar';
// import Main from './Main';
// import "react-image-gallery"



// function App() {
//   const [sneakerAmount, setSneakerAmount] = useState(0);
//   const [sneakerAmountFinal, setSneakerAmountFinal] = useState(0);

//   const addToCart = () => {
//     setSneakerAmount(sneakerAmount + 1);
//   };

//   const removeToCart = () => {
//     if (sneakerAmount > 0) {
//       setSneakerAmount(sneakerAmount - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     setSneakerAmountFinal(sneakerAmount);
//     setSneakerAmount(0);
//   };

//   const removeFromCart = () => {
//     setSneakerAmountFinal(0);
//   }

//   return (
//     <body>
//       <Navbar sneakerAmountFinal={sneakerAmountFinal}
//         removeFromCart={removeFromCart} />
//       <Main handleAddToCart={handleAddToCart}
//         sneakerAmount={sneakerAmount}
//         addToCart={addToCart}
//         removeToCart={removeToCart}
//       />
//     </body >
//   );
// }

// export default App;
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./CategoryPage"; // Your existing product page

// Simple Home Page
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to My Store</h1>
      <Link
        to="/product"
        target="blank"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition"
      >
        View Product
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}


