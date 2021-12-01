import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
    return (
        <HomePageContainer className="homepage-container">
            <div className="homepage-background"></div>
            <div className='homepage-contents'>
                <h1 className='main-header'>Grocery List App Name</h1>
                <NavLink to="/signup" className="signup-button">Sign Up!</NavLink>
            </div>
        </HomePageContainer>
        
    )
}

const HomePageContainer = styled.div`
height: 100%;
.homepage-background {
    background-image: url('https://images.unsplash.com/photo-1584771145729-0bd9fda6529b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    filter: blur(4px);
    -webkit-filter: blur(4px);
    height: 94%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.homepage-contents{
    color: white;
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    text-align: center;
}
.main-header{
    font-size: 4.5rem;
    margin-bottom: 10%;
    text-shadow: 1px 1px 3px #000000;
    
}
.signup-button{
    font-size: 1.3rem;
    font-weight: 600;
    background-color: #E6E6E6;
    padding: 15px 28px;
    color: #3e8c2f;
    border: 1px solid #3e8c2f;
    box-shadow: 6px 8px #3e8c2f;
    border-radius: 4px;
    transition: all 0.1s ease-in-out;
}
.signup-button:hover{
    background-color: #3e8c2f;
    color: white;
}
`