"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LucideLoader() {
  const pathname = usePathname();

  useEffect(() => {
    // We delay slightly to allow Next.js DOM to flush out the <i> tags
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).lucide) {
        (window as any).lucide.createIcons();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
