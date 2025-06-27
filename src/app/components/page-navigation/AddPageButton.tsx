import { Plus } from "lucide-react";

type AddPageButtonProps = {
  onAddPage: () => void;
};

export const AddPageButton = ({ onAddPage }: AddPageButtonProps) => {
  return (
    <button
      onClick={() => onAddPage()}
      className="group z-10 flex h-6 w-6 items-center justify-center transition-all hover:w-[56px]"
      aria-label="Add new page"
    >
      <div className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-200 bg-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
        <Plus className="h-3 w-3 text-black" />
      </div>
    </button>
  );
};
