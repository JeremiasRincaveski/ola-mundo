import styled from './header.module.css'
import { NavLink } from 'react-router-dom'

export default function Header () {

    return (
        <div className={styled.navegacao}>
            <NavLink
                to='/' end
                className={({ isActive }) =>
                    `${isActive ? styled.linkAtivo : ""}`
                }
            >
                Inicio
            </NavLink>
            <NavLink 
                to='/sobremin' end
                className={({ isActive }) =>
                    `${isActive ? styled.linkAtivo : ""}`
                }
            >
                Sobre Min
            </NavLink>
        </div>
    )
}