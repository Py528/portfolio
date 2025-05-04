// src/components/CustomGridBackground.tsx
"use client";
import React from "react";
import { cn } from "@/lib/utils";

export default function CustomGridBackground() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[#030303]">
      <div
        className={cn(
          "absolute inset-0 opacity-60",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#030303] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
