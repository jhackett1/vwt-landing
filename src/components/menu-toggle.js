import React from 'react'

const MenuToggle = ({onClick}) => (
  <svg onClick={onClick} width="20px" height="8px" viewBox="0 0 20 8" version="1.1" className="menu-toggle">
      <defs>
          <polygon id="path-1" points="0 0 20 0 20 2 0 2"></polygon>
          <polygon id="path-3" points="0 0 20 0 20 2 0 2"></polygon>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group">
              <g id="Group-2056">
                  <mask id="mask-2" fill="white">
                      <use href="#path-1"></use>
                  </mask>
                  <g id="Clip-2055"></g>
                  <polygon id="Fill-2054" fill="#161646" mask="url(#mask-2)" points="-5 7 25 7 25 -5 -5 -5"></polygon>
              </g>
              <g id="Group-2059" transform="translate(0.000000, 6.000000)">
                  <mask id="mask-4" fill="white">
                      <use href="#path-3"></use>
                  </mask>
                  <g id="Clip-2058"></g>
                  <polygon id="Fill-2057" fill="#161646" mask="url(#mask-4)" points="-5 7 25 7 25 -5 -5 -5"></polygon>
              </g>
          </g>
      </g>
  </svg>
)

export default MenuToggle
