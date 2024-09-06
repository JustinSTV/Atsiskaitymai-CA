import { useContext } from "react";
import styled from "styled-components";

import CardContext, {CardContextType} from "../../contexts/CardContext";
import OneCard from "../UI/organism/OneCard";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home = () => {

  const { cards } = useContext(CardContext) as CardContextType;

  return (
    <StyledSection>
      {
        cards.map(card => (
          <OneCard key={card.id} card={card}/>
        ))
      }
    </StyledSection>
  );
}
 
export default Home;