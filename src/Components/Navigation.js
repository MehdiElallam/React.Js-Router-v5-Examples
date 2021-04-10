import React from 'react'
import { Link, } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">First page</Link>
                </li>
                <li>
                <Link to="/second">Second page</Link>
                </li>
                <li>
                    <Link to="/third">Third page</Link>
                </li>
            </ul>
        </nav>
    )
}
