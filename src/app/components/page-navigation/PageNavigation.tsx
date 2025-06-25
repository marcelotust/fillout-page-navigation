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
    <div className="has-dotted-line-bg relative z-0 h-[72px] rounded-lg bg-white p-5 font-sans shadow-md">
      <div className="flex items-center gap-2">
        {pages.map((page, index) => (
          <div key={index} className="z-10 flex items-center gap-2">
            <PageTab
              page={page}
              isActive={page.id === activePageId}
              onClick={() => setActivePageId(page.id)}
            />
            {pages.length - 1 > index && (
              <button
                onClick={() => handleAddPage(index + 1)}
                className="z-10 flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 bg-white opacity-0 shadow-sm transition-all hover:mx-4 hover:opacity-100"
                aria-label="Add new page"
              >
                <Plus className="h-3 w-3 text-black" />
              </button>
            )}
          </div>
        ))}

        {/* The final button to add a new page at the end */}
        <button
          onClick={() => handleAddPage(pages.length)}
          className="z-10 mx-3 flex h-8 items-center space-x-2 rounded-lg border border-gray-300 bg-white px-2 py-2 shadow-sm transition-colors hover:bg-gray-50"
        >
          <Plus className="h-4 w-4 text-gray-600" />
          <span className="font-medium text-gray-700">Add page</span>
        </button>
      </div>
    </div>
  );
};
