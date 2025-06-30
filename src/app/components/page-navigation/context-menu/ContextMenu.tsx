import React, { useEffect, useRef } from "react";
import { Flag, Edit, Copy, Trash2 } from "lucide-react";

import ContextMenuItem from "./ContextMenuItem";

type ContextMenuProps = {
  position: { x: number; y: number };
  onClose: () => void;
  onSetFirst: () => void;
  onRename: () => void;
  onCopy: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
};

const ContextMenu = ({
  position,
  onClose,
  onSetFirst,
  onRename,
  onCopy,
  onDuplicate,
  onDelete,
}: ContextMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Effect to close the menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="absolute z-20 w-56 rounded-lg border border-gray-100 bg-white p-2 shadow-2xl"
      style={{
        top: `${position.y - 10}px`,
        left: `${position.x}px`,
        transform: "translateY(calc(-100%))",
      }}
    >
      <div className="px-3 py-2 text-lg font-semibold text-gray-800">
        Settings
      </div>
      <hr className="my-1 border-gray-100" />
      <ul className="space-y-1">
        <ContextMenuItem
          label="Set as first page"
          icon={<Flag className="mr-3 h-5 w-5" />}
          onClick={onSetFirst}
        />
        <ContextMenuItem
          label="Rename"
          icon={<Edit className="mr-3 h-5 w-5" />}
          onClick={onRename}
        />
        <ContextMenuItem
          label="Copy"
          icon={<Copy className="mr-3 h-5 w-5" />}
          onClick={onCopy}
        />
        <ContextMenuItem
          label="Duplicate"
          icon={<Copy className="mr-3 h-5 w-5" />}
          onClick={onDuplicate}
        />
      </ul>
      <hr className="my-1 border-gray-100" />
      <ul>
        <ContextMenuItem
          label="Delete"
          icon={<Trash2 className="mr-3 h-5 w-5" />}
          onClick={onDelete}
          isDestructive
        />
      </ul>
    </div>
  );
};
export default ContextMenu;
