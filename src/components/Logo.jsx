import React from 'react'

function Logo({ width = '100px' }) {
    return (
        <div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="" viewBox="0 0 24 24">
            <path d="M 4 0 L 4 10 L 7 15 L 10 10 L 10 4 L 21 4 C 21.601563 4 22 4.398438 22 5 L 22 15 L 7 15 L 8.8125 17.40625 L 8.6875 17.5 L 6 19.6875 L 6 17 L 3 17 C 2.398438 17 2 16.601563 2 16 L 2 5 C 2 4.398438 2.398438 4 3 4 L 3 2 C 1.300781 2 0 3.300781 0 5 L 0 16 C 0 17.699219 1.300781 19 3 19 L 4 19 L 4 24 L 10 19 L 21 19 C 22.699219 19 24 17.699219 24 16 L 24 5 C 24 3.300781 22.699219 2 21 2 L 10 2 L 10 0 Z M 7 9 L 9 9.65625 L 9 9.6875 L 7.40625 12.3125 L 6.59375 12.3125 L 5 9.6875 L 5 9.65625 Z"></path>
        </svg>
        </div>
    )
}

export default Logo