import React from 'react'
import { NavLink, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

const SIZE = '32px'

export const NavBar = () => {
    //const { pathname } = useLocation()
    return (
        <Nav>
            <NavLink to="/">
                <MdHome size={SIZE} />
            </NavLink>
            <NavLink to="/favs">
                <MdFavoriteBorder size={SIZE} />
            </NavLink>
            <NavLink to="/user">
                <MdPersonOutline size={SIZE} />
            </NavLink>
        </Nav>
    )
}
