
import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Check, X, AlertTriangle } from "lucide-react";

export const SupabaseStatus = () => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const checkSupabaseConnection = async () => {
      try {
        // Use a generic query that doesn't depend on specific tables
        // This avoids TypeScript errors when querying tables not defined in types
        const { error: queryError } = await supabase
          .from('posters' as any) // Cast to any to bypass type checking
          .select('count')
          .limit(1)
          .single();
        
        // If specific expected errors occur, we still consider it connected
        if (!queryError || 
            queryError.code === 'PGRST116' || 
            queryError.message.includes('permission denied') || 
            queryError.message.includes('does not exist') || 
            queryError.message.includes('relation') ||
            queryError.code === '42P01') {
          setStatus('connected');
        } else {
          setStatus('error');
          setErrorMessage(queryError.message);
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
