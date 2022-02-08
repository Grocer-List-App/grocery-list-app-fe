import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar() {
    return (
        <Header>
            <div className="logo-continer">
                <NavLink exact to="/">
                    <img className="logo" src="https://cdn4.iconfinder.com/data/icons/wedding-92/24/document-todo-checkmark-checklist-file-grocery-list-256.png" alt="logo" />
                </NavLink>
            </div>
            <nav>
                <ul className="nav-links">
                    {/* <li><NavLink className='link' exact to="/"><span>Home</span></NavLink></li> */}
                    <li><NavLink id="sign-up" className='link' to="/signup"><span>Sign Up</span></NavLink></li>
                    <li><NavLink id="log-in" className='link' to="/login"><span>Log In</span></NavLink></li>
                </ul>
            </nav>
        </Header>
    )

}

const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
/* padding: 0.6rem 1.8rem; */
height: 6%;
/* border-bottom: 2px solid #E6E6E6; */


.nav-links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 12rem ;
    font-size: 0.8rem;
}
.logo {
    width: 2rem;
    margin-left: 0.5rem;
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