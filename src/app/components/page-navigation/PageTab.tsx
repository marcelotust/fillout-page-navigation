import { FileText, CircleCheck, Plus, MoreHorizontal } from "lucide-react";
import { PageNavProps } from "./PageNavigation";

type PageTabProps = {
  page: PageNavProps;
  isActive: boolean;
  onClick: () => void;
};

export const PageTab = ({ page, isActive, onClick }: PageTabProps) => {
  const IconDisplay = () => {
    const src = `/assets/${page.icon}.svg`;
    return (
      <div className={`relative h-5 w-5 flex-shrink-0`}>
        <img
          src={src}
          alt={`${page.name} icon`}
          className={`h-full w-full ${isActive ? "active-icon-filter" : ""}`}
        />
      </div>
    );
  };

  return (
    <button
      onClick={onClick}
      className={`px flex h-8 items-center space-x-2 rounded-lg bg-white px-2 py-2 shadow-sm transition-all duration-200 ease-in-out ${
        isActive
          ? "border border-orange-200 bg-orange-50"
          : "border border-gray-200 bg-gray-100 hover:bg-gray-200"
      } `}
    >
      <IconDisplay />
      <span
        className={`font-medium ${isActive ? "text-gray-800" : "text-gray-600"}`}
      >
        {page.name}
      </span>
    </button>
  );
};
