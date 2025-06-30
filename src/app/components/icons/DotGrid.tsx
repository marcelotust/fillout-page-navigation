import * as React from "react";
import type { SVGProps } from "react";
const DotGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 3.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 14.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 3.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M8 14.167a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334"
    />
  </svg>
);
export default DotGrid;
