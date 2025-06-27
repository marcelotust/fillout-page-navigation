import * as React from "react";
import type { SVGProps } from "react";
const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.958 9.167H10v4.375M17.708 10a7.708 7.708 0 1 1-15.416 0 7.708 7.708 0 0 1 15.416 0"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.25}
      d="M10 6.125A.542.542 0 1 1 10 7.208.542.542 0 0 1 10 6.125Z"
    />
  </svg>
);
export default InfoIcon;
