"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface BorderMagicButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const BorderMagicButton = ({
  children,
  className,
  onClick,
}: BorderMagicButtonProps) => {
  return (
    <button 
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-12 focus:ring-offset-slate-50",
        className
      )}
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-base font-semibold text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
};
