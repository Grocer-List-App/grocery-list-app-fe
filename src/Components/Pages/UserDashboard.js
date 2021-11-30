import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function UserDashboard() {
    return (
        <UserDashboardContainer className="dashboard-container">
            <div className="dashboard-background"></div>
            <div className='dashboard-contents'>
                <h1 className='main-header'>Grocery List App Name</h1>
                <button className="signup-button"><NavLink to="/signup" className="signup-button-text">Sign Up!</NavLink></button>
            </div>
        </UserDashboardContainer>
        
    )
}

const UserDashboardContainer = styled.div`
height: 100%;
.dashboard-background {
    /* background-image: url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'); */
    background-image: url('https://images.unsplash.com/photo-1584771145729-0bd9fda6529b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    filter: blur(1px);
    -webkit-filter: blur(1px);
    height: 92.50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.dashboard-contents{
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
    font-size: 4rem;
    margin-bottom: 10%;
    text-shadow: 2px 2px 4px #000000;
    
}
.signup-button{
    font-size: 1.1rem;
    padding: 5px 10px;
    text-decoration: none;
    background-color: #E6E6E6;
    border-radius: 4px;
}
.signup-button-text{
    color: #005DB3;
    font-weight: 500;
}

`