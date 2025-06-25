"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { PageTab } from "./PageTab";

export interface PageNavProps {
  id: string;
  name: string;
  icon: "info" | "file" | "ending" | "check";
}

export const PageNavigation = () => {
  const initialPages: PageNavProps[] = [
    { id: "1", name: "Info", icon: "info" },
    { id: "2", name: "Details", icon: "file" },
    { id: "3", name: "Other", icon: "file" },
    { id: "4", name: "Ending", icon: "check" },
  ];

  const [pages, setPages] = useState<PageNavProps[]>(initialPages);
  const [activePageId, setActivePageId] = useState("1");

  // Function to add a new page at a specific index
  const handleAddPage = (index: number) => {
    const newPage: PageNavProps = {
      id: crypto.randomUUID(), // Generate a unique ID for the new page
      name: `Other ${pages.length + 1}`,
      icon: "file", // Default icon for new pages
    };

    // Create a new array with the new page inserted at the correct position
    const newPages = [...pages.slice(0, index), newPage, ...pages.slice(index)];

    setPages(newPages);
    setActivePageId(newPage.id); // Set the newly created page as active
  };

  return (
    <div className="h-[72px] rounded-lg bg-white p-4 font-sans shadow-md">
      <div className="flex items-center">
        {pages.map((page, index) => (
          <div key={index} className="flex items-center">
            <PageTab
              page={page}
              isActive={page.id === activePageId}
              onClick={() => setActivePageId(page.id)}
            />

            <button
              onClick={() => handleAddPage(index + 1)}
              className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 bg-white p-3 opacity-60 shadow-sm transition-opacity hover:opacity-100"
              aria-label="Add new page"
            >
              <Plus className="h-3 w-3 text-black" />
            </button>
          </div>
        ))}

        {/* The final button to add a new page at the end */}
        <button
          onClick={() => handleAddPage(pages.length)}
          className="ml-2 flex items-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm transition-colors hover:bg-gray-50"
        >
          <Plus className="h-4 w-4 text-gray-600" />
          <span className="font-medium text-gray-700">Add page</span>
        </button>
      </div>
    </div>
  );
};
