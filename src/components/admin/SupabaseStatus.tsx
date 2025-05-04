
import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Check, X, AlertTriangle } from "lucide-react";

export const SupabaseStatus = () => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const checkSupabaseConnection = async () => {
      try {
        // Cast to any to bypass TypeScript's type checking since the function isn't defined in types
        const { error } = await (supabase.rpc as any)('get_service_status', {}, { 
          count: 'exact' 
        }).throwOnError();
        
        // If the function doesn't exist, we'll get an error, but it still means
        // we successfully connected to Supabase
        if (!error || (error as any)?.message?.includes('function') || (error as any)?.message?.includes('does not exist')) {
          setStatus('connected');
        } else {
          setStatus('error');
          setErrorMessage((error as any)?.message || 'Unknown error');
        }
      } catch (err: any) {
        console.error("Supabase connection error:", err);
        
        // Even if we get a 404 or function not found error, it means we connected to Supabase
        if (err.message && (
            err.message.includes('function') || 
            err.message.includes('does not exist') || 
            err.status === 404 || 
            err.code === '42883')) {
          setStatus('connected');
        } else {
          setStatus('error');
          setErrorMessage(err?.message || 'Unknown error');
        }
      }
    };

    checkSupabaseConnection();
  }, []);

  if (status === 'checking') {
    return (
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <div className="w-4 h-4 border-2 border-t-2 border-gray-300 border-t-blue-500 rounded-full animate-spin mr-2"></div>
        Checking Supabase connection...
      </div>
    );
  }

  if (status === 'connected') {
    return (
      <div className="flex items-center text-green-600 text-sm mb-4 p-2 bg-green-50 rounded-md border border-green-200">
        <Check className="w-4 h-4 mr-2" />
        Connected to Supabase
      </div>
    );
  }

  return (
    <div className="flex items-center text-red-600 text-sm mb-4 p-2 bg-red-50 rounded-md border border-red-200">
      <X className="w-4 h-4 mr-2" />
      Supabase connection error: {errorMessage || 'Unknown error'}
    </div>
  );
};
