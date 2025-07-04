import * as React from "react";
import type { SVGProps } from "react";
const FlagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <path
      fill="#2F72E2"
      d="M8.197 10.49c-1.393-.39-2.643-.688-4.03-.113v3.79a.5.5 0 0 1-1 0V2.931c0-.435.247-.87.695-1.047 1.657-.658 3.148-.3 4.487.072l.261.073c1.266.353 2.383.666 3.6.37.714-.172 1.623.296 1.623 1.191v6.05c0 .435-.247.87-.695 1.048-1.756.696-3.336.252-4.74-.143z"
    />
  </svg>
);
export default FlagIcon;
