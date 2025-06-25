"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { PageTab } from "./PageTab";

export interface PageNavProps {
  id: string;
  name: string;
  icon: "info" | "details" | "other" | "ending";
}

export const PageNavigation = () => {
  // We'll start with some hardcoded data and manage it with useState.
  const initialPages: PageNavProps[] = [
    { id: "1", name: "Info", icon: "info" },
    { id: "2", name: "Details", icon: "details" },
    { id: "3", name: "Other", icon: "other" },
    { id: "4", name: "Ending", icon: "ending" },
  ];

  const [pages, setPages] = useState<PageNavProps[]>(initialPages);
  const [activePageId, setActivePageId] = useState("1");

  // Function to add a new page at a specific index
  const handleAddPage = (index: number) => {
    const newPage: PageNavProps = {
      id: crypto.randomUUID(), // Generate a unique ID for the new page
      name: `New Page ${pages.length + 1}`,
      icon: "details", // Default icon for new pages
    };

    // Create a new array with the new page inserted at the correct position
    const newPages = [...pages.slice(0, index), newPage, ...pages.slice(index)];

    setPages(newPages);
    setActivePageId(newPage.id); // Set the newly created page as active
  };

  return (
    <div className='bg-white p-4 rounded-lg shadow-md font-sans'>
      <div className='flex items-center'>
        {pages.map((page, index) => (
          <PageTab
            key={page.id}
            page={page}
            isActive={page.id === activePageId}
            onClick={() => setActivePageId(page.id)}
            onAddPage={() => handleAddPage(index + 1)}
            isLast={index === pages.length - 1}
          />
        ))}

        {/* The final button to add a new page at the end */}
        <button
          onClick={() => handleAddPage(pages.length)}
          className='flex items-center space-x-2 py-2 px-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors ml-2'
        >
          <Plus className='w-4 h-4 text-gray-600' />
          <span className='text-gray-700 font-medium'>Add page</span>
        </button>
      </div>
    </div>
  );
};
