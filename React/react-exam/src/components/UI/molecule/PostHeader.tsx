import styled from "styled-components";

import { UserType } from "../../../contexts/UserContext";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  > span {
      display: flex;
      align-items: center;

      > img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-right: 8px;
      }

      > span {
        font-weight: bold;
      }
    }
`;

type PostHeaderProps = {
  thisUser: UserType;
  date: string
}

const PostHeader = ({thisUser, date}: PostHeaderProps) => {
  return (
    <StyledDiv>
      <span>
        <img 
          src={thisUser.profilePicture} 
          alt={`${thisUser.username} Profile avatar`} 
        />
        <span>{thisUser.username}</span>
      </span>
      <span>{date}</span>
    </StyledDiv>
  );
}
 
export default PostHeader;