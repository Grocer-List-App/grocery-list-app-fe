import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar() {
    return (
        <Header>
            <nav>
                <ul className="nav-links">
                    <li><NavLink id="sign-up" className='link' to="/signup"><span>Sign Up</span></NavLink></li>
                    <li><NavLink id="log-in" className='link' to="/login"><span>Log In</span></NavLink></li>
                </ul>
            </nav>
        </Header>
    )

}

const Header = styled.header`
display: flex;
justify-content: flex-end;
align-items: center;
height: 6%;


.nav-links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 12rem ;
    font-size: 0.8rem;
}
#log-in, #sign-up {
    letter-spacing: 1px;
    text-transform: uppercase;
    color: black;
    font-weight: 600;
}
#log-in {
    border: 2px solid black;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    color: black;
    transition: all 0.15s ease-in-out;
}
#log-in:hover {
    background-color: #3e8c2f;
    border: 2px solid #3e8c2f;
    color: #fff;
}
`