import { ListIcon } from "lucide-react";
import CheckIcon from "../icons/CheckIcon";
import FileIcon from "../icons/FileIcon";
import InfoIcon from "../icons/InfoIcon";
import { PageNavProps } from "./PageNavigation";

type PageTabProps = {
  page: PageNavProps;
  isActive: boolean;
  onClick: () => void;
  onContextMenu: (event: React.MouseEvent) => void;
};

export const PageTab = ({
  page,
  isActive,
  onClick,
  onContextMenu,
}: PageTabProps) => {
  const iconClass = `relative w-5 h-5 flex-shrink-0 ${isActive ? "text-(--color-orange-icon)" : "text-(--color-gray-text)"}`;

  let iconElement;
  switch (page.icon) {
    case "info":
      iconElement = <InfoIcon className={iconClass} />;
      break;
    case "file":
      iconElement = <FileIcon className={iconClass} />;
      break;
    case "check":
      iconElement = <CheckIcon className={iconClass} />;
      break;
    default:
      iconElement = <FileIcon className={iconClass} />;
  }

  return (
    <div
      onContextMenu={onContextMenu}
      onClick={onClick}
      className={`px z-10 flex h-8 cursor-pointer items-center space-x-2 rounded-lg border px-2 py-2 shadow-sm transition-colors duration-300 ${
        isActive
          ? "border-(--color-blue-focused-border) bg-white"
          : "border-(--color-gray-default) bg-(--color-gray-default) hover:border-(--color-gray-hover) hover:bg-(--color-gray-hover)"
      } `}
    >
      <div className="flex items-center space-x-2">
        {iconElement}
        <span
          className={`font-medium ${isActive ? "text-(--color-black-text)" : "text-(--color-gray-text)"}`}
        >
          {page.name}
        </span>
      </div>

      {isActive && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // cancel parent click event
            onContextMenu(e);
          }}
          className="rounded-md hover:bg-gray-200"
        >
          <ListIcon className="relative h-5 w-5 flex-shrink-0 text-(--color-gray-text)" />
        </button>
      )}
    </div>
  );
};
