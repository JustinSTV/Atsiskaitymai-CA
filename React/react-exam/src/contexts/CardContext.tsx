import { createContext, useReducer, useEffect} from "react";

type ChildrenType = { children: React.ReactElement }

export type CardType = {
  id: string;
  authorId: string;
  content: string;
  attachedImage?: string;
  dateTime: string;
}

type CardReducerAction = 
{ type: "setData", allData: CardType[]}

export type CardContextType = {
  cards: CardType[]
}

const reducer = (state: CardType[], action: CardReducerAction) => {
  switch(action.type){
    case 'setData':
      return action.allData;
    default:
      return state;
  }
}


const CardContext = createContext<CardContextType|undefined>(undefined)

const CardProvider = ({ children }: ChildrenType) => {

  const [cards, dispatch] = useReducer(reducer, []);

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
        cards
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

export { CardProvider };
export default CardContext;