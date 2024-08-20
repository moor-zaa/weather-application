import React from "react";

const HumiditySvg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.5C16.101 21.5 19.5 18.437 19.5 14.571C19.5 12.156 18.267 9.71198 16.873 7.70898C15.47 5.69198 13.851 4.04898 12.978 3.21798C12.7149 2.96569 12.3645 2.82483 12 2.82483C11.6355 2.82483 11.2851 2.96569 11.022 3.21798C10.149 4.04798 8.53 5.69198 7.127 7.70898C5.733 9.71198 4.5 12.156 4.5 14.571C4.5 18.437 7.899 21.5 12 21.5Z"
        stroke="url(#paint0_linear_82_14)"
      />
      <path
        d="M12 18C10.9391 18 9.92172 17.5786 9.17157 16.8284C8.42143 16.0783 8 15.0609 8 14"
        stroke="url(#paint1_linear_82_14)"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_82_14"
          x1="12"
          y1="2.82483"
          x2="12"
          y2="21.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.47" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_82_14"
          x1="10"
          y1="14"
          x2="10"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.47" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HumiditySvg;
