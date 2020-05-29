import React from "react";

function YamaIcon(props) {
    return (
        <svg className={props.className}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <path d="M29.884 25.14L20 8.67V1.999h1c.55 0 1-.45 1-1s-.45-1-1-1H11c-.55 0-1 .45-1 1s.45 1 1 1h1V8.67L2.116 25.14C-.148 28.913 1.6 32 6 32h20c4.4 0 6.148-3.087 3.884-6.86zM7.532 20L14 9.221V2h4v7.221L24.468 20H7.533z"></path>
        </svg>
    );
}

export default YamaIcon;