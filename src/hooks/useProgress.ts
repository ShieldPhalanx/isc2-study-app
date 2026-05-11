"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "domain-progress";

function load(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setProgress(load());
  }, []);

  const toggle = useCallback((domainId: string) => {
    setProgress((prev) => {
      const next = { ...prev, [domainId]: !prev[domainId] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const markRead = useCallback((domainId: string) => {
    setProgress((prev) => {
      if (prev[domainId]) return prev;
      const next = { ...prev, [domainId]: true };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { progress, toggle, markRead };
}
