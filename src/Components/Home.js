import React from 'react';
import "./Home.css";
import {NavLink} from "react-router-dom"

export default function Home() {
    return (
        <div>
            <nav>
               <span> <NavLink to="/users">Users</NavLink></span>
               <span> <NavLink to="/courses">Courses</NavLink></span>
            </nav>
        </div>
    )
}
