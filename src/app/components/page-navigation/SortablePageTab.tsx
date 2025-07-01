import { useSortable } from "@dnd-kit/sortable";
import { PageTab } from "./PageTab";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import type { PageNavProps } from "./PageNavigation";

type SortablePageTabProps = {
  page: PageNavProps;
  isActive: boolean;
  onClick: () => void;
  onContextMenu: (event: React.MouseEvent) => void;
};

export const SortablePageTab = ({
  page,
  isActive,
  onClick,
  onContextMenu,
}: SortablePageTabProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: page.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : 20,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <PageTab
        page={page}
        isActive={isActive}
        onClick={onClick}
        onContextMenu={onContextMenu}
      />
    </div>
  );
};
