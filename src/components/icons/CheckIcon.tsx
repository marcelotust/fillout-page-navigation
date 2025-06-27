import * as React from "react";
import type { SVGProps } from "react";
const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 7.917 8.75 12.5l-1.667-1.667M17.708 10a7.708 7.708 0 1 1-15.416 0 7.708 7.708 0 0 1 15.416 0"
    />
  </svg>
);
export default CheckIcon;
