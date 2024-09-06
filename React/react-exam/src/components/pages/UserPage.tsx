import { useContext, useEffect, useState } from "react";
import UserContext, { UserContextType } from "../../contexts/UserContext";
import CardContext, { CardContextType, CardType } from "../../contexts/CardContext";
import OneCard from "../UI/organism/OneCard";
import styled from "styled-components";

const StyledSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  >h2{
    margin: 20px 0;
  }
`;

const UserPage = () => {

  const { loggedInUser } = useContext(UserContext) as UserContextType;
  const { cards } = useContext(CardContext) as CardContextType;
  const [savedPosts, setSavedPosts] = useState<CardType[]>([]);

  
  useEffect(() => {
    if (loggedInUser) {
      const userSavedPosts = cards.filter((card) =>
        loggedInUser.savedPosts?.includes(card.id)
      );
      setSavedPosts(userSavedPosts);
    }
  }, [loggedInUser, cards]);


  return (
    <StyledSection>
      <h2>Saved Posts</h2>
      {
        savedPosts.length === 0 ? 
          <p>No saved Posts</p>
        :
        savedPosts.map((post) => (
          <OneCard key={post.id} card={post} />
        ))
      }
    </StyledSection>
  );
}
 
export default UserPage;