import React from "react";

const WindSvg = ({ width = 20 }) => {
  return (
    <svg width={width} viewBox="0 0 342 234" fill="none">
      <g clipPath="url(#clip0_81_9)">
        <path
          d="M264.2 21.3C268.781 16.5278 274.474 12.9662 280.769 10.9341C287.064 8.902 293.765 8.4629 300.272 9.65609C306.778 10.8493 312.887 13.6375 318.052 17.7711C323.216 21.9047 327.275 27.2546 329.865 33.3417C332.454 39.4288 333.493 46.0632 332.89 52.6506C332.286 59.238 330.058 65.5729 326.405 71.088C322.752 76.603 317.789 81.126 311.959 84.252C306.129 87.378 299.615 89.0093 293 89H9"
          stroke="url(#paint0_linear_81_9)"
          strokeWidth="18"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M148.2 212.7C152.781 217.472 158.474 221.034 164.769 223.066C171.064 225.098 177.765 225.537 184.272 224.344C190.778 223.151 196.887 220.362 202.052 216.229C207.216 212.095 211.275 206.745 213.865 200.658C216.454 194.571 217.493 187.937 216.89 181.349C216.286 174.762 214.058 168.427 210.405 162.912C206.752 157.397 201.789 152.874 195.959 149.748C190.129 146.622 183.615 144.991 177 145H9"
          stroke="url(#paint1_linear_81_9)"
          strokeWidth="18"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_81_9"
          x1="171.028"
          y1="9"
          x2="171.028"
          y2="89"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.47" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_81_9"
          x1="113.028"
          y1="145"
          x2="113.028"
          y2="225"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.47" />
        </linearGradient>
        <clipPath id="clip0_81_9">
          <rect width="342" height="234" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WindSvg;
