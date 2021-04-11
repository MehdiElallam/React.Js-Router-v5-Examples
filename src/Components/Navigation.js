import React from 'react'
import { NavLink , } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact activeStyle={{color : 'red'}}  to="/">First page</NavLink >
                </li>
                <li>
                    <NavLink activeStyle={{color : 'red'}}  to="/second">Second page</NavLink >
                </li>
                <li>
                    <NavLink activeStyle={{color : 'red'}}  to="/third">Third page</NavLink >
                </li>
            </ul>
        </nav>
    )
}
