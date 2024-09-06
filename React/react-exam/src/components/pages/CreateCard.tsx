import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as generateID } from "uuid";

import CardContext, { CardContextType} from "../../contexts/CardContext";
import UserContext, {UserContextType} from "../../contexts/UserContext";

const StyledSection = styled.section`
  
`;

const CreateCard = () => {

  const { createNewPost } = useContext(CardContext) as CardContextType;
  const { loggedInUser } = useContext(UserContext) as UserContextType;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!loggedInUser) {
      alert("User is not logged in!");
      return;
    }

    const newPost = {
      id: generateID(),
      authorId: loggedInUser.id,
      title: formData.title,
      description: formData.description,
      image: formData.image,
      dateTime: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
    }

    createNewPost(newPost)
    navigate('/')
  };

  return (
    <StyledSection>
      {
        loggedInUser ? (
          <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              name="image"
              id="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        ) : (
          <p>Please log in to create post</p>
        )
      }
    </StyledSection>
  );
}
 
export default CreateCard;