
import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ShoppingCart } from "./components/cart/ShoppingCart";
import { WhatsAppButton } from "./components/WhatsAppButton";

const queryClient = new QueryClient();
const Index = lazy(() => import("./pages/Index"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const AdminPoster = lazy(() => import("./pages/AdminPoster"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const EditPoster = lazy(() => import("./pages/EditPoster"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routeFallback = (
  <div className="min-h-screen bg-white pt-28 text-center text-sm font-medium text-gray-500">
    Loading Prosterz...
  </div>
);

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={routeFallback}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/admin/add-poster" element={<AdminPoster />} />
                <Route path="/admin/edit-poster/:id" element={<EditPoster />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <ShoppingCart />
            <WhatsAppButton />
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
