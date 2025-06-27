type ContextMenuItemProps = {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  isDestructive?: boolean;
};

const ContextMenuItem = ({
  label,
  icon,
  onClick,
  isDestructive = false,
}: ContextMenuItemProps) => (
  <li>
    <button
      onClick={onClick}
      className={`flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors ${
        isDestructive
          ? "text-red-600 hover:bg-red-50"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </button>
  </li>
);
export default ContextMenuItem;
