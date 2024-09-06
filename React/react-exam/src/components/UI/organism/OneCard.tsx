import { useContext } from "react";
import styled from "styled-components";
import { CardType } from "../../../contexts/CardContext";

import UserContext, {UserContextType} from "../../../contexts/UserContext";
import PostHeader from "../molecule/PostHeader";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  width: 60%;

  >div.imageAndContent{
    >img{
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
    >h2, p{
      margin: 10px 0;
    }
  }
`;

type OneCardType = {
  card: CardType
}

const OneCard = ({ card }: OneCardType) => {


  const { getSpecificUser, savePost, loggedInUser } = useContext(UserContext) as UserContextType;

  const thisUser = getSpecificUser(card.authorId)!;

  const handleSavePost = () => {
    if (loggedInUser) {
      savePost(card.id);
    }
  };

  return (
    <CardContainer>
      <PostHeader
        thisUser={thisUser}
        date={card.dateTime}
      />
      <div className="imageAndContent">
        {
          card.image &&
          <img src={card.image} alt="Card Image" />
        }
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </div>
      {
        loggedInUser ? 
          <button onClick={handleSavePost}>
            {loggedInUser.savedPosts.includes(card.id) ? "Unsave Post" : "Save Post"}
          </button>
        :
        <></>
      }
    </CardContainer>
  );
}
 
export default OneCard;