import React from 'react'

export const NavLink = (props) => (
    <button className='nav-link' onClick={() => props.openModal()}>
        { props.type === 'new' ? <i className="fas fa-plus"></i> : <i className="fas fa-list-ul"></i> }
        <span>{props.text}</span>
    </button>
)