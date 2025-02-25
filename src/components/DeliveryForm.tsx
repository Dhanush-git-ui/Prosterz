
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

export const DeliveryForm = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zipCode: "",
    country: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle delivery address submission
    console.log("Delivery address:", address);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto mt-12 p-6 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Delivery Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
            Street Address
          </label>
          <Input
            id="street"
            value={address.street}
            onChange={(e) => setAddress({ ...address, street: e.target.value })}
            className="w-full"
            placeholder="Enter your street address"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <Input
            id="city"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            className="w-full"
            placeholder="Enter your city"
          />
        </div>
        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
            ZIP Code
          </label>
          <Input
            id="zipCode"
            value={address.zipCode}
            onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
            className="w-full"
            placeholder="Enter your ZIP code"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <Input
            id="country"
            value={address.country}
            onChange={(e) => setAddress({ ...address, country: e.target.value })}
            className="w-full"
            placeholder="Enter your country"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          type="submit"
        >
          Save Delivery Details
        </motion.button>
      </form>
    </motion.div>
  );
};
