import styled from "styled-components";

const Meal = styled.div`
  position: relative;
  outline: 4px solid white;
  cursor: pointer;
  height: 150px;
  width: 150px;

  img {
    width: 150px;
  }

  &:hover {
    div {
      opacity: 1;
    }
  }
  div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #1117;
    opacity: 0;
    p {
      margin: auto;
    }
  }
`;

export default Meal;
