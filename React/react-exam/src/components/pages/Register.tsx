import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { v4 as generateID } from 'uuid';
import bcrypt from 'bcryptjs'

import UserContext, { UserContextType } from '../../contexts/UserContext';

const Register = () => {

  const navigate = useNavigate();

  const { user, addNewUser, setLoggedInUser } = useContext(UserContext) as UserContextType;

  const [inputFields, setInputFields] = useState({
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
    dob: ''
  })

  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({
      ...inputFields,
      [event.target.name]: event.target.value
    })
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputFields.password !== inputFields.passwordRepeat) {
      setError("Passwords do not match");
      return;
    }

    const userExists = user.some(user => user.email === inputFields.email || user.username === inputFields.username);
    if (userExists) {
      setError("User already exists");
      return;
    }

    const hashedPassword = bcrypt.hashSync(inputFields.password, 10)

    const newUser = {
      id: generateID(),
      username: inputFields.username,
      email: inputFields.email,
      password: hashedPassword,
      passwordRepeat: inputFields.passwordRepeat,
      passwordVisable: inputFields.passwordRepeat,
      dob: inputFields.dob
    }

    addNewUser(newUser);
    setLoggedInUser(newUser),
    navigate('/')
  }

  return (
    <section>
      <h2>Create An Account</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text"
            name="username" id="username"
            value={inputFields.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type='email'
            id='email' name='email'
            value={inputFields.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password"
            name="password" id="password"
            value={inputFields.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="passwordRepeat">Password Repeat:</label>
          <input 
            type="password"
            name="passwordRepeat" id="passwordRepeat"
            value={inputFields.passwordRepeat}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input 
            type="date" 
            name='dob' id='dob'
            value={inputFields.dob}
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" value="Create Account"/>
      </form>
      {error && <p>{error}</p>}
      <p>Have an Account already?<Link to="/login">Login</Link></p>
    </section>
  );
}
 
export default Register;