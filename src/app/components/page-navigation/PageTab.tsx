import { FileText, CircleCheck, Plus, MoreHorizontal } from "lucide-react";
import { PageNavProps } from "./PageNavigation";

type PageTabProps = {
  page: PageNavProps;
  isActive: boolean;
  onClick: () => void;
  onAddPage: () => void;
  isLast: boolean;
};

export const PageTab = ({
  page,
  isActive,
  onClick,
  onAddPage,
  isLast,
}: PageTabProps) => {
  const getIcon = () => {
    const iconClass = `w-4 h-4 ${isActive ? "text-orange-500" : "text-gray-500"}`;
    switch (page.icon) {
      case "info":
        return (
          <svg
            viewBox="0 0 16 16"
            className={iconClass}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 8H10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "details":
        return <FileText className={iconClass} />;
      case "ending":
        return <CircleCheck className={iconClass} />;
      case "other":
        return <MoreHorizontal className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <div className="group flex items-center">
      {/* The main tab button */}
      <button
        onClick={onClick}
        className={`flex items-center space-x-2 rounded-lg px-4 py-2 shadow-sm transition-all duration-200 ease-in-out ${
          isActive
            ? "border border-orange-200 bg-orange-50"
            : "border border-gray-200 bg-gray-100 hover:bg-gray-200"
        } `}
      >
        {getIcon()}
        <span
          className={`font-medium ${isActive ? "text-gray-800" : "text-gray-600"}`}
        >
          {page.name}
        </span>
      </button>

      {/* This is the separator with the plus button that appears on hover */}
      {/* We don't show it for the very last item */}
      {!isLast && (
        <div className="relative px-1">
          <div className="h-px w-6 bg-gray-200 transition-colors group-hover:bg-transparent"></div>
          <button
            onClick={onAddPage}
            className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 hover:border-orange-400 hover:text-orange-500"
            aria-label="Add new page"
          >
            <Plus className="h-4 w-4 text-current" />
          </button>
        </div>
      )}
    </div>
  );
};
