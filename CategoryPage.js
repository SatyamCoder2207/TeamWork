import React from "react";
import { Star } from "lucide-react";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left - Product Images */}
        <div className="bg-gray-50 p-6 flex flex-col items-center justify-center">
          <img
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70"
            alt="Canon Camera"
            className="w-80 h-80 object-contain mb-6 drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="flex space-x-3">
            {["/camera-side.png", "/camera-back.png", "/camera-angle.png"].map(
              (src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="thumbnail"
                  className="w-20 h-20 object-contain border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:shadow-md cursor-pointer transition"
                />
              )
            )}
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
              Canon R100 Mirrorless Camera RF-S 18-45mm f/4.5-6.3 IS STM
            </h2>

            <div className="flex items-center mb-4">
              <span className="flex items-center text-green-600 font-semibold mr-3 bg-green-50 px-2 py-1 rounded-md">
                <Star className="w-4 h-4 fill-green-600 text-green-600 mr-1" />
                4.4
              </span>
              <span className="text-sm text-gray-500">1,409 Ratings & 120 Reviews</span>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-3">
              ₹42,990{" "}
              <span className="text-lg line-through text-gray-400 ml-2">₹64,995</span>
              <span className="text-green-600 text-lg font-semibold ml-3">
                33% off
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-5">
              + ₹49 Protect Promise Fee
            </p>

            <p className="text-gray-700 font-medium mb-4">
              🚚 Secure delivery by <span className="font-semibold">1 Sep, Monday</span>
            </p>

            <div className="mb-6 space-y-2 text-sm text-gray-700">
              <p>✅ 5% cashback on Flipkart Axis Bank Credit Card up to ₹4,000</p>
              <p>✅ 5% cashback on Axis Bank Flipkart Debit Card up to ₹750</p>
              <p>✅ Up to ₹30 Instant Cashback on BHIM UPI</p>
              <p>✅ Extra 14% off (inclusive of Cashback/Coupon)</p>
            </div>
          </div>

          <div className="flex space-x-5 mt-6">
            <button className="border border-gray-400 text-gray-700 font-medium rounded-xl px-8 py-3 hover:bg-gray-100 transition">
              PAY WITH EMI
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl px-10 py-3 shadow-md transition">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
