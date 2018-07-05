import React from 'react'

const Caret = ({
  down
}) => (
  <svg width="6px" height="8px" viewBox="0 0 6 8" version="1.1" style={{
    transform: (down)? "rotate(90deg)" : ""
  }}>
    <defs>
      <polygon id="path-rkk" points="0.6107 6.66 1.868 7.92 5.8278 3.96 1.868 0 0.6107 1.26 3.3133 3.96"></polygon>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-3812.000000, -648.000000)" id="Group-4436">
        <g transform="translate(3812.000000, 648.000000)">
          <mask id="mask-rkk" fill="white">
            <use href="#path-rkk"></use>
          </mask>
          <g id="Clip-4435"></g>
          <polygon id="Fill-4434" fill="#FFFFFF" mask="url(#mask-rkk)" points="-4.3893 12.92 10.82775 12.92 10.82775 -4.9996 -4.3893 -4.9996"></polygon>
        </g>
      </g>
    </g>
  </svg>
)

export default Caret
