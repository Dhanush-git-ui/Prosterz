
import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Check, X, AlertTriangle } from "lucide-react";

export const SupabaseStatus = () => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const checkSupabaseConnection = async () => {
      try {
        // Try to connect to Supabase by making a simple request
        const { error: rpcError } = await supabase.rpc('version');
        
        // If the RPC call succeeds or fails with specific errors, we know Supabase is connected
        if (!rpcError || rpcError.code === 'PGRST116' || rpcError.message.includes('permission denied') || rpcError.message.includes('function not found')) {
          setStatus('connected');
        } else {
          setStatus('error');
          setErrorMessage(rpcError.message);
        }
      } catch (err: any) {
        console.error("Supabase connection error:", err);
        setStatus('error');
        setErrorMessage(err?.message || 'Unknown error');
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
