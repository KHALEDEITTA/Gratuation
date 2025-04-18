import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from './firebaseConfig';

export function SignUp() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [PasswordR, setPasswordR] = useState("")
    const [Accept, SetAccept] = useState(false)
    const navigate = useNavigate();


    const Submit = async (e) => {
        e.preventDefault()
        SetAccept(true)

        try {
            await createUserWithEmailAndPassword(auth, Email, Password, Name)
            navigate("/login");
        } catch (error) {
            alert(error.message);
            console.log(error);

        }

    }

    return (
        <>
            <div className='w-[100%] '>
                <StyledWrapper className='flex justify-center items-center mt-20'>
                    <form className="form drop-shadow-xl"
                        onSubmit={Submit}
                    >
                        <p className="title">Register </p>
                        <p className="message">Signup now and get full access to our app. </p>

                        <label>
                            <input className="input" type="text" placeholder required
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span>Firstname</span>
                        </label>
                        {Name === "" && Accept && <p className='text-red-500 text-sm'>please enter your name</p>}


                        <label>
                            <input className="input" type="email" placeholder required
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span>Email</span>
                        </label>
                        <label>
                            <input className="input" type="password" placeholder required
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span>Password</span>
                        </label>
                        {Password.length < 6 && Accept && <p className='text-red-500 text-sm'>password must be greeter than or equal 8</p>}
                        <label>
                            <input className="input" type="password" placeholder required
                                value={PasswordR}
                                onChange={(e) => setPasswordR(e.target.value)}
                            />
                            <span>Confirm password</span>
                        </label>
                        {PasswordR !== Password && <p className='text-red-500 text-sm'>password not equal confirm password</p>}
                        <button className="submit bg-sky-900 hover:bg-sky-950">Sign In</button>
                        <p className="signin">Already have an acount ? <Link to={"/login"} className='no-underline color-sky-900'>Login</Link> </p>
                    </form>
                </StyledWrapper>
            </div>
        </>
    );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 450px;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #ffffff;
    color: #ffffff;
    border: 1px solidrgb(90, 88, 88);
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color:rgba(8, 72, 111, 0.87);
  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color:rgba(8, 72, 111, 0.87);
  }

  .message, 
  .signin {
    font-size: 17px;
    color: rgba(0, 0, 0, 0.7);
  }

  .signin {
    text-align: center;
  }

 
  .form label {
    position: relative;
  }

  .form label .input {
    
    color:rgba(0, 0, 0, 0.86) ;
    width: 100%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid ;
    border-radius: 10px;
  }
    

  .form label .input + span {
    color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 1em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 15px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    
  }

  

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;

export default SignUp;

