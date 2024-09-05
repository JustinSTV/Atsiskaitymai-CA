import styled from "styled-components";
import { CardType } from "../../../contexts/CardContext";

const CardContainer = styled.div`
  // Add your styles here
`;

type OneCardType = {
  card: CardType
}

const OneCard = ({ card }: OneCardType) => {
  return (
    <CardContainer>
      <img src={card.attachedImage} alt="Card Image" />
      <h2>{card.authorId}</h2>
    </CardContainer>
  );
}
 
export default OneCard;