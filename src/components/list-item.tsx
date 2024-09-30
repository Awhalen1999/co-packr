"use client"; // Mark this as a client-side component in Next.js

import { MoveRight } from "lucide-react";
import React from "react";

// Update Icon type to accept any Lucide icon component
interface ListItemProps {
  title: string;
  date: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // Type for Lucide icons as React components
  backgroundColor?: string; // Optional prop for background color customization
  onClick?: () => void; // Optional onClick handler for navigation or actions
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  date,
  Icon, // Expecting an SVG-based icon component
  backgroundColor = "bg-gray-100", // Default background color if not provided
  onClick
}) => {
  return (
    <div
      className={`flex items-center justify-between p-4 ${backgroundColor} rounded-lg shadow-sm hover:bg-gray-200 transition-all cursor-pointer`}
      onClick={onClick}
    >
      {/* Left side with icon and text */}
      <div className="flex items-center gap-4">
        <Icon className="text-gray-600" /> {/* Render the passed Icon */}
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>
      </div>

      {/* Right side arrow */}
      <MoveRight className="text-gray-700" size={20} />
    </div>
  );
};
