
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/a637c4db-4417-4d0e-86dd-faa0cdf3ea01.png" 
              alt="Prosterz Logo" 
              className="w-10 h-10 inline-block mr-2"
            />
            <span className="text-xl font-bold">Prosterz</span>
            <p className="text-gray-400 mt-2">Premium poster collection</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#posters" className="text-gray-400 hover:text-white transition-colors">Albums</a></li>
                <li><a href="#posters" className="text-gray-400 hover:text-white transition-colors">Sneakers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Info</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#delivery" className="text-gray-400 hover:text-white transition-colors">Delivery</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex items-center space-x-3">
                <a href="https://www.instagram.com/prosterzzz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-4">
                <img 
                  src="/lovable-uploads/bf3d0cf8-4633-459c-88b1-a68162036b2a.png" 
                  alt="Instagram QR Code" 
                  className="w-32 h-32 bg-white p-1 rounded"
                />
                <p className="text-gray-400 text-sm mt-1">@PROSTERZZZ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© 2023 Prosterz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
