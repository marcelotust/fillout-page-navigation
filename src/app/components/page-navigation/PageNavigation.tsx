"use client";

import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Plus } from "lucide-react";
import { PageTab } from "./PageTab";
import { AddPageButton } from "./AddPageButton";
import ContextMenu from "./context-menu/ContextMenu";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { SortablePageTab } from "./SortablePageTab";

export interface PageNavProps {
  id: string;
  name: string;
  icon: "info" | "file" | "ending" | "check";
}

const generateId = () =>
  typeof window !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).substr(2, 9);

export const PageNavigation = () => {
  const initialPages: PageNavProps[] = [
    { id: "1", name: "Info", icon: "info" },
    { id: "2", name: "Details", icon: "file" },
    { id: "3", name: "Other", icon: "file" },
    { id: "4", name: "Ending", icon: "check" },
  ];

  const [pages, setPages] = useState<PageNavProps[]>(initialPages);
  const [activePageId, setActivePageId] = useState("1");

  const [contextMenu, setContextMenu] = useState({
    isOpen: false,
    pageId: "",
    position: { x: 0, y: 0 },
  });

  // DnD Kit sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  );

  // Function to add a new page at a specific index
  const handleAddPage = (index: number) => {
    const newPage: PageNavProps = {
      id: generateId(), // Generate a unique ID for the new page
      name: `Other ${pages.length + 1}`,
      icon: "file", // Default icon for new pages
    };

    // Create a new array with the new page inserted at the correct position
    const newPages = [...pages.slice(0, index), newPage, ...pages.slice(index)];

    setPages(newPages);
    setActivePageId(newPage.id); // Set the newly created page as active
  };

  const handleOpenContextMenu = (event: React.MouseEvent, pageId: string) => {
    event.preventDefault(); // Cancel the default context menu

    let target = event.currentTarget as HTMLElement;
    if (target.id !== "page-tab")
      target = event.currentTarget.parentElement as HTMLElement; // Ensure we get the parent element for correct positioning
    const rect = target.getBoundingClientRect();

    setContextMenu({
      isOpen: true,
      pageId: pageId,
      position: {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
      },
    });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({ ...contextMenu, isOpen: false });
  };

  const handleDeletePage = () => {
    if (pages.length <= 1) return; // Test to keep at least one last page
    setPages(pages.filter((p) => p.id !== contextMenu.pageId));
    handleCloseContextMenu();
  };

  // DnD Kit: handle drag end
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = pages.findIndex((p) => p.id === active.id);
      const newIndex = pages.findIndex((p) => p.id === over.id);
      setPages((pages) => arrayMove(pages, oldIndex, newIndex));
    }
  };

  return (
    <div className="h-[72px] w-full overflow-hidden bg-white p-5 font-sans shadow-md">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToHorizontalAxis]}
      >
        <SortableContext
          items={pages.map((p) => p.id)}
          strategy={horizontalListSortingStrategy}
        >
          <div className="has-dotted-line-bg relative inline-flex">
            {pages.map((page, index) => (
              <div key={page.id} className="flex items-center">
                <SortablePageTab
                  page={page}
                  isActive={page.id === activePageId}
                  onClick={() => setActivePageId(page.id)}
                  onContextMenu={(e: React.MouseEvent) =>
                    handleOpenContextMenu(e, page.id)
                  }
                />
                {pages.length - 1 > index && (
                  <AddPageButton onAddPage={() => handleAddPage(index + 1)} />
                )}
              </div>
            ))}
            {/* The final button to add a new page at the end */}
            <button
              onClick={() => handleAddPage(pages.length)}
              className="group z-10 mx-6 flex h-8 items-center space-x-1 rounded-lg border border-gray-300 bg-white px-2 py-2 shadow-sm"
            >
              <Plus className="h-4 w-4 text-(--color-black-text) transition-colors duration-300 group-hover:text-blue-400" />
              <span className="truncate font-medium text-(--color-black-text) transition-colors duration-300 select-none group-hover:text-blue-400">
                Add page
              </span>
            </button>
          </div>
        </SortableContext>
      </DndContext>

      {/* Context Menu for Settings */}
      {contextMenu.isOpen && (
        <ContextMenu
          position={contextMenu.position}
          onClose={handleCloseContextMenu}
          onSetFirst={() => console.log("TODO Set as first")}
          onRename={() => console.log("TODO Rename")}
          onCopy={() => console.log("TODO Copy")}
          onDuplicate={() => console.log("TODO Duplicate")}
          onDelete={handleDeletePage}
        />
      )}
    </div>
  );
};
