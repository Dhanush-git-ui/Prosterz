
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const DeliveryForm = () => {
  const [address, setAddress] = useState({
    fullName: "",
    street: "",
    city: "",
    zipCode: "",
    country: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle delivery address submission
    console.log("Delivery address:", address);
    toast.success("Delivery details saved successfully!");
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-3">Shipping Address</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <motion.div
              whileFocus="focus"
              whileHover="focus"
              animate="blur"
              variants={inputVariants}
            >
              <Input
                id="fullName"
                value={address.fullName}
                onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your full name"
                required
              />
            </motion.div>
          </div>
          <div>
            <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <motion.div
              whileFocus="focus"
              whileHover="focus"
              animate="blur"
              variants={inputVariants}
            >
              <Input
                id="street"
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your street address"
                required
              />
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <motion.div
                whileFocus="focus"
                whileHover="focus"
                animate="blur"
                variants={inputVariants}
              >
                <Input
                  id="city"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your city"
                  required
                />
              </motion.div>
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code
              </label>
              <motion.div
                whileFocus="focus"
                whileHover="focus"
                animate="blur"
                variants={inputVariants}
              >
                <Input
                  id="zipCode"
                  value={address.zipCode}
                  onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
                  className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your ZIP code"
                  required
                />
              </motion.div>
            </div>
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <motion.div
              whileFocus="focus"
              whileHover="focus"
              animate="blur"
              variants={inputVariants}
            >
              <Input
                id="country"
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your country"
                required
              />
            </motion.div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            type="submit"
          >
            Save Shipping Address
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-3">Contact Information</h3>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <motion.div
              whileFocus="focus"
              whileHover="focus"
              animate="blur"
              variants={inputVariants}
            >
              <Input
                id="email"
                type="email"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your email address"
                required
              />
            </motion.div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <motion.div
              whileFocus="focus"
              whileHover="focus"
              animate="blur"
              variants={inputVariants}
            >
              <Input
                id="phone"
                type="tel"
                value={address.phone}
                onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your phone number"
                required
              />
            </motion.div>
          </div>
          <div className="pt-6">
            <p className="text-gray-600 text-sm mb-4">
              We'll use this information to contact you about your order and delivery.
            </p>
            <motion.div 
              className="bg-gray-50 border border-gray-200 rounded-lg p-4"
              whileHover={{ scale: 1.01 }}
            >
              <h4 className="font-medium text-gray-800 mb-2">Shipping Methods</h4>
              <p className="text-gray-600 text-sm">
                Standard shipping (3-5 business days): <span className="font-semibold">$4.99</span>
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Express shipping (1-2 business days): <span className="font-semibold">$9.99</span>
              </p>
            </motion.div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
