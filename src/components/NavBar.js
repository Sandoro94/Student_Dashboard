import React from "react"
import { Outlet, Link } from "react-router-dom"
import { useSelector } from "react-redux"

function NavBar() {
    const NavBarStyle = {
        color: "blue",
        padding: "20px",
    }
    const studenten = useSelector((state) => state.studenten)

    return (
        <>
            <nav>
                <Link style={NavBarStyle} to="/">

                </Link>
                <ul className="nav-links">
                    {studenten.map((student,index) =>(
                        <Link key={index} style={NavBarStyle} to={`/${student.studentNaam}`}>
                            <li>{student.studentNaam}</li>
                        </Link>
                    ))}
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default NavBar