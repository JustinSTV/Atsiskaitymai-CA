import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { v4 as generateID } from 'uuid';
import bcrypt from 'bcryptjs'
import styled from 'styled-components';

import UserContext, { UserContextType } from '../../contexts/UserContext';

const StyledSection = styled.section`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  >form{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 50px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    >div{
      width: 80%;
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      gap: 5px;

      >input{
        padding: 10px 20px;
      }
      >p{
        color: red;
        font-weight: bold;
      }
    }
    >input[type="submit"]{
      width: 80%;
      cursor: pointer;
      padding: 15px 30px;
      margin: 10px;
      border-radius: 10px;
      border: none;
      background-color: #bb2637;
      font-size: 14px;
      color: white;
    }
  }
`;

const Register = () => {

  const navigate = useNavigate();

  const { user, addNewUser, setLoggedInUser } = useContext(UserContext) as UserContextType;

  const [inputFields, setInputFields] = useState({
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
    dob: '',
    profilePicture: ''
  })

  const [error, setError] = useState<{
    username: string;
    email: string;
    password: string;
    passwordRepeat: string;
    dob: string;
    userExists: string;
    hasError: boolean;
  }>({
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
    dob: '',
    userExists: '',
    hasError: false
  });

  const registerErrorChecking: {
    [key: string]: (input: string, password?: string) => string;
  } = {
    username: (input: string) => {
      if(input.length < 3){
        return 'Must be longet than 3';
      } else if(input.length >= 10){
        return 'Must be shorter than 10';
      } else if(!input){
        return 'Field must be filled';
      } else {
        return '';
      }
    },
    email: (input: string) => {
      if (!input) {
        return 'Email is required';
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input)) {
          return 'Invalid email format';
        } else {
          return '';
        }
      }
    },
    //trumpas checkingas del testing purpose
    password: (input: string) => {
      if (input.length < 3) {
        return 'Password must be at least 3 characters long';
      } else if (!/[A-Z]/.test(input)) {
        return 'Password must contain at least one uppercase letter';
      } else {
        return '';
      }
    },
    passwordRepeat: (input: string, password?: string) => {
      if (input !== password) {
        return 'Passwords do not match';
      } else {
        return '';
      }
    },
    dob: (input: string) => {
      const userAge = new Date().getFullYear() - new Date(input).getFullYear();
      if (!input) {
        return 'Date of birth is required';
      } else if (userAge < 18) {
        return 'You must be at least 18 years old to register';
      } else {
        return '';
      }
    },
  }
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value
    })
  }

  const blurHandle = (event: React.FocusEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    const validateField = registerErrorChecking[fieldName]

    if(fieldName){
      setError({
        ...error,
        [fieldName]: validateField(event.target.value, inputFields.password),
      })
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userExists = user.find(
      (user) => user.username === inputFields.username || user.email === inputFields.email
    )
    if(userExists){
      setError({
        ...error,
        userExists: "Username or email is already taken",
        hasError: true
      })
    }

    if(inputFields.password === inputFields.passwordRepeat){

      const defaultProfilePicture = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"

      const newUser = {
        id: generateID(),
        username: inputFields.username,
        email: inputFields.email,
        password: bcrypt.hashSync(inputFields.password, 10),
        passwordRepeat: inputFields.passwordRepeat,
        passwordVisable: inputFields.passwordRepeat,
        dob: inputFields.dob,
        profilePicture: inputFields.profilePicture || defaultProfilePicture
      }

      addNewUser(newUser);
      setLoggedInUser(newUser)
      navigate('/')
    } else{
      setError({
        ...error,
        hasError: true
      })
    }

  }

  return (
    <StyledSection>
      <h2>Create An Account</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text"
            name="username" id="username"
            value={inputFields.username}
            onChange={handleInputChange}
            onBlur={blurHandle}
            required
          />
          {error.username && <p>{error.username}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type='email'
            id='email' name='email'
            value={inputFields.email}
            onChange={handleInputChange}
            onBlur={blurHandle}
            required
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password"
            name="password" id="password"
            value={inputFields.password}
            onChange={handleInputChange}
            onBlur={blurHandle}
            required
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <div>
          <label htmlFor="passwordRepeat">Password Repeat:</label>
          <input 
            type="password"
            name="passwordRepeat" id="passwordRepeat"
            value={inputFields.passwordRepeat}
            onChange={handleInputChange}
            onBlur={blurHandle}
            required
          />
          {error.passwordRepeat && <p>{error.passwordRepeat}</p>}
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input 
            type="date" 
            name='dob' id='dob'
            value={inputFields.dob}
            onChange={handleInputChange}
            onBlur={blurHandle}
            required
          />
          {error.dob && <p>{error.dob}</p>}
        </div>
        <div>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="text"
            name="profilePicture" id='profilePicture'
            value={inputFields.profilePicture}
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" value="Create Account"/>
      </form>
      {error.userExists && <p>{error.userExists}</p>}
      <p>Have an Account already?<Link to="/login">Login</Link></p>
    </StyledSection>
  );
}
 
export default Register;