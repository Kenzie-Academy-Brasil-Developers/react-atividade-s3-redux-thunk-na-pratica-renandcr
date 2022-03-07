import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./styled";

import { addCommentThunk } from "../../store/modules/user/thunks";

const Button = () => {
  const [comment, setComment] = useState();
  const dispatch = useDispatch();
  const userComments = useSelector((state) => state.user);

  return (
    <Container>
      <h1>{userComments.name}</h1>
      {userComments.comments.map((current, index) => (
        <p key={index}>{current}</p>
      ))}
      <div>
        <input onChange={(e) => setComment(e.target.value)} />
        <button onClick={() => dispatch(addCommentThunk(comment))}>
          New comment
        </button>
      </div>
    </Container>
  );
};

export default Button;
