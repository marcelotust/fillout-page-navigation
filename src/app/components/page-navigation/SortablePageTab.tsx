import { useSortable } from "@dnd-kit/sortable";
import { PageTab } from "./PageTab";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

export const SortablePageTab = (props: any) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.page.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : 20,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <PageTab {...props} />
    </div>
  );
};
