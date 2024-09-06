import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from 'bcryptjs'
import styled from "styled-components";

import UserContext, {UserContextType} from "../../contexts/UserContext";

const StyledSection = styled.section`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  >form{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    >div{
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      gap: 5px;

      >input{
        padding: 10px 20px;
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

const Notification = styled.p<{success: boolean}>`
  font-weight: bold;
  color: ${props => props.success ? 'green' : 'red'};
`

const Login = () => {
  const navigate = useNavigate();
  const { user, loginUser } = useContext(UserContext) as UserContextType;
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
    setError('')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const foundUser = user.find(user => user.email === inputs.email);

    if(foundUser){
      const isPasswordMatch = bcrypt.compareSync(inputs.password, foundUser.password);
      if(isPasswordMatch){
        setNotification('Successfuly logged in!')
        loginUser(foundUser)
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setError("Login failed: Invalid credentials");
      }
    } else{
      setError("Login failed: User Not Found");
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
    {notification && <Notification success>{notification}</Notification>}
    {error && <Notification success={false}>{error}</Notification>}
    <p>Don't have an account? Create an <Link to="/register">Account</Link></p>
  </StyledSection>
  );
}
 
export default Login;