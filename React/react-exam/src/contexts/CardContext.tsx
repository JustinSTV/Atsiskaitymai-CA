import { createContext, useReducer, useEffect} from "react";

type ChildrenType = { children: React.ReactElement }

export type CardType = {
  id: string;
  authorId: string;
  title: string;
  description: string;
  image?: string;
  dateTime: string;
}

type CardReducerAction = 
{ type: "setData", allData: CardType[]} |
{ type: 'addPost', post: CardType }

export type CardContextType = {
  cards: CardType[],
  dispatch: React.Dispatch<CardReducerAction>,
  createNewPost: (newPost: CardType) => void
}

const reducer = (state: CardType[], action: CardReducerAction) => {
  switch(action.type){
    case 'setData':
      return action.allData;
    case 'addPost':
      return [...state, action.post]
    default:
      return state;
  }
}


const CardContext = createContext<CardContextType|undefined>(undefined)

const CardProvider = ({ children }: ChildrenType) => {

  const [cards, dispatch] = useReducer(reducer, []);

  const createNewPost = (newPost: CardType) => {
    fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newPost)
    })
    dispatch({
      type: 'addPost',
      post: newPost
    })
  }

  useEffect(() => {
    fetch(`http://localhost:3000/posts`)
      .then(res => res.json())
      .then((data: CardType[]) => dispatch({
        type: "setData",
        allData: data
      }))
  }, [])

  return(
    <CardContext.Provider
      value={{
        cards,
        dispatch,
        createNewPost
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

export { CardProvider };
export default CardContext;