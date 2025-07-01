import * as React from "react";
import type { SVGProps } from "react";
const PencilIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <path
      stroke="#9DA4B2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.013 14.167h5.654M2.333 11.62v2.546H4.88c.176 0 .345-.07.469-.195l9.124-9.124c.26-.26.26-.68 0-.939l-1.881-1.881a.664.664 0 0 0-.939 0l-9.124 9.124a.66.66 0 0 0-.195.47"
    />
  </svg>
);
export default PencilIcon;
