import React from "react";

function UserIcon(props) {
  return (
    <svg className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path d="M10 6a6 6 0 1112 0 6 6 0 01-12 0zm14.002 8h-1.107l-6.222 12.633L19 15l-3-3-3 3 2.327 11.633L9.105 14H7.998C4 14 4 16.687 4 20v10h24V20c0-3.313 0-6-3.998-6z"></path>
    </svg>
  );
}

export default UserIcon;