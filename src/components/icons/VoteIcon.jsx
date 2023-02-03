import * as React from "react";

function VoteIcon(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.4 14.143h-3.2v3.143h1.12c.265 0 .48.176.48.393v.785c0 .216-.215.393-.48.393H3.68c-.265 0-.48-.177-.48-.393v-.785c0-.216.215-.393.48-.393H4.8v-3.143H1.6c-.885 0-1.6.702-1.6 1.571v4.715C0 21.298.715 22 1.6 22h28.8c.885 0 1.6-.702 1.6-1.571v-4.715c0-.869-.715-1.571-1.6-1.571zm-4.8 3.143v-15.7C25.6.707 24.875 0 23.985 0H8.02C7.125 0 6.4.712 6.4 1.586v15.7h19.2zM10.56 8.348l1.275-1.242a.54.54 0 01.76.005l2.065 2.043 4.76-4.636a.54.54 0 01.76.005l1.265 1.252c.21.206.21.54-.005.746l-6.415 6.247a.54.54 0 01-.76-.005L10.56 9.095a.517.517 0 010-.747z"
        fill="currentColor"
      />
    </svg>
  );
}

export default VoteIcon;