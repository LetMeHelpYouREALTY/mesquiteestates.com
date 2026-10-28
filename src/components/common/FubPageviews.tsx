"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type WidgetTracker = (...args: unknown[]) => void;

// The Follow Up Boss pixel in layout.tsx logs the first page load. Next.js
// switches pages without a reload, so log each later page change here.
export default function FubPageviews() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    const tracker = (window as unknown as { widgetTracker?: WidgetTracker }).widgetTracker;
    if (typeof tracker === "function") tracker("send", "pageview");
  }, [pathname]);

  return null;
}
