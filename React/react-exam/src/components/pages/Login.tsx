import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from 'bcryptjs'
import styled from "styled-components";

import UserContext, {UserContextType} from "../../contexts/UserContext";

const StyledSection = styled.section`
  
`;

const Login = () => {
  const navigate = useNavigate();

  const { user, loginUser } = useContext(UserContext) as UserContextType;

  const [error, setError] = useState('');
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const foundUser = user.find(user => user.email === inputs.email);

    if(foundUser){
      const isPasswordMatch = bcrypt.compareSync(inputs.password, foundUser.password);
      if(isPasswordMatch){
        loginUser(foundUser)
        navigate('/')
      } else {
        setError("Login failed: Invalid credentials");
      }
    } else{
      setError("Login failed: Invalid credentials");
    }
  }

  return (
    <StyledSection>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input 
            type="email"
            name="email" id="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div>
        <label htmlFor="password">Password: </label>
          <input 
            type="password"
            name="password" id="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    {error && <p>{error}</p>}
    <p>Don't have an account? Create an <Link to="/register">Account</Link></p>
  </StyledSection>
  );
}
 
export default Login;