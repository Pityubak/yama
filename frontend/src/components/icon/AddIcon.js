import React from "react";

function AddIcon(props) {
  return (
    <svg className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path d="M31 12H20V1a1 1 0 00-1-1h-6a1 1 0 00-1 1v11H1a1 1 0 00-1 1v6a1 1 0 001 1h11v11a1 1 0 001 1h6a1 1 0 001-1V20h11a1 1 0 001-1v-6a1 1 0 00-1-1z"></path>
    </svg>
  );
}

export default AddIcon;
