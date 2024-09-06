import { createContext, useReducer, useEffect, useState } from "react";

type ChildrenType = { children: React.ReactElement };

export type UserType = {
  id: string,
  username: string,
  email: string,
  password: string,
  passwordRepeat: string,
  passwordVisable: string,
  dob: string,
  profilePicture: string | "https://i.sstatic.net/l60Hf.png",
  savedPosts: string[];
}

export type UserContextType = {
  user: UserType[],
  loggedInUser: UserType | null,
  setLoggedInUser: React.Dispatch<React.SetStateAction<UserType | null>>
  addNewUser: (newUser: UserType) => void,
  loginUser: (user: UserType) => void,
  logoutUser: () => void,
  getSpecificUser: (id: string) => UserType | undefined,
  savePost: (postId: string) => void
}

type ReducerActionTypes = 
{ type: 'setData', data: UserType[] } |
{ type: 'addNewUser', newUser: UserType } |
{ type: 'savePost', userId: string; postId: string} |
{ type: 'unsavePost', userId: string; postId: string  }

const reducer = (state: UserType[], action: ReducerActionTypes) => {
  switch(action.type){
    case 'setData':
      return action.data;
    case 'addNewUser':
      return [...state, action.newUser];
    case 'savePost': 
      return state.map((user) => 
        user.id === action.userId
        ? { ...user, savedPosts: [...(user.savedPosts || []), action.postId] }
        : user
      )
    case 'unsavePost':
      return state.map((user) => 
        user.id === action.userId
        ? { ...user, savedPosts: user.savedPosts.filter(postId => postId !== action.postId) }
        : user
      );
    default:
      return state;
  }
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const UserProvider = ({children}: ChildrenType) => {

  const [loggedInUser, setLoggedInUser] = useState<UserType|null>(null)
  const loginUser = (user: UserType) => {
    setLoggedInUser(user);
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

  const savePost = (postId: string) => {
    if (loggedInUser) {
      const isPostSaved = loggedInUser.savedPosts.includes(postId);
      const updatedSavedPosts = isPostSaved 
        ? loggedInUser.savedPosts.filter(id => id !== postId)
        : [...loggedInUser.savedPosts, postId];
  
      fetch(`http://localhost:3000/user/${loggedInUser.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ savedPosts: updatedSavedPosts })
      })
      .then(response => response.json())
      .then(() => {
        dispatch({
          type: isPostSaved ? "unsavePost" : "savePost",
          userId: loggedInUser.id,
          postId: postId,
        });
        setLoggedInUser({
          ...loggedInUser,
          savedPosts: updatedSavedPosts,
        });
      })
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/user`)
      .then(res => res.json())
      .then((data: UserType[]) => dispatch({
        type: "setData",
        data: data
      }))
  }, [])

  const getSpecificUser = (id: string): UserType | undefined => {
    return user.find(oneUser => oneUser.id === id)
  }

  return(
    <UserContext.Provider
      value={{
        user,
        loggedInUser,
        setLoggedInUser,
        addNewUser,
        loginUser,
        logoutUser,
        getSpecificUser,
        savePost
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;