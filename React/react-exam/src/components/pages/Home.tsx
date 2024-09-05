import { useContext } from "react";
import styled from "styled-components";

import CardContext, {CardContextType} from "../../contexts/CardContext";
import OneCard from "../UI/organism/OneCard";

const StyledSection = styled.section`
  
`;

const Home = () => {

  const { cards } = useContext(CardContext) as CardContextType;

  return (
    <StyledSection>
      <div>
        {
          cards.map(card => (
            <OneCard key={card.id} card={card}/>
          ))
        }
      </div>
    </StyledSection>
  );
}
 
export default Home;