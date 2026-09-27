"use client";

import { useEffect, useState, useCallback } from "react";
import { vapi } from "@/lib/vapi";

const ASSISTANT_ID = "92036f3b-cc5a-4b2a-a9fd-47acd3e3173c";

export function useVapi() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const handleCallStart = () => {
      setIsConnecting(false);
      setIsConnected(true);
    };
    const handleCallEnd = () => {
      setIsConnecting(false);
      setIsConnected(false);
    };
    const handleError = (error: unknown) => {
      console.error("Vapi error:", error);
      setIsConnecting(false);
      setIsConnected(false);
    };

    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("error", handleError);

    return () => {
      vapi.off("call-start", handleCallStart);
      vapi.off("call-end", handleCallEnd);
      vapi.off("error", handleError);
    };
  }, []);

  const startCall = useCallback(() => {
    setIsConnecting(true);
    vapi.start(ASSISTANT_ID);
  }, []);

  const endCall = useCallback(() => {
    vapi.stop();
  }, []);

  return { isConnecting, isConnected, startCall, endCall };
}