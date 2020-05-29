import React from "react";

function AboutIcon(props) {
  return (
    <svg className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="32"
      viewBox="0 0 36 32"
    >
      <path d="M7 4H1c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 6H2V8h4v2zM17 4h-6c-.55 0-1 .45-1 1v22c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 6h-4V8h4v2z"></path>
      <path d="M23.909 5.546l-5.358 2.7a1.003 1.003 0 00-.443 1.343l8.999 17.861c.247.491.852.691 1.343.443l5.358-2.7c.491-.247.691-.852.443-1.343L25.252 5.989a1.003 1.003 0 00-1.343-.443z"></path>
    </svg>
  );
}

export default AboutIcon;