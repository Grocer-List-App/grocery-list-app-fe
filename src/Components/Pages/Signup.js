import styled from 'styled-components';

export default function Signup() {
    return (
        <LoginStyled className="login-container">
            <div className="login-background"></div>
                <form className="login-form">
                    <div className="text-inputs-container">
                        <input
                            className="email-input text" 
                            type="text"
                            placeholder="Email or Username"/>
                        <input
                            className="password-input text" 
                            type="password"
                            placeholder="Password"/>
                    </div>
                    <div className="login-button-container">
                        <label className="remember-me">  
                            <input
                                className="radio-button"
                                type="radio"/>
                                Remember me
                        </label>  
                        <button type="submit">Login</button>
                    </div>
                </form>
        </LoginStyled>
    )

}

const LoginStyled = styled.div`
height: 100%;
.login-background {
    background-image: url('https://images.unsplash.com/photo-1584771145729-0bd9fda6529b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    filter: blur(4px);
    -webkit-filter: blur(4px);
    height: 94%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.login-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: white;
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    text-align: center;
    border: 0.5px solid black;
    width: 40em;
    height: 20em;
    background-color: rgba(0,0,0,0.6);
    border-radius: 5px;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.35);
}
.text-inputs-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
}
.text {
    font-size: 0.9em;
    font-weight: 500;
    margin: 10px;
    height: 40px;
    width: 15rem;
    padding: 0 10px;
    border: 1px solid #6E6E6E;
    color: black;
}
.login-button-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    /* border: 1px solid white; */
}
.radio-button{
    margin: 10px;
}
.remember-me{
    margin-bottom: 20px;
}
button {
    padding: 4px 18px;
    border: 1px solid #6E6E6E;
    background-color: #fff;
    color: black;
    font-weight: 500;
    font-size: 0.9em;
}
`