import { createContext, useReducer, useEffect, useState } from "react";

type ChildrenType = { children: React.ReactElement };

type UserType = {
  id: string,
  username: string,
  email: string,
  password: string,
  passwordRepeat: string,
  passwordVisable: string,
  dob: string
}

export type UserContextType = {
  user: UserType[],
  loggedInUser: UserType | null,
  setLoggedInUser: React.Dispatch<React.SetStateAction<UserType | null>>
  addNewUser: (newUser: UserType) => void,
  loginUser: (user: UserType) => void,
  logoutUser: () => void
}

type ReducerActionTypes = 
{ type: 'setData', data: UserType[] } |
{ type: 'addNewUser', newUser: UserType }

const reducer = (state: UserType[], action: ReducerActionTypes) => {
  switch(action.type){
    case 'setData':
      return action.data;
    case 'addNewUser':
      return [...state, action.newUser];
    default:
      return state;
  }
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const UserProvider = ({children}: ChildrenType) => {

  
  const [loggedInUser, setLoggedInUser] = useState<UserType|null>(null)
  const loginUser = (user: UserType) => {
    setLoggedInUser(user)
  }
  const logoutUser = () => {
    setLoggedInUser(null)
  }

  const [user, dispatch] = useReducer(reducer, []);

  const addNewUser = (newUser: UserType) => {
    fetch(`http://localhost:3000/user`, {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newUser)
    })
    dispatch({
      type: "addNewUser",
      newUser: newUser
    })
  }

  useEffect(() => {
    fetch(`http://localhost:3000/user`)
      .then(res => res.json())
      .then((data: UserType[]) => dispatch({
        type: "setData",
        data: data
      }))
  }, [])

  return(
    <UserContext.Provider
      value={{
        user,
        loggedInUser,
        setLoggedInUser,
        addNewUser,
        loginUser,
        logoutUser
        
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;